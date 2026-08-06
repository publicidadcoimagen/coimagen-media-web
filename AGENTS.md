# Coimagen Media Agency — Public Website

Premium bilingual (ES/EN) public marketing website for Coimagen Media Agency (www.coimagenmedia.com). Dark futuristic design with neon cyan/lime/purple palette, country-aware pricing (MX/USA), and 7 industry landing pages.

## Run & Operate

- `pnpm --filter @workspace/coimagen run dev` — run the website (port 18084, preview at `/`)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS
- Routing: wouter
- No database (Prompt #1 — static content only)

## Where things live

- `artifacts/coimagen/src/config/site.ts` — **centralized config**: WhatsApp, socials, brand, industry pages list
- `artifacts/coimagen/src/context/LanguageContext.tsx` — **all ES/EN translations** (single source of truth)
- `artifacts/coimagen/src/context/CountryContext.tsx` — MX/USA state for pricing
- `artifacts/coimagen/src/components/layout/Header.tsx` — sticky nav, ES/EN + MX/USA toggles
- `artifacts/coimagen/src/components/layout/Footer.tsx` — full footer
- `artifacts/coimagen/src/components/sections/` — all 13 homepage sections
- `artifacts/coimagen/src/pages/Home.tsx` — assembles all sections
- `artifacts/coimagen/src/pages/industries/` — 7 industry landing pages + IndustryTemplate
- `artifacts/coimagen/public/sitemap.xml` — SEO sitemap
- `artifacts/coimagen/public/robots.txt` — allows indexing

## Architecture decisions

- **Centralized translations**: All ES/EN text lives in `LanguageContext.tsx` translations object — do not scatter strings in components.
- **Centralized config**: All contact info, social links, WhatsApp, and industry slugs live in `site.ts` — Prompt #2 admin panel will replace this with DB.
- **IndustryTemplate pattern**: All 7 industry pages share one template component; each page just provides a content object.
- **CountryContext drives pricing**: `PricingSection` reads `country` from context; toggling MX/USA in header or pricing section both update the same state.
- **No hooks inside JSX**: `SectionReveal`/`FadeReveal` style patterns must use proper subcomponents, never IIFEs.

## Product

- Public marketing website for lead generation and SEO
- 13 homepage sections: Hero → Pain → Solution Ladder → Services → Industries → Pricing → Premium → Case Studies → Business OS → Camila → Diagnostic → Blog Preview → Final CTA
- 7 industry landing pages: Medical OS, Dental OS, Law OS, Wellness OS, Restaurant OS, Real Estate OS, Local Business OS
- Bilingual ES/EN with language switcher in header
- Country selector (🇲🇽 MX / 🇺🇸 USA) with currency-aware pricing
- WhatsApp: +52 664 476 9223

## User preferences

- Language default: Spanish (ES)
- Country default: México (MX)
- WhatsApp is the primary lead CTA
- "Prompt #2" will add admin settings panel, Jotform integration, analytics, pixel

## Gotchas

- The `SectionTitle` badge uses `.badge-neon` CSS class (defined in `index.css` neon theme block), NOT the old `.badge` class.
- Do not call React hooks inside JSX IIFEs — always extract as a subcomponent.
- `pnpm run dev` at workspace root has no script — always use `--filter`.
- Pricing plans must have explicit `popular: boolean` field (not optional) to avoid TypeScript narrowing issues in `PricingSection`.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
