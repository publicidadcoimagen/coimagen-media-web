import { ServiceLandingTemplate, ServiceContent } from "@/components/templates/ServiceLandingTemplate";

const content: ServiceContent = {
  slug: "coimagen-os",
  heroImage: "/images/landing/coimagen-os.png",
  accentColor: "purple",
  accentHex: "#A855F7",
  icon: "⭐",
  seoTitle: {
    es: "COIMAGEN OS — Sistema Operativo Digital para tu Empresa | Coimagen",
    en: "COIMAGEN OS — Digital Operating System for Your Business | Coimagen",
  },
  metaDesc: {
    es: "COIMAGEN OS es el sistema operativo digital completo para dirigir tu empresa: CRM, automatización, portal de clientes, reportes y IA integrada en una sola plataforma.",
    en: "COIMAGEN OS is the complete digital operating system to run your business: CRM, automation, client portal, reports, and integrated AI in one platform.",
  },
  hero: {
    title: { es: "El sistema operativo digital para dirigir tu empresa completa", en: "The Digital Operating System to Run Your Entire Business" },
    subtitle: {
      es: "COIMAGEN OS es la plataforma que integra CRM, automatización, portal de clientes, reportes y agentes de IA en un solo sistema. Deja de usar 10 herramientas distintas y empieza a operar como una empresa de primer nivel.",
      en: "COIMAGEN OS is the platform that integrates CRM, automation, client portal, reports, and AI agents in one system. Stop using 10 different tools and start operating like a top-tier company.",
    },
    benefit: { es: "Las empresas que centralizan su operación digital crecen 2x más rápido con menos fricción interna", en: "Businesses that centralize their digital operations grow 2x faster with less internal friction" },
  },
  pain: {
    items: [
      { icon: "🔧", text: { es: "Usas 5-10 herramientas distintas que no se comunican entre sí", en: "You use 5-10 different tools that don't communicate with each other" } },
      { icon: "📊", text: { es: "No tienes una vista unificada de todos tus clientes y proyectos", en: "You don't have a unified view of all your clients and projects" } },
      { icon: "😤", text: { es: "La información de tu empresa está dispersa en emails, WhatsApp y hojas de cálculo", en: "Your company's information is scattered across emails, WhatsApp, and spreadsheets" } },
      { icon: "🔄", text: { es: "Los procesos de entrega a clientes son manuales e inconsistentes", en: "Client delivery processes are manual and inconsistent" } },
      { icon: "👥", text: { es: "Es difícil que tu equipo esté sincronizado y sepa qué hacer cada día", en: "It's hard for your team to be synchronized and know what to do each day" } },
      { icon: "📈", text: { es: "No tienes métricas claras de la salud de tu negocio en tiempo real", en: "You don't have clear metrics on your business health in real time" } },
    ],
  },
  solution: {
    steps: [
      { icon: "🏗️", title: { es: "Diagnóstico y diseño", en: "Diagnosis and design" }, desc: { es: "Analizamos cómo opera tu empresa y diseñamos el sistema operativo ideal para tu modelo de negocio.", en: "We analyze how your company operates and design the ideal operating system for your business model." } },
      { icon: "⚙️", title: { es: "Implementación del OS", en: "OS implementation" }, desc: { es: "Configuramos CRM, módulos de automatización, portal de clientes y dashboards personalizados.", en: "We configure CRM, automation modules, client portal, and custom dashboards." } },
      { icon: "🤖", title: { es: "Integración de IA", en: "AI integration" }, desc: { es: "Añadimos agentes de IA que automatizan comunicaciones, califican prospectos y generan reportes.", en: "We add AI agents that automate communications, qualify leads, and generate reports." } },
      { icon: "👥", title: { es: "Onboarding del equipo", en: "Team onboarding" }, desc: { es: "Capacitamos a todo tu equipo para adoptar el nuevo sistema de forma eficiente.", en: "We train your entire team to adopt the new system efficiently." } },
      { icon: "🔗", title: { es: "Migración de datos", en: "Data migration" }, desc: { es: "Migramos toda tu información existente al nuevo sistema sin pérdida de datos.", en: "We migrate all your existing information to the new system without data loss." } },
      { icon: "📈", title: { es: "Optimización continua", en: "Continuous optimization" }, desc: { es: "Mejoramos el sistema mes a mes según las necesidades cambiantes de tu negocio.", en: "We improve the system month by month according to your evolving business needs." } },
    ],
  },
  benefits: {
    items: [
      { icon: "🎯", title: { es: "Todo en un lugar", en: "Everything in one place" }, desc: { es: "CRM, proyectos, comunicaciones, facturas y reportes en una sola plataforma.", en: "CRM, projects, communications, invoices, and reports in one platform." } },
      { icon: "📊", title: { es: "Visibilidad total", en: "Total visibility" }, desc: { es: "Ves en tiempo real el estado de cada cliente, proyecto y proceso de tu empresa.", en: "You see in real time the status of every client, project, and process in your company." } },
      { icon: "⚡", title: { es: "Operación más rápida", en: "Faster operations" }, desc: { es: "Procesos automatizados que reducen el tiempo de entrega y aumentan la capacidad de tu equipo.", en: "Automated processes that reduce delivery time and increase your team's capacity." } },
      { icon: "🏆", title: { es: "Experiencia premium para clientes", en: "Premium client experience" }, desc: { es: "Portal de clientes donde ven avances, aprueban y se comunican de forma profesional.", en: "Client portal where they see progress, approve, and communicate professionally." } },
      { icon: "🤖", title: { es: "IA que trabaja por ti", en: "AI working for you" }, desc: { es: "Agentes de IA que automatizan comunicaciones y tareas sin intervención manual.", en: "AI agents that automate communications and tasks without manual intervention." } },
      { icon: "📈", title: { es: "Escala sin fricción", en: "Scale without friction" }, desc: { es: "El sistema crece contigo. Cuando consigues más clientes, el sistema los absorbe sin problemas.", en: "The system grows with you. When you get more clients, the system absorbs them seamlessly." } },
    ],
  },
  includes: {
    items: [
      { es: "CRM completo con pipeline de ventas", en: "Complete CRM with sales pipeline" },
      { es: "Portal del cliente con aprobaciones", en: "Client portal with approvals" },
      { es: "Sistema de gestión de proyectos", en: "Project management system" },
      { es: "Módulo de facturación y cobros", en: "Billing and collection module" },
      { es: "Automatizaciones de comunicación", en: "Communication automations" },
      { es: "Agentes de IA integrados", en: "Integrated AI agents" },
      { es: "Dashboard ejecutivo en tiempo real", en: "Real-time executive dashboard" },
      { es: "Migración de datos existentes", en: "Existing data migration" },
      { es: "Capacitación completa del equipo", en: "Complete team training" },
      { es: "Soporte y evolución mensual", en: "Monthly support and evolution" },
    ],
  },
  caseStudy: {
    slug: "coimagen-os",
    nameEs: "Coimagen — Sistema Propio",
    nameEn: "Coimagen — Internal System",
    summaryEs: "Desarrollamos COIMAGEN OS para gestionar nuestra propia agencia. Unificamos CRM, proyectos, comunicaciones y finanzas en una plataforma que nos permite escalar sin contratar más personal administrativo.",
    summaryEn: "We developed COIMAGEN OS to manage our own agency. We unified CRM, projects, communications, and finances in a platform that allows us to scale without hiring more administrative staff.",
    metrics: [
      { value: "-70%", labelEs: "tiempo en administración", labelEn: "time on administration" },
      { value: "100%", labelEs: "procesos digitalizados", labelEn: "digitized processes" },
      { value: "3x", labelEs: "capacidad de proyectos", labelEn: "project capacity" },
      { value: "0", labelEs: "proyectos sin seguimiento", labelEn: "projects without follow-up" },
    ],
    accentColor: "#A855F7",
  },
  faq: [
    { q: { es: "¿COIMAGEN OS es un SaaS o una implementación personalizada?", en: "Is COIMAGEN OS a SaaS or a custom implementation?" }, a: { es: "Es una implementación personalizada para tu empresa. No es un software genérico — está diseñado específicamente para tu modelo de negocio e industria.", en: "It's a custom implementation for your company. It's not generic software — it's designed specifically for your business model and industry." } },
    { q: { es: "¿Qué herramientas reemplaza COIMAGEN OS?", en: "What tools does COIMAGEN OS replace?" }, a: { es: "Típicamente reemplaza: CRM separado, herramienta de proyectos, portal de clientes, herramienta de facturación y comunicaciones dispersas. Todo en una sola plataforma.", en: "Typically replaces: separate CRM, project management tool, client portal, invoicing tool, and scattered communications. All in one platform." } },
    { q: { es: "¿Cuánto tiempo tarda la implementación?", en: "How long does implementation take?" }, a: { es: "Entre 4 y 12 semanas dependiendo del tamaño de la empresa y la complejidad de los procesos. Incluye un período de adopción con tu equipo.", en: "Between 4 and 12 weeks depending on company size and process complexity. Includes an adoption period with your team." } },
    { q: { es: "¿Es complicado para mi equipo aprenderlo?", en: "Is it complicated for my team to learn?" }, a: { es: "Lo diseñamos con usabilidad en mente. Incluimos capacitación completa y soporte durante los primeros meses para asegurar la adopción.", en: "We design it with usability in mind. We include full training and support during the first months to ensure adoption." } },
    { q: { es: "¿Se puede integrar con herramientas que ya uso?", en: "Can it integrate with tools I already use?" }, a: { es: "Sí. COIMAGEN OS se integra con Google Workspace, WhatsApp, Jotform, Stripe, y muchas otras herramientas populares.", en: "Yes. COIMAGEN OS integrates with Google Workspace, WhatsApp, Jotform, Stripe, and many other popular tools." } },
  ],
};

export default function CoimagenOSPage() {
  return <ServiceLandingTemplate content={content} />;
}
