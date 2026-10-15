// Static prerendering for SEO: after `vite build`, this generates one real
// static HTML file per sitemap URL with its OWN <title>/<meta description>/OG
// tags baked in — instead of every route sharing the single generic
// dist/public/index.html shell (the root cause of the "empty shell" SEO
// problem: SeoHead/document.title only ever ran client-side, after JS, so a
// crawler that doesn't execute JS saw identical boilerplate everywhere).
//
// Each file gets the route's <head> meta tags, the JSON-LD the page injects
// at runtime (BlogPosting/FAQPage/Service, keeping its id so the page's own
// effect reuses that <script> instead of adding a second one), and the
// rendered contents of `<div id="root">`. Crawlers that never run JS (AI
// answer engines like GPTBot/ClaudeBot/PerplexityBot) then see the real text,
// headings and FAQs. The bundle and `<script type="module">` are unchanged:
// main.tsx uses createRoot (not hydrateRoot), so React simply replaces the
// static markup on boot — nothing about how the app runs changes. Routes that
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
      // Only runtime-injected schema carries an id; index.html's static
      // Organization/LocalBusiness block has none and is already in the shell.
      jsonLd: [...document.querySelectorAll('script[type="application/ld+json"][id]')].map((el) => ({ id: el.id, text: el.textContent ?? "" })),
      rootHtml: document.getElementById("root")?.innerHTML ?? "",
      // hreflang alternates written by LocaleSeo for this page.
      alternates: [...document.querySelectorAll('link[rel="alternate"][hreflang]')].map((el) => ({ hreflang: el.getAttribute("hreflang"), href: el.getAttribute("href") })),
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
  const headExtras = [
    ...meta.alternates.map((a) => `<link rel="alternate" hreflang="${esc(a.hreflang)}" href="${esc(a.href)}" />`),
    // "<" escaped so a schema string can never close the <script> early.
    ...meta.jsonLd.map((ld) => `<script type="application/ld+json" id="${esc(ld.id)}">${ld.text.replace(/</g, "\\u003c")}</script>`),
  ];
  if (headExtras.length > 0) {
    html = replaceTag(html, /<\/head>/, () => `    ${headExtras.join("\n    ")}\n  </head>`);
  }
  // Function replacement: page HTML may contain "$&"-style sequences.
  if (meta.rootHtml) html = replaceTag(html, /<div id="root"><\/div>/, () => `<div id="root">${meta.rootHtml}</div>`);
  return html;
}

// vercel.json always maps every sitemap route to its own file — this mapping
// is static (derived purely from the sitemap), so it's written unconditionally
// regardless of how many routes actually got real prerendered content below.
function updateVercelRewrites(routeToFile) {
  const config = JSON.parse(readFileSync(VERCEL_JSON_PATH, "utf8"));
  let updated = 0;
  config.rewrites ??= [];
  for (const rewrite of config.rewrites) {
    if (rewrite.source in routeToFile && rewrite.destination === "/index.html") {
      rewrite.destination = `/${routeToFile[rewrite.source]}`;
      updated++;
    }
  }
  // English pages (/en, /en/…) are generated from the Spanish sitemap, so
  // their rewrites are added here rather than hand-maintained.
  const existing = new Set(config.rewrites.map((r) => r.source));
  for (const [source, file] of Object.entries(routeToFile)) {
    if (!existing.has(source)) {
      config.rewrites.push({ source, destination: `/${file}` });
      updated++;
    }
  }
  writeFileSync(VERCEL_JSON_PATH, JSON.stringify(config, null, 2) + "\n");
  return updated;
}

const SITE = "https://www.coimagenmedia.com";
const EN_PREFIX = "/en";

// public/sitemap.xml lists the Spanish URLs and is the single source of
// routes; every one also has an English twin under /en.
function enRouteFor(route) {
  return route === "/" ? EN_PREFIX : `${EN_PREFIX}${route}`;
}
function isEnRoute(route) {
  return route === EN_PREFIX || route.startsWith(`${EN_PREFIX}/`);
}

// Home is the only page whose content depends on the visitor's country
// (PricingSection: MXN for Mexico, USD otherwise). The default files are
// the USD render; these MXN renders are served to Mexico by middleware.ts,
// so no visitor sees the other market's prices flash before React boots.
// Keep in sync with MX_VARIANTS in middleware.ts.
const MX_VARIANTS = [
  { route: "/", file: "home-mx.html" },
  { route: EN_PREFIX, file: "en-mx.html" },
];

