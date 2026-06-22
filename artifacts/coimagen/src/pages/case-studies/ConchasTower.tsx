import { useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export default function ConchasTower() {
  const { lang } = useLang();
  const isEs = lang === "es";

  useEffect(() => {
    document.title = isEs ? "Case Study: Conchas Tower — Coimagen" : "Case Study: Conchas Tower — Coimagen";
    window.scrollTo(0, 0);
  }, [isEs]);

  const results = [
    { icon: "📥", valueEs: "+180%", valueEn: "+180%", labelEs: "Leads calificados", labelEn: "Qualified leads" },
    { icon: "🏠", valueEs: "Digital", valueEn: "Digital", labelEs: "Inventario de unidades", labelEn: "Unit inventory" },
    { icon: "⚡", valueEs: "<2h", valueEn: "<2h", labelEs: "Tiempo de respuesta", labelEn: "Response time" },
    { icon: "📊", valueEs: "CRM", valueEn: "CRM", labelEs: "Seguimiento integrado", labelEn: "Integrated tracking" },
  ];

  return (
    <div className="min-h-screen bg-[#06060f] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        <a href="/case-studies" className="inline-flex items-center gap-2 text-[var(--c-muted)] hover:text-white text-sm mb-8 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
          {isEs ? "Casos de Éxito" : "Case Studies"}
        </a>

        <div className="badge-neon text-purple-400 border border-purple-400/25 bg-purple-400/10 mb-4 w-fit">
          🏢 {isEs ? "Inmobiliaria — Caso Real" : "Real Estate — Real Case"}
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">Conchas Tower</h1>
        <p className="text-[var(--c-muted)] text-base leading-relaxed mb-10 max-w-2xl">
          {isEs
            ? "Sistema completo de captación y operación para desarrollo inmobiliario: landing page de alta conversión, filtrado de leads calificados, inventario digital y flujos de seguimiento automatizado."
            : "Complete lead capture and operations system for a real estate development: high-conversion landing page, qualified lead filtering, digital inventory and automated follow-up workflows."}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {results.map((r) => (
            <div key={r.icon} className="glass border border-purple-400/15 rounded-xl p-5 text-center">
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
              {(isEs ? ["Leads sin calificar que desperdiciaban tiempo del equipo.", "Sin sistema para gestionar el inventario de unidades.", "Seguimiento manual y lento.", "Sin métricas de conversión."] : ["Unqualified leads wasting team time.", "No system to manage unit inventory.", "Manual and slow follow-up.", "No conversion metrics."]).map((item, i) => <li key={i} className="flex gap-2"><span>•</span>{item}</li>)}
            </ul>
          </div>
          <div className="glass border border-[var(--c-lime)]/15 rounded-2xl p-6">
            <h2 className="text-white font-black text-lg mb-3">✅ {isEs ? "La solución" : "The solution"}</h2>
            <ul className="space-y-2 text-[var(--c-muted)] text-sm">
              {(isEs ? ["Landing page con filtro de leads por perfil.", "CRM con inventario de unidades en tiempo real.", "Flujos automatizados de seguimiento por WhatsApp.", "Dashboard de métricas de conversión."] : ["Landing page with lead filtering by profile.", "CRM with real-time unit inventory.", "Automated WhatsApp follow-up workflows.", "Conversion metrics dashboard."]).map((item, i) => <li key={i} className="flex gap-2"><span className="text-[var(--c-lime)]">✓</span>{item}</li>)}
            </ul>
          </div>
        </div>

        <div className="glass border border-[var(--c-cyan)]/20 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-black text-white mb-3">{isEs ? "¿Tienes un desarrollo inmobiliario?" : "Do you have a real estate development?"}</h2>
          <p className="text-[var(--c-muted)] text-sm mb-5">{isEs ? "Implementamos tu sistema de captación y operaciones." : "We implement your lead capture and operations system."}</p>
          <a href={siteConfig.whatsapp.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-black px-8 py-3 rounded-xl text-sm hover:brightness-110 transition-all">
            {isEs ? "Solicitar información" : "Request information"}
          </a>
        </div>
      </div>
    </div>
  );
}
