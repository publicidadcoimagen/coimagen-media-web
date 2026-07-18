import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export function Header() {
  const { lang, setLang, t } = useLang();
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

  const industryIcons: Record<string, string> = {
    "medical-os": "🏥",
    "dental-os": "🦷",
    "law-os": "⚖️",
    "wellness-os": "💆",
    "restaurant-os": "🍽️",
    "real-estate-os": "🏠",
    "local-business-os": "🏪",
  };
  const isHome = location === "/" || location === "";
  const isEs = lang === "es";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (industriesRef.current && !industriesRef.current.contains(e.target as Node)) {
        setIndustriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const smartHref = (anchor: string) =>
    isHome ? `#${anchor}` : `/#${anchor}`;

  const navItems = [
    { label: isEs ? "Inicio" : "Home", href: "/" },
    { label: isEs ? "Servicios" : "Services", href: null, isDropdown: true },
    { label: isEs ? "Industrias" : "Industries", href: null, isIndustriesDropdown: true },
    { label: isEs ? "Casos" : "Cases", href: "/case-studies" },
    { label: isEs ? "Recursos" : "Resources", href: "/resources" },
    { label: "Blog", href: "/blog" },
    { label: isEs ? "Nosotros" : "About", href: "/about" },
    { label: isEs ? "Diagnóstico" : "Diagnostic", href: "/diagnostico" },
    { label: isEs ? "Contacto" : "Contact", href: "/contacto" },
  ];

  const colorClass: Record<string, string> = {
    cyan: "text-[var(--c-cyan)]",
    lime: "text-[var(--c-lime)]",
    yellow: "text-yellow-400",
    purple: "text-[var(--c-purple)]",
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#06060f]/90 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3 flex-shrink-0">
          <img
            src="/logo-coimagen.png"
            alt="Coimagen Media Agency"
            className="h-12 w-auto object-contain"
            onError={(e) => {
              const tgt = e.currentTarget;
              tgt.style.display = "none";
              const fb = tgt.nextElementSibling as HTMLElement;
              if (fb) fb.style.display = "flex";
            }}
          />
          <span className="hidden items-center gap-2 font-bold text-white text-sm tracking-wide" aria-hidden="true">
            COIMAGEN<span className="text-[var(--c-cyan)]"> AI SYSTEMS</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-5">
          {navItems.map((item) => {
            if (item.isDropdown) {
              return (
                <div key="services-dd" className="relative" ref={servicesRef}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    onMouseEnter={() => setServicesOpen(true)}
                    className="flex items-center gap-1 text-[var(--c-muted)] hover:text-white text-sm font-medium transition-colors duration-150"
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                  >
                    {item.label}
                    <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div
                      onMouseLeave={() => setServicesOpen(false)}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[500px] bg-[#0c0c1a] border border-white/[0.08] rounded-2xl shadow-2xl shadow-black/60 p-4 grid grid-cols-2 gap-1 z-50"
                    >
                      {siteConfig.servicePages.map((svc) => (
                        <a
                          key={svc.slug}
                          href={`/${svc.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.05] transition-all group"
                        >
                          <span className="text-xl mt-0.5 flex-shrink-0">{svc.icon}</span>
                          <div>
                            <div className="text-white text-sm font-semibold group-hover:text-[var(--c-cyan)] transition-colors">
                              {isEs ? svc.labelEs : svc.labelEn}
                            </div>
                            <div className={`text-xs mt-0.5 ${colorClass[svc.color] ?? "text-[var(--c-muted)]"}`}>
                              {isEs ? svc.descEs : svc.descEn}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            if ((item as { isIndustriesDropdown?: boolean }).isIndustriesDropdown) {
              return (
                <div key="industries-dd" className="relative" ref={industriesRef}>
                  <button
                    onClick={() => setIndustriesOpen(!industriesOpen)}
                    onMouseEnter={() => setIndustriesOpen(true)}
                    className="flex items-center gap-1 text-[var(--c-muted)] hover:text-white text-sm font-medium transition-colors duration-150"
                    aria-haspopup="true"
                    aria-expanded={industriesOpen}
                  >
                    {item.label}
                    <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {industriesOpen && (
                    <div
                      onMouseLeave={() => setIndustriesOpen(false)}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[420px] bg-[#0c0c1a] border border-white/[0.08] rounded-2xl shadow-2xl shadow-black/60 p-4 grid grid-cols-2 gap-1 z-50"
                    >
                      {siteConfig.industryPages.map((ind) => (
                        <a
                          key={ind.slug}
                          href={`/${ind.slug}`}
                          onClick={() => setIndustriesOpen(false)}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.05] transition-all group"
                        >
                          <span className="text-xl mt-0.5 flex-shrink-0">{industryIcons[ind.slug] ?? "🏢"}</span>
                          <div>
                            <div className="text-white text-sm font-semibold group-hover:text-[var(--c-lime)] transition-colors">
                              {isEs ? ind.labelEs : ind.labelEn}
                            </div>
                            <div className="text-[var(--c-lime)] text-xs mt-0.5">
                              {isEs ? ind.tagEs : ind.tagEn}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <a
                key={item.label}
                href={item.href ?? "#"}
                className="text-[var(--c-muted)] hover:text-white text-sm font-medium transition-colors duration-150"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-0.5 glass rounded-lg px-1 py-1">
            <button onClick={() => setLang("es")} className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${lang === "es" ? "bg-[var(--c-cyan)] text-[#06060f]" : "text-[var(--c-muted)] hover:text-white"}`}>ES</button>
            <button onClick={() => setLang("en")} className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${lang === "en" ? "bg-[var(--c-cyan)] text-[#06060f]" : "text-[var(--c-muted)] hover:text-white"}`}>EN</button>
          </div>

          <a
            href="/diagnostico"
            className="hidden sm:inline-flex items-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-bold text-sm px-4 py-2 rounded-xl hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,207,255,0.35)] transition-all"
          >
            {t.nav.cta}
          </a>

          <a
            href="/portal"
            className="hidden sm:inline-flex items-center gap-1.5 glass border border-white/[0.08] text-[var(--c-muted)] hover:text-white text-xs font-semibold px-3 py-2 rounded-lg hover:border-white/20 transition-all"
            title={isEs ? "Portal de Clientes" : "Client Portal"}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13 12H3"/>
            </svg>
            Portal
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden glass p-2 rounded-lg"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? (
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="xl:hidden bg-[#06060f]/97 backdrop-blur-xl border-b border-white/[0.06] px-4 pb-6 pt-2 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col mb-4">
            {navItems.map((item) => {
              if (item.isDropdown) {
                return (
                  <div key="mobile-services">
                    <div className="text-[var(--c-muted2)] text-xs font-bold uppercase tracking-widest px-1 pt-4 pb-2">
                      {isEs ? "Servicios" : "Services"}
                    </div>
                    {siteConfig.servicePages.map((svc) => (
                      <a
                        key={svc.slug}
                        href={`/${svc.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 py-2.5 px-2 text-sm text-[var(--c-muted)] hover:text-white border-b border-white/[0.04] transition-colors"
                      >
                        <span className="text-base">{svc.icon}</span>
                        {isEs ? svc.labelEs : svc.labelEn}
                      </a>
                    ))}
                  </div>
                );
              }
              if ((item as { isIndustriesDropdown?: boolean }).isIndustriesDropdown) {
                return (
                  <div key="mobile-industries">
                    <div className="text-[var(--c-muted2)] text-xs font-bold uppercase tracking-widest px-1 pt-4 pb-2">
                      {isEs ? "Industrias" : "Industries"}
                    </div>
                    {siteConfig.industryPages.map((ind) => (
                      <a
                        key={ind.slug}
                        href={`/${ind.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 py-2.5 px-2 text-sm text-[var(--c-muted)] hover:text-white border-b border-white/[0.04] transition-colors"
                      >
                        <span className="text-base">{industryIcons[ind.slug] ?? "🏢"}</span>
                        {isEs ? ind.labelEs : ind.labelEn}
                      </a>
                    ))}
                  </div>
                );
              }
              return (
                <a
                  key={item.label}
                  href={item.href ?? "#"}
                  onClick={() => setMenuOpen(false)}
                  className="text-[var(--c-muted)] hover:text-white py-2.5 text-sm font-medium border-b border-white/[0.05] transition-colors"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex gap-2 mb-4">
            <div className="flex items-center gap-0.5 glass rounded-lg px-1 py-1">
              <button onClick={() => setLang("es")} className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${lang === "es" ? "bg-[var(--c-cyan)] text-[#06060f]" : "text-white"}`}>ES</button>
              <button onClick={() => setLang("en")} className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${lang === "en" ? "bg-[var(--c-cyan)] text-[#06060f]" : "text-white"}`}>EN</button>
            </div>
          </div>

          <a
            href="/diagnostico"
            className="block w-full text-center bg-[var(--c-cyan)] text-[#06060f] font-bold py-3 rounded-xl text-sm"
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}
