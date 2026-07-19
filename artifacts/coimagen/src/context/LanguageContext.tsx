import { createContext, useContext, useState } from "react";
import type { Lang } from "@/config/site";

const translations = {
  es: {
    nav: {
      home: "Inicio",
      solutions: "Soluciones",
      industries: "Industrias",
      cases: "Casos",
      pricing: "Precios",
      blog: "Blog",
      diagnostic: "Diagnóstico",
      contact: "Contacto",
      cta: "Diagnóstico Gratuito",
    },
    hero: {
      badge: "TIJUANA / SAN DIEGO",
      line1: "De tráfico a conversación.",
      line2: "De conversación a clientes.",
      line3: "De clientes a sistemas operados con IA.",
      sub: "Diseñamos sistemas digitales que captan prospectos, automatizan seguimientos y convierten oportunidades en clientes reales usando marketing, automatización e inteligencia artificial.",
      cta1: "Solicitar Diagnóstico Gratuito",
      cta2: "Ver Soluciones",
      cta3: "Agendar llamada",
    },
    pain: {
      title: "¿Te identificas con alguno de estos problemas?",
      items: [
        "Tu página web no genera contactos.",
        "Tus redes sociales no convierten.",
        "No apareces bien en Google.",
        "Tu competencia gana más clientes.",
        "Pierdes tiempo en tareas repetitivas.",
        "Los prospectos se enfrían por falta de seguimiento.",
        "Todo depende de WhatsApp y procesos manuales.",
        "No tienes un sistema para medir resultados.",
      ],
    },
    ladder: {
      title: "Una escalera clara: empiezas simple, escalas a IA.",
      steps: [
        { title: "Adquisición", desc: "Landing Pages + SEO + Google Maps" },
        { title: "Conversión", desc: "WhatsApp + formularios + agenda" },
        { title: "Seguimiento", desc: "CRM + reportes + tareas" },
        { title: "Automatización", desc: "Flujos que trabajan 24/7" },
        { title: "IA / SaaS", desc: "Sistemas operativos por industria" },
      ],
    },
    services: {
      title: "Soluciones",
      subtitle: "Todo lo que necesitas para escalar tu negocio digital.",
      items: [
        { title: "Marketing Digital", desc: "Estrategias que convierten tráfico en prospectos calificados." },
        { title: "Landing Pages", desc: "Páginas optimizadas para captar y convertir visitas en contactos." },
        { title: "SEO Local", desc: "Posiciona tu negocio en Google y Google Maps para clientes cercanos." },
        { title: "Google Business Profile", desc: "Optimizamos y gestionamos tu perfil para más visibilidad local." },
        { title: "CRM & Prospectos", desc: "Organiza, da seguimiento y convierte cada prospecto en cliente." },
        { title: "WhatsApp / Formularios", desc: "Captura leads y automatiza respuestas desde el primer contacto." },
        { title: "Automatización", desc: "Flujos inteligentes que trabajan por ti las 24 horas." },
        { title: "Agentes IA", desc: "Asistentes digitales que responden, califican y agendan solos." },
        { title: "Coimagen OS", desc: "Sistema operativo digital completo para tu industria." },
      ],
    },
    industries: {
      title: "Sectores que atendemos",
      subtitle: "Sistemas operativos digitales diseñados para cada industria.",
      cta: "Ver solución",
    },
    pricing: {
      title: "Nuestros paquetes",
      subtitle: "Soluciones diseñadas para cada etapa de tu negocio. Los precios pueden variar según alcance y diagnóstico.",
      note: "Los precios pueden variar según necesidades, alcance y diagnóstico del negocio.",
      popularLabel: "Más popular",
      founderTitle: "Oferta Fundadores",
      founderDesc: "Primeros 20 clientes reciben precio preferencial de lanzamiento.",
      cta: "Solicitar información",
      mxPlans: [
        {
          name: "Presencia Digital",
          price: "$790",
          period: "MXN / mes",
          popular: false,
          items: ["Landing profesional", "Hosting incluido", "WhatsApp", "Formulario de contacto", "SEO básico", "Actualizaciones básicas"],
        },
        {
          name: "Crecimiento Digital",
          price: "$1,490",
          period: "MXN / mes",
          popular: true,
          items: ["Todo lo anterior", "Google Business Profile", "SEO Local", "Blog con IA", "Optimización de conversión", "Redes sociales básicas"],
        },
        {
          name: "Negocio Digital",
          price: "$2,490",
          period: "MXN / mes",
          popular: false,
          items: ["Todo lo anterior", "CRM básico", "Seguimiento de prospectos", "Automatización WhatsApp", "Reportes mensuales", "Embudo de conversión"],
        },
        {
          name: "AI Business",
          price: "$4,990",
          period: "MXN / mes",
          popular: false,
          items: ["Dashboard", "Agentes IA básicos", "Automatización avanzada", "Procesos internos", "Recomendado después del diagnóstico"],
        },
      ],
      usaPlans: [
        {
          name: "Starter",
          price: "$197",
          period: "USD / month",
          popular: false,
          items: ["Professional landing page", "Hosting included", "WhatsApp / contact form", "Basic SEO", "Basic updates"],
        },
        {
          name: "Growth",
          price: "$297",
          period: "USD / month",
          popular: true,
          items: ["Everything in Starter", "Google Business Profile", "Local SEO", "AI-assisted blog", "Conversion optimization"],
        },
        {
          name: "Automation",
          price: "$497",
          period: "USD / month",
          popular: false,
          items: ["Everything in Growth", "Basic CRM", "Lead follow-up", "WhatsApp automation", "Monthly reports", "Conversion funnel"],
        },
        {
          name: "AI Business",
          price: "$997",
          period: "USD / month",
          popular: false,
          setup: "+ $1,500 USD setup",
          items: ["AI agents", "Advanced automation", "Dashboard", "Internal workflows", "Custom business system"],
        },
      ],
    },
    premium: {
      tag: "Solución Premium",
      title: "Transformación Digital Coimagen",
      subtitle: "Implementamos sistemas personalizados de IA, automatización, CRM, agentes digitales y procesos inteligentes para negocios que quieren escalar.",
      bullets: ["IA personalizada", "Automatización total", "CRM avanzado", "Agentes digitales", "Dashboards", "Procesos internos"],
      cta1: "Agendar consulta",
      cta2: "Quiero ser fundador",
    },
    cases: {
      title: "Proyectos y laboratorios de crecimiento",
      subtitle: "Prueba real, no promesas. Estos proyectos nos permiten probar, optimizar y documentar procesos reales antes de implementarlos con nuevos clientes.",
      cta: "Ver proyecto",
      items: [
        { name: "Dr. José Manuel Segovia Neurocirugía", desc: "Intranet + flujos con IA para expedientes médicos. Caso real en producción.", tag: "Salud", color: "from-blue-600 to-indigo-800", href: "https://www.neurocirujanosentijuana.com" },
        { name: "Clínica EMT", desc: "Sistema de gestión de pacientes con automatización de seguimiento digital.", tag: "Salud", color: "from-teal-600 to-cyan-700", href: "https://www.estimulacionmagneticatranscranealtijuana.com" },
        { name: "Chimichimi", desc: "Presencia digital con contenido, marca y estrategia de captación.", tag: "Restaurante", color: "from-orange-500 to-red-700", href: "https://chimichimi.coimagenmedia.com" },
        { name: "Vertiente Bienes Raíces", desc: "Landing de captación, filtrado de leads, inventario y operación escalable.", tag: "Inmobiliaria", color: "from-purple-600 to-violet-800", href: "https://vertiente.coimagenmedia.com" },
        { name: "Coimagen OS", desc: "Plataforma interna de operación con IA, CRM, facturación, clientes y flujos automatizados.", tag: "Tecnología", color: "from-cyan-600 to-blue-800", href: "/demos/coimagen-os-preview/" },
      ],
    },
    businessOS: {
      title: "Sistemas operativos por industria",
      subtitle: "Plataformas digitales completas con landing, funnel, blog SEO, formularios, CRM, automatización y demo personalizada.",
      cta1: "Ver demos",
      cta2: "Solicitar diagnóstico",
    },
    demos: {
      title: "Demos en vivo",
      subtitle: "Medical OS ya está disponible en un entorno de demostración real. El resto de nuestros sistemas operativos por industria llegan próximamente.",
      medical: {
        desc: "Sistema real de gestión clínica en uso.",
        warning: "Entorno de DEMO con datos de ejemplo, no es el sistema real de ningún cliente.",
        doctorLabel: "Doctor",
        secretaryLabel: "Secretaria",
        cta: "Abrir demo de Medical OS",
      },
      comingSoon: "Próximamente",
      finalCta: "¿Quieres algo así para tu negocio? Solicita tu diagnóstico",
    },
    camila: {
      name: "Camila Segovia",
      role: "CEO de Coimagen Media",
      bio: "Emprendedora y estratega en marketing digital, automatización e inteligencia artificial aplicada a negocios. Coimagen nace para ayudar a pequeños y medianos negocios a operar con sistemas, no solo con esfuerzo manual.",
      photo: "Foto próximamente",
    },
    diagnostic: {
      title: "Diagnóstico Digital Express",
      subtitle: "Responde unas preguntas y descubre qué oportunidades está perdiendo tu negocio.",
      cta1: "Iniciar diagnóstico",
      cta2: "Enviar WhatsApp",
    },
    blog: {
      title: "Blog",
      subtitle: "Contenido SEO para negocios que quieren crecer.",
      readMore: "Leer más",
      posts: [
        { title: "CRM para médicos: cómo organizar pacientes y seguimiento", tag: "Salud", slug: "/blog/crm-para-medicos" },
        { title: "Automatización para abogados: cómo no perder prospectos", tag: "Legal", slug: "/blog/automatizacion-abogados" },
        { title: "SEO local para dentistas: cómo aparecer en Google", tag: "Dental", slug: "/blog/seo-local-dentistas" },
        { title: "Google Business Profile para negocios locales", tag: "SEO", slug: "/blog/google-business-profile" },
        { title: "WhatsApp para ventas: cómo dar seguimiento automático", tag: "Automatización", slug: "/blog/whatsapp-ventas" },
        { title: "IA para pequeñas empresas: por dónde empezar", tag: "IA", slug: "/blog/ia-pequenas-empresas" },
      ],
    },
    finalCta: {
      title: "¿Listo para convertir tu presencia digital en un sistema de crecimiento?",
      subtitle: "Solicita un diagnóstico gratuito y descubre qué solución necesita tu negocio.",
      cta1: "Solicitar Diagnóstico Gratuito",
      cta2: "Hablar por WhatsApp",
    },
    footer: {
      tagline: "Marketing + Automatización + IA para negocios que quieren escalar.",
      solutions: "Soluciones",
      industries: "Industrias",
      company: "Empresa",
      legal: "Legal",
      solutionLinks: ["Marketing Digital", "Landing Pages", "SEO Local", "CRM & Prospectos", "Automatización", "Agentes IA"],
      industryLinks: ["Medical OS", "Dental OS", "Law OS", "Wellness OS", "Restaurant OS", "Real Estate OS", "Local Business OS"],
      companyLinks: ["Casos de Éxito", "Blog", "Diagnóstico", "Contacto"],
      legalLinks: ["Aviso de Privacidad", "Términos de Servicio"],
      rights: "© 2026 Coimagen Media Agency. Todos los derechos reservados.",
    },
    whatsapp: "WhatsApp",
    bookCall: "Agendar llamada",
    country: {
      mx: "🇲🇽 México",
      usa: "🇺🇸 USA",
    },
  },
  en: {
    nav: {
      home: "Home",
      solutions: "Solutions",
      industries: "Industries",
      cases: "Case Studies",
      pricing: "Pricing",
      blog: "Blog",
      diagnostic: "Diagnostic",
      contact: "Contact",
      cta: "Free Diagnostic",
    },
    hero: {
      badge: "TIJUANA / SAN DIEGO",
      line1: "From traffic to conversations.",
      line2: "From conversations to customers.",
      line3: "From customers to AI-powered business systems.",
      sub: "We design digital systems that generate leads, automate follow-up, and turn opportunities into real customers using marketing, automation, and artificial intelligence.",
      cta1: "Get Free Diagnostic",
      cta2: "View Solutions",
      cta3: "Book a Call",
    },
    pain: {
      title: "Do any of these problems sound familiar?",
      items: [
        "Your website does not generate leads.",
        "Your social media does not convert.",
        "You are not showing up on Google.",
        "Your competitors are getting more customers.",
        "You waste time on repetitive tasks.",
        "Leads go cold because there is no follow-up.",
        "Everything depends on WhatsApp and manual work.",
        "You do not have a system to measure results.",
      ],
    },
    ladder: {
      title: "A clear path: start simple, scale into AI.",
      steps: [
        { title: "Acquisition", desc: "Landing Pages + SEO + Google Maps" },
        { title: "Conversion", desc: "WhatsApp + forms + booking" },
        { title: "Follow-up", desc: "CRM + reports + tasks" },
        { title: "Automation", desc: "Workflows that work 24/7" },
        { title: "AI / SaaS", desc: "Business operating systems by industry" },
      ],
    },
    services: {
      title: "Solutions",
      subtitle: "Everything you need to scale your digital business.",
      items: [
        { title: "Digital Marketing", desc: "Strategies that convert traffic into qualified leads." },
        { title: "Landing Pages", desc: "Optimized pages that turn visitors into contacts." },
        { title: "Local SEO", desc: "Position your business on Google and Google Maps for nearby customers." },
        { title: "Google Business Profile", desc: "We optimize and manage your profile for maximum local visibility." },
        { title: "CRM & Leads", desc: "Organize, follow up and convert every lead into a customer." },
        { title: "WhatsApp / Forms", desc: "Capture leads and automate responses from the first contact." },
        { title: "Automation", desc: "Smart workflows that work for you 24 hours a day." },
        { title: "AI Agents", desc: "Digital assistants that respond, qualify and book appointments on their own." },
        { title: "Coimagen OS", desc: "Complete digital operating system for your industry." },
      ],
    },
    industries: {
      title: "Industries we serve",
      subtitle: "Digital operating systems designed for each industry.",
      cta: "View solution",
    },
    pricing: {
      title: "Our packages",
      subtitle: "Solutions designed for each stage of your business. Pricing may vary depending on scope and diagnostic results.",
      note: "Pricing may vary depending on business needs, scope, and diagnostic results.",
      popularLabel: "Most Popular",
      founderTitle: "Founder Offer",
      founderDesc: "First 20 clients receive preferred launch pricing.",
      cta: "Request info",
      mxPlans: [
        {
          name: "Presencia Digital",
          price: "$790",
          period: "MXN / mes",
          popular: false,
          items: ["Landing profesional", "Hosting incluido", "WhatsApp", "Formulario de contacto", "SEO básico", "Actualizaciones básicas"],
        },
        {
          name: "Crecimiento Digital",
          price: "$1,490",
          period: "MXN / mes",
          popular: true,
          items: ["Todo lo anterior", "Google Business Profile", "SEO Local", "Blog con IA", "Optimización de conversión", "Redes sociales básicas"],
        },
        {
          name: "Negocio Digital",
          price: "$2,490",
          period: "MXN / mes",
          popular: false,
          items: ["Todo lo anterior", "CRM básico", "Seguimiento de prospectos", "Automatización WhatsApp", "Reportes mensuales", "Embudo de conversión"],
        },
        {
          name: "AI Business",
          price: "$4,990",
          period: "MXN / mes",
          popular: false,
          items: ["Dashboard", "Agentes IA básicos", "Automatización avanzada", "Procesos internos", "Recomendado después del diagnóstico"],
        },
      ],
      usaPlans: [
        {
          name: "Starter",
          price: "$197",
          period: "USD / month",
          popular: false,
          items: ["Professional landing page", "Hosting included", "WhatsApp / contact form", "Basic SEO", "Basic updates"],
        },
        {
          name: "Growth",
          price: "$297",
          period: "USD / month",
          popular: true,
          items: ["Everything in Starter", "Google Business Profile", "Local SEO", "AI-assisted blog", "Conversion optimization"],
        },
        {
          name: "Automation",
          price: "$497",
          period: "USD / month",
          popular: false,
          items: ["Everything in Growth", "Basic CRM", "Lead follow-up", "WhatsApp automation", "Monthly reports", "Conversion funnel"],
        },
        {
          name: "AI Business",
          price: "$997",
          period: "USD / month",
          popular: false,
          setup: "+ $1,500 USD setup",
          items: ["AI agents", "Advanced automation", "Dashboard", "Internal workflows", "Custom business system"],
        },
      ],
    },
    premium: {
      tag: "Premium Solution",
      title: "Coimagen Digital Transformation",
      subtitle: "We implement custom AI, automation, CRM, digital agents and intelligent workflows for businesses ready to scale.",
      bullets: ["Custom AI", "Full automation", "Advanced CRM", "Digital agents", "Dashboards", "Internal workflows"],
      cta1: "Book Consultation",
      cta2: "Become a Founder Client",
    },
    cases: {
      title: "Growth projects and real-world labs",
      subtitle: "Real proof, not promises. These projects help us test, optimize and document real processes before implementing them for new clients.",
      cta: "View project",
      items: [
        { name: "Dr. José Manuel Segovia Neurosurgery", desc: "Intranet + AI workflows for medical records. Real case in production.", tag: "Health", color: "from-blue-600 to-indigo-800", href: "https://www.neurocirujanosentijuana.com" },
        { name: "Clínica EMT", desc: "Patient management system with automated digital follow-up.", tag: "Health", color: "from-teal-600 to-cyan-700", href: "https://www.estimulacionmagneticatranscranealtijuana.com" },
        { name: "Chimichimi", desc: "Digital presence with content, branding and lead generation strategy.", tag: "Restaurant", color: "from-orange-500 to-red-700", href: "https://chimichimi.coimagenmedia.com" },
        { name: "Vertiente Bienes Raíces", desc: "Lead capture landing, filtering, inventory and scalable operations.", tag: "Real Estate", color: "from-purple-600 to-violet-800", href: "https://vertiente.coimagenmedia.com" },
        { name: "Coimagen OS", desc: "Internal operating platform with AI, CRM, billing, clients and automated workflows.", tag: "Technology", color: "from-cyan-600 to-blue-800", href: "/demos/coimagen-os-preview/" },
      ],
    },
    businessOS: {
      title: "Business operating systems by industry",
      subtitle: "Complete digital platforms with landing pages, funnels, SEO blog, forms, CRM, automation and personalized demo.",
      cta1: "View demos",
      cta2: "Request diagnostic",
    },
    demos: {
      title: "Live demos",
      subtitle: "Medical OS is already available in a real demo environment. Our other industry operating systems are coming soon.",
      medical: {
        desc: "Real clinical management system in active use.",
        warning: "DEMO environment with sample data — this is not any client's real system.",
        doctorLabel: "Doctor",
        secretaryLabel: "Front Desk",
        cta: "Open Medical OS demo",
      },
      comingSoon: "Coming soon",
      finalCta: "Want something like this for your business? Request your diagnostic",
    },
    camila: {
      name: "Camila Segovia",
      role: "CEO of Coimagen Media",
      bio: "Entrepreneur and strategist in digital marketing, automation and AI for business. Coimagen was created to help small and medium businesses operate with systems, not only manual effort.",
      photo: "Photo coming soon",
    },
    diagnostic: {
      title: "Digital Diagnostic Express",
      subtitle: "Answer a few questions and discover what opportunities your business is missing.",
      cta1: "Start diagnostic",
      cta2: "Send WhatsApp",
    },
    blog: {
      title: "Blog",
      subtitle: "SEO content for businesses that want to grow.",
      readMore: "Read more",
      posts: [
        { title: "AI for doctors: how to automate patient follow-up", tag: "Health", slug: "/en/blog/ai-for-doctors" },
        { title: "CRM for law firms: how to stop losing leads", tag: "Legal", slug: "/en/blog/crm-law-firms" },
        { title: "Local SEO for dentists: how to appear on Google", tag: "Dental", slug: "/en/blog/local-seo-dentists" },
        { title: "Google Business Profile for small businesses", tag: "SEO", slug: "/en/blog/google-business-profile" },
        { title: "WhatsApp automation for sales follow-up", tag: "Automation", slug: "/en/blog/whatsapp-automation" },
        { title: "AI for small businesses: where to start", tag: "AI", slug: "/en/blog/ai-small-businesses" },
      ],
    },
    finalCta: {
      title: "Ready to turn your digital presence into a growth system?",
      subtitle: "Request a free diagnostic and discover what solution your business needs.",
      cta1: "Get Free Diagnostic",
      cta2: "Message on WhatsApp",
    },
    footer: {
      tagline: "Marketing + Automation + AI for businesses that want to scale.",
      solutions: "Solutions",
      industries: "Industries",
      company: "Company",
      legal: "Legal",
      solutionLinks: ["Digital Marketing", "Landing Pages", "Local SEO", "CRM & Leads", "Automation", "AI Agents"],
      industryLinks: ["Medical OS", "Dental OS", "Law OS", "Wellness OS", "Restaurant OS", "Real Estate OS", "Local Business OS"],
      companyLinks: ["Case Studies", "Blog", "Diagnostic", "Contact"],
      legalLinks: ["Privacy Notice", "Terms of Service"],
      rights: "© 2026 Coimagen Media Agency. All rights reserved.",
    },
    whatsapp: "WhatsApp",
    bookCall: "Book a Call",
    country: {
      mx: "🇲🇽 México",
      usa: "🇺🇸 USA",
    },
  },
};

type Translations = typeof translations.es;

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const t = translations[lang] as Translations;
  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
