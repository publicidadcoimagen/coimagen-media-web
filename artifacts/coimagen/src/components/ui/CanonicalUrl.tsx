import { useEffect } from "react";
import { useLocation } from "wouter";

const BASE_DOMAIN = "https://www.coimagenmedia.com";

export function CanonicalUrl() {
  const [location] = useLocation();

  useEffect(() => {
    const tag = document.querySelector('link[rel="canonical"]');
    if (tag) {
      tag.setAttribute("href", `${BASE_DOMAIN}${location}`);
    }
  }, [location]);

  return null;
}
