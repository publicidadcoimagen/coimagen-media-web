// Static prerendering for SEO: after `vite build`, this generates one real
// static HTML file per sitemap URL with its OWN <title>/<meta description>/OG
// tags baked in — instead of every route sharing the single generic
// dist/public/index.html shell (the root cause of the "empty shell" SEO
// problem: SeoHead/document.title only ever ran client-side, after JS, so a
// crawler that doesn't execute JS saw identical boilerplate everywhere).
//
// Deliberately narrow scope: this ONLY rewrites <head> meta tags. The
// <body>/<script> content of every generated file is byte-identical to the
// real build's index.html — same bundle, same empty `<div id="root">`, same
// `<script type="module" src="...">`. Nothing about how the app boots,
// fetches data, or handles interactive/dynamic flows changes. Routes that
// aren't in the sitemap (dynamic token routes like
// /diagnostico/resultado/:token, /propuesta/:token, /factura/:token, plus
// /portal, /secure, /admin) are never touched — they keep serving the
// original dist/public/index.html exactly as before.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { preview } from "vite";
import puppeteer from "puppeteer";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const OUT_DIR = join(ROOT, "dist/public");
const SHELL_PATH = join(OUT_DIR, "index.html");
const VERCEL_JSON_PATH = join(ROOT, "vercel.json");

function readRoutesFromSitemap() {
  const xml = readFileSync(join(ROOT, "public/sitemap.xml"), "utf8");
  const matches = [...xml.matchAll(/<loc>https:\/\/www\.coimagenmedia\.com([^<]*)<\/loc>/g)];
  return matches.map((m) => m[1] || "/");
}

// Route -> static file path (relative to dist/public). "/" is deliberately
// its own file (home.html), NOT index.html — index.html stays the untouched
// generic fallback that every non-sitemap/dynamic route still resolves to,
// so this change can never affect those routes even by accident.
function outputFileFor(route) {
  if (route === "/") return "home.html";
  return `${route.replace(/^\//, "")}.html`;
}

function replaceTag(html, regex, replacement) {
  if (!regex.test(html)) throw new Error(`Expected tag not found in shell (regex: ${regex})`);
  return html.replace(regex, replacement);
}

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function extractMeta(page) {
  return page.evaluate(() => {
    const get = (sel) => document.querySelector(sel)?.getAttribute("content") ?? null;
    return {
      title: document.title,
      description: get('meta[name="description"]'),
      ogTitle: get('meta[property="og:title"]'),
      ogDescription: get('meta[property="og:description"]'),
      ogUrl: get('meta[property="og:url"]'),
      ogImage: get('meta[property="og:image"]'),
      twitterTitle: get('meta[name="twitter:title"]'),
      twitterDescription: get('meta[name="twitter:description"]'),
      twitterImage: get('meta[name="twitter:image"]'),
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? null,
      lang: document.documentElement.getAttribute("lang"),
    };
  });
}

function applyMeta(shellHtml, meta) {
  let html = shellHtml;
  html = replaceTag(html, /<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`);
  html = replaceTag(html, /(<meta name="description" content=")[^"]*(")/, `$1${esc(meta.description)}$2`);
  if (meta.ogTitle) html = replaceTag(html, /(<meta property="og:title" content=")[^"]*(")/, `$1${esc(meta.ogTitle)}$2`);
  if (meta.ogDescription) html = replaceTag(html, /(<meta property="og:description" content=")[^"]*(")/, `$1${esc(meta.ogDescription)}$2`);
  if (meta.ogUrl) html = replaceTag(html, /(<meta property="og:url" content=")[^"]*(")/, `$1${esc(meta.ogUrl)}$2`);
  if (meta.ogImage) html = replaceTag(html, /(<meta property="og:image" content=")[^"]*(")/, `$1${esc(meta.ogImage)}$2`);
  if (meta.twitterTitle) html = replaceTag(html, /(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(meta.twitterTitle)}$2`);
  if (meta.twitterDescription) html = replaceTag(html, /(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(meta.twitterDescription)}$2`);
  if (meta.twitterImage) html = replaceTag(html, /(<meta name="twitter:image" content=")[^"]*(")/, `$1${esc(meta.twitterImage)}$2`);
  if (meta.canonical) html = replaceTag(html, /(<link rel="canonical" href=")[^"]*(")/, `$1${esc(meta.canonical)}$2`);
  if (meta.lang) html = html.replace(/<html lang="[^"]*"/, `<html lang="${esc(meta.lang)}"`);
  return html;
}

function updateVercelRewrites(routeToFile) {
  const config = JSON.parse(readFileSync(VERCEL_JSON_PATH, "utf8"));
  let updated = 0;
  for (const rewrite of config.rewrites ?? []) {
    if (rewrite.source in routeToFile && rewrite.destination === "/index.html") {
      rewrite.destination = `/${routeToFile[rewrite.source]}`;
      updated++;
    }
  }
  writeFileSync(VERCEL_JSON_PATH, JSON.stringify(config, null, 2) + "\n");
  return updated;
}

async function main() {
  if (!existsSync(SHELL_PATH)) throw new Error(`Build shell not found at ${SHELL_PATH} — run vite build first.`);
  const shellHtml = readFileSync(SHELL_PATH, "utf8");
  const routes = readRoutesFromSitemap();
  console.log(`Prerendering ${routes.length} routes from sitemap.xml...`);

  const server = await preview({ configFile: join(ROOT, "vite.config.ts"), preview: { port: 0 } });
  const address = server.resolvedUrls?.local?.[0] ?? `http://localhost:${server.config.preview.port}/`;
  console.log(`Preview server: ${address}`);

  const browser = await puppeteer.launch({
    headless: true,
    timeout: 120000, // first Chrome launch on this machine can take >30s (AV scanning the binary)
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });
  const routeToFile = {};

  try {
    const page = await browser.newPage();
    for (const route of routes) {
      const url = new URL(route, address).toString();
      // Not networkidle0 — Google Analytics/Metricool/Jotform keep open
      // connections that never go fully idle. domcontentloaded + the
      // explicit title-change wait below is the real completion signal.
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
      // The title/meta useEffect runs on mount; networkidle0 already implies
      // JS executed, but give React one more tick to be safe.
      await page.waitForFunction(
        (fallback) => document.title !== fallback,
        { timeout: 5000 },
        "Coimagen Media Agency — Marketing Digital + IA | Tijuana",
      ).catch(() => {}); // home page legitimately keeps this title — timeout there is expected, not an error

      const meta = await extractMeta(page);
      const outFile = outputFileFor(route);
      const outPath = join(OUT_DIR, outFile);
      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, applyMeta(shellHtml, meta));
      routeToFile[route] = outFile;
      console.log(`  ${route.padEnd(45)} -> ${outFile}  "${meta.title}"`);
    }
  } finally {
    await browser.close();
    await server.close();
  }

  const updated = updateVercelRewrites(routeToFile);
  console.log(`\nGenerated ${Object.keys(routeToFile).length} static files, updated ${updated} vercel.json rewrites.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
