import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

const benefitsEs = [
  "Precio fundador congelado mientras mantengas tu plan activo.",
  "Prioridad en implementación y soporte.",
  "Diagnóstico estratégico incluido.",
  "Acceso anticipado a nuevas funciones de automatización e IA.",
  "Revisión mensual de oportunidades de crecimiento.",
  "Beneficio de referidos: recibe 1 mes con 50% de descuento por cada cliente referido que contrate.",
  "Promociones especiales para upgrades futuros.",
  "Oportunidad de aparecer como caso de éxito de Coimagen.",
];

const benefitsEn = [
  "Founder price locked while your plan remains active.",
  "Priority implementation and support.",
  "Strategic diagnostic included.",
  "Early access to new automation and AI features.",
  "Monthly growth opportunity review.",
  "Referral benefit: get 50% off one month for every referred client who signs up.",
  "Special promotions for future upgrades.",
  "Opportunity to be featured as a Coimagen case study.",
];

export function FounderOfferSection() {
  const { lang } = useLang();
  const isEs = lang === "es";

  const title = isEs
    ? "Oferta Fundadores — Solo 20 espacios disponibles"
    : "Founder Offer — Only 20 spots available";

  const subtitle = isEs
    ? "Estamos abriendo Coimagen AI Systems a los primeros 20 negocios fundadores con precio preferencial, beneficios exclusivos y prioridad de implementación."
    : "We are opening Coimagen AI Systems to the first 20 founder businesses with preferred launch pricing, exclusive benefits and priority implementation.";

  const scarcity = isEs
    ? "Los primeros 20 lugares tendrán precio fundador. Después de completar los espacios, los precios subirán a tarifa regular."
    : "The first 20 spots receive founder pricing. Once spots are filled, pricing moves to regular rates.";

  const urgency = isEs
    ? "Promoción activa por tiempo limitado. Solicita tu diagnóstico en las próximas 48 horas para apartar tu lugar fundador."
    : "Limited-time promotion. Request your diagnostic within the next 48 hours to reserve your founder spot.";

  const benefits = isEs ? benefitsEs : benefitsEn;
  const cta1 = isEs ? "Quiero ser cliente fundador" : "Become a Founder Client";
  const cta2 = isEs ? "Solicitar diagnóstico gratuito" : "Get Free Diagnostic";

  return (
    <section className="py-24 relative overflow-hidden bg-[#06060f]" id="fundadores">
      <div className="orb w-[600px] h-[600px] bg-[var(--c-yellow)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="badge-neon text-[var(--c-yellow)] border border-[var(--c-yellow)]/30 bg-[var(--c-yellow)]/10">
            🔥 {isEs ? "Solo 20 espacios" : "Only 20 spots"}
          </div>
          <div className="badge-neon text-orange-400 border border-orange-400/30 bg-orange-400/10">
            ⏰ {isEs ? "48 horas para apartar" : "48 hours to claim"}
          </div>
        </div>

        {/* Main card */}
        <div className="glass border border-[var(--c-yellow)]/25 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(255,214,10,0.06)]">
          {/* Top banner */}
          <div className="bg-gradient-to-r from-[var(--c-yellow)]/20 via-orange-400/15 to-[var(--c-yellow)]/10 border-b border-[var(--c-yellow)]/20 px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">{title}</h2>
            </div>
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-[var(--c-yellow)]/15 border border-[var(--c-yellow)]/30 flex flex-col items-center justify-center text-center">
              <span className="text-[var(--c-yellow)] font-black text-3xl leading-none">20</span>
              <span className="text-[var(--c-yellow)]/70 text-[0.6rem] font-bold uppercase tracking-widest mt-0.5">
                {isEs ? "Lugares" : "Spots"}
              </span>
            </div>
          </div>

          <div className="p-8 lg:p-10">
            <p className="text-[var(--c-muted)] text-base leading-relaxed mb-8 max-w-2xl">{subtitle}</p>

            {/* Benefits grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 glass border border-white/[0.05] p-4 rounded-xl">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--c-lime)]/20 border border-[var(--c-lime)]/40 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-[var(--c-lime)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">{b}</p>
                </div>
              ))}
            </div>

            {/* Scarcity + urgency */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 bg-orange-400/[0.06] border border-orange-400/20 rounded-xl p-4">
                <span className="text-orange-400 text-lg flex-shrink-0">⚠️</span>
                <p className="text-orange-300/90 text-sm leading-relaxed">{scarcity}</p>
              </div>
              <div className="flex items-start gap-3 bg-[var(--c-yellow)]/[0.06] border border-[var(--c-yellow)]/20 rounded-xl p-4">
                <span className="text-[var(--c-yellow)] text-lg flex-shrink-0">⏰</span>
                <p className="text-yellow-200/90 text-sm leading-relaxed">{urgency}</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[var(--c-yellow)] text-[#06060f] font-black px-8 py-4 rounded-xl text-base hover:brightness-110 hover:shadow-[0_0_32px_rgba(255,214,10,0.4)] transition-all active:scale-95"
              >
                🚀 {cta1}
              </a>
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 border border-[var(--c-yellow)]/30 text-[var(--c-yellow)] font-bold px-8 py-4 rounded-xl text-base hover:bg-[var(--c-yellow)]/10 transition-all active:scale-95"
              >
                {cta2}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
