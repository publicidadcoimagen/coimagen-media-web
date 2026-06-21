import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
      style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139,92,246,0.18) 0%, transparent 60%), #06060f" }}
    >
      {/* Orbs */}
      <div className="orb w-[600px] h-[600px] bg-[var(--c-cyan)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]" />
      <div className="orb w-96 h-96 bg-[var(--c-purple)] top-1/4 left-1/4 opacity-[0.12]" />
      <div className="orb w-80 h-80 bg-[var(--c-lime)] bottom-1/4 right-1/4 opacity-[0.07]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-20">
        {/* Badge */}
        <div className="badge-neon text-[var(--c-cyan)] mb-8 mx-auto w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-cyan)] animate-pulse inline-block" />
          {h.badge}
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.08] mb-8 tracking-tight">
          <span className="text-white">{h.line1}</span>
          <br />
          <span className="grad-text">{h.line2}</span>
          <br />
          <span className="text-white">{h.line3}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-[var(--c-muted)] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          {h.sub}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href={siteConfig.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[var(--c-cyan)] text-[#06060f] font-bold px-8 py-4 rounded-xl text-base hover:brightness-110 hover:shadow-[0_0_28px_rgba(0,207,255,0.45)] transition-all active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {h.cta1}
          </a>

          <a
            href="#soluciones"
            className="inline-flex items-center gap-2 glass border border-white/10 text-white font-semibold px-8 py-4 rounded-xl text-base hover:border-[var(--c-cyan)]/30 hover:text-[var(--c-cyan)] transition-all active:scale-95"
          >
            {h.cta2}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href={`https://calendly.com/coimagen`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--c-muted)] hover:text-white px-4 py-4 text-base font-medium transition-colors"
          >
            {h.cta3}
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {[
            { n: "Tijuana", label: "/ San Diego" },
            { n: "MX", label: "/ USA" },
            { n: "IA", label: "+ Automatización" },
            { n: "24/7", label: "Sistemas activos" },
          ].map((s) => (
            <div key={s.n} className="text-center">
              <div className="text-2xl font-black grad-text">{s.n}</div>
              <div className="text-[var(--c-muted2)] text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#06060f] to-transparent" />
    </section>
  );
}
