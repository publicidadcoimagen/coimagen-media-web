import { useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

const categories = [
  {
    icon: "📘",
    color: "var(--c-cyan)",
    borderColor: "border-[var(--c-cyan)]/20",
    labelEs: "eBooks",
    labelEn: "eBooks",
    descEs: "Guías completas sobre marketing digital, automatización e IA para negocios.",
    descEn: "Complete guides on digital marketing, automation and AI for business.",
    comingSoon: true,
  },
  {
    icon: "📋",
    color: "var(--c-lime)",
    borderColor: "border-[var(--c-lime)]/20",
    labelEs: "Guías paso a paso",
    labelEn: "Step-by-step guides",
    descEs: "Implementa tus propios sistemas de captación y seguimiento.",
    descEn: "Implement your own lead generation and follow-up systems.",
    comingSoon: true,
  },
  {
    icon: "✅",
    color: "var(--c-purple)",
    borderColor: "border-[var(--c-purple)]/20",
    labelEs: "Checklists",
    labelEn: "Checklists",
    descEs: "Audita tu presencia digital y encuentra oportunidades de mejora.",
    descEn: "Audit your digital presence and find opportunities for improvement.",
    comingSoon: true,
  },
  {
    icon: "🗂️",
    color: "#f59e0b",
    borderColor: "border-yellow-400/20",
    labelEs: "Templates",
    labelEn: "Templates",
    descEs: "Plantillas listas para usar en tus campañas, CRM y procesos.",
    descEn: "Ready-to-use templates for your campaigns, CRM and processes.",
    comingSoon: true,
  },
];

export default function Resources() {
  const { lang } = useLang();
  const isEs = lang === "es";

  useEffect(() => {
    const title = isEs ? "Recursos — Coimagen Media Agency" : "Resources — Coimagen Media Agency";
    const desc = isEs
      ? "Recursos gratuitos de marketing digital: ebooks, guías, checklists y templates para negocios en Tijuana y San Diego. Próximamente."
      : "Free digital marketing resources: ebooks, guides, checklists and templates for businesses in Tijuana and San Diego. Coming soon.";
    const url = "https://www.coimagenmedia.com/resources";
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", url);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", desc);
  }, [isEs]);

  return (
    <div className="min-h-screen bg-[#06060f] pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14">
          <div className="badge-neon text-[var(--c-lime)] border border-[var(--c-lime)]/25 bg-[var(--c-lime)]/10 mb-4 w-fit mx-auto">
            {isEs ? "Centro de recursos" : "Resource center"}
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">
            {isEs ? "Recursos gratuitos" : "Free resources"}
            <span className="block text-[var(--c-cyan)]">{isEs ? "para tu negocio" : "for your business"}</span>
          </h1>
          <p className="text-[var(--c-muted)] text-base max-w-xl mx-auto leading-relaxed">
            {isEs
              ? "eBooks, guías, checklists y templates para ayudarte a implementar sistemas digitales en tu negocio. Próximamente disponibles."
              : "eBooks, guides, checklists and templates to help you implement digital systems in your business. Coming soon."}
          </p>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {categories.map((cat) => (
            <div
              key={cat.labelEs}
              className={`glass border ${cat.borderColor} rounded-2xl p-8 relative overflow-hidden`}
            >
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h2 className="text-xl font-black text-white mb-2">{isEs ? cat.labelEs : cat.labelEn}</h2>
              <p className="text-[var(--c-muted)] text-sm mb-5 leading-relaxed">{isEs ? cat.descEs : cat.descEn}</p>
              {cat.comingSoon && (
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold border"
                  style={{ color: cat.color, borderColor: cat.color + "40", background: cat.color + "15" }}
                >
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: cat.color }} />
                  {isEs ? "Próximamente" : "Coming soon"}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Notify CTA */}
        <div className="glass border border-[var(--c-cyan)]/20 rounded-2xl p-10 text-center">
          <div className="text-4xl mb-4">🔔</div>
          <h2 className="text-2xl font-black text-white mb-3">
            {isEs ? "¿Quieres ser el primero en acceder?" : "Want to be the first to access?"}
          </h2>
          <p className="text-[var(--c-muted)] text-sm mb-6">
            {isEs
              ? "Escríbenos por WhatsApp y te avisamos cuando los recursos estén disponibles. Los clientes fundadores tienen acceso prioritario."
              : "Message us on WhatsApp and we will notify you when resources are available. Founder clients get priority access."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-black px-8 py-3 rounded-xl text-sm hover:brightness-110 transition-all"
            >
              {isEs ? "Avisar por WhatsApp" : "Notify via WhatsApp"}
            </a>
            <a
              href="/diagnostico"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-bold px-8 py-3 rounded-xl text-sm hover:bg-white/5 transition-all"
            >
              🤖 {isEs ? "Diagnóstico gratuito" : "Free Diagnostic"}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
