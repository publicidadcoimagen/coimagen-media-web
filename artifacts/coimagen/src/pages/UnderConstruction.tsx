import { useEffect } from "react";
import { useLang } from "@/context/LanguageContext";

// Landing spot for the Hero's English "Store" button — the real store
// (tienda.coimagenmedia.com) is Spanish-only for now. Same page shell/design
// as PrivacyPolicy.tsx / TermsOfService.tsx (badge-neon header, glass card,
// back-to-home link) rather than a generic 404-style page.
export default function UnderConstruction() {
  const { lang } = useLang();
  const isEs = lang === "es";

  useEffect(() => {
    const title = isEs ? "En Construcción — Coimagen Media Agency" : "Under Construction — Coimagen Media Agency";
    const desc = isEs
      ? "Esta sección está en construcción. Vuelve pronto."
      : "This section is under construction. Check back soon.";
    const url = "https://www.coimagenmedia.com/under-construction";
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", url);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", desc);
    window.scrollTo(0, 0);
  }, [isEs]);

  return (
    <div className="min-h-screen bg-[#06060f] pt-24 pb-20 flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <div className="badge-neon text-[#f97316] border border-[#f97316]/25 bg-[#f97316]/10 mb-6 w-fit mx-auto">
          🚧 {isEs ? "En Construcción" : "Under Construction"}
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
          {isEs ? "Tienda — Próximamente" : "Store — Coming Soon"}
        </h1>
        <p className="text-[var(--c-muted)] text-base leading-relaxed mb-10">
          {isEs
            ? "Estamos preparando la versión en inglés de nuestra tienda. Mientras tanto, puedes visitar la tienda en español."
            : "We're working on the English version of our store. In the meantime, you can visit the Spanish store."}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="https://tienda.coimagenmedia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#f97316] text-[#06060f] font-bold px-6 py-3 rounded-xl text-sm hover:brightness-110 transition-all active:scale-95"
          >
            {isEs ? "Ir a la tienda (Español) →" : "Visit the Spanish store →"}
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 glass border border-white/10 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:border-[var(--c-cyan)]/30 hover:text-[var(--c-cyan)] transition-all active:scale-95"
          >
            ← {isEs ? "Volver al inicio" : "Back to home"}
          </a>
        </div>
      </div>
    </div>
  );
}
