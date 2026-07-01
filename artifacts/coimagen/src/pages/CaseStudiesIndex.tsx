import { useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { useAdmin } from "@/context/AdminContext";

export default function CaseStudiesIndex() {
  const { lang } = useLang();
  const { settings } = useAdmin();
  const isEs = lang === "es";

  useEffect(() => {
    const title = isEs ? "Casos de Éxito — Coimagen Media Agency" : "Case Studies — Coimagen Media Agency";
    const desc = isEs
      ? "Proyectos reales con resultados medibles. Casos de éxito de Coimagen en salud, restaurantes, bienes raíces y más industrias."
      : "Real projects with measurable results. Success cases from Coimagen in healthcare, restaurants, real estate and more industries.";
    const url = "https://www.coimagenmedia.com/case-studies";
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", url);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", desc);
  }, [isEs]);

  const caseStudies = [
    { slug: "dr-segovia", titleEs: "Dr. José Manuel Segovia Neurocirugía", titleEn: "Dr. José Manuel Segovia Neurosurgery", tagEs: "Salud", tagEn: "Health", descEs: "Intranet con IA, expedientes médicos digitales y flujos de automatización en producción.", descEn: "AI intranet, digital medical records and automation workflows in production.", color: "from-blue-600 to-indigo-800", icon: "🧠" },
    { slug: "chimichimi", titleEs: "Chimichimi Restaurante", titleEn: "Chimichimi Restaurant", tagEs: "Restaurante", tagEn: "Restaurant", descEs: "Presencia digital completa con branding, contenido y estrategia de captación de clientes.", descEn: "Complete digital presence with branding, content and customer acquisition strategy.", color: "from-orange-500 to-red-700", icon: "🌯" },
    { slug: "coimagen-os", titleEs: "Coimagen OS", titleEn: "Coimagen OS", tagEs: "Tecnología", tagEn: "Technology", descEs: "Plataforma interna de operaciones con IA, CRM, facturación y flujos automatizados.", descEn: "Internal operations platform with AI, CRM, billing and automated workflows.", color: "from-cyan-600 to-blue-800", icon: "⚙️" },
    { slug: "conchas-tower", titleEs: "Conchas Tower", titleEn: "Conchas Tower", tagEs: "Inmobiliaria", tagEn: "Real Estate", descEs: "Landing page de captación, filtrado de leads, inventario y sistema de operación escalable.", descEn: "Lead capture landing, lead filtering, inventory and scalable operations system.", color: "from-purple-600 to-violet-800", icon: "🏢" },
  ];

  const projectCards = settings.projectCards;

  return (
    <div className="min-h-screen bg-[#06060f] pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14">
          <div className="badge-neon text-[var(--c-lime)] border border-[var(--c-lime)]/25 bg-[var(--c-lime)]/10 mb-4 w-fit mx-auto">
            {isEs ? "Casos de Éxito" : "Case Studies"}
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">
            {isEs ? "Proyectos reales," : "Real projects,"}
            <span className="block text-[var(--c-cyan)]">{isEs ? "resultados medibles" : "measurable results"}</span>
          </h1>
          <p className="text-[var(--c-muted)] text-base max-w-xl mx-auto leading-relaxed">
            {isEs
              ? "Documentamos cada proyecto como prueba real de lo que hacemos. No prometemos — demostramos."
              : "We document every project as real proof of what we do. We don't promise — we demonstrate."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((cs) => (
            <a
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="glass border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[var(--c-cyan)]/30 transition-all group"
            >
              <div className={`h-48 bg-gradient-to-br ${cs.color} relative flex items-center justify-center`}>
                <span className="text-6xl">{cs.icon}</span>
                <div className="absolute top-4 left-4">
                  <span className="badge-neon text-white/80 border border-white/20 bg-black/30 text-xs">
                    {isEs ? cs.tagEs : cs.tagEn}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-white font-black text-lg mb-2 group-hover:text-[var(--c-cyan)] transition-colors">
                  {isEs ? cs.titleEs : cs.titleEn}
                </h2>
                <p className="text-[var(--c-muted)] text-sm leading-relaxed mb-4">
                  {isEs ? cs.descEs : cs.descEn}
                </p>
                <span className="text-[var(--c-cyan)] text-xs font-semibold flex items-center gap-1">
                  {isEs ? "Ver caso completo" : "View full case"}
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* All projects section */}
        <div>
          <h2 className="text-white font-black text-xl mb-6">{isEs ? "Todos los proyectos" : "All projects"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectCards.map((card) => (
              <div key={card.id} className="glass border border-white/[0.06] rounded-xl p-5 hover:border-white/20 transition-all">
                {card.image ? (
                  <img src={card.image} alt={card.title} loading="lazy" className="w-full h-28 object-cover rounded-lg mb-4" />
                ) : (
                  <div className={`w-full h-28 rounded-lg mb-4 bg-gradient-to-br ${card.color} flex items-center justify-center text-3xl`}>
                    🚀
                  </div>
                )}
                <span className="text-[var(--c-cyan)] text-xs font-semibold">{card.tag}</span>
                <h3 className="text-white font-bold text-sm mt-1 mb-2">{card.title}</h3>
                <p className="text-[var(--c-muted)] text-xs leading-relaxed mb-3">{card.desc}</p>
                <div className="flex gap-2">
                  {card.caseStudyUrl && card.caseStudyUrl !== "#" && (
                    <a href={card.caseStudyUrl} className="text-[var(--c-cyan)] text-xs font-semibold hover:underline">{isEs ? "Case study →" : "Case study →"}</a>
                  )}
                  {card.externalUrl && card.externalUrl !== "#" && (
                    <a href={card.externalUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--c-muted)] text-xs hover:text-white">{isEs ? "Ver proyecto ↗" : "View project ↗"}</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Jotform AI CTA */}
      <div className="mt-16 glass border border-[var(--c-cyan)]/20 rounded-2xl p-8 text-center">
        <div className="text-3xl mb-4">🤖</div>
        <h2 className="text-2xl font-black text-white mb-3">
          {isEs ? "¿Quieres resultados como estos?" : "Want results like these?"}
        </h2>
        <p className="text-[var(--c-muted)] text-sm mb-6 max-w-md mx-auto">
          {isEs
            ? "Habla con Camila AI y en minutos analizamos tu negocio y te mostramos qué sistema necesitas."
            : "Talk to Camila AI and in minutes we analyze your business and show you what system you need."}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => {
              const jf = document.querySelector<HTMLElement>('button[class*="Jotform"], button[class*="jotform"], [id*="JotformAI"] button');
              if (jf) { jf.click(); return; }
              window.open("https://wa.me/+15559318378", "_blank");
            }}
            className="inline-flex items-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-black px-8 py-3 rounded-xl text-sm hover:brightness-110 transition-all"
          >
            💬 {isEs ? "Hablar con Camila AI" : "Talk to Camila AI"}
          </button>
          <a
            href="/diagnostico"
            className="inline-flex items-center gap-2 border border-white/20 text-white font-bold px-8 py-3 rounded-xl text-sm hover:bg-white/5 transition-all"
          >
            🔍 {isEs ? "Diagnóstico gratuito" : "Free diagnostic"}
          </a>
        </div>
      </div>
    </div>
  );
}
