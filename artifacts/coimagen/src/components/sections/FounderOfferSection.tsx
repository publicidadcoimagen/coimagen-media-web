import { useLang } from "@/context/LanguageContext";
import { useAdmin } from "@/context/AdminContext";
import { siteConfig } from "@/config/site";
import { PACKAGES } from "@/lib/packages";
import { useFounderCount } from "@/lib/foundersApi";

const setupFees = PACKAGES.map((pkg) => pkg.setupUSD);
const minSetupUSD = Math.min(...setupFees);
const maxSetupUSD = Math.max(...setupFees);

export function FounderOfferSection() {
  const { lang } = useLang();
  const { settings } = useAdmin();
  const isEs = lang === "es";

  const founders = useFounderCount();
  const benefits = isEs ? settings.founderBenefitsEs : settings.founderBenefitsEn;

  // Nothing to show yet (still loading, fetch failed) or the offer is full —
  // both cases hide the section rather than risk showing a wrong count.
  if (!founders || founders.count >= founders.max) return null;

  const spotsAvailable = founders.max - founders.count;

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
            🔥 {isEs ? `Solo ${spotsAvailable} espacios (cualquier paquete)` : `Only ${spotsAvailable} spots (any package)`}
          </div>
          <div className="badge-neon text-[var(--c-lime)] border border-[var(--c-lime)]/30 bg-[var(--c-lime)]/10">
            ✅ {isEs ? "Setup $0 + mensualidad congelada" : "$0 setup + locked-in monthly"}
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

            {/* The deal */}
            <div className={`flex flex-col sm:flex-row gap-4 mb-8 ${settings.founderImageUrl ? "lg:flex-row lg:items-start" : ""}`}>

              <div className="flex-1">
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-4">
                  {isEs ? "La oferta" : "The offer"}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* $0 setup */}
                  <div className="glass border border-[var(--c-yellow)]/40 rounded-xl p-4 text-center bg-[var(--c-yellow)]/5">
                    <p className="text-[var(--c-yellow)] text-xs mb-1 font-bold">
                      {isEs ? "Configuración inicial" : "Setup fee"}
                    </p>
                    <p className="text-[var(--c-yellow)] font-black text-3xl">$0</p>
                    <p className="text-[var(--c-yellow)]/60 text-xs mt-1">
                      {isEs
                        ? `Ahorras de $${minSetupUSD} a $${maxSetupUSD} USD, según tu paquete`
                        : `Save $${minSetupUSD}–$${maxSetupUSD} USD, depending on your package`}
                    </p>
                  </div>
                  {/* Locked monthly */}
                  <div className="glass border border-[var(--c-lime)]/30 rounded-xl p-4 text-center bg-[var(--c-lime)]/5">
                    <p className="text-[var(--c-lime)] text-xs mb-1 font-bold">
                      {isEs ? "Mensualidad" : "Monthly"}
                    </p>
                    <p className="text-[var(--c-lime)] font-black text-2xl">
                      {isEs ? "Precio de lista, congelado" : "List price, locked in"}
                    </p>
                    <p className="text-[var(--c-lime)]/70 text-xs mt-1">
                      {isEs
                        ? "Sin incrementos automáticos mientras tu plan siga activo"
                        : "No automatic increases while your plan stays active"}
                    </p>
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
                  ? `Los primeros ${spotsAvailable} lugares (de cualquier paquete) reciben setup $0. Al completarse el cupo, aplica el setup regular de cada paquete. Aplican términos y condiciones.`
                  : `The first ${spotsAvailable} spots (any package) receive $0 setup. Once spots are filled, each package's regular setup fee applies. Terms and conditions apply.`}
              </p>
            </div>

            {/* CTAs — /diagnostico is the primary funnel entry, WhatsApp stays as a secondary option */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/diagnostico"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[var(--c-yellow)] text-[#06060f] font-black px-8 py-4 rounded-xl text-base hover:brightness-110 hover:shadow-[0_0_32px_rgba(255,214,10,0.4)] transition-all active:scale-95"
              >
                🚀 {isEs ? "Solicitar mi diagnóstico gratuito" : "Get My Free Diagnostic"}
              </a>
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 border border-[var(--c-yellow)]/30 text-[var(--c-yellow)] font-bold px-8 py-4 rounded-xl text-base hover:bg-[var(--c-yellow)]/10 transition-all active:scale-95"
              >
                {isEs ? "Escríbenos por WhatsApp" : "Message us on WhatsApp"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
