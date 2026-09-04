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
//
// Never fails the build, and never leaves a route half-generated: vercel.json
// always maps every sitemap route to its own file (computed upfront, not
// dependent on runtime success), and every one of those files always gets
// written — either the real prerendered version, or (per-route, or entirely,
// on any failure) an untouched copy of the generic shell. So the worst case
// for any single route is exactly today's current behavior, never a 404 or a
// half-written page, and this script always exits 0.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { preview } from "vite";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const OUT_DIR = join(ROOT, "dist/public");
const SHELL_PATH = join(OUT_DIR, "index.html");
const VERCEL_JSON_PATH = join(ROOT, "vercel.json");
function isEnvTrue(value) {
  return Boolean(value) && value !== "false" && value !== "0";
}
const IS_SERVERLESS_BUILD = isEnvTrue(process.env.VERCEL) || isEnvTrue(process.env.CI);

function readRoutesFromSitemap() {
  const xml = readFileSync(join(ROOT, "public/sitemap.xml"), "utf8");
  const matches = [...xml.matchAll(/<loc>https:\/\/www\.coimagenmedia\.com([^<]*)<\/loc>/g)];
  return matches.map((m) => m[1] || "/");
}

// Route -> static file path (relative to dist/public), computed purely from
// the sitemap — never depends on whether prerendering that route actually
// succeeds. "/" is deliberately its own file (home.html), NOT index.html —
// index.html stays the untouched generic fallback that every non-sitemap/
// dynamic route still resolves to.
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

// vercel.json always maps every sitemap route to its own file — this mapping
// is static (derived purely from the sitemap), so it's written unconditionally
// regardless of how many routes actually got real prerendered content below.
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

// Full puppeteer (its own downloaded Chromium) locally — proven to work on a
// dev machine. On Vercel/CI, puppeteer-core + @sparticuz/chromium instead:
// full puppeteer's Chromium needs shared libraries (libnss3.so etc.) that
// Vercel's build container doesn't have and we can't install (no root
// access there) — confirmed by a real prior deploy failure. @sparticuz/
// chromium ships a statically-linked Chromium built for exactly this kind
// of restricted serverless/CI container, and doesn't rely on a postinstall
// download at all (the binary ships inside the npm package itself), so
// pnpm's build-script blocking is a non-issue for this path either.
async function launchBrowser() {
  if (IS_SERVERLESS_BUILD) {
    const chromium = (await import("@sparticuz/chromium")).default;
    const puppeteer = (await import("puppeteer-core")).default;
    return puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  }
  const puppeteer = (await import("puppeteer")).default;
  return puppeteer.launch({
    headless: true,
    timeout: 120000, // first Chrome launch on a fresh machine can take >30s (AV scanning the binary)
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });
}

async function main() {
  if (!existsSync(SHELL_PATH)) throw new Error(`Build shell not found at ${SHELL_PATH} — run vite build first.`);
  const shellHtml = readFileSync(SHELL_PATH, "utf8");
  const routes = readRoutesFromSitemap();
  const routeToFile = Object.fromEntries(routes.map((route) => [route, outputFileFor(route)]));

  // Every route gets the generic shell up front. Anything that prerenders
  // successfully below overwrites its own file with the real version;
  // anything that doesn't (a per-route failure, or the browser/server never
  // starting at all) just keeps this — identical to today's behavior for
  // that route, never a missing file or a 404.
  for (const route of routes) {
    const outPath = join(OUT_DIR, routeToFile[route]);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, shellHtml);
  }
  updateVercelRewrites(routeToFile);

  console.log(`Prerendering ${routes.length} routes from sitemap.xml (${IS_SERVERLESS_BUILD ? "serverless" : "local"} Chromium)...`);

  let server;
  let browser;
  let succeeded = 0;
  try {
    server = await preview({ configFile: join(ROOT, "vite.config.ts"), preview: { port: 0 } });
    const address = server.resolvedUrls?.local?.[0] ?? `http://localhost:${server.config.preview.port}/`;
    console.log(`Preview server: ${address}`);

    browser = await launchBrowser();
    const page = await browser.newPage();

    for (const route of routes) {
      try {
        const url = new URL(route, address).toString();
        // Not networkidle0 — Google Analytics/Metricool/Jotform keep open
        // connections that never go fully idle. domcontentloaded + the
        // explicit title-change wait below is the real completion signal.
        await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
        await page.waitForFunction(
          (fallback) => document.title !== fallback,
          { timeout: 5000 },
          "Coimagen Media Agency — Marketing Digital + IA | Tijuana",
        ).catch(() => {}); // home page legitimately keeps this title — timeout there is expected, not an error

        const meta = await extractMeta(page);
        const outPath = join(OUT_DIR, routeToFile[route]);
        writeFileSync(outPath, applyMeta(shellHtml, meta));
        succeeded++;
        console.log(`  ${route.padEnd(45)} -> ${routeToFile[route]}  "${meta.title}"`);
      } catch (err) {
        // This one route keeps the generic-shell copy already written above
        // — exactly today's behavior for it. Every other route is unaffected.
        console.warn(`  ${route.padEnd(45)} -> FAILED, kept generic shell (${err.message})`);
      }
    }
  } catch (err) {
    // Browser/server never started at all: every route already has the
    // generic-shell copy from the loop above, so the site is fully safe —
    // just zero SEO benefit for this build, not a broken one.
    console.warn(`Prerendering unavailable this build, all routes kept the generic shell: ${err.message}`);
  } finally {
    if (browser) await browser.close().catch(() => {});
    if (server) await server.close().catch(() => {});
  }

  console.log(`\n${succeeded}/${routes.length} routes prerendered with real meta; the rest (if any) kept the generic shell. vercel.json maps all ${routes.length} routes to their own file.`);
}

main()
  .catch((err) => console.error("Unexpected prerender error (build still succeeds):", err))
  .finally(() => process.exit(0));
