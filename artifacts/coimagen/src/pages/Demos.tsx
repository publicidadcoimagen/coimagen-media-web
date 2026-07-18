import { useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/config/site";

const industryIcons = ["🏥", "🦷", "⚖️", "💆", "🍽️", "🏠", "🏪"];
const industryColors = [
  "from-blue-500/20 to-blue-500/5 border-blue-500/20 hover:border-blue-500/40",
  "from-teal-500/20 to-teal-500/5 border-teal-500/20 hover:border-teal-500/40",
  "from-violet-500/20 to-violet-500/5 border-violet-500/20 hover:border-violet-500/40",
  "from-pink-500/20 to-pink-500/5 border-pink-500/20 hover:border-pink-500/40",
  "from-orange-500/20 to-orange-500/5 border-orange-500/20 hover:border-orange-500/40",
  "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 hover:border-emerald-500/40",
  "from-yellow-500/20 to-yellow-500/5 border-yellow-500/20 hover:border-yellow-500/40",
];

const MEDICAL_DEMO_URL = "https://coimagenmediasaasexpedientemedico.abacusai.app/";

export default function Demos() {
  const { lang, t } = useLang();
  const isEs = lang === "es";
  const d = t.demos;
  const [medical, ...comingSoon] = siteConfig.industryPages;

  useEffect(() => {
    const title = isEs ? "Demos en vivo | Coimagen Media Agency" : "Live Demos | Coimagen Media Agency";
    const desc = isEs
      ? "Explora Medical OS en un entorno de demo real. El resto de nuestros sistemas operativos por industria llegan próximamente."
      : "Explore Medical OS in a live demo environment. Our other industry operating systems are coming soon.";
    const url = "https://www.coimagenmedia.com/demos";
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", url);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", desc);
  }, [isEs]);

  return (
    <section className="py-24 bg-[#06060f] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle tag="Demos" title={d.title} subtitle={d.subtitle} accent="lime" />

        {/* Medical OS — featured, live demo */}
        <div className="glass p-6 sm:p-8 border border-[var(--c-lime)]/30 mb-6 bg-gradient-to-br from-[var(--c-lime)]/10 to-transparent">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{industryIcons[0]}</span>
            <div>
              <h3 className="font-bold text-white text-xl">{isEs ? medical.labelEs : medical.labelEn}</h3>
              <span className="badge-neon text-[0.6rem] border text-[var(--c-lime)] border-[var(--c-lime)]/20 bg-[var(--c-lime)]/10">
                {isEs ? "Demo disponible" : "Demo available"}
              </span>
            </div>
          </div>

          <p className="text-[var(--c-muted)] text-sm mb-4 max-w-2xl">{d.medical.desc}</p>

          <div className="flex items-start gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-lg px-4 py-3 mb-5 max-w-2xl">
            <span className="text-yellow-400 text-sm mt-0.5" aria-hidden="true">⚠️</span>
            <p className="text-yellow-200/90 text-xs leading-relaxed">{d.medical.warning}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mb-6 max-w-2xl">
            <div className="glass p-4 border border-white/10">
              <div className="text-[0.65rem] uppercase tracking-wider text-[var(--c-muted2)] font-bold mb-1">
                {d.medical.doctorLabel}
              </div>
              <div className="font-mono text-sm text-white">doctor@clinica.com</div>
              <div className="font-mono text-sm text-[var(--c-cyan)]">demo123</div>
            </div>
            <div className="glass p-4 border border-white/10">
              <div className="text-[0.65rem] uppercase tracking-wider text-[var(--c-muted2)] font-bold mb-1">
                {d.medical.secretaryLabel}
              </div>
              <div className="font-mono text-sm text-white">secretaria@clinica.com</div>
              <div className="font-mono text-sm text-[var(--c-cyan)]">demo123</div>
            </div>
          </div>

          <a
            href={MEDICAL_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--c-lime)] text-[#06060f] font-bold px-7 py-3.5 rounded-xl text-sm hover:brightness-110 hover:shadow-[0_0_20px_rgba(163,230,53,0.3)] transition-all active:scale-95"
          >
            {d.medical.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Other industries — coming soon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {comingSoon.map((ind, idx) => {
            const i = idx + 1;
            return (
              <a
                key={ind.slug}
                href={`/${ind.slug}`}
                className={`glass glass-hover p-5 text-center border bg-gradient-to-br ${industryColors[i]} opacity-70 hover:opacity-100 transition-all`}
              >
                <div className="text-4xl mb-3">{industryIcons[i]}</div>
                <div className="font-bold text-white text-sm mb-1">{isEs ? ind.labelEs : ind.labelEn}</div>
                <div className="badge-neon text-[0.55rem] mx-auto w-fit mt-2 border text-[var(--c-muted)] border-white/10 bg-white/5">
                  {d.comingSoon}
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="/diagnostico"
            className="inline-flex items-center gap-2 border border-white/10 text-white font-semibold px-7 py-3.5 rounded-xl text-sm hover:border-[var(--c-lime)]/30 hover:text-[var(--c-lime)] transition-all active:scale-95"
          >
            {d.finalCta}
          </a>
        </div>
      </div>
    </section>
  );
}
