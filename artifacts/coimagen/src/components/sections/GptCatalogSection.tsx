import { useLang } from "@/context/LanguageContext";
import { gptCatalogGroups } from "@/config/gptCatalog";

// Fase D: the 20 non-strategic public GPTs, grouped by theme. Each card
// links straight out to ChatGPT — unlike the 9 strategic GPTs above, these
// have no dedicated landing page.
export function GptCatalogSection() {
  const { lang } = useLang();
  const isEs = lang === "es";

  return (
    <div className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
          {isEs ? "Más asistentes de IA de Coimagen" : "More Coimagen AI Assistants"}
        </h2>
        <p className="text-[var(--c-muted)] text-base max-w-xl mx-auto leading-relaxed">
          {isEs
            ? "20 GPTs adicionales, organizados por tema — abre el que necesites directo en ChatGPT."
            : "20 additional GPTs, organized by theme — open the one you need right in ChatGPT."}
        </p>
      </div>

      {gptCatalogGroups.map((group) => (
        <div key={group.themeEs} className="mb-10 last:mb-0">
          <h3 className="text-lg font-black mb-4" style={{ color: group.accentHex }}>
            {isEs ? group.themeEs : group.themeEn}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {group.items.map((item) => (
              <div
                key={item.name}
                className="glass rounded-2xl p-6 flex flex-col group hover:border-opacity-60 transition-all"
                style={{ border: `1px solid ${group.accentHex}40` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <span className="text-xs font-bold mb-2 inline-block text-[var(--c-cyan)]">
                  {isEs ? "Asistente IA" : "AI Assistant"}
                </span>
                <h4 className="text-white font-black text-sm mb-2 leading-snug flex-1">{item.name}</h4>
                <p className="text-[var(--c-muted)] text-xs leading-relaxed mb-5">
                  {isEs ? item.descEs : item.descEn}
                </p>
                <a
                  href={isEs ? item.url.es : item.url.en}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 border rounded-xl px-4 py-2.5 text-xs font-bold transition-all hover:brightness-110 active:scale-95"
                  style={{
                    color: group.accentHex,
                    borderColor: `${group.accentHex}50`,
                    background: `${group.accentHex}10`,
                  }}
                >
                  {isEs ? "Abrir asistente →" : "Open assistant →"}
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
