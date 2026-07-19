import { IndustryTemplate } from "./IndustryTemplate";

const content = {
  slug: "law-os",
  heroImage: "/images/landing/law-os.png",
  icon: "⚖️",
  color: "#8b5cf6",
  seoTitle: {
    es: "Law OS | Captación y seguimiento de clientes para abogados",
    en: "Law OS | Lead generation and client follow-up for law firms",
  },
  metaDesc: {
    es: "Sistema para despachos y abogados: capta, califica y da seguimiento a prospectos de forma automática.",
    en: "System for law firms and attorneys: capture, qualify and follow up on leads automatically.",
  },
  title: { es: "Law OS", en: "Law OS" },
  subtitle: {
    es: "Captación, calificación y seguimiento automático de prospectos para despachos y abogados.",
    en: "Automatic lead capture, qualification and follow-up for law firms and attorneys.",
  },
  pain: {
    es: [
      "Prospectos preguntan y no regresan.",
      "Los casos no se califican correctamente.",
      "No hay seguimiento automático.",
      "No hay sistema para convertir consultas en clientes.",
    ],
    en: [
      "Prospects inquire and never come back.",
      "Cases are not properly qualified.",
      "No automatic follow-up system.",
      "No system to convert consultations into clients.",
    ],
  },
  solution: {
    es: "Law OS ayuda a despachos y abogados a captar, calificar y dar seguimiento a prospectos con automatización e inteligencia artificial.",
    en: "Law OS helps law firms and attorneys capture, qualify and follow up on prospects using automation and artificial intelligence.",
  },
  modules: [
    { icon: "🌐", name: { es: "Landing jurídica", en: "Legal landing page" } },
    { icon: "📋", name: { es: "Formulario de casos", en: "Case intake form" } },
    { icon: "🤖", name: { es: "Calificación IA", en: "AI lead qualification" } },
    { icon: "💬", name: { es: "WhatsApp seguimiento", en: "WhatsApp follow-up" } },
    { icon: "👥", name: { es: "CRM prospectos", en: "Lead CRM" } },
    { icon: "📊", name: { es: "Reportes", en: "Reports" } },
    { icon: "🗺️", name: { es: "SEO local", en: "Local SEO" } },
    { icon: "⭐", name: { es: "Reputación online", en: "Online reputation" } },
  ],
  ctaLabel: {
    es: "Solicitar diagnóstico gratuito para despacho",
    en: "Request free diagnostic for law firm",
  },
  faq: [
    {
      q: { es: "¿Funciona para abogados independientes?", en: "Does it work for solo attorneys?" },
      a: { es: "Sí, tenemos paquetes para abogados independientes y despachos medianos.", en: "Yes, we have packages for solo attorneys and mid-size firms." },
    },
    {
      q: { es: "¿Cómo se califica un prospecto con IA?", en: "How does AI qualify a lead?" },
      a: { es: "El sistema hace preguntas clave al prospecto y clasifica el caso por área, urgencia y potencial antes de llegar al abogado.", en: "The system asks the prospect key questions and classifies the case by area, urgency and potential before reaching the attorney." },
    },
  ],
};

export default function LawOS() {
  return <IndustryTemplate content={content} />;
}
