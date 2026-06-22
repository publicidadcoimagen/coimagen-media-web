---
name: AdminContext design
description: localStorage-backed settings context for editable admin content
---

## Pattern

- `AdminContext.tsx` in `src/context/` — wraps entire app via `AdminProvider` in `App.tsx`
- All settings persist to `localStorage["coimagen_admin_v1"]`
- `useAdmin()` hook returns `{ settings, updateSettings, resetSettings }`
- Key fields: founderDaysRemaining, founderSpotsAvailable, founder prices (MX/USD), founderBenefitsEs/En, projectCards[], calendarUrl
- `DEFAULT_PROJECT_CARDS` exported constant — used as fallback

**Why:** No database in Prompt #1-3. Admin panel needs persistence without a backend. Prompt #4 will add real DB and replace localStorage with API calls.

**How to apply:** When adding new admin-editable fields, add them to `AdminSettings` interface and `DEFAULTS` object, then add form controls in `Admin.tsx`.
