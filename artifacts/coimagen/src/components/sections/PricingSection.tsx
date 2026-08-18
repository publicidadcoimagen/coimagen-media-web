import { useEffect, useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { useCountry } from "@/context/CountryContext";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PACKAGES } from "@/lib/packages";
import { convertUsdToMxn, getUsdToMxnRate, FALLBACK_USD_TO_MXN_RATE } from "@/lib/pricing";
import { useFounderCount } from "@/lib/foundersApi";

export function PricingSection() {
  const { lang, t } = useLang();
  const { country } = useCountry();
  const founders = useFounderCount();
  const p = t.pricing;

  const [rate, setRate] = useState(FALLBACK_USD_TO_MXN_RATE);

  useEffect(() => {
    let cancelled = false;
    getUsdToMxnRate().then((r) => {
      if (!cancelled) setRate(r);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const isMx = country === "mx";
  const currencyCode = isMx ? "MXN" : "USD";
  const marketLabel = isMx ? "🇲🇽 Precios en México (MXN)" : "🇺🇸 USA Pricing (USD)";
  const founderSpotsLeft = !!founders && founders.count < founders.max;
  const visiblePackages = PACKAGES.filter((pkg) => pkg.visible);

  const formatPrice = (usd: number) => {
    const amount = isMx ? convertUsdToMxn(usd, rate) : usd;
    return `$${amount.toLocaleString(isMx ? "es-MX" : "en-US")}`;
  };

  return (
    <section className="py-24 bg-[#06060f]" id="precios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle tag="Pricing" title={p.title} subtitle={p.subtitle} accent="purple" />

        {/* Market indicator (read-only, no toggle) */}
        <div className="flex justify-center mb-12">
          <div className="badge-neon text-[var(--c-muted)] border-white/10">
            {marketLabel}
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visiblePackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`glass flex flex-col ${
                pkg.recommended
                  ? "border border-[var(--c-cyan)]/40 shadow-[0_0_40px_rgba(0,207,255,0.1)] scale-[1.02]"
                  : "glass-hover"
              }`}
            >
              {pkg.recommended && (
                <div className="bg-[var(--c-cyan)] text-[#06060f] text-xs font-black text-center py-1.5 rounded-t-2xl tracking-wide uppercase">
                  {p.popularLabel}
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-white text-lg mb-1">{pkg.publicName[lang]}</h3>
                <p className="text-[var(--c-muted2)] text-xs mb-3">{pkg.description[lang]}</p>

                <div className="mb-1">
                  <span className="text-3xl font-black grad-text">{formatPrice(pkg.monthlyUSD)}</span>
                </div>
                <p className="text-[var(--c-muted2)] text-sm mb-2">
                  {currencyCode} {p.perMonth}
                </p>

                <div className="text-xs mb-3">
                  <p className={founderSpotsLeft ? "text-white/40 line-through" : "text-[var(--c-yellow)] font-semibold"}>
                    {p.setupLabel}: {formatPrice(pkg.setupUSD)}
                  </p>
                  {founderSpotsLeft && (
                    <p className="text-[var(--c-yellow)] font-semibold">$0 — {p.founderSetupLabel}</p>
                  )}
                </div>

                <div className="my-5 border-t border-white/[0.06]" />

                <ul className="space-y-2.5 flex-1">
                  {pkg.features[lang].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-[var(--c-lime)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[var(--c-muted)] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/diagnostico"
                  className={`mt-6 block text-center py-3 rounded-xl text-sm font-bold transition-all active:scale-95 ${
                    pkg.recommended
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

        <p className="text-center text-[var(--c-muted2)] text-xs mt-8">{p.note}</p>
        {founderSpotsLeft && (
          <p className="text-center text-[var(--c-muted2)] text-xs mt-2">{p.founderTermsNote}</p>
        )}
      </div>
    </section>
  );
}
