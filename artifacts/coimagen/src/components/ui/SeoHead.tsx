import { useEffect } from "react";

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  image?: string;
}

const BASE_DOMAIN = "https://www.coimagenmedia.com";
const DEFAULT_IMAGE = `${BASE_DOMAIN}/opengraph.jpg`;

function setMeta(selector: string, attr: string, value: string) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

export function SeoHead({ title, description, path, image }: SeoHeadProps) {
  const url = `${BASE_DOMAIN}${path}`;
  const img = image || DEFAULT_IMAGE;

  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:image"]', "content", img);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", img);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", url);
  }, [title, description, url, img]);

  return null;
}