// The served sitemap: both languages, each URL listing its pair through
// xhtml:link alternates (what Google reads for hreflang).
function writeSitemap(esRoutes) {
  const today = new Date().toISOString().slice(0, 10);
  const url = (loc, esRoute) => [
    "  <url>",
    `    <loc>${SITE}${loc === "/" ? "/" : loc}</loc>`,
    `    <lastmod>${today}</lastmod>`,
    `    <xhtml:link rel="alternate" hreflang="es" href="${SITE}${esRoute}" />`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${SITE}${enRouteFor(esRoute)}" />`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${esRoute}" />`,
    "  </url>",
  ].join("\n");
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...esRoutes.flatMap((r) => [url(r, r), url(enRouteFor(r), r)]),
    "</urlset>",
    "",
  ].join("\n");
  writeFileSync(join(OUT_DIR, "sitemap.xml"), xml);
}

// llms.txt (llmstxt.org): a plain-text map of the site for AI answer engines,
// built from the same titles/descriptions the pages render — never hand-
// maintained, so it can't drift from the site. Skipped if nothing prerendered.
function writeLlmsTxt(entries) {
  if (entries.length === 0) return;
  const es = entries.filter((e) => !isEnRoute(e.route));
  const en = entries.filter((e) => isEnRoute(e.route));
  const home = es.find((e) => e.route === "/");
  const item = (e) => `- [${e.title}](${SITE}${e.route}): ${e.description ?? ""}`.trimEnd();
  const lines = [
    "# Coimagen Media Agency",
    "",
    `> ${home?.description ?? "Marketing digital + IA en Tijuana."}`,
    "",
    "## Páginas (español)",
    "",
    ...es.map(item),
    "",
  ];
  if (en.length > 0) lines.push("## Pages (English)", "", ...en.map(item), "");
  writeFileSync(join(OUT_DIR, "llms.txt"), lines.join("\n"));
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
  const esRoutes = readRoutesFromSitemap();
  const routes = [...esRoutes, ...esRoutes.map(enRouteFor)];
  const routeToFile = Object.fromEntries(routes.map((route) => [route, outputFileFor(route)]));
  // Each job renders one file; the MXN variants reuse a route with the
  // Mexico country cookie set.
  const jobs = [
    ...routes.map((route) => ({ route, file: routeToFile[route], country: null })),
    ...MX_VARIANTS.map((v) => ({ route: v.route, file: v.file, country: "mx" })),
  ];

  // Every route gets the generic shell up front. Anything that prerenders
  // successfully below overwrites its own file with the real version;
  // anything that doesn't (a per-route failure, or the browser/server never
  // starting at all) just keeps this — identical to today's behavior for
  // that route, never a missing file or a 404.
  for (const job of jobs) {
    const outPath = join(OUT_DIR, job.file);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, shellHtml);
  }
  updateVercelRewrites(routeToFile);
  writeSitemap(esRoutes);

  console.log(`Prerendering ${jobs.length} files (${esRoutes.length} sitemap routes × es/en + ${MX_VARIANTS.length} MXN home variants) (${IS_SERVERLESS_BUILD ? "serverless" : "local"} Chromium)...`);

  let server;
  let browser;
  let succeeded = 0;
  const llmsEntries = [];
  try {
    server = await preview({ configFile: join(ROOT, "vite.config.ts"), preview: { port: 0 } });
    const address = server.resolvedUrls?.local?.[0] ?? `http://localhost:${server.config.preview.port}/`;
    console.log(`Preview server: ${address}`);

    browser = await launchBrowser();
    const page = await browser.newPage();

    for (const { route, file, country } of jobs) {
      try {
        const url = new URL(route, address).toString();
        // The edge middleware sets this cookie in production; locally it's
        // absent, which the app reads as "usa".
        if (country) await page.setCookie({ name: "coimagen-country", value: country, url });
        else await page.deleteCookie({ name: "coimagen-country", url });
        // Not networkidle0 — Google Analytics/Metricool/Jotform keep open
        // connections that never go fully idle. domcontentloaded + the
        // explicit title-change wait below is the real completion signal.
        await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
        await page.waitForFunction(
          (fallback) => document.title !== fallback,
          { timeout: 5000 },
          "Coimagen Media Agency — Marketing Digital + IA | Tijuana",
        ).catch(() => {}); // home page legitimately keeps this title — timeout there is expected, not an error
        // Content gate: a slow page still gets its meta (as before), just with
        // whatever body had rendered by then.
        await page.waitForFunction(() => (document.getElementById("root")?.innerText.trim().length ?? 0) > 200, { timeout: 10000 }).catch(() => {});

        const meta = await extractMeta(page);
        const outPath = join(OUT_DIR, file);
        writeFileSync(outPath, applyMeta(shellHtml, meta));
        if (!country) llmsEntries.push({ route, title: meta.title, description: meta.description });
        succeeded++;
        console.log(`  ${route.padEnd(45)} -> ${file}  "${meta.title}" (${meta.jsonLd.length} schema, ${meta.alternates.length} hreflang, ${Math.round(meta.rootHtml.length / 1024)} KB body)`);
      } catch (err) {
        // This one route keeps the generic-shell copy already written above
        // — exactly today's behavior for it. Every other route is unaffected.
        console.warn(`  ${route.padEnd(45)} -> ${file} FAILED, kept generic shell (${err.message})`);
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

  writeLlmsTxt(llmsEntries);

  console.log(`\n${succeeded}/${jobs.length} files prerendered with real content; the rest (if any) kept the generic shell. vercel.json maps all ${routes.length} routes to their own file.`);
}

main()
  .catch((err) => console.error("Unexpected prerender error (build still succeeds):", err))
  .finally(() => process.exit(0));
