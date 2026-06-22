import { useLang } from "@/context/LanguageContext";
import { useAdmin } from "@/context/AdminContext";
import { siteConfig } from "@/config/site";

function parsePrice(s: string): number {
  return parseInt(s.replace(/[^0-9]/g, "")) || 0;
}

export function FounderOfferSection() {
  const { lang } = useLang();
  const { settings } = useAdmin();
  const isEs = lang === "es";

  const regularPrice = isEs ? settings.founderRegularPriceMx : settings.founderRegularPriceUsd;
  const founderPrice = isEs ? settings.founderPriceMx : settings.founderPriceUsd;
  const currency = isEs ? "MXN / mes" : "USD / mo";
  const savings = parsePrice(regularPrice) - parsePrice(founderPrice);
  const savingsStr = isEs ? `$${savings.toLocaleString()} MXN / mes` : `$${savings} USD / mo`;
  const discountPct = settings.founderDiscountPct;
  const daysRemaining = settings.founderDaysRemaining;
  const spotsAvailable = settings.founderSpotsAvailable;
  const benefits = isEs ? settings.founderBenefitsEs : settings.founderBenefitsEn;

  const title = isEs
    ? `Oferta Fundadores — Solo ${spotsAvailable} espacios disponibles`
    : `Founder Offer — Only ${spotsAvailable} spots available`;

  const subtitle = isEs
    ? "Estamos abriendo Coimagen AI Systems a los primeros negocios fundadores con precio preferencial, beneficios exclusivos y prioridad de implementación."
    : "We are opening Coimagen AI Systems to the first founder businesses with preferred launch pricing, exclusive benefits and priority implementation.";

  return (
    <section className="py-24 relative overflow-hidden bg-[#06060f]" id="fundadores">
      <div className="orb w-[600px] h-[600px] bg-[var(--c-yellow)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="badge-neon text-[var(--c-yellow)] border border-[var(--c-yellow)]/30 bg-[var(--c-yellow)]/10">
            🔥 {isEs ? `Solo ${spotsAvailable} espacios` : `Only ${spotsAvailable} spots`}
          </div>
          {daysRemaining > 0 && (
            <div className="badge-neon text-orange-400 border border-orange-400/30 bg-orange-400/10">
              ⏰ {isEs ? `${daysRemaining} días restantes` : `${daysRemaining} days remaining`}
            </div>
          )}
          <div className="badge-neon text-[var(--c-lime)] border border-[var(--c-lime)]/30 bg-[var(--c-lime)]/10">
            ✅ {isEs ? "Precio fundador de por vida" : "Lifetime founder pricing"}
          </div>
        </div>

        <div className="glass border border-[var(--c-yellow)]/25 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(255,214,10,0.06)]">

          {/* Header banner */}
          <div className="bg-gradient-to-r from-[var(--c-yellow)]/20 via-orange-400/15 to-[var(--c-yellow)]/10 border-b border-[var(--c-yellow)]/20 px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mb-2">{title}</h2>
              <p className="text-white/60 text-sm max-w-xl">{subtitle}</p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="w-24 h-24 rounded-2xl bg-[var(--c-yellow)]/15 border border-[var(--c-yellow)]/30 flex flex-col items-center justify-center text-center">
                <span className="text-[var(--c-yellow)] font-black text-4xl leading-none">{spotsAvailable}</span>
                <span className="text-[var(--c-yellow)]/70 text-[0.6rem] font-bold uppercase tracking-widest mt-1">
                  {isEs ? "Lugares" : "Spots"}
                </span>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-10">

            {/* Pricing comparison */}
            <div className={`flex flex-col sm:flex-row gap-4 mb-8 ${settings.founderImageUrl ? "lg:flex-row lg:items-start" : ""}`}>

              <div className="flex-1">
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-4">
                  {isEs ? "Comparativa de precios" : "Price comparison"}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Regular price */}
                  <div className="glass border border-white/[0.06] rounded-xl p-4 text-center opacity-60">
                    <p className="text-[var(--c-muted)] text-xs mb-1">{isEs ? "Precio regular" : "Regular price"}</p>
                    <p className="text-white/60 font-black text-2xl line-through">{regularPrice}</p>
                    <p className="text-white/40 text-xs mt-1">{currency}</p>
                  </div>
                  {/* Founder price */}
                  <div className="glass border border-[var(--c-yellow)]/40 rounded-xl p-4 text-center bg-[var(--c-yellow)]/5">
                    <p className="text-[var(--c-yellow)] text-xs mb-1 font-bold">{isEs ? "Precio fundador" : "Founder price"}</p>
                    <p className="text-[var(--c-yellow)] font-black text-3xl">{founderPrice}</p>
                    <p className="text-[var(--c-yellow)]/60 text-xs mt-1">{currency}</p>
                  </div>
                  {/* Savings */}
                  <div className="glass border border-[var(--c-lime)]/30 rounded-xl p-4 text-center bg-[var(--c-lime)]/5">
                    <p className="text-[var(--c-lime)] text-xs mb-1 font-bold">{isEs ? "Ahorras" : "You save"}</p>
                    <p className="text-[var(--c-lime)] font-black text-2xl">{discountPct}%</p>
                    <p className="text-[var(--c-lime)]/70 text-xs mt-1">{savingsStr}</p>
                  </div>
                </div>
              </div>

              {/* Optional founder image */}
              {settings.founderImageUrl && (
                <div className={`flex-shrink-0 ${settings.founderImagePosition === "left" ? "order-first" : ""}`}>
                  <img
                    src={settings.founderImageUrl}
                    alt={siteConfig.founder.name}
                    className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-2xl border border-[var(--c-yellow)]/20"
                  />
                </div>
              )}
            </div>

            {/* Launch window */}
            {daysRemaining > 0 && (
              <div className="glass border border-orange-400/20 rounded-xl p-5 mb-8 flex items-center gap-4">
                <div className="flex-shrink-0 text-center">
                  <div className="text-orange-400 font-black text-4xl leading-none">{daysRemaining}</div>
                  <div className="text-orange-400/60 text-xs font-bold uppercase tracking-wider mt-1">
                    {isEs ? "días" : "days"}
                  </div>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{isEs ? "Ventana de lanzamiento" : "Launch window"}</p>
                  <p className="text-orange-300/80 text-xs mt-1">
                    {isEs
                      ? "Esta oferta fundadora estará disponible solo durante la ventana de lanzamiento."
                      : "This founder offer is only available during the launch window."}
                  </p>
                </div>
              </div>
            )}

            {/* Benefits */}
            <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-4">
              {isEs ? "Beneficios exclusivos fundadores" : "Exclusive founder benefits"}
            </p>
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

            {/* Scarcity note */}
            <div className="flex items-start gap-3 bg-orange-400/[0.06] border border-orange-400/20 rounded-xl p-4 mb-8">
              <span className="text-orange-400 text-lg flex-shrink-0">⚠️</span>
              <p className="text-orange-300/90 text-sm leading-relaxed">
                {isEs
                  ? `Los primeros ${spotsAvailable} lugares tendrán precio fundador. Después de completar los espacios, los precios subirán a tarifa regular (${regularPrice} ${currency}).`
                  : `The first ${spotsAvailable} spots receive founder pricing. Once spots are filled, pricing moves to regular rates (${regularPrice} ${currency}).`}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[var(--c-yellow)] text-[#06060f] font-black px-8 py-4 rounded-xl text-base hover:brightness-110 hover:shadow-[0_0_32px_rgba(255,214,10,0.4)] transition-all active:scale-95"
              >
                🚀 {isEs ? "Quiero ser cliente fundador" : "Become a Founder Client"}
              </a>
              <a
                href="/diagnostico"
                className="flex-1 inline-flex items-center justify-center gap-2 border border-[var(--c-yellow)]/30 text-[var(--c-yellow)] font-bold px-8 py-4 rounded-xl text-base hover:bg-[var(--c-yellow)]/10 transition-all active:scale-95"
              >
                {isEs ? "Solicitar diagnóstico gratuito" : "Get Free Diagnostic"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
