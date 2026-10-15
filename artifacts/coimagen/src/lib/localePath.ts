// English pages live under /en (/en, /en/faqs, …); everything else is the
// Spanish URL. The URL — not localStorage — decides the language of every
// public page, so crawlers and AI answer engines get one stable language per
// URL, linked to its pair through hreflang.

export const SITE_ORIGIN = "https://www.coimagenmedia.com";
export const EN_PREFIX = "/en";

// Token/private pages have no English URL: they keep the stored-preference
// toggle they always had.
const UNLOCALIZED_PREFIXES = ["/portal", "/propuesta/", "/factura/", "/diagnostico/resultado/", "/under-construction", "/admin", "/secure", "/demos/"];

export function isEnPath(pathname: string = typeof window === "undefined" ? "/" : window.location.pathname): boolean {
  return pathname === EN_PREFIX || pathname.startsWith(`${EN_PREFIX}/`);
}

/** "/en/faqs" -> "/faqs", "/en" -> "/". Spanish paths are returned unchanged. */
export function stripEnPrefix(pathname: string): string {
  if (!isEnPath(pathname)) return pathname;
  return pathname.slice(EN_PREFIX.length) || "/";
}

export function isLocalizedPath(path: string): boolean {
  const p = stripEnPrefix(path);
  if (p.includes(".")) return false; // files (pdf, html, images)
  // "/portal" covers /portal and /portal/…; "/demos/" covers only sub-paths
  // (the /demos page itself is localized).
  return !UNLOCALIZED_PREFIXES.some((prefix) =>
    prefix.endsWith("/") ? p.startsWith(prefix) : p === prefix || p.startsWith(`${prefix}/`),
  );
}

/** Path of the same page in the given language. */
export function pathForLang(path: string, lang: "es" | "en"): string {
  const base = stripEnPrefix(path);
  if (lang === "es" || !isLocalizedPath(base)) return base;
  return base === "/" ? EN_PREFIX : `${EN_PREFIX}${base}`;
}

/**
 * A visitor who picked English with the toggle (stored "en") and lands on a
 * Spanish URL is sent to its /en twin before the app renders. Crawlers never
 * have a stored preference, so every URL keeps serving its own language to
 * them. Picking ES stores "es", which turns this off.
 */
export function redirectToPreferredLanguage(): boolean {
  let stored: string | null = null;
  try {
    stored = localStorage.getItem("coimagen-lang");
  } catch {
    return false;
  }
  const { pathname, search, hash } = window.location;
  if (stored !== "en" || isEnPath(pathname) || !isLocalizedPath(pathname)) return false;
  window.location.replace(`${pathForLang(pathname, "en")}${search}${hash}`);
  return true;
}
