import { useLang } from "@/context/LanguageContext";
import { SectionTitle } from "@/components/ui/SectionTitle";

const serviceIcons = ["📣", "🚀", "🗺️", "⭐", "👥", "💬", "⚡", "🤖", "🖥️"];
const serviceColors = [
  "border-[var(--c-cyan)]/20 hover:border-[var(--c-cyan)]/40",
  "border-[var(--c-lime)]/20 hover:border-[var(--c-lime)]/40",
  "border-[var(--c-yellow)]/20 hover:border-[var(--c-yellow)]/40",
  "border-[var(--c-purple)]/20 hover:border-[var(--c-purple)]/40",
  "border-[var(--c-cyan)]/20 hover:border-[var(--c-cyan)]/40",
  "border-green-400/20 hover:border-green-400/40",
  "border-orange-400/20 hover:border-orange-400/40",
  "border-pink-400/20 hover:border-pink-400/40",
  "border-violet-400/20 hover:border-violet-400/40",
];

export function ServicesSection() {
  const { t } = useLang();
  const s = t.services;

  return (
    <section className="py-24 bg-[#06060f]" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle tag="Servicios" title={s.title} subtitle={s.subtitle} accent="lime" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {s.items.map((item, i) => (
            <div
              key={i}
              className={`glass glass-hover p-6 border ${serviceColors[i]} transition-all duration-250`}
            >
              <div className="text-3xl mb-4">{serviceIcons[i]}</div>
              <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
              <p className="text-[var(--c-muted)] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
