import { IndustryTemplate } from "./IndustryTemplate";

const content = {
  slug: "wellness-os",
  heroImage: "/images/landing/wellness-os.png",
  icon: "💆",
  color: "#ec4899",
  seoTitle: {
    es: "Wellness OS | Marketing y automatización para estéticas y bienestar",
    en: "Wellness OS | Marketing and automation for wellness and beauty businesses",
  },
  metaDesc: {
    es: "Sistema para estéticas, coaches y negocios de bienestar: agenda, captación de clientes, seguimiento y automatización.",
    en: "System for spas, coaches and wellness businesses: booking, lead capture, follow-up and automation.",
  },
  title: { es: "Wellness OS", en: "Wellness OS" },
  subtitle: {
    es: "Sistema de captación, agenda y seguimiento para estéticas, coaches y negocios de bienestar.",
    en: "Lead capture, booking and follow-up system for spas, coaches and wellness businesses.",
  },
  pain: {
    es: [
      "Clientes preguntan precios y desaparecen.",
      "Agenda desorganizada o en papel.",
      "Redes no convierten en citas.",
      "Promociones sin seguimiento.",
    ],
    en: [
      "Clients ask about prices and disappear.",
      "Schedule is disorganized or on paper.",
      "Social media does not convert into bookings.",
      "Promotions without follow-up.",
    ],
  },
  solution: {
    es: "Wellness OS organiza tu agenda, automatiza seguimiento y convierte redes sociales en citas reales.",
    en: "Wellness OS organizes your schedule, automates follow-up and converts social media into real bookings.",
  },
  modules: [
    { icon: "🌐", name: { es: "Landing wellness", en: "Wellness landing page" } },
    { icon: "📅", name: { es: "Agenda online", en: "Online scheduling" } },
    { icon: "💬", name: { es: "WhatsApp automatizado", en: "Automated WhatsApp" } },
    { icon: "📱", name: { es: "Redes sociales", en: "Social media" } },
    { icon: "👥", name: { es: "CRM clientes", en: "Customer CRM" } },
    { icon: "🎁", name: { es: "Promociones digitales", en: "Digital promotions" } },
    { icon: "⭐", name: { es: "Reseñas", en: "Reviews" } },
    { icon: "📊", name: { es: "Reportes", en: "Reports" } },
  ],
  ctaLabel: {
    es: "Solicitar diagnóstico gratuito para tu negocio",
    en: "Request free diagnostic for your business",
  },
  faq: [
    {
      q: { es: "¿Funciona para coaches de bienestar?", en: "Does it work for wellness coaches?" },
      a: { es: "Sí. Diseñamos el sistema para el tipo específico de negocio: estética, spa, coach nutricional, yoga, etc.", en: "Yes. We design the system for the specific type of business: salon, spa, nutritional coach, yoga, etc." },
    },
  ],
};

export default function WellnessOS() {
  return <IndustryTemplate content={content} />;
}
