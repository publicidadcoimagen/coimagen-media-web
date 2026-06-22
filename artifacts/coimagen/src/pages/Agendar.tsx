import { useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { useAdmin } from "@/context/AdminContext";
import { siteConfig } from "@/config/site";

export default function Agendar() {
  const { lang } = useLang();
  const { settings } = useAdmin();
  const isEs = lang === "es";

  useEffect(() => {
    document.title = isEs
      ? "Agendar Sesión Estratégica — Coimagen Media Agency"
      : "Book Strategy Session — Coimagen Media Agency";
  }, [isEs]);

  return (
    <div className="min-h-screen bg-[#06060f] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="badge-neon text-[var(--c-cyan)] border border-[var(--c-cyan)]/25 bg-[var(--c-cyan)]/10 mb-4 w-fit mx-auto">
            📅 {isEs ? "Agenda tu cita" : "Schedule your session"}
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
            {isEs ? "Agenda tu Sesión Estratégica" : "Book Your Strategy Session"}
          </h1>
          <p className="text-[var(--c-muted)] text-base max-w-xl mx-auto">
            {isEs
              ? "Selecciona el horario que mejor se adapte a tu agenda. En 30 minutos analizamos tu negocio y diseñamos un plan de acción real."
              : "Pick a time that works for you. In 30 minutes we will analyze your business and design a real action plan."}
          </p>
        </div>

        {/* Calendar CTA card */}
        <div className="glass border border-[var(--c-cyan)]/20 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,207,255,0.08)] mb-8">
          {/* Card header bar */}
          <div className="bg-gradient-to-r from-[var(--c-cyan)]/10 to-[var(--c-purple)]/10 border-b border-white/[0.06] px-6 py-4 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[var(--c-lime)] animate-pulse" />
            <span className="text-white font-semibold text-sm">
              {isEs ? "Calendario de Citas — Google Calendar" : "Appointment Calendar — Google Calendar"}
            </span>
            <span className="ml-auto text-[var(--c-muted)] text-xs">Coimagen Media Agency</span>
          </div>

          {/* Card body */}
          <div className="p-10 flex flex-col items-center text-center gap-6">
            {/* Calendar icon */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--c-cyan)]/20 to-[var(--c-purple)]/20 border border-[var(--c-cyan)]/20 flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(0,207,255,0.12)]">
              📅
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-2">
                {isEs ? "Elige tu horario disponible" : "Pick your available time slot"}
              </h2>
              <p className="text-[var(--c-muted)] text-sm max-w-sm mx-auto">
                {isEs
                  ? "Haz clic para abrir el calendario y reservar tu lugar. Sin compromiso — primera sesión gratuita."
                  : "Click to open the calendar and reserve your spot. No commitment — first session is free."}
              </p>
            </div>

            {/* Main CTA button */}
            <a
              href={settings.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--c-cyan)] to-[var(--c-purple)] text-black font-bold px-8 py-4 rounded-xl text-base hover:opacity-90 hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,207,255,0.3)]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zm-7-9H7v5h5v-5z"/>
              </svg>
              {isEs ? "Abrir Calendario y Agendar" : "Open Calendar & Book Now"}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 opacity-70">
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
              </svg>
            </a>

            <p className="text-[var(--c-muted)] text-xs">
              {isEs
                ? "Se abrirá Google Calendar en una nueva pestaña"
                : "Google Calendar will open in a new tab"}
            </p>
          </div>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { icon: "⏱️", titleEs: "30 minutos", titleEn: "30 minutes", descEs: "Sesión enfocada sin rodeos.", descEn: "Focused session, no fluff." },
            { icon: "🎯", titleEs: "Plan de acción", titleEn: "Action plan", descEs: "Saldrás con pasos claros.", descEn: "You leave with clear next steps." },
            { icon: "🆓", titleEs: "Sin costo", titleEn: "No cost", descEs: "Primera consulta 100% gratuita.", descEn: "First consultation 100% free." },
          ].map((item) => (
            <div key={item.icon} className="glass border border-white/[0.06] rounded-xl p-5 text-center">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="text-white font-bold text-sm mb-1">{isEs ? item.titleEs : item.titleEn}</h3>
              <p className="text-[var(--c-muted)] text-xs">{isEs ? item.descEs : item.descEn}</p>
            </div>
          ))}
        </div>

        {/* Alternative CTAs */}
        <div className="text-center space-y-3">
          <p className="text-[var(--c-muted)] text-sm">
            {isEs ? "¿Prefieres contacto directo?" : "Prefer direct contact?"}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#25d366]/30 text-[#25d366] font-semibold px-6 py-3 rounded-xl text-sm hover:bg-[#25d366]/10 transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp — {siteConfig.whatsapp.display}
            </a>
            <a
              href="/diagnostico"
              className="inline-flex items-center gap-2 border border-[var(--c-cyan)]/30 text-[var(--c-cyan)] font-semibold px-6 py-3 rounded-xl text-sm hover:bg-[var(--c-cyan)]/10 transition-all"
            >
              🤖 {isEs ? "Diagnóstico IA gratuito" : "Free AI Diagnostic"}
            </a>
          </div>
          <a href="/" className="inline-block text-[var(--c-muted)] hover:text-white text-xs mt-2 transition-colors">
            ← {isEs ? "Volver al inicio" : "Back to home"}
          </a>
        </div>
      </div>
    </div>
  );
}
