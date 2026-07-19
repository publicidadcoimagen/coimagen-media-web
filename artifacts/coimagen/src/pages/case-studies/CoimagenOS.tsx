import { useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export default function CoimagenOS() {
  const { lang } = useLang();
  const isEs = lang === "es";

  useEffect(() => {
    const title = isEs
      ? "Caso de Éxito: COIMAGEN OS — Sistema Operativo Empresarial | Coimagen"
      : "Case Study: COIMAGEN OS — Business Operating System | Coimagen";
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      isEs
        ? "COIMAGEN OS: el sistema operativo interno de Coimagen Media Agency. CRM, agentes IA, gestión de proyectos y facturación en una sola plataforma."
        : "COIMAGEN OS: Coimagen Media Agency's internal operating system. CRM, AI agents, project management, and billing in one platform."
    );
    window.scrollTo(0, 0);
  }, [isEs]);

  const modules = [
    { icon: "👥", nameEs: "CRM de clientes", nameEn: "Client CRM" },
    { icon: "🤖", nameEs: "Agentes IA internos", nameEn: "Internal AI agents" },
    { icon: "📊", nameEs: "Dashboard de métricas", nameEn: "Metrics dashboard" },
    { icon: "📋", nameEs: "Gestión de proyectos", nameEn: "Project management" },
    { icon: "💰", nameEs: "Facturación y pagos", nameEn: "Billing and payments" },
    { icon: "🔄", nameEs: "Flujos automatizados", nameEn: "Automated workflows" },
  ];

  const metrics = [
    { value: "-70%", labelEs: "tiempo administrativo", labelEn: "admin time" },
    { value: "100%", labelEs: "procesos digitalizados", labelEn: "processes digitized" },
    { value: "3x", labelEs: "capacidad de proyectos", labelEn: "project capacity" },
    { value: "0", labelEs: "proyectos sin seguimiento", labelEn: "projects without tracking" },
  ];

  return (
    <div className="min-h-screen bg-[#06060f] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Back */}
        <a href="/case-studies" className="inline-flex items-center gap-2 text-[var(--c-muted)] hover:text-white text-sm mb-8 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
          </svg>
          {isEs ? "Casos de Éxito" : "Case Studies"}
        </a>

        {/* Badge + title */}
        <div className="badge-neon text-[var(--c-cyan)] border border-[var(--c-cyan)]/25 bg-[var(--c-cyan)]/10 mb-4 w-fit">
          ⚙️ {isEs ? "Tecnología — Proyecto Interno" : "Technology — Internal Project"}
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">COIMAGEN OS</h1>
        <p className="text-[var(--c-muted)] text-base leading-relaxed mb-8 max-w-2xl">
          {isEs
            ? "Plataforma operativa interna de Coimagen Media Agency. El mismo sistema que usamos para gestionar clientes, proyectos, flujos y operaciones — y que ofrecemos a empresas como sistema operativo digital personalizado."
            : "Coimagen Media Agency's internal operating platform. The same system we use to manage clients, projects, workflows and operations — and that we offer to businesses as a custom digital operating system."}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {metrics.map((m, i) => (
            <div key={i} className="glass border border-[var(--c-cyan)]/15 rounded-xl p-5 text-center">
              <div className="text-2xl font-black text-white mb-1">{m.value}</div>
              <div className="text-[var(--c-muted)] text-xs">{isEs ? m.labelEs : m.labelEn}</div>
            </div>
          ))}
        </div>

        {/* Modules */}
        <h2 className="text-white font-black text-xl mb-5">
          {isEs ? "Módulos del Sistema" : "System Modules"}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
          {modules.map((m) => (
            <div key={m.icon} className="glass border border-[var(--c-cyan)]/15 rounded-xl p-5 text-center">
              <div className="text-3xl mb-3">{m.icon}</div>
              <p className="text-white font-semibold text-sm">{isEs ? m.nameEs : m.nameEn}</p>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="glass border border-white/[0.06] rounded-2xl p-6">
            <h2 className="text-white font-black text-lg mb-3">🎯 {isEs ? "Objetivo" : "Goal"}</h2>
            <p className="text-[var(--c-muted)] text-sm leading-relaxed">
              {isEs
                ? "Operar toda la agencia desde un solo sistema: gestionar clientes, dar seguimiento a proyectos, automatizar comunicaciones y medir resultados en tiempo real."
                : "Operate the entire agency from one system: manage clients, track projects, automate communications and measure results in real time."}
            </p>
          </div>
          <div className="glass border border-[var(--c-lime)]/15 rounded-2xl p-6">
            <h2 className="text-white font-black text-lg mb-3">💡 {isEs ? "Lo que aprendimos" : "What we learned"}</h2>
            <p className="text-[var(--c-muted)] text-sm leading-relaxed">
              {isEs
                ? "El sistema más valioso es el que usas todos los días. Coimagen OS nació de necesidades reales y por eso es efectivo para nuestros clientes."
                : "The most valuable system is the one you use every day. Coimagen OS was born from real needs and that is why it is effective for our clients."}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="glass border border-[var(--c-cyan)]/20 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-black text-white mb-3">
            {isEs ? "¿Quieres tu propio sistema operativo?" : "Want your own operating system?"}
          </h2>
          <p className="text-[var(--c-muted)] text-sm mb-5">
            {isEs
              ? "Implementamos una versión adaptada a tu industria y negocio."
              : "We implement a version adapted to your industry and business."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-black px-8 py-3 rounded-xl text-sm hover:brightness-110 transition-all"
            >
              {isEs ? "Solicitar COIMAGEN OS" : "Request COIMAGEN OS"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
