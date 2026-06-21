import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { useCountry } from "@/context/CountryContext";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/config/site";

export function PricingSection() {
  const { lang, t } = useLang();
  const { country, setCountry } = useCountry();
  const p = t.pricing;

  const plans = country === "mx" ? p.mxPlans : p.usaPlans;

  return (
    <section className="py-24 bg-[#06060f]" id="precios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle tag="Pricing" title={p.title} subtitle={p.subtitle} accent="purple" />

        {/* Country toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-1 glass rounded-xl p-1.5">
            <button
              onClick={() => setCountry("mx")}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                country === "mx"
                  ? "bg-[var(--c-lime)] text-[#06060f] shadow-[0_0_16px_rgba(163,230,53,0.3)]"
                  : "text-[var(--c-muted)] hover:text-white"
              }`}
            >
              🇲🇽 México
            </button>
            <button
              onClick={() => setCountry("usa")}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                country === "usa"
                  ? "bg-[var(--c-cyan)] text-[#06060f] shadow-[0_0_16px_rgba(0,207,255,0.3)]"
                  : "text-[var(--c-muted)] hover:text-white"
              }`}
            >
              🇺🇸 USA
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`glass flex flex-col ${
                plan.popular
                  ? "border border-[var(--c-cyan)]/40 shadow-[0_0_40px_rgba(0,207,255,0.1)] scale-[1.02]"
                  : "glass-hover"
              }`}
            >
              {plan.popular && (
                <div className="bg-[var(--c-cyan)] text-[#06060f] text-xs font-black text-center py-1.5 rounded-t-2xl tracking-wide uppercase">
                  {p.popularLabel}
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-white text-lg mb-2">{plan.name}</h3>

                <div className="mb-1">
                  <span className="text-3xl font-black grad-text">{plan.price}</span>
                </div>
                <p className="text-[var(--c-muted2)] text-sm mb-1">{plan.period}</p>
                {"setup" in plan && plan.setup && (
                  <p className="text-[var(--c-yellow)] text-xs font-semibold mb-3">{plan.setup}</p>
                )}

                <div className="my-5 border-t border-white/[0.06]" />

                <ul className="space-y-2.5 flex-1">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-[var(--c-lime)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[var(--c-muted)] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={siteConfig.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 block text-center py-3 rounded-xl text-sm font-bold transition-all active:scale-95 ${
                    plan.popular
                      ? "bg-[var(--c-cyan)] text-[#06060f] hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,207,255,0.35)]"
                      : "border border-white/10 text-white hover:border-[var(--c-cyan)]/30 hover:text-[var(--c-cyan)]"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Founder offer */}
        <div className="mt-10 glass border border-[var(--c-yellow)]/20 p-6 max-w-2xl mx-auto text-center">
          <div className="text-3xl mb-2">🔥</div>
          <h4 className="font-bold text-[var(--c-yellow)] text-lg mb-1">{p.founderTitle}</h4>
          <p className="text-[var(--c-muted)] text-sm">{p.founderDesc}</p>
        </div>

        <p className="text-center text-[var(--c-muted2)] text-xs mt-6">{p.note}</p>
      </div>
    </section>
  );
}
