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

export function IndustriesSection() {
  const { lang, t } = useLang();
  const ind = t.industries;

  return (
    <section className="py-24 bg-[#0d0d1a]" id="industrias">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle tag="Industrias" title={ind.title} subtitle={ind.subtitle} accent="cyan" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {siteConfig.industryPages.map((industry, i) => (
            <a
              key={industry.slug}
              href={`/${industry.slug}`}
              className={`glass glass-hover p-6 border bg-gradient-to-br ${industryColors[i]} transition-all duration-250 block group`}
            >
              <div className="text-4xl mb-4">{industryIcons[i]}</div>
              <h3 className="font-bold text-white text-base mb-1">{industry.labelEs}</h3>
              <p className="text-[var(--c-muted)] text-sm mb-4">
                {lang === "es" ? industry.tagEs : industry.tagEn}
              </p>
              <span className="text-xs font-semibold text-[var(--c-cyan)] group-hover:underline inline-flex items-center gap-1">
                {ind.cta}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}

          {/* Placeholder 8th card */}
          <div className="glass p-6 border border-white/[0.04] flex flex-col justify-center items-center text-center opacity-50">
            <div className="text-4xl mb-4">🔮</div>
            <p className="text-[var(--c-muted)] text-sm">
              {lang === "es" ? "Próximamente más industrias" : "More industries coming soon"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
