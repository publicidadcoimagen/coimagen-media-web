import { geolocation, next, rewrite } from "@vercel/functions";

const COUNTRY_COOKIE_NAME = "coimagen-country";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days

// Home is the only prerendered page whose content depends on the country
// (MXN vs USD pricing). Its default files are the USD render; Mexico gets
// the MXN render built by scripts/prerender.mjs (keep in sync with its
// MX_VARIANTS), so the static HTML already shows the right prices.
const MX_VARIANTS: Record<string, string> = {
  "/": "/home-mx.html",
  "/en": "/en-mx.html",
  "/en/": "/en-mx.html",
};

// Skip asset requests (anything with a file extension) — only run on SPA navigation.
export const config = {
  matcher: ["/((?!.*\\..*).*)"],
};

export default function middleware(request: Request) {
  const { country } = geolocation(request);
  const value = country === "MX" ? "mx" : "usa";
  const headers = {
    "Set-Cookie": `${COUNTRY_COOKIE_NAME}=${value}; Path=/; Max-Age=${COOKIE_MAX_AGE_SECONDS}; SameSite=Lax; Secure`,
  };

  const mxFile = value === "mx" ? MX_VARIANTS[new URL(request.url).pathname] : undefined;
  if (mxFile) return rewrite(new URL(mxFile, request.url), { headers });

  return next({ headers });
}
