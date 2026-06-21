import { useLang } from "@/context/LanguageContext";
import { SectionTitle } from "@/components/ui/SectionTitle";

const stepColors = [
  { bg: "from-[var(--c-cyan)]/20 to-[var(--c-cyan)]/5", dot: "bg-[var(--c-cyan)]", num: "text-[var(--c-cyan)]" },
  { bg: "from-[var(--c-lime)]/20 to-[var(--c-lime)]/5", dot: "bg-[var(--c-lime)]", num: "text-[var(--c-lime)]" },
  { bg: "from-[var(--c-yellow)]/20 to-[var(--c-yellow)]/5", dot: "bg-[var(--c-yellow)]", num: "text-[var(--c-yellow)]" },
  { bg: "from-[var(--c-purple)]/20 to-[var(--c-purple)]/5", dot: "bg-[var(--c-purple)]", num: "text-[var(--c-purple)]" },
  { bg: "from-pink-500/20 to-pink-500/5", dot: "bg-pink-400", num: "text-pink-400" },
];

export function SolutionLadder() {
  const { t } = useLang();

  return (
    <section className="py-24 relative overflow-hidden" id="soluciones" style={{ background: "#0d0d1a" }}>
      <div className="orb w-[500px] h-[500px] bg-[var(--c-cyan)] top-1/2 right-0 translate-x-1/2 -translate-y-1/2 opacity-[0.05]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionTitle
          tag="Roadmap"
          title={t.ladder.title}
          accent="cyan"
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Connector line */}
          <div className="absolute left-7 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[var(--c-cyan)] via-[var(--c-purple)] to-pink-400 opacity-30 hidden sm:block" />

          <div className="space-y-4">
            {t.ladder.steps.map((step, i) => {
              const c = stepColors[i];
              return (
                <div key={i} className={`glass glass-hover p-5 flex items-center gap-5 bg-gradient-to-r ${c.bg}`}>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full ${c.dot} flex items-center justify-center text-[#06060f] font-black text-sm z-10`}>
                    {i + 1}
                  </div>
                  <div>
                    <div className={`font-bold text-base ${c.num}`}>{step.title}</div>
                    <div className="text-[var(--c-muted)] text-sm mt-0.5">{step.desc}</div>
                  </div>
                  <div className="ml-auto">
                    <svg className="w-5 h-5 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
