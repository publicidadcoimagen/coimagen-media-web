import { useLang } from "@/context/LanguageContext";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function PainSection() {
  const { t } = useLang();
  const icons = ["🌐", "📱", "🗺️", "📈", "⏳", "❄️", "💬", "📊"];

  return (
    <section className="py-24 bg-[#06060f]" id="problemas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle
          tag="Pain Points"
          title={t.pain.title}
          accent="purple"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.pain.items.map((item, i) => (
            <div
              key={i}
              className="glass glass-hover p-5 flex items-start gap-4"
            >
              <span className="text-2xl flex-shrink-0">{icons[i]}</span>
              <p className="text-white/80 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
