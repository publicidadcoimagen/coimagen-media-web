import { useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export default function Portal() {
  const { lang } = useLang();
  const isEs = lang === "es";

  useEffect(() => {
    document.title = isEs ? "Portal de Clientes — Coimagen Media Agency" : "Client Portal — Coimagen Media Agency";
    window.scrollTo(0, 0);
  }, [isEs]);

  return (
    <div className="min-h-screen bg-[#06060f] flex items-center justify-center px-4 pt-20">
      <div className="max-w-xl w-full text-center">

        {/* Icon */}
        <div className="relative inline-flex items-center justify-center w-24 h-24 mb-8">
          <div className="absolute inset-0 rounded-full bg-[var(--c-purple)]/15 animate-pulse" />
          <div className="absolute inset-2 rounded-full bg-[var(--c-purple)]/10" />
          <span className="text-4xl relative z-10">⭐</span>
        </div>

        <div className="badge-neon text-[var(--c-purple)] border border-[var(--c-purple)]/25 bg-[var(--c-purple)]/10 mb-4 w-fit mx-auto">
          COIMAGEN OS
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
          {isEs ? "Portal de Clientes" : "Client Portal"}
        </h1>
        <p className="text-[var(--c-muted)] text-base leading-relaxed mb-8 max-w-md mx-auto">
          {isEs
            ? "Accede a COIMAGEN OS para gestionar tus proyectos, revisar avances, aprobar entregables y comunicarte con tu equipo Coimagen."
            : "Access COIMAGEN OS to manage your projects, review progress, approve deliverables, and communicate with your Coimagen team."}
        </p>

        {/* Main CTA — portal login not built yet; do not link to the retired Replit instance */}
        <button
          type="button"
          disabled
          title={isEs ? "Portal en construcción — contáctanos por WhatsApp" : "Portal under construction — contact us via WhatsApp"}
          className="inline-flex items-center gap-3 bg-[var(--c-purple)]/30 text-white/50 font-black text-lg px-10 py-4 rounded-xl cursor-not-allowed mb-6 w-full sm:w-auto justify-center"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13 12H3"/>
          </svg>
          {isEs ? "Portal en construcción" : "Portal under construction"}
        </button>

        {/* Info box */}
        <div className="glass border border-white/[0.06] rounded-2xl p-6 mb-6 text-left">
          <h2 className="text-white font-bold mb-3 text-sm">
            {isEs ? "¿Qué encontrarás en COIMAGEN OS?" : "What will you find in COIMAGEN OS?"}
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {[
              { icon: "📊", es: "Dashboard de proyectos", en: "Projects dashboard" },
              { icon: "✅", es: "Aprobaciones", en: "Approvals" },
              { icon: "📁", es: "Entregables", en: "Deliverables" },
              { icon: "💬", es: "Comunicación directa", en: "Direct communication" },
              { icon: "📈", es: "Métricas y reportes", en: "Metrics & reports" },
              { icon: "🤖", es: "Agentes IA", en: "AI agents" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[var(--c-muted)] text-xs">
                <span>{item.icon}</span>
                <span>{isEs ? item.es : item.en}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[var(--c-muted)] text-xs mb-6">
          {isEs
            ? "El portal estará disponible próximamente. Mientras tanto, contáctanos por WhatsApp."
            : "The portal will be available soon. In the meantime, contact us via WhatsApp."}
        </p>

        <a
          href={siteConfig.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 glass border border-white/10 text-white font-semibold px-6 py-2.5 rounded-xl text-sm hover:border-white/30 transition-all"
        >
          <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.108.546 4.1 1.5 5.84L0 24l6.335-1.482C8.021 23.47 9.97 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.638-.516-5.138-1.41l-.369-.219-3.76.879.894-3.671-.24-.38C2.516 15.554 2 13.842 2 12 2 6.478 6.478 2 12 2s10 4.478 10 10-4.478 10-10 10z"/>
          </svg>
          {isEs ? "Soporte por WhatsApp" : "WhatsApp support"}
        </a>
      </div>
    </div>
  );
}
