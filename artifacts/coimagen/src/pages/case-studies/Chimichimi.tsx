import { useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export default function Chimichimi() {
  const { lang } = useLang();
  const isEs = lang === "es";

  useEffect(() => {
    document.title = isEs ? "Case Study: Chimichimi — Coimagen" : "Case Study: Chimichimi — Coimagen";
    window.scrollTo(0, 0);
  }, [isEs]);

  const results = [
    { icon: "📱", valueEs: "+300%", valueEn: "+300%", labelEs: "Alcance en redes", labelEn: "Social reach" },
    { icon: "📍", valueEs: "Top 3", valueEn: "Top 3", labelEs: "Google Maps local", labelEn: "Local Google Maps" },
    { icon: "💬", valueEs: "+45%", valueEn: "+45%", labelEs: "Mensajes directos", labelEn: "Direct messages" },
    { icon: "⭐", valueEs: "4.9", valueEn: "4.9", labelEs: "Rating promedio", labelEn: "Average rating" },
  ];

  return (
    <div className="min-h-screen bg-[#06060f] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        <a href="/case-studies" className="inline-flex items-center gap-2 text-[var(--c-muted)] hover:text-white text-sm mb-8 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
          {isEs ? "Casos de Éxito" : "Case Studies"}
        </a>

        <div className="badge-neon text-orange-400 border border-orange-400/25 bg-orange-400/10 mb-4 w-fit">
          🌯 {isEs ? "Restaurante — Caso Real" : "Restaurant — Real Case"}
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">Chimichimi</h1>
        <p className="text-[var(--c-muted)] text-base leading-relaxed mb-10 max-w-2xl">
          {isEs
            ? "Construcción de presencia digital completa para restaurante en Tijuana: branding, contenido para redes sociales, posicionamiento local en Google y estrategia de captación de clientes."
            : "Complete digital presence for a Tijuana restaurant: branding, social media content, local Google positioning and customer acquisition strategy."}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {results.map((r) => (
            <div key={r.icon} className="glass border border-orange-400/15 rounded-xl p-5 text-center">
              <div className="text-2xl mb-2">{r.icon}</div>
              <div className="text-white font-black text-lg">{isEs ? r.valueEs : r.valueEn}</div>
              <div className="text-[var(--c-muted)] text-xs mt-1">{isEs ? r.labelEs : r.labelEn}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="glass border border-white/[0.06] rounded-2xl p-6">
            <h2 className="text-white font-black text-lg mb-3">⚠️ {isEs ? "El reto" : "The challenge"}</h2>
            <ul className="space-y-2 text-[var(--c-muted)] text-sm">
              {(isEs ? ["Sin presencia digital organizada.", "Poca visibilidad en Google Maps.", "Sin estrategia de contenido.", "Depencia de recomendaciones de boca en boca."] : ["No organized digital presence.", "Low Google Maps visibility.", "No content strategy.", "Dependence on word-of-mouth."]).map((item, i) => <li key={i} className="flex gap-2"><span>•</span>{item}</li>)}
            </ul>
          </div>
          <div className="glass border border-[var(--c-lime)]/15 rounded-2xl p-6">
            <h2 className="text-white font-black text-lg mb-3">✅ {isEs ? "La solución" : "The solution"}</h2>
            <ul className="space-y-2 text-[var(--c-muted)] text-sm">
              {(isEs ? ["Identidad de marca renovada.", "Google Business Profile optimizado.", "Contenido mensual para redes sociales.", "Estrategia de captación con QR y WhatsApp."] : ["Renewed brand identity.", "Optimized Google Business Profile.", "Monthly social media content.", "Lead capture strategy with QR and WhatsApp."]).map((item, i) => <li key={i} className="flex gap-2"><span className="text-[var(--c-lime)]">✓</span>{item}</li>)}
            </ul>
          </div>
        </div>

        <div className="glass border border-[var(--c-cyan)]/20 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-black text-white mb-3">{isEs ? "¿Tienes un restaurante o negocio local?" : "Do you have a restaurant or local business?"}</h2>
          <p className="text-[var(--c-muted)] text-sm mb-5">{isEs ? "Diseñamos tu presencia digital completa." : "We design your complete digital presence."}</p>
          <a href={siteConfig.whatsapp.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-black px-8 py-3 rounded-xl text-sm hover:brightness-110 transition-all">
            {isEs ? "Hablar con Camila" : "Talk to Camila"}
          </a>
        </div>
      </div>
    </div>
  );
}
