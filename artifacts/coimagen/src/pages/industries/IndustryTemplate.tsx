import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

interface Module {
  icon: string;
  name: string;
}

interface IndustryContent {
  slug: string;
  icon: string;
  color: string;
  seoTitle: { es: string; en: string };
  metaDesc: { es: string; en: string };
  title: { es: string; en: string };
  subtitle: { es: string; en: string };
  pain: { es: string[]; en: string[] };
  solution: { es: string; en: string };
  modules: Module[];
  ctaLabel: { es: string; en: string };
  faq: { q: { es: string; en: string }; a: { es: string; en: string } }[];
}

export function IndustryTemplate({ content }: { content: IndustryContent }) {
  const { lang } = useLang();
  const L = (v: { es: string; en: string }) => v[lang];
  const LA = (v: { es: string[]; en: string[] }) => v[lang];

  return (
    <div className="min-h-screen" style={{ background: "#06060f" }}>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden grid-bg"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${content.color}22 0%, transparent 60%), #06060f`,
        }}
      >
        <div className="orb w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 opacity-[0.1]"
          style={{ background: content.color }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="text-6xl mb-6">{content.icon}</div>
          <div className="badge-neon mb-4 mx-auto w-fit" style={{ color: content.color, borderColor: `${content.color}30` }}>
            <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: content.color }} />
            Industry OS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            {L(content.title)}
          </h1>
          <p className="text-[var(--c-muted)] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            {L(content.subtitle)}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-bold px-8 py-4 rounded-xl text-base hover:brightness-110 hover:shadow-[0_0_28px_rgba(0,207,255,0.4)] transition-all active:scale-95"
            >
              {L(content.ctaLabel)}
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-2 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl text-base hover:border-white/20 transition-all active:scale-95"
            >
              ← {lang === "es" ? "Volver" : "Back"}
            </a>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-[#0d0d1a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            {lang === "es" ? "¿Te identificas?" : "Sound familiar?"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {LA(content.pain).map((item, i) => (
              <div key={i} className="glass glass-hover p-5 flex items-start gap-3">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                <p className="text-white/80 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-[#06060f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
            {lang === "es" ? "La solución" : "The solution"}
          </h2>
          <p className="text-[var(--c-muted)] text-lg leading-relaxed">{L(content.solution)}</p>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 bg-[#0d0d1a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            {lang === "es" ? "Módulos incluidos" : "Included modules"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {content.modules.map((mod, i) => (
              <div key={i} className="glass glass-hover p-5 text-center">
                <div className="text-3xl mb-3">{mod.icon}</div>
                <p className="text-white font-semibold text-sm">{mod.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#06060f]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">FAQ</h2>
          <div className="space-y-4">
            {content.faq.map((item, i) => (
              <div key={i} className="glass p-6">
                <h3 className="font-bold text-white mb-2 text-base">{L(item.q)}</h3>
                <p className="text-[var(--c-muted)] text-sm leading-relaxed">{L(item.a)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#0d0d1a] text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{L(content.ctaLabel)}</h2>
          <p className="text-[var(--c-muted)] mb-8">
            {lang === "es"
              ? "Solicita tu diagnóstico gratuito hoy."
              : "Request your free diagnostic today."}
          </p>
          <a
            href={siteConfig.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-black px-10 py-4 rounded-xl text-base hover:brightness-110 hover:shadow-[0_0_28px_rgba(0,207,255,0.4)] transition-all active:scale-95"
          >
            WhatsApp → {siteConfig.whatsapp.display}
          </a>
        </div>
      </section>
    </div>
  );
}
