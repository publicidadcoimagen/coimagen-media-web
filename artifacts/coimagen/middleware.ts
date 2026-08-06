import { geolocation, next } from "@vercel/functions";

const COUNTRY_COOKIE_NAME = "coimagen-country";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days

// Skip asset requests (anything with a file extension) — only run on SPA navigation.
export const config = {
  matcher: ["/((?!.*\\..*).*)"],
};

export default function middleware(request: Request) {
  const { country } = geolocation(request);
  const value = country === "MX" ? "mx" : "usa";

  return next({
    headers: {
      "Set-Cookie": `${COUNTRY_COOKIE_NAME}=${value}; Path=/; Max-Age=${COOKIE_MAX_AGE_SECONDS}; SameSite=Lax`,
    },
  });
}
