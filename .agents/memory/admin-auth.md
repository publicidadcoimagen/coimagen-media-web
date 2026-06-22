---
name: Admin auth pattern
description: Simple client-side auth for /secure and /admin pages in static React SPA
---

## Pattern

- `/secure` — password form, checks against hardcoded constant, on success sets `sessionStorage["coimagen_auth"] = "true"` and navigates to `/admin`
- `/admin` — calls `isAuthenticated()` on mount, if false redirects to `/secure`
- `isAuthenticated()` exported from `Secure.tsx` — reads `sessionStorage["coimagen_auth"]`
- Session clears on browser close (sessionStorage, not localStorage)
- Password constant lives in `Secure.tsx` as `ADMIN_PASSWORD`

**Why:** Static React SPA with no backend cannot do real server-side auth. SessionStorage ensures the session is not permanent. Password in source is acceptable for a private internal tool not linked publicly.

**How to apply:** If a real backend auth is added later (Prompt #4), replace sessionStorage check with a real API call and move password to environment secret.
