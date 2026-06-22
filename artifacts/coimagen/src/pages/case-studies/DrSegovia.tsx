import { useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export default function DrSegovia() {
  const { lang } = useLang();
  const isEs = lang === "es";

  useEffect(() => {
    document.title = isEs
      ? "Case Study: Dr. Segovia Neurocirugía — Coimagen"
      : "Case Study: Dr. Segovia Neurosurgery — Coimagen";
    window.scrollTo(0, 0);
  }, [isEs]);

  const results = [
    { icon: "📁", valueEs: "100% digital", valueEn: "100% digital", labelEs: "Expedientes médicos", labelEn: "Medical records" },
    { icon: "🤖", valueEs: "Automatizado", valueEn: "Automated", labelEs: "Seguimiento de pacientes", labelEn: "Patient follow-up" },
    { icon: "⏱️", valueEs: "-60% tiempo", valueEn: "-60% time", labelEs: "En tareas administrativas", labelEn: "On administrative tasks" },
    { icon: "🔒", valueEs: "Seguro", valueEn: "Secure", labelEs: "Acceso por roles", labelEn: "Role-based access" },
  ];

  return (
    <div className="min-h-screen bg-[#06060f] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        <a href="/case-studies" className="inline-flex items-center gap-2 text-[var(--c-muted)] hover:text-white text-sm mb-8 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
          {isEs ? "Casos de Éxito" : "Case Studies"}
        </a>

        <div className="badge-neon text-blue-400 border border-blue-400/25 bg-blue-400/10 mb-4 w-fit">
          🧠 {isEs ? "Salud — Caso Real" : "Health — Real Case"}
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
          {isEs ? "Dr. José Manuel Segovia Neurocirugía" : "Dr. José Manuel Segovia Neurosurgery"}
        </h1>
        <p className="text-[var(--c-muted)] text-base leading-relaxed mb-10 max-w-2xl">
          {isEs
            ? "Implementación de intranet con inteligencia artificial para gestión de expedientes médicos, seguimiento de pacientes y automatización de procesos administrativos en consulta de neurocirugía."
            : "Implementation of an AI-powered intranet for medical record management, patient follow-up and administrative process automation in a neurosurgery practice."}
        </p>

        {/* Results */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {results.map((r) => (
            <div key={r.icon} className="glass border border-blue-400/15 rounded-xl p-5 text-center">
              <div className="text-2xl mb-2">{r.icon}</div>
              <div className="text-white font-black text-lg">{isEs ? r.valueEs : r.valueEn}</div>
              <div className="text-[var(--c-muted)] text-xs mt-1">{isEs ? r.labelEs : r.labelEn}</div>
            </div>
          ))}
        </div>

        {/* Challenge / Solution */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="glass border border-white/[0.06] rounded-2xl p-6">
            <h2 className="text-white font-black text-lg mb-3">⚠️ {isEs ? "El reto" : "The challenge"}</h2>
            <ul className="space-y-2 text-[var(--c-muted)] text-sm">
              {(isEs ? [
                "Expedientes físicos difíciles de gestionar.",
                "Sin sistema centralizado de seguimiento de pacientes.",
                "Procesos administrativos manuales y lentos.",
                "Dificultad para acceder a historial clínico.",
              ] : [
                "Physical records difficult to manage.",
                "No centralized patient follow-up system.",
                "Slow and manual administrative processes.",
                "Difficulty accessing clinical history.",
              ]).map((item, i) => <li key={i} className="flex gap-2"><span>•</span>{item}</li>)}
            </ul>
          </div>
          <div className="glass border border-[var(--c-cyan)]/15 rounded-2xl p-6">
            <h2 className="text-white font-black text-lg mb-3">✅ {isEs ? "La solución" : "The solution"}</h2>
            <ul className="space-y-2 text-[var(--c-muted)] text-sm">
              {(isEs ? [
                "Intranet privada con acceso por roles.",
                "Expedientes médicos digitales con IA.",
                "Automatización de recordatorios y seguimiento.",
                "Dashboard con métricas de consulta.",
              ] : [
                "Private intranet with role-based access.",
                "AI-powered digital medical records.",
                "Automated reminders and follow-up.",
                "Dashboard with consultation metrics.",
              ]).map((item, i) => <li key={i} className="flex gap-2"><span className="text-[var(--c-lime)]">✓</span>{item}</li>)}
            </ul>
          </div>
        </div>

        <div className="glass border border-white/[0.06] rounded-2xl p-6 mb-10">
          <h2 className="text-white font-black text-lg mb-3">{isEs ? "Tecnología implementada" : "Technology implemented"}</h2>
          <div className="flex flex-wrap gap-2">
            {["React", "Node.js", "PostgreSQL", "OpenAI API", "WhatsApp API", "CRM personalizado", "Automatización n8n"].map((tech) => (
              <span key={tech} className="badge-neon text-[var(--c-cyan)] border border-[var(--c-cyan)]/20 bg-[var(--c-cyan)]/5 text-xs">{tech}</span>
            ))}
          </div>
        </div>

        <div className="glass border border-[var(--c-cyan)]/20 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-black text-white mb-3">{isEs ? "¿Quieres algo similar para tu negocio?" : "Want something similar for your business?"}</h2>
          <p className="text-[var(--c-muted)] text-sm mb-5">{isEs ? "Agenda un diagnóstico gratuito y diseñemos tu sistema." : "Book a free diagnostic and let's design your system."}</p>
          <a href={siteConfig.whatsapp.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-black px-8 py-3 rounded-xl text-sm hover:brightness-110 transition-all">
            {isEs ? "Contactar por WhatsApp" : "Contact via WhatsApp"}
          </a>
        </div>
      </div>
    </div>
  );
}
