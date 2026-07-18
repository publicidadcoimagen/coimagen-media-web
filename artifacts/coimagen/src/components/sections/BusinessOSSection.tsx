import { useLang } from "@/context/LanguageContext";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/config/site";

const osIcons = ["🏥", "🦷", "⚖️", "💆", "🍽️", "🏠", "🏪"];
const osBadgeColors = [
  "text-blue-400 border-blue-400/20 bg-blue-400/10",
  "text-teal-400 border-teal-400/20 bg-teal-400/10",
  "text-violet-400 border-violet-400/20 bg-violet-400/10",
  "text-pink-400 border-pink-400/20 bg-pink-400/10",
  "text-orange-400 border-orange-400/20 bg-orange-400/10",
  "text-emerald-400 border-emerald-400/20 bg-emerald-400/10",
  "text-yellow-400 border-yellow-400/20 bg-yellow-400/10",
];

export function BusinessOSSection() {
  const { lang, t } = useLang();
  const bos = t.businessOS;

  return (
    <section className="py-24 bg-[#0d0d1a]" id="os">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle tag="Industry OS" title={bos.title} subtitle={bos.subtitle} accent="lime" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {siteConfig.industryPages.map((ind, i) => (
            <a
              key={ind.slug}
              href={`/${ind.slug}`}
              className="glass glass-hover p-5 text-center group"
            >
              <div className="text-4xl mb-3">{osIcons[i]}</div>
              <div className="font-bold text-white text-sm mb-1 group-hover:text-[var(--c-cyan)] transition-colors">
                {ind.labelEs}
              </div>
              <div className={`badge-neon text-[0.6rem] mx-auto w-fit mt-2 border ${osBadgeColors[i]}`}>
                {lang === "es" ? ind.tagEs : ind.tagEn}
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#industrias"
            className="inline-flex items-center gap-2 bg-[var(--c-lime)] text-[#06060f] font-bold px-7 py-3.5 rounded-xl text-sm hover:brightness-110 hover:shadow-[0_0_20px_rgba(163,230,53,0.3)] transition-all active:scale-95"
          >
            {bos.cta1}
          </a>
          <a
            href="/diagnostico"
            className="inline-flex items-center gap-2 border border-white/10 text-white font-semibold px-7 py-3.5 rounded-xl text-sm hover:border-[var(--c-lime)]/30 hover:text-[var(--c-lime)] transition-all active:scale-95"
          >
            {bos.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}
