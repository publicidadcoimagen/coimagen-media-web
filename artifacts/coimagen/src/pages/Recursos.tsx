import { useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

const industryIcons: Record<string, string> = {
  "medical-os": "🏥",
  "dental-os": "🦷",
  "law-os": "⚖️",
  "wellness-os": "💆",
  "restaurant-os": "🍽️",
  "real-estate-os": "🏠",
  "local-business-os": "🏪",
};

const badgeColor: Record<string, string> = {
  cyan: "text-[var(--c-cyan)] border-[var(--c-cyan)]/20 bg-[var(--c-cyan)]/10",
  lime: "text-[var(--c-lime)] border-[var(--c-lime)]/20 bg-[var(--c-lime)]/10",
  yellow: "text-yellow-400 border-yellow-400/20 bg-yellow-400/10",
  purple: "text-[var(--c-purple)] border-[var(--c-purple)]/20 bg-[var(--c-purple)]/10",
};

export default function Recursos() {
  const { lang } = useLang();
  const isEs = lang === "es";

  useEffect(() => {
    const title = isEs
      ? "Servicios e Industrias — Coimagen Media Agency"
      : "Services & Industries — Coimagen Media Agency";
    const desc = isEs
      ? "Explora todos nuestros servicios de marketing digital e IA y los sistemas operativos por industria: médicos, dentistas, abogados, restaurantes y más."
      : "Explore all our digital marketing and AI services, plus our industry-specific operating systems: doctors, dentists, lawyers, restaurants, and more.";
    const url = "https://www.coimagenmedia.com/recursos";
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", url);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", desc);
  }, [isEs]);

  return (
    <div className="min-h-screen bg-[#06060f] pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14">
          <div className="badge-neon text-[var(--c-cyan)] border border-[var(--c-cyan)]/25 bg-[var(--c-cyan)]/10 mb-4 w-fit mx-auto">
            {isEs ? "Todo lo que hacemos" : "Everything we do"}
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">
            {isEs ? "Servicios e" : "Services &"}
            <span className="block text-[var(--c-cyan)]">
              {isEs ? "industrias" : "industries"}
            </span>
          </h1>
          <p className="text-[var(--c-muted)] text-base max-w-xl mx-auto leading-relaxed">
            {isEs
              ? "Un vistazo completo a nuestros servicios de marketing e IA y a los sistemas operativos que construimos para cada industria."
              : "A full overview of our marketing and AI services, plus the operating systems we build for each industry."}
          </p>
        </div>

        {/* Servicios */}
        <div className="mb-6">
          <h2 className="text-white font-black text-xl mb-6">{isEs ? "Servicios" : "Services"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteConfig.servicePages.map((svc) => (
              <a
                key={svc.slug}
                href={`/${svc.slug}`}
                className="glass glass-hover p-6 flex flex-col group"
              >
                <div className="text-3xl mb-4">{svc.icon}</div>
                <div className={`badge-neon text-[0.65rem] w-fit mb-3 border ${badgeColor[svc.color] ?? "text-[var(--c-muted)] border-white/10"}`}>
                  {isEs ? svc.descEs : svc.descEn}
                </div>
                <h3 className="text-white font-semibold text-sm leading-snug mb-4 group-hover:text-[var(--c-cyan)] transition-colors flex-1">
                  {isEs ? svc.labelEs : svc.labelEn}
                </h3>
                <div className="flex items-center gap-1.5 text-[var(--c-cyan)] text-xs font-semibold">
                  {isEs ? "Ver servicio" : "View service"}
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Industrias */}
        <div className="mb-16">
          <h2 className="text-white font-black text-xl mb-6">{isEs ? "Industrias" : "Industries"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteConfig.industryPages.map((ind) => (
              <a
                key={ind.slug}
                href={`/${ind.slug}`}
                className="glass glass-hover p-6 flex flex-col group"
              >
                <div className="text-3xl mb-4">{industryIcons[ind.slug] ?? "🏢"}</div>
                <div className="badge-neon text-[0.65rem] w-fit mb-3 border text-[var(--c-lime)] border-[var(--c-lime)]/20 bg-[var(--c-lime)]/10">
                  {isEs ? ind.tagEs : ind.tagEn}
                </div>
                <h3 className="text-white font-semibold text-sm leading-snug mb-4 group-hover:text-[var(--c-cyan)] transition-colors flex-1">
                  {isEs ? ind.labelEs : ind.labelEn}
                </h3>
                <div className="flex items-center gap-1.5 text-[var(--c-cyan)] text-xs font-semibold">
                  {isEs ? "Ver sistema" : "View system"}
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center glass border border-[var(--c-cyan)]/15 rounded-2xl p-10">
          <div className="text-3xl mb-4">🤖</div>
          <h2 className="text-2xl font-black text-white mb-3">
            {isEs ? "¿No sabes cuál necesitas?" : "Not sure which one you need?"}
          </h2>
          <p className="text-[var(--c-muted)] text-sm mb-6 max-w-md mx-auto">
            {isEs
              ? "Camila AI analiza tu negocio en minutos y te recomienda el servicio o sistema exacto para ti."
              : "Camila AI analyzes your business in minutes and recommends the exact service or system for you."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-black px-8 py-3 rounded-xl text-sm hover:brightness-110 transition-all"
            >
              💬 WhatsApp
            </a>
            <a
              href="/diagnostico"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-bold px-8 py-3 rounded-xl text-sm hover:bg-white/5 transition-all"
            >
              🤖 {isEs ? "Diagnóstico gratuito" : "Free diagnostic"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
