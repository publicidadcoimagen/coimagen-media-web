import { useLang } from "@/context/LanguageContext";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function CaseStudies() {
  const { t } = useLang();
  const cs = t.cases;

  return (
    <section className="py-24 bg-[#06060f]" id="casos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle tag="Casos" title={cs.title} subtitle={cs.subtitle} accent="cyan" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cs.items.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover flex flex-col overflow-hidden"
            >
              {/* Visual header */}
              <div className={`h-36 bg-gradient-to-br ${item.color} relative flex items-end p-5`}>
                <span className="badge-neon text-white/80 text-[0.65rem]">{item.tag}</span>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-bold text-white text-base mb-2">{item.name}</h3>
                <p className="text-[var(--c-muted)] text-sm leading-relaxed flex-1">{item.desc}</p>
                <div className="mt-4 flex items-center gap-1.5 text-[var(--c-cyan)] text-xs font-semibold hover:underline">
                  {cs.cta}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
