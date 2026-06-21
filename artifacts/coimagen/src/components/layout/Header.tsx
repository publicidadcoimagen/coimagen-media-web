import { useState, useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export function Header() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: "#inicio" },
    { label: t.nav.solutions, href: "#soluciones" },
    { label: t.nav.industries, href: "#industrias" },
    { label: t.nav.cases, href: "#casos" },
    { label: t.nav.pricing, href: "#precios" },
    { label: t.nav.blog, href: "#blog" },
    { label: t.nav.diagnostic, href: "#diagnostico" },
    { label: t.nav.contact, href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#06060f]/90 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 flex-shrink-0">
          <img
            src="/logo-coimagen.png"
            alt="Coimagen Media Agency"
            className="h-9 w-auto object-contain"
            onError={(e) => {
              const t = e.currentTarget;
              t.style.display = "none";
              const fallback = t.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = "flex";
            }}
          />
          <span
            className="hidden items-center gap-2 font-bold text-white text-sm tracking-wide"
            aria-hidden="true"
          >
            COIMAGEN<span className="text-[var(--c-cyan)]"> AI SYSTEMS</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[var(--c-muted)] hover:text-white text-sm font-medium transition-colors duration-150"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Lang toggle */}
          <div className="hidden sm:flex items-center gap-0.5 glass rounded-lg px-1 py-1">
            <button
              onClick={() => setLang("es")}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                lang === "es" ? "bg-[var(--c-cyan)] text-[#06060f]" : "text-[var(--c-muted)] hover:text-white"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                lang === "en" ? "bg-[var(--c-cyan)] text-[#06060f]" : "text-[var(--c-muted)] hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          {/* CTA */}
          <a
            href={siteConfig.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-bold text-sm px-4 py-2 rounded-xl hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,207,255,0.35)] transition-all"
          >
            {t.nav.cta}
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden glass p-2 rounded-lg"
            aria-label="Menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="xl:hidden bg-[#06060f]/95 backdrop-blur-xl border-b border-white/[0.06] px-4 pb-6 pt-2">
          <nav className="flex flex-col gap-1 mb-4">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-[var(--c-muted)] hover:text-white py-2.5 text-sm font-medium border-b border-white/[0.05] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Mobile lang toggle */}
          <div className="flex gap-2 mb-4">
            <div className="flex items-center gap-0.5 glass rounded-lg px-1 py-1">
              <button
                onClick={() => setLang("es")}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${lang === "es" ? "bg-[var(--c-cyan)] text-[#06060f]" : "text-white"}`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${lang === "en" ? "bg-[var(--c-cyan)] text-[#06060f]" : "text-white"}`}
              >
                EN
              </button>
            </div>
          </div>

          <a
            href={siteConfig.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[var(--c-cyan)] text-[#06060f] font-bold py-3 rounded-xl text-sm"
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}
