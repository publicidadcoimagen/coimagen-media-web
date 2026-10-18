import { geolocation, next, rewrite } from "@vercel/functions";

const COUNTRY_COOKIE_NAME = "coimagen-country";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days

// Business rule: MXN only in Mexico, USD everywhere else, whatever the
// language. Home is the only page with country-dependent prices; its
// prerendered home.html is the USD render, so Mexico gets the MXN render
// built by scripts/prerender.mjs (keep the name in sync with HOME_MX_FILE).
// Everyone else gets home.html explicitly: Vercel serves the empty
// index.html shell for "/" before vercel.json's "/" -> /home.html rewrite
// ever applies, so without this the USD home was never actually served.
const HOME_MX_FILE = "/home-mx.html";
const HOME_FILE = "/home.html";

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

  if (new URL(request.url).pathname === "/") {
    return rewrite(new URL(value === "mx" ? HOME_MX_FILE : HOME_FILE, request.url), { headers });
  }

  return next({ headers });
}
