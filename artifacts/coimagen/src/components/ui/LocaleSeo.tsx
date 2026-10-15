import { useEffect } from "react";
import { useLocation } from "wouter";
import { EN_PREFIX, SITE_ORIGIN, isEnPath, isLocalizedPath, pathForLang } from "@/lib/localePath";

// One place that keeps every public page's language signals consistent,
// instead of touching the ~60 pages that each set their own canonical/og:url
// with the Spanish URL:
//  - hreflang alternates (es, en, x-default) for the current page;
//  - on /en pages: canonical + og:url point to the /en URL, and internal
//    links (<a href="/faqs">) become /en links, so the whole visit (and a
//    crawler following links) stays in English.
// A MutationObserver re-applies the fix whenever a page effect or React
// re-render writes the Spanish value back. Each fix only ever produces the
// expected value, so it can't loop.

function absolute(path: string): string {
  return `${SITE_ORIGIN}${path}`;
}

function setAlternate(hreflang: string, href: string | null) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${hreflang}"]`);
  if (!href) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("link");
    el.rel = "alternate";
    el.hreflang = hreflang;
    document.head.appendChild(el);
  }
  if (el.getAttribute("href") !== href) el.setAttribute("href", href);
}

function localizeAnchor(a: HTMLAnchorElement) {
  const raw = a.getAttribute("href");
  if (!raw || !raw.startsWith("/") || raw.startsWith("//")) return;
  const [pathAndQuery, hash = ""] = raw.split("#");
  const [path, query = ""] = pathAndQuery.split("?");
  if (isEnPath(path || "/") || !isLocalizedPath(path || "/")) return;
  const target = `${pathForLang(path || "/", "en")}${query ? `?${query}` : ""}${hash ? `#${hash}` : ""}`;
  if (target !== raw) a.setAttribute("href", target);
}

function enforceEnglishUrls(currentEnPath: string) {
  const url = absolute(currentEnPath);
  const canonical = document.head.querySelector('link[rel="canonical"]');
  if (canonical && canonical.getAttribute("href") !== url) canonical.setAttribute("href", url);
  const ogUrl = document.head.querySelector('meta[property="og:url"]');
  if (ogUrl && ogUrl.getAttribute("content") !== url) ogUrl.setAttribute("content", url);
  document.querySelectorAll<HTMLAnchorElement>("a[href^='/']").forEach(localizeAnchor);
}

export function LocaleSeo() {
  const [location] = useLocation();

  useEffect(() => {
    const pathname = window.location.pathname;
    const localized = isLocalizedPath(pathname);
    const esPath = pathForLang(pathname, "es");
    const enPath = pathForLang(pathname, "en");
    setAlternate("es", localized ? absolute(esPath) : null);
    setAlternate("en", localized ? absolute(enPath) : null);
    setAlternate("x-default", localized ? absolute(esPath) : null);

    if (!localized || !isEnPath(pathname)) return;
    const apply = () => enforceEnglishUrls(enPath === EN_PREFIX ? EN_PREFIX : enPath);
    apply();
    const observer = new MutationObserver(apply);
    observer.observe(document.documentElement, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["href", "content"],
    });
    return () => observer.disconnect();
  }, [location]);

  return null;
}
