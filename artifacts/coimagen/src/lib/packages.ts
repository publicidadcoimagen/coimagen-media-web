/**
 * Single source of truth for the service catalog. The pricing page, any future
 * quoter/PDF, or admin tooling should all read from this file — package data
 * (name, copy, features, USD prices) must never be duplicated elsewhere.
 */
export interface ServicePackage {
  id: string;
  slug: string;
  /** Ops-facing only, never rendered publicly. */
  internalName: string;
  publicName: { es: string; en: string };
  description: { es: string; en: string };
  features: { es: string[]; en: string[] };
  setupUSD: number;
  monthlyUSD: number;
  recommended: boolean;
  visible: boolean;
}

export const PACKAGES: ServicePackage[] = [
  {
    id: "starter",
    slug: "starter",
    internalName: "Starter",
    publicName: { es: "Starter — Presencia Digital", en: "Starter — Digital Presence" },
    description: {
      es: "Landing profesional, blog, WhatsApp/redes",
      en: "Professional landing page, blog, WhatsApp/social media",
    },
    features: {
      es: ["Landing profesional", "Hosting incluido", "WhatsApp", "Formulario de contacto", "SEO básico", "Actualizaciones básicas"],
      en: ["Professional landing page", "Hosting included", "WhatsApp / contact form", "Basic SEO", "Basic updates"],
    },
    setupUSD: 199,
    monthlyUSD: 197,
    recommended: false,
    visible: true,
  },
  {
    id: "growth",
    slug: "growth",
    internalName: "Growth",
    publicName: { es: "Growth — Captación de Clientes", en: "Growth — Client Acquisition" },
    description: {
      es: "Todo Starter + SEO + Google Business + CRM",
      en: "Everything in Starter + SEO + Google Business + CRM",
    },
    features: {
      es: ["Todo lo anterior", "Google Business Profile", "SEO Local", "Blog con IA", "Optimización de conversión", "Redes sociales básicas"],
      en: ["Everything in Starter", "Google Business Profile", "Local SEO", "AI-assisted blog", "Conversion optimization"],
    },
    setupUSD: 299,
    monthlyUSD: 297,
    recommended: true,
    visible: true,
  },
  {
    id: "automation",
    slug: "automation",
    internalName: "Automation",
    publicName: { es: "Automation — Negocio Automatizado", en: "Automation — Automated Business" },
    description: {
      es: "Todo Growth + automatización + agentes básicos",
      en: "Everything in Growth + automation + basic agents",
    },
    features: {
      es: ["Todo lo anterior", "CRM básico", "Seguimiento de prospectos", "Automatización WhatsApp", "Reportes mensuales", "Embudo de conversión"],
      en: ["Everything in Growth", "Basic CRM", "Lead follow-up", "WhatsApp automation", "Monthly reports", "Conversion funnel"],
    },
    setupUSD: 399,
    monthlyUSD: 497,
    recommended: false,
    visible: true,
  },
  {
    id: "ai-business",
    slug: "ai-business",
    internalName: "AI Business",
    publicName: { es: "AI Business — Empresa Inteligente", en: "AI Business — Smart Company" },
    description: {
      es: "Todo Automation + agentes IA avanzados + soporte prioritario",
      en: "Everything in Automation + advanced AI agents + priority support",
    },
    features: {
      es: ["Dashboard", "Agentes IA básicos", "Automatización avanzada", "Procesos internos", "Recomendado después del diagnóstico"],
      en: ["AI agents", "Advanced automation", "Dashboard", "Internal workflows", "Custom business system"],
    },
    setupUSD: 499,
    monthlyUSD: 997,
    recommended: false,
    visible: true,
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    internalName: "Ecommerce",
    publicName: { es: "Ecommerce — Tienda Online Administrada", en: "Ecommerce — Managed Online Store" },
    description: {
      es: "Tienda en línea + hosting + checkout WhatsApp (NO incluye tienda nativa en FB/IG/WhatsApp Shop)",
      en: "Managed online store + hosting + WhatsApp checkout (does not include a native FB/IG/WhatsApp Shop storefront)",
    },
    features: {
      es: ["Tienda en línea", "Hosting incluido", "Checkout por WhatsApp", "Catálogo de productos", "Gestión de pedidos", "No incluye tienda nativa en Facebook/Instagram/WhatsApp Shop"],
      en: ["Online store", "Hosting included", "WhatsApp checkout", "Product catalog", "Order management", "Does not include native FB/IG/WhatsApp Shop storefront"],
    },
    setupUSD: 199,
    monthlyUSD: 99,
    recommended: false,
    visible: true,
  },
];
