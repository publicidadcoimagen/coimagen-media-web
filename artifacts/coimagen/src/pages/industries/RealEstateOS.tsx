import { IndustryTemplate } from "./IndustryTemplate";

const content = {
  slug: "real-estate-os",
  heroImage: "/images/landing/real-estate-os.png",
  icon: "🏠",
  color: "#10b981",
  seoTitle: {
    es: "Real Estate OS | Landing, CRM y automatización para inmobiliarias",
    en: "Real Estate OS | Landing pages, CRM and automation for real estate businesses",
  },
  metaDesc: {
    es: "Sistema para inmobiliarias y agentes: landing de captación, calificación de leads, CRM, seguimiento automático e inventario.",
    en: "System for realtors and agencies: lead capture landing, lead qualification, CRM, automatic follow-up and inventory.",
  },
  title: { es: "Real Estate OS", en: "Real Estate OS" },
  subtitle: {
    es: "Captación, calificación y seguimiento automático de prospectos para inmobiliarias y agentes.",
    en: "Automatic lead capture, qualification and follow-up for real estate agencies and agents.",
  },
  pain: {
    es: [
      "Leads fríos que no convierten.",
      "Prospectos sin seguimiento.",
      "Inventario desorganizado.",
      "Landing page que no convierte.",
      "No hay calificación automática de prospectos.",
    ],
    en: [
      "Cold leads that don't convert.",
      "Prospects without follow-up.",
      "Disorganized inventory.",
      "Landing page that doesn't convert.",
      "No automatic lead qualification.",
    ],
  },
  solution: {
    es: "Real Estate OS capta leads calificados, organiza tu inventario y automatiza seguimientos para cerrar más ventas.",
    en: "Real Estate OS captures qualified leads, organizes your inventory and automates follow-ups to close more sales.",
  },
  modules: [
    { icon: "🌐", name: { es: "Landing inmobiliaria", en: "Real estate landing page" } },
    { icon: "🏘️", name: { es: "Inventario digital", en: "Digital inventory" } },
    { icon: "🤖", name: { es: "Calificación IA", en: "AI lead qualification" } },
    { icon: "💬", name: { es: "WhatsApp seguimiento", en: "WhatsApp follow-up" } },
    { icon: "👥", name: { es: "CRM prospectos", en: "Lead CRM" } },
    { icon: "📊", name: { es: "Reportes", en: "Reports" } },
    { icon: "🗺️", name: { es: "SEO local", en: "Local SEO" } },
    { icon: "📱", name: { es: "Redes sociales", en: "Social media" } },
  ],
  ctaLabel: {
    es: "Solicitar diagnóstico gratuito para inmobiliaria",
    en: "Request free diagnostic for real estate",
  },
  faq: [
    {
      q: { es: "¿Funciona para agentes independientes?", en: "Does it work for independent agents?" },
      a: { es: "Sí, tenemos soluciones tanto para agentes independientes como para agencias medianas.", en: "Yes, we have solutions for both independent agents and mid-size agencies." },
    },
  ],
};

export default function RealEstateOS() {
  return <IndustryTemplate content={content} />;
}
