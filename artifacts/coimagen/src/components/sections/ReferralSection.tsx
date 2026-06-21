import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export function ReferralSection() {
  const { lang } = useLang();
  const isEs = lang === "es";

  return (
    <section className="py-16 bg-[#0d0d1a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="glass border border-[var(--c-lime)]/20 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-8">
          <div className="flex-shrink-0 text-5xl">🤝</div>

          <div className="flex-1 text-center sm:text-left">
            <div className="badge-neon text-[var(--c-lime)] border border-[var(--c-lime)]/25 bg-[var(--c-lime)]/10 mb-3 w-fit mx-auto sm:mx-0">
              {isEs ? "Programa de Referidos" : "Referral Program"}
            </div>
            <h3 className="font-bold text-white text-xl mb-2">
              {isEs ? "Programa de Referidos Coimagen" : "Coimagen Referral Program"}
            </h3>
            <p className="text-[var(--c-muted)] text-sm leading-relaxed">
              {isEs
                ? "Si eres cliente fundador y nos recomiendas con otro negocio que contrate, recibes 50% de descuento en una mensualidad. Más referidos pueden desbloquear beneficios adicionales."
                : "If you are a founder client and refer another business that signs up, you receive 50% off one monthly payment. Additional referrals may unlock extra benefits."}
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--c-lime)] text-[#06060f] font-bold px-6 py-3 rounded-xl text-sm hover:brightness-110 hover:shadow-[0_0_20px_rgba(163,230,53,0.3)] transition-all active:scale-95 whitespace-nowrap"
            >
              {isEs ? "Quiero referir un negocio" : "I want to refer a business"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
