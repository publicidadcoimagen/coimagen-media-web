import { createContext, useContext, useState } from "react";
import type { BlogContent } from "@/components/templates/BlogPostTemplate";
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
      setupLabel: "Configuración inicial",
      perMonth: "/ mes",
      cta: "Solicitar información",
    },
    premium: {
      tag: "Solución Premium",
      title: "Transformación Digital Coimagen",
      subtitle: "Implementamos sistemas personalizados de IA, automatización, CRM, agentes digitales y procesos inteligentes para negocios que quieren escalar.",
      bullets: ["IA personalizada", "Automatización total", "CRM avanzado", "Agentes digitales", "Dashboards", "Procesos internos"],
      cta1: "Agendar consulta",
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
        { name: "Café Meridiano", desc: "Tienda en línea con catálogo, carrito y checkout — café de especialidad y repostería artesanal.", tag: "Alimentos", color: "from-amber-600 to-orange-800", href: "https://cafemeridiano.coimagenmedia.com" },
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
      setupLabel: "Setup",
      perMonth: "/ month",
      cta: "Request info",
    },
    premium: {
      tag: "Premium Solution",
      title: "Coimagen Digital Transformation",
      subtitle: "We implement custom AI, automation, CRM, digital agents and intelligent workflows for businesses ready to scale.",
      bullets: ["Custom AI", "Full automation", "Advanced CRM", "Digital agents", "Dashboards", "Internal workflows"],
      cta1: "Book Consultation",
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
        { name: "Café Meridiano", desc: "Online store with catalog, cart and checkout — specialty coffee and artisan pastries.", tag: "Food & Drink", color: "from-amber-600 to-orange-800", href: "https://cafemeridiano.coimagenmedia.com" },
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

const LANG_STORAGE_KEY = "coimagen-lang";

function getStoredLang(): Lang {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (stored === "es" || stored === "en") return stored;
  } catch {
    // localStorage unavailable (e.g. private browsing) — fall back to default
  }
  return "es";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getStoredLang);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, l);
    } catch {
      // localStorage unavailable — selection just won't persist
    }
  };

  const t = translations[lang] as Translations;
  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

// Bilingual content for the new podcast articles.
export const reelScriptsBlogContent: BlogContent = {
  slug: "guiones-de-reels-que-detienen-el-scroll",
  categoryEs: "IA",
  categoryEn: "AI",
  categoryColor: "#00CFFF",
  icon: "🤖",
  date: "2026-11-28",
  readTimeMin: 8,
  accentHex: "#00CFFF",
  titleEs: "Guiones de reels que detienen el scroll",
  titleEn: "Reel scripts that stop the scroll",
  subtitleEs: "El cerebro decide si te ignora en menos de un segundo y medio. Un reel que retiene no es suerte: es un guion de tres bloques, una sola idea y una sola acción al final.",
  subtitleEn: "The brain decides whether to ignore you in less than a second and a half. A reel that holds attention is no accident: it needs a three-part script, one idea, and one action at the end.",
  sections: [
    {
      type: "intro",
      bodyEs: "Cada minuto de cada día se suben miles y miles de horas de video a las redes sociales, y la biología humana dicta que la gran mayoría de ese contenido será deslizado hacia el olvido en menos de un segundo y medio. El cerebro decide ignorar un estímulo visual mucho antes de que la persona en pantalla termine de decir siquiera «hola». Frente a esa realidad, la creación de contenido corto suele parecerse a una lotería: improvisar frente a la cámara y esperar que el algoritmo construya una audiencia. El resultado directo de esa improvisación continua es el agotamiento extremo. Lo que falta es sistematizar, con base en cómo procesamos realmente la información. Este tema lo conversamos en el episodio del pódcast de Coimagen Media «Guiones de reels que detienen el scroll», que estrena el viernes 13 de noviembre de 2026 en Spotify, y aquí va ampliado, con la arquitectura del guion, las estructuras y el flujo para grabar una semana de contenido en una hora.",
      bodyEn: "Every minute of every day, thousands upon thousands of hours of video are uploaded to social media, and human biology dictates that most of that content will be scrolled past in less than a second and a half. The brain decides to ignore a visual stimulus long before the person on screen even finishes saying hello. Faced with this reality, creating short-form content often feels like a lottery: improvise on camera and hope the algorithm builds an audience. The direct result of constant improvisation is exhaustion. What is missing is a system based on how we actually process information. We discuss this in the Coimagen Media podcast episode “Guiones de reels que detienen el scroll,” premiering Friday, November 13, 2026 on Spotify. Here we expand on the script architecture, formats, and workflow for recording a week of content in one hour.",
    },
    {
      type: "heading",
      titleEs: "La arquitectura innegociable: 3 bloques",
      titleEn: "The essential architecture: 3 parts",
    },
    {
      type: "steps",
      items: [
        { es: "Gancho, de 0 a 3 segundos: un filtro de relevancia. Si no articulas de inmediato una afirmación, una pregunta abierta o un resultado tangible, la corteza prefrontal del espectador cataloga el video como ruido y el dedo sigue deslizando.", en: "Hook, seconds 0 to 3: a relevance filter. Unless you immediately present a statement, an open-ended question, or a tangible result, the viewer’s prefrontal cortex classifies the video as noise and the scrolling continues." },
        { es: "Desarrollo, hasta el segundo 40: una sola idea. Presentar tres ideas distintas en 40 segundos genera una saturación que diluye por completo el mensaje principal.", en: "Development, up to second 40: one idea. Presenting three different ideas in 40 seconds creates overload that completely dilutes the main message." },
        { es: "Llamada a la acción, en los últimos 5 segundos: una sola opción. Pedir que comenten, que guarden o que vayan al enlace de la biografía, pero nunca las tres cosas a la vez.", en: "Call to action, in the final 5 seconds: one option. Ask viewers to comment, save, or visit the link in your bio, but never all three at once." },
      ],
    },
    {
      type: "paragraph",
      bodyEs: "La primera frase debe dirigir la atención a una audiencia muy específica: nada de introducciones largas ni de «hola, ¿qué tal?». Es como el escaparate de una tienda: si el maniquí de la vitrina es aburrido, nadie entra por muy buenos que sean los productos del interior. Si el video arranca diciendo «tres razones por las que tu empresa de logística pierde dinero», quien trabaja en logística se queda y quien no, desliza. Esa polarización purifica la retención y le da al algoritmo señales mucho más limpias sobre a quién mostrarle el contenido. En ese milisegundo no compites contra otros creadores: compites contra el acto físico de hacer scroll.",
      bodyEn: "The opening sentence should direct attention toward a very specific audience: no long introductions or “hello, how are you?” Think of a storefront: if the window display is boring, nobody enters, however good the products inside may be. If a video starts with “three reasons your logistics company is losing money,” people who work in logistics stay, while others scroll past. That polarization makes retention more focused and gives the algorithm clearer signals about whom to show the content to. In that instant, you are competing with the physical act of scrolling.",
    },
    {
      type: "paragraph",
      bodyEs: "La llamada a la acción final es draconiana por una razón: la fatiga de decisión. Si se le pide a alguien que dé me gusta, que comparta, que comente y que además se suscriba, el cerebro se enfrenta a un exceso de opciones y la respuesta por defecto, la que gasta menos energía, es no hacer absolutamente nada y deslizar. Cada instrucción adicional reduce exponencialmente la probabilidad de que alguien haga algo. Si quieres comentarios, pides un comentario. Y luego mides si el guion funcionó para eso.",
      bodyEn: "The final call to action is strict for a reason: decision fatigue. Asking someone to like, share, comment, and subscribe presents the brain with too many options. The default response, which uses the least energy, is to do nothing and keep scrolling. Each additional instruction exponentially reduces the likelihood of action. If you want comments, ask for a comment. Then measure whether the script achieved that goal.",
    },
    {
      type: "heading",
      titleEs: "Una sola idea por video (y un cambio visual cada 3 a 5 segundos)",
      titleEn: "One idea per video, with a visual change every 3 to 5 seconds",
    },
    {
      type: "paragraph",
      bodyEs: "El instinto natural es empaquetar la mayor cantidad de valor posible para demostrar que eres un experto. Pero cognitivamente, presentar tres ideas distintas en 40 segundos genera una saturación que diluye el mensaje. Y para mantener a la gente durante ese desarrollo, el sistema recomienda un cambio visual cada tres a cinco segundos: un cambio de plano, un acercamiento o un texto que salta en pantalla. No es hiperactividad por capricho: es combatir la habituación neurológica. Cuando una imagen permanece estática mucho tiempo, el cerebro deja de procesarla activamente para ahorrar energía, porque asume que ya absorbió todo el contexto. Esos pequeños saltos actúan como un reseteo suave que obliga al cerebro a revaluar la imagen, mantiene el estado de alerta y asegura que el canal auditivo, por donde viaja la información importante, siga abierto y receptivo.",
      bodyEn: "The natural instinct is to pack in as much value as possible to demonstrate expertise. But presenting three different ideas in 40 seconds creates cognitive overload that dilutes the message. To keep viewers watching, the system recommends a visual change every three to five seconds: a different shot, a close-up, or text appearing on screen. This counters neurological habituation. When an image stays static for too long, the brain stops actively processing it to conserve energy, assuming it has already absorbed the context. These small changes act as a gentle reset, prompting the brain to reassess the image, stay alert, and keep the auditory channel carrying the important information open and receptive.",
    },
    {
      type: "image",
      image: "/images/blog/reels-scripts-1.webp",
      altEs: "Smartphone en trípode grabando video en un estudio con aro de luz y una planta, sin personas",
      altEn: "A smartphone on a tripod recording video in a studio with a ring light and a plant, with no people",
    },
    {
      type: "heading",
      titleEs: "10 estructuras, un embudo invisible",
      titleEn: "10 formats, one invisible funnel",
    },
    {
      type: "paragraph",
      bodyEs: "Un error clásico es usar la misma cadencia narrativa para todo. Intentar usar la misma estructura para cualquier objetivo es como intentar atornillar un clavo con un martillo. Por eso el sistema aporta un catálogo de 10 estructuras de guion probadas, cada una asociada a una fricción psicológica distinta. Y no son bloques aislados: actúan como un embudo de conversión invisible. La estrategia es rotarlas asumiendo las distintas temperaturas de la audiencia a lo largo del mes.",
      bodyEn: "A classic mistake is using the same narrative rhythm for every purpose. Trying to apply the same structure to every goal is like trying to screw in a nail with a hammer. The system therefore provides a catalog of 10 proven script formats, each addressing a different psychological friction. Together, they work as an invisible conversion funnel. The strategy is to rotate them throughout the month to reach audiences at different stages of readiness.",
    },
    {
      type: "list",
      items: [
        { es: "Educativo: para generar guardados, enseñando algo útil en pocos segundos.", en: "Educational: encourage saves by teaching something useful in a few seconds." },
        { es: "Historia (Storytime): una historia personal para construir confianza a través de la vulnerabilidad.", en: "Storytime: share a personal story to build trust through vulnerability." },
        { es: "Mito vs realidad: para detonar comentarios. Su eficacia no reside en la información, sino en la disonancia cognitiva: cuando un video desafía algo que todos creen, la gente siente el impulso de entrar a defender su postura.", en: "Myth versus reality: spark comments. Its effectiveness comes from cognitive dissonance: when a video challenges a widely held belief, people feel compelled to defend their position." },
        { es: "Lista rápida: valor condensado en una lista breve que se consume de un vistazo.", en: "Quick list: condensed value in a short list that can be understood at a glance." },
        { es: "Tutorial paso a paso: enseña haciendo, en orden, hasta un resultado concreto.", en: "Step-by-step tutorial: teach by demonstrating, in sequence, until a concrete result is reached." },
        { es: "Antes / después: el contraste que muestra la transformación de un estado a otro.", en: "Before and after: show the contrast between two states and the transformation connecting them." },
        { es: "Pregunta que engancha: abre con la duda que tu audiencia ya tiene en la cabeza.", en: "Engaging question: open with a question your audience already has in mind." },
        { es: "Testimonio / caso: la prueba real de que algo funcionó para alguien como tu espectador.", en: "Testimonial or case study: real evidence that something worked for someone like your viewer." },
        { es: "Autoridad: para quien no te conoce de nada. Reduce la fricción inicial aportando valor rápido, sin pedir nada a cambio.", en: "Authority: for people who know nothing about you. Reduce initial friction by delivering value quickly, without asking for anything in return." },
        { es: "Venta directa: para quien ya vio tus videos educativos antes. Ataca un dolor específico y ofrece la solución.", en: "Direct sales: for people who have already watched your educational videos. Address a specific pain point and offer the solution." },
      ],
    },
    {
      type: "paragraph",
      bodyEs: "La estructura de autoridad asume que quien te está viendo es un completo desconocido: el objetivo es validar tu presencia en su pantalla aportando algo útil, sin pedir nada. La de venta directa parte de la premisa contraria: le llegará a un porcentaje de personas que ya vieron tus videos educativos. Lanzar un video de venta pura sin que nadie confíe en ti genera un rechazo inmediato: es como intentar abrir una caja fuerte sin haber puesto antes los números correctos de la combinación. Por eso se exige tanta variedad estructural, y por eso a las semanas siguientes hay que analizar qué estructuras funcionaron y cuáles no: si un video no trajo comentarios, se cambia la estructura. El progreso deja de ser magia y se convierte en datos.",
      bodyEn: "The authority format assumes that the viewer is a complete stranger: its goal is to justify your presence on their screen by offering something useful without asking for anything. Direct sales starts from the opposite premise: some viewers will have seen your educational videos before. Publishing a pure sales pitch before anyone trusts you creates immediate resistance, like trying to open a safe before entering the correct combination. This is why variety matters, and why you need to analyze which formats worked in the following weeks. If a video did not generate comments, change the format. Progress becomes something you can measure.",
    },
    {
      type: "heading",
      titleEs: "Más de 30 ganchos y el Prompt 0: clona tu voz",
      titleEn: "More than 30 hooks and Prompt 0: capture your voice",
    },
    {
      type: "paragraph",
      bodyEs: "La principal barrera para escribir guiones es sentarse frente a la hoja en blanco. El sistema la aborda con una biblioteca de más de 30 ganchos prefabricados, clasificados por objetivo: educar (guardados), debatir (comentarios), vender (mensajes) y crecer (seguidores). Pero el verdadero motor es cómo usan la inteligencia artificial. Si le pides a la IA un guion a la primera, el texto resultante suele ser plano, con vocabulario intermedio y sin ritmo humano: usar la IA como si fuera Google te da la respuesta más probable y aburrida. El método propone un paso previo, el Prompt 0: darle a la IA tres textos tuyos, escritos genuinamente por ti en el pasado —correos, publicaciones antiguas—, para que aprenda tu estilo. La IA analiza patrones que ni tú sabías que tenías: tu nivel de franqueza, cómo usas el humor, si prefieres metáforas o datos duros. Te devuelve un diagnóstico de cinco rasgos clave que definen tu voz, y a partir de ahí cualquier guion nuevo debe filtrarse por esos cinco parámetros. Es como un corsé: al forzar a la máquina a operar dentro de esos cinco rasgos, se elimina la tendencia al punto medio aburrido y los guiones salen con tus expresiones idiomáticas.",
      bodyEn: "The main barrier to writing scripts is the blank page. The system addresses it with a library of more than 30 ready-made hooks, organized by goal: educate for saves, debate for comments, sell for messages, and grow for followers. But the real engine is how AI is used. Asking AI for a script immediately tends to produce flat writing, middle-of-the-road vocabulary, and little human rhythm. Using AI like a search engine gives you the most predictable, boring answer. The method proposes a preliminary step, Prompt 0: give the AI three pieces you genuinely wrote, such as emails or older posts, so it can learn your style. AI analyzes patterns you may not have noticed: how direct you are, how you use humor, and whether you prefer metaphors or hard data. It returns five key traits defining your voice. Every new script must then be filtered through those traits. Constraining the machine to those five characteristics helps eliminate bland language and produces scripts with your own expressions.",
    },
    {
      type: "image",
      image: "/images/blog/reels-scripts-2.webp",
      altEs: "Guion gráfico sobre un escritorio: tarjetas en blanco en fila, notas adhesivas de colores y una claqueta, sin personas",
      altEn: "A storyboard on a desk: blank cards in a row, colorful sticky notes, and a clapperboard, with no people",
    },
    {
      type: "heading",
      titleEs: "La regla 80-20: la máquina arma, tú pones el alma",
      titleEn: "The 80–20 rule: AI builds the framework, you bring it to life",
    },
    {
      type: "paragraph",
      bodyEs: "Aun con la voz clonada, queda la duda de la autenticidad: si una máquina te dicta la estructura y las palabras exactas, ¿en qué momento se inyecta el alma? El sistema introduce una salvaguarda, la regla del 80-20: la IA es perfecta para construir el andamiaje lógico, el 80% del trabajo —los tiempos, las transiciones y el orden—, pero el 20% final no puede automatizarse jamás. Ese margen es territorio 100% humano: la improvisación controlada, una anécdota caótica que te acaba de pasar, cambiar una frase técnica por una mirada o un gesto. La máquina te da la lógica para que se entienda, pero el humor sutil o la indignación genuina solo salen de haberlo vivido. Un guion demasiado perfecto huele mal y genera desconfianza: cuando aportas tu energía vital, eso valida el contenido.",
      bodyEn: "Even after capturing your voice, authenticity remains a question: if a machine dictates the structure and exact words, when does the personality enter? The system adds a safeguard, the 80–20 rule. AI is well suited to building the logical framework, 80% of the work: timing, transitions, and sequence. But the final 20% cannot be automated. That space is entirely human: controlled improvisation, a chaotic anecdote that just happened to you, or replacing a technical phrase with a look or a gesture. The machine supplies the logic that makes the message understandable, but subtle humor and genuine indignation come from lived experience. An overly perfect script can feel suspicious. Your own energy helps make the content credible.",
    },
    {
      type: "heading",
      titleEs: "7 reels en 60 minutos: la línea de ensamblaje",
      titleEn: "7 reels in 60 minutes: the assembly line",
    },
    {
      type: "steps",
      items: [
        { es: "Primeros 15 minutos: elegir los siete ganchos, sin perfeccionismos.", en: "First 15 minutes: choose the seven hooks without trying to make them perfect." },
        { es: "Siguientes 15 minutos: rellenar los siete esqueletos con viñetas, sin redactar palabra por palabra. Leer un texto en una pantalla pequeña destruye el contacto visual y aplana la voz; con tres ideas en la cabeza, el cerebro se esfuerza en conectarlas y suenas natural, como si estuvieras charlando.", en: "Next 15 minutes: fill the seven frameworks with bullet points instead of writing every word. Reading from a small screen destroys eye contact and flattens your voice. Holding three ideas in mind makes the brain work to connect them, helping you sound natural and conversational." },
        { es: "Minutos 30 a 50: grabación cruzada. Se graban todos los ganchos seguidos y luego todos los desarrollos, en lugar de grabar cada video de principio a fin. Grabar un gancho exige un pico de energía altísimo y el desarrollo una energía pausada; alternar a cada rato es lo que deja agotado. Al grabar todos los ganchos seguidos te anclas en ese estado y usas la inercia.", en: "Minutes 30 to 50: batch recording. Record all the hooks first, then all the development sections, instead of recording each video from start to finish. Hooks demand high energy, while development calls for a calmer delivery. Constantly switching between them causes exhaustion. Recording hooks together anchors that energy and uses momentum." },
        { es: "Últimos 10 minutos: checklist de prepublicación. Garantizar el contraste del texto en pantalla, poner siempre subtítulos dinámicos porque mucha gente ve videos en silencio, restringir los hashtags a tres o cinco etiquetas súper específicas y revisar la duración ideal de 21 a 34 segundos.", en: "Final 10 minutes: a pre-publication checklist. Ensure on-screen text has enough contrast, always add dynamic captions because many people watch silently, limit hashtags to three to five highly specific tags, and check the target duration of 21 to 34 seconds." },
      ],
    },
    {
      type: "paragraph",
      bodyEs: "Los microcortes entre el gancho y el desarrollo también ayudan a resetear la atención visual, además de disimular que llevas la misma ropa en los siete videos. Es la línea de ensamblaje aplicada al video vertical: un ejercicio de compartimentación que devuelve el tiempo a quienes tienen mucho que enseñar pero se bloqueaban con la cámara.",
      bodyEn: "Micro-cuts between the hook and development also reset visual attention while making it less noticeable that you wear the same clothes in all seven videos. This applies an assembly line to vertical video: compartmentalizing the work gives time back to people who have plenty to teach but feel blocked by the camera.",
    },
    {
      type: "highlight",
      titleEs: "Mide, no adivines",
      titleEn: "Measure instead of guessing",
      bodyEs: "El sistema exige que a las semanas siguientes analices qué estructuras funcionaron y cuáles no. Si un video no trajo comentarios, cambias la estructura. El progreso deja de ser magia y se convierte en datos. Y hay una reflexión final: cuando dominar los ganchos y la retención sea lo habitual y cualquiera pueda clonar su voz con calidad técnica impecable, el verdadero arte será saber exactamente en qué segundo romper todas estas reglas. Meter una pausa incómoda que el algoritmo odiaría, pero que la persona que mira necesita para respirar. En un ecosistema lleno de videos calculados al milímetro, el último gran diferenciador será la vulnerabilidad del error humano.",
      bodyEn: "The system requires you to analyze which formats worked in the following weeks. If a video did not generate comments, change its format. Progress becomes data. One final thought: when mastering hooks and retention becomes routine and anyone can reproduce their voice with impeccable technical quality, the real art will be knowing exactly when to break these rules. Introduce an uncomfortable pause that the algorithm might dislike but the person watching needs in order to breathe. In an ecosystem of precisely calculated videos, the last major differentiator may be the vulnerability of human imperfection.",
    },
    {
      type: "heading",
      titleEs: "Qué puedes aplicar hoy",
      titleEn: "What you can apply today",
    },
    {
      type: "list",
      items: [
        { es: "Escribe tu próximo reel en tres bloques: gancho de 0 a 3 segundos, una sola idea hasta el segundo 40 y una sola acción en los últimos 5 segundos.", en: "Write your next reel in three parts: a hook in seconds 0 to 3, one idea developed by second 40, and one action in the final 5 seconds." },
        { es: "Abre con una frase para una audiencia específica, no con una introducción larga.", en: "Open with a sentence aimed at a specific audience instead of a long introduction." },
        { es: "Elige la estructura según el objetivo: educativo para guardados, mito vs realidad para comentarios, autoridad para desconocidos, venta directa solo para quien ya te conoce.", en: "Choose the format according to the goal: education for saves, myth versus reality for comments, authority for strangers, and direct sales for people who already know you." },
        { es: "Haz el Prompt 0: dale a la IA tres textos tuyos y pídele los cinco rasgos de tu voz antes de pedirle un guion.", en: "Use Prompt 0: give AI three pieces of your writing and ask for the five traits of your voice before requesting a script." },
        { es: "Graba tu semana en 60 minutos: 7 ganchos, 7 esqueletos con viñetas, grabación cruzada y checklist de 10 puntos antes de publicar.", en: "Record your week in 60 minutes: 7 hooks, 7 bullet-point frameworks, batch recording, and a 10-point checklist before publishing." },
      ],
    },
    {
      type: "highlight",
      titleEs: "¿Quieres dejar de improvisar frente a la cámara?",
      titleEn: "Ready to stop improvising on camera?",
      bodyEs: "En Coimagen Media convertimos tu contenido en un sistema: guiones, embudos y automatización que trabajan todos los días. Agenda tu evaluación gratis en coimagenmedia.com o escríbenos por WhatsApp al 664 476 9223. Y si quieres las 10 estructuras, los más de 30 ganchos clasificados, las 3 plantillas listas y los 6 prompts de IA para guiones en tu propia voz, el Reels Script Factory (PDF de 10 páginas, $11 USD) está en tienda.coimagenmedia.com.",
      bodyEn: "At Coimagen Media, we turn your content into a system: scripts, funnels, and automation working every day. Schedule your free assessment at coimagenmedia.com or message us on WhatsApp at +52 664 476 9223. For the 10 formats, more than 30 categorized hooks, 3 ready-to-use templates, and 6 AI prompts for scripts in your own voice, find Reels Script Factory, a 10-page PDF priced at $11 USD, at tienda.coimagenmedia.com.",
    },
  ],
  faq: [
    {
      q: { es: "¿Cuánto debe durar un reel?", en: "How long should a reel be?" },
      a: { es: "La duración ideal del sistema es de 21 a 34 segundos: gancho de 0 a 3 segundos, desarrollo de una sola idea hasta el segundo 40 como máximo y llamada a la acción en los últimos 5 segundos.", en: "The system’s target duration is 21 to 34 seconds: a hook in seconds 0 to 3, development of one idea up to second 40 at most, and a call to action in the final 5 seconds." },
    },
    {
      q: { es: "¿Cuántas acciones debe pedir un reel al final?", en: "How many actions should a reel ask for at the end?" },
      a: { es: "Una sola. Pedir que comenten, que guarden y que vayan al enlace a la vez genera fatiga de decisión y la respuesta por defecto es no hacer nada. Si quieres comentarios, pides un comentario, y luego mides si el guion funcionó para eso.", en: "Just one. Asking people to comment, save, and visit a link at the same time creates decision fatigue, and the default response is to do nothing. If you want comments, ask for a comment, then measure whether the script achieved that goal." },
    },
    {
      q: { es: "¿La IA hace que todos los guiones suenen iguales?", en: "Does AI make every script sound the same?" },
      a: { es: "Solo si la usas como un buscador. El Prompt 0 le da a la IA tres textos tuyos para que aprenda tu estilo y te devuelva los cinco rasgos de tu voz; todo guion nuevo se filtra por esos rasgos. Y la regla 80-20 reserva el 20% final para lo humano: la anécdota, el gesto y la improvisación controlada.", en: "Only if you use it like a search engine. Prompt 0 gives AI three pieces of your own writing so it can learn your style and return five traits defining your voice. Every new script is filtered through those traits. The 80–20 rule also reserves the final 20% for human input: anecdotes, gestures, and controlled improvisation." },
    },
  ],
  relatedSlugs: ["ia-pequenas-empresas", "agentes-ia-empresas"],
};

export const salesCopyBlogContent: BlogContent = {
  slug: "escribe-textos-que-venden",
  categoryEs: "IA",
  categoryEn: "AI",
  categoryColor: "#00CFFF",
  icon: "🤖",
  date: "2026-11-24",
  readTimeMin: 8,
  accentHex: "#00CFFF",
  titleEs: "Escribe textos que venden: copy y llamados a la acción",
  titleEn: "Write copy that sells: copywriting and calls to action",
  subtitleEs: "Tu texto puede ser bueno y aun así no vender nada: si no tiene estructura y no cierra con una sola acción clara, el lector se va. Estas son las fórmulas y las reglas del llamado a la acción que convierten la atención en acción.",
  subtitleEn: "Your writing can be good and still sell nothing. Without structure and a clear closing action, readers leave. These copywriting formulas and call-to-action rules turn attention into action.",
  sections: [
    {
      type: "intro",
      bodyEs: "Alguien se sienta frente a la computadora, teclea durante una hora un párrafo inmenso, volcando ahí toda su pasión, sus ideas y sus frustraciones. Llega al final, respira hondo y escribe: si a alguien le interesa, que me escriba. Le da a publicar y llega el silencio. Es la sensación de hablarle a la pared, y la causa casi nunca es falta de creatividad: es falta de estructura. Escribir para vender es un sistema, no un don. Este tema lo conversamos en el episodio del pódcast de Coimagen Media «Escribe textos que venden: copy y llamados a la acción», estrenado el viernes 6 de noviembre de 2026 en Spotify, y aquí va ampliado, con las fórmulas, las reglas del cierre y los errores que hay que evitar.",
      bodyEn: "Someone sits down at a computer and spends an hour typing an enormous paragraph, pouring in all their passion, ideas, and frustrations. At the end, they take a deep breath and write: if anyone is interested, message me. They hit publish, and silence follows. It feels like talking to a wall. The cause is rarely a lack of creativity. It is a lack of structure. Writing to sell is a system rather than an innate gift. We discuss this in the Coimagen Media podcast episode “Escribe textos que venden: copy y llamados a la acción,” released Friday, November 6, 2026 on Spotify. Here we expand on the formulas, closing rules, and mistakes to avoid.",
    },
    {
      type: "heading",
      titleEs: "Por qué fracasan la mayoría de los textos",
      titleEn: "Why most copy fails",
    },
    {
      type: "paragraph",
      bodyEs: "Los textos fracasan masivamente por dos razones extremadamente mundanas. La primera es la ausencia total de jerarquía visual y argumental: párrafos kilométricos de ideas sueltas que agotan cognitivamente a cualquier lector antes de llegar a la tercera línea. El cerebro dice «no puedo con esto» y se va. La segunda es la parálisis al final del texto: la falta de una indicación clara de qué hacer a continuación. Si falta esa llamada a la acción, el texto queda muerto.",
      bodyEn: "Copy often fails for two very ordinary reasons. The first is a complete lack of visual and argumentative hierarchy: enormous paragraphs of disconnected ideas that exhaust readers before the third line. The brain says “I cannot deal with this” and leaves. The second is paralysis at the end of the text: no clear instruction about what to do next. Without a call to action, the copy goes nowhere.",
    },
    {
      type: "paragraph",
      bodyEs: "Para ubicar el copy, piensa en el Método C30 de Coimagen Media: una cadena de siete eslabones —contexto, idea, gancho, creativo, copy, pública y convierte— y el copy es el paso número cinco. Hay muchísimo trabajo antes de escribir una sola palabra persuasiva. El gancho ya cumplió su misión de detener a la persona que hacía scroll infinito. El texto es el terreno donde esa atención prestada debe transformarse en interés real y, finalmente, en acción. Si el gancho es el escaparate brillante que te hace frenar en seco y entrar a la tienda, el texto es el dependiente experto que te guía por los pasillos hasta la caja. Si la redacción falla ahí, la atención se va en milisegundos y todo el trabajo invertido en el diseño o el video se va a la basura.",
      bodyEn: "To understand where copy fits, consider Coimagen Media’s C30 Method, a chain of seven links: context, idea, hook, creative, copy, publish, and convert. Copy is step five. A great deal happens before a single persuasive word is written. The hook has already stopped someone from scrolling. The copy is where that borrowed attention must become real interest and, ultimately, action. If the hook is the bright storefront that makes you stop and enter, the copy is the knowledgeable assistant guiding you through the aisles to the checkout. If the writing fails there, attention disappears in milliseconds, wasting the work invested in the design or video.",
    },
    {
      type: "heading",
      titleEs: "Las 8 fórmulas: el esqueleto antes que la inspiración",
      titleEn: "8 formulas: structure before inspiration",
    },
    {
      type: "paragraph",
      bodyEs: "La tesis central es que estructurar un texto persuasivo y lograr que alguien pase a la acción no es un talento innato reservado a genios de la literatura: es un método puramente técnico y replicable. Las ocho fórmulas son esqueletos argumentales prefabricados, plantillas con corchetes donde se inserta la información propia. Lo interesante es la intención psicológica que esconde cada bloque.",
      bodyEn: "The central idea is that structuring persuasive copy and getting someone to act is a technical, repeatable method. The eight formulas are ready-made argumentative frameworks: templates with placeholders for your own information. What makes them interesting is the psychological purpose behind each part.",
    },
    {
      type: "list",
      items: [
        { es: "PAS — Problema, Agitación, Solución: plantea el problema, agita el costo real de no resolverlo y luego ofrece la solución.", en: "PAS — Problem, Agitation, Solution: present the problem, emphasize the real cost of leaving it unresolved, then offer the solution." },
        { es: "AIDA — Atención, Interés, Deseo, Acción: la secuencia clásica que lleva al lector desde que te nota hasta que actúa.", en: "AIDA — Attention, Interest, Desire, Action: the classic sequence that moves readers from noticing you to taking action." },
        { es: "Antes / Después / Puente: pinta dos escenarios opuestos, el antes lleno de fricción y el después con el obstáculo eliminado; el producto queda relegado a ser el puente.", en: "Before / After / Bridge: describe two contrasting scenarios, one full of friction and another with the obstacle removed. The product becomes the bridge connecting them." },
        { es: "Las 4 P: la estructura de cuatro elementos del kit para ordenar el argumento de venta.", en: "The 4 Ps: the kit’s four-part framework for organizing a sales argument." },
        { es: "FAB — Características, Ventajas, Beneficios: los aficionados venden características, los profesionales comunican beneficios.", en: "FAB — Features, Advantages, Benefits: amateurs sell features, while professionals communicate benefits." },
        { es: "Historia + Oferta: las historias bajan las defensas; un argumento lógico invita al debate, una historia personal genera identificación.", en: "Story + Offer: stories lower defenses. A logical argument invites debate, while a personal story creates identification." },
        { es: "Objeción + Refutación: saca a relucir la mayor duda que genera lo que ofreces y rebátela con lógica y honestidad antes de que el lector descarte la idea.", en: "Objection + Rebuttal: bring up the biggest concern about your offer and address it with logic and honesty before the reader dismisses the idea." },
        { es: "Lista + CTA: una lista de valor que termina en una llamada a la acción; ideal para educar de forma suave antes de pedir algo.", en: "List + CTA: a useful list ending in a call to action, ideal for gently educating readers before asking for something." },
      ],
    },
    {
      type: "image",
      image: "/images/blog/copy-cta-1.webp",
      altEs: "Escritorio de trabajo visto desde arriba: laptop con la pantalla en blanco, libreta azul, pluma dorada y una taza de café, en tonos azul marino y dorado",
      altEn: "Overhead view of a desk with a laptop showing a blank screen, a blue notebook, a gold pen, and a coffee cup in navy and gold tones",
    },
    {
      type: "heading",
      titleEs: "PAS en acción: el ejemplo de la consultoría",
      titleEn: "PAS in action: a consulting example",
    },
    {
      type: "paragraph",
      bodyEs: "La fase intermedia de PAS, la agitación, es la que más se subestima. El cerebro humano es experto en ignorar problemas latentes: si alguien tiene una pequeña gotera en el garaje, pone un cubo debajo y se olvida. La agitación destruye esa inercia y obliga a visualizar el costo real y futuro de no solucionar el problema hoy. Un texto sin estructura para una consultoría financiera diría: «ofrezco asesoría contable para emprendedores». Con PAS arranca con el problema —llega el fin del trimestre y tus facturas son un caos—, sigue la agitación —te pasas el fin de semana entero cuadrando números, sacrificando tiempo con tu familia, y aun así vives con el miedo constante de que Hacienda te ponga una multa terrible— y cierra con la solución —mi servicio de consultoría asume toda esa carga para que tú te dediques exclusivamente a hacer crecer tu negocio—. El contraste es abismal, porque el segundo texto demuestra una empatía profunda: quien lo lee siente que le han leído la mente.",
      bodyEn: "The middle part of PAS, agitation, is the most underestimated. The human brain is good at ignoring underlying problems: someone with a small garage leak puts a bucket underneath and forgets about it. Agitation interrupts that inertia by showing the real future cost of leaving the problem unresolved today. Unstructured financial consulting copy might say “I offer accounting advice for entrepreneurs.” PAS starts with the problem: the quarter ends and your invoices are a mess. Then comes agitation: you spend the entire weekend reconciling numbers, sacrificing family time, while still fearing a steep tax penalty. It closes with the solution: my consulting service takes on that burden so you can focus exclusively on growing your business. The contrast is enormous because the second version demonstrates deep empathy. Readers feel understood.",
    },
    {
      type: "paragraph",
      bodyEs: "La fórmula FAB corrige otro error clásico: sonar como un manual de instrucciones técnico. La característica es un dato frío, la ventaja explica qué hace ese dato, pero el beneficio es el impacto emocional en la vida de la persona. Si alguien vende una mochila técnica para fotógrafos, la característica sería «fabricada con nylon balístico 1680D», la ventaja es que es completamente impermeable y resistente a cortes, y el beneficio real es: camina por cualquier ciudad bajo una tormenta con la tranquilidad absoluta de que tus cámaras y objetivos más delicados están a salvo. Ese es el salto: traducir el idioma de la fábrica al idioma de las emociones humanas.",
      bodyEn: "FAB corrects another classic mistake: sounding like a technical instruction manual. A feature is a cold fact, an advantage explains what that fact does, and a benefit describes its emotional impact on someone’s life. For a technical backpack for photographers, the feature might be “made from 1680D ballistic nylon.” The advantage is that it is fully waterproof and cut-resistant. The real benefit is walking through any city in a storm with complete peace of mind that your most delicate cameras and lenses are safe. That is the leap: translating the language of the factory into the language of human emotions.",
    },
    {
      type: "heading",
      titleEs: "El árbol de decisiones de 30 segundos",
      titleEn: "The 30-second decision tree",
    },
    {
      type: "paragraph",
      bodyEs: "Con ocho fórmulas disponibles, elegir puede paralizar. Por eso el método incluye un árbol de decisiones de 30 segundos: si el público suele dudar mucho de tu sector, aplicas Objeción + Refutación; si el objetivo es educar de forma suave antes de pedir algo, te decantas por una lista de valor terminada en una llamada a la acción. El árbol quita carga mental: da los cimientos prefabricados para que toda la energía creativa se destine al contenido real y a la empatía con quien lee, en lugar de perder horas decidiendo cómo ordenar los párrafos.",
      bodyEn: "Having eight formulas can make choosing one paralyzing. The method therefore includes a 30-second decision tree. If people tend to be skeptical about your industry, use Objection + Rebuttal. If you want to educate gently before asking for something, choose a useful list ending in a call to action. The tree reduces mental effort by providing the foundation, so creative energy can go toward the substance and empathy rather than spending hours deciding how to order paragraphs.",
    },
    {
      type: "heading",
      titleEs: "La anatomía del CTA: la última línea es la más importante",
      titleEn: "The anatomy of a CTA: the final line matters most",
    },
    {
      type: "paragraph",
      bodyEs: "Todo el texto existe con el único propósito de que la persona llegue a esa línea final y tome una decisión. Si la llamada a la acción falla, el 100% del esfuerzo anterior se va por el desagüe. Por eso las reglas son estrictas.",
      bodyEn: "The whole text exists to bring someone to that last line and a decision. If the call to action fails, all the earlier effort is wasted. That is why its rules are strict.",
    },
    {
      type: "list",
      items: [
        { es: "Un solo verbo de acción: terminar un correo o un post diciendo «escríbeme, sígueme, guarda este mensaje y comparte con un amigo» no es una indicación, es una exigencia múltiple. El cerebro se satura y, por defecto, no hace ninguna.", en: "Use a single action verb. Ending an email or post with “message me, follow me, save this, and share it with a friend” gives readers multiple demands. The brain becomes overloaded and, by default, does none of them." },
        { es: "Decir qué pasa exactamente después del clic: un botón que diga «contáctame» genera ansiedad porque no sabes qué va a pasar. «Escríbeme la palabra agenda y te enviaré un calendario gratuito» elimina la incertidumbre de golpe.", en: "Explain exactly what happens after the click. A button saying “contact me” can create anxiety because the next step is unclear. “Message me the word calendar and I will send you a free calendar” removes that uncertainty." },
        { es: "Incluir el beneficio explícito: la llamada a la acción debe responder a la pregunta silenciosa de «¿y yo qué gano haciendo esto?», porque ante la duda el cerebro siempre opta por conservar energía y seguir de largo.", en: "State the benefit explicitly. A call to action must answer the silent question “What do I gain by doing this?” When in doubt, the brain chooses to conserve energy and move on." },
        { es: "Urgencia solo si es real: la urgencia inventada o la escasez artificial destruyen por completo la reputación en el instante en que el usuario descubre el engaño. Si no hay un límite real de plazas o una fecha de cierre inamovible, jamás se debe inventar. Nada de falsos temporizadores.", en: "Use urgency only when it is real. Invented urgency or artificial scarcity destroys your reputation as soon as someone discovers the deception. Never invent limited availability or a deadline. Avoid fake countdown timers." },
        { es: "Visible y repetido: el llamado a la acción debe verse y repetirse en el texto, no esconderse al final en letra pequeña.", en: "Make it visible and repeat it. The call to action should appear clearly throughout the text instead of being hidden at the end in small print." },
      ],
    },
    {
      type: "paragraph",
      bodyEs: "En ausencia de urgencia genuina, la fuerza del cierre debe recaer íntegramente en el beneficio que pierde la persona por cada día que retrasa la decisión. Es como invitar a unos amigos a cenar: si les dices «venid a cenar un día de estos», no aparecerá nadie. Tienes que decir la hora exacta, la dirección y qué vas a preparar. Dar un paso, ya sea hacer clic o enviar un mensaje, requiere un gasto de energía mínimo, pero lo requiere.",
      bodyEn: "Without genuine urgency, the close must depend on the benefit someone misses each day they postpone a decision. Think of inviting friends to dinner: “come over sometime” rarely brings anyone to your door. You need an exact time, an address, and a meal. Taking a step, whether clicking or sending a message, takes a small but real amount of energy.",
    },
    {
      type: "image",
      image: "/images/blog/copy-cta-2.webp",
      altEs: "Avión de papel dorado volando hacia un blanco circular con una flecha en el centro, sobre fondo azul marino",
      altEn: "A golden paper airplane flying toward a circular target with an arrow in its center against a navy background",
    },
    {
      type: "heading",
      titleEs: "3 errores que hunden cualquier texto",
      titleEn: "3 mistakes that undermine any copy",
    },
    {
      type: "list",
      items: [
        { es: "Hablar de ti, no de ellos: textos plagados de «somos una empresa líder con 15 años de experiencia, mi innovadora metodología, mis premios». Mientras tanto, quien lee solo piensa: «¿y a mí qué?». La regla es obligarse a escribir dos frases sobre el problema, los miedos o los deseos de quien lee por cada frase de credenciales propias.", en: "Talking about yourself instead of your readers: copy packed with “we are a leading company with 15 years of experience, my innovative methodology, my awards.” Meanwhile, readers are thinking “What does that do for me?” The rule is to write two sentences about the reader’s problems, fears, or desires for every sentence about your own credentials." },
        { es: "Sobreprometer: frases como «transforma tu vida en tres días garantizado» pueden generar conversiones a corto plazo, pero cuando la realidad choca con esa expectativa, la confianza se fractura para siempre. La directriz es prometer únicamente lo que está bajo tu control absoluto: el acompañamiento, la metodología, la dedicación. Nunca un resultado mágico.", en: "Overpromising: phrases such as “transform your life in three days, guaranteed” may generate short-term conversions, but trust breaks when reality clashes with expectations. Promise only what you fully control: support, methodology, and commitment. Never promise a magical result." },
        { es: "Mezclar estructuras: empezar con una anécdota íntima, saltar a una lista de especificaciones técnicas frías y terminar con un mensaje agresivo de escasez. La regla de oro es elegir una sola fórmula antes de empezar y ser fiel a ese hilo conductor hasta la última línea.", en: "Mixing structures: starting with an intimate anecdote, switching to a cold list of technical specifications, then finishing with an aggressive scarcity message. Choose one formula before writing and follow that thread through the final line." },
      ],
    },
    {
      type: "heading",
      titleEs: "La IA como editor implacable, no como autora",
      titleEn: "AI as a demanding editor rather than the author",
    },
    {
      type: "paragraph",
      bodyEs: "El método no plantea la inteligencia artificial como un botón mágico que escupe textos perfectos, sino como un asistente estratégico y un editor implacable. El Prompt N.º 6 está pensado para auditar: le pasas tu borrador a la IA y le pides que te puntúe del 1 al 5 la claridad, si ha respetado la estructura, la fuerza del cierre y el tono. Te saca los colores en privado antes de que cometas el error en público. Y para la fase de creación, el método insiste en alimentar primero a la herramienta con un Documento de Contexto de marca: identidad, tono de voz, valores y vocabulario habitual, para no sonar como un robot genérico. El kit incluye 6 prompts de IA: generador con fórmula elegida, 10 variaciones de CTA, reescritor de copy débil, copy con tu Documento de Contexto, email de ventas completo y diagnóstico de copy.",
      bodyEn: "The method treats AI as a strategic assistant and demanding editor. Prompt No. 6 is designed for review: give AI your draft and ask it to score clarity, adherence to structure, strength of the close, and tone from 1 to 5. It identifies weaknesses privately before they become public mistakes. For creation, the method first asks you to supply a Brand Context Document covering identity, voice, values, and everyday vocabulary, so the result avoids a generic robotic tone. The kit includes 6 AI prompts: a generator using your chosen formula, 10 CTA variations, a rewriter for weak copy, copy based on your Context Document, a complete sales email, and a copy diagnostic.",
    },
    {
      type: "paragraph",
      bodyEs: "Hay una cláusula de seguridad ineludible: cualquier texto generado por una inteligencia artificial debe considerarse única y exclusivamente como el punto de partida, un primer borrador. La máquina se encarga de aplicar rígidamente el andamiaje psicológico de las fórmulas, pero el ser humano tiene la obligación de inyectar la anécdota real, el matiz y la empatía auténtica. La inteligencia artificial proporciona el esqueleto, pero la experiencia humana es lo que le da la sangre y el alma al texto.",
      bodyEn: "There is an essential safeguard: any AI-generated text is only a starting point, a first draft. The machine applies the formulas’ psychological framework, but a human must add real anecdotes, nuance, and authentic empathy. AI supplies the skeleton, while human experience gives the writing its blood and soul.",
    },
    {
      type: "highlight",
      titleEs: "Los 3 pilares",
      titleEn: "The 3 pillars",
      bodyEs: "Lograr que alguien preste atención y decida actuar se reduce a tres pilares: apoyarse en un esqueleto argumental probado, eligiendo una de las ocho fórmulas; limpiar el texto de vicios destructivos, como los muros de palabras o el exceso de ego; y culminar siempre el mensaje pidiendo una sola cosa, de forma clara y dejando cristalino el beneficio para la otra persona. Y hay una reflexión final: cuando estructurar mensajes persuasivos se democratice y todos usen las fórmulas perfectas, la técnica dejará de ser una ventaja competitiva. Lo único que servirá de filtro será la calidad brutal, la autenticidad innegable y la honestidad radical del servicio o de la idea que hay detrás.",
      bodyEn: "Getting someone to pay attention and act comes down to three pillars: use a proven argumentative framework by choosing one of the eight formulas, remove destructive habits such as walls of text and excessive self-promotion, and always finish by asking for one thing clearly while making the reader’s benefit obvious. One final thought: when persuasive structures become widely available and everyone uses the perfect formulas, technique will cease to be a competitive advantage. What will set an offer apart is the quality, undeniable authenticity, and radical honesty of the service or idea behind it.",
    },
    {
      type: "heading",
      titleEs: "Qué puedes aplicar hoy",
      titleEn: "What you can apply today",
    },
    {
      type: "list",
      items: [
        { es: "Elige una fórmula antes de escribir y no la sueltes hasta la última línea.", en: "Choose a formula before writing and follow it through the final line." },
        { es: "Revisa tu último texto: ¿tiene jerarquía o es un muro? ¿Cierra con una sola acción clara?", en: "Review your most recent copy. Does it have a hierarchy, or is it a wall of text? Does it close with one clear action?" },
        { es: "Reescribe tu llamado a la acción con un solo verbo, qué pasa después del clic y el beneficio explícito.", en: "Rewrite your call to action with one verb, an explanation of what happens after the click, and an explicit benefit." },
        { es: "Por cada frase que hable de ti, escribe dos que hablen de tu lector.", en: "For every sentence about yourself, write two about your reader." },
        { es: "Pásale tu borrador a la IA con el Prompt N.º 6 y corrige en privado antes de publicar.", en: "Give AI your draft with Prompt No. 6 and revise it privately before publishing." },
      ],
    },
    {
      type: "highlight",
      titleEs: "¿Quieres que tus textos vendan por ti?",
      titleEn: "Want your copy to sell for you?",
      bodyEs: "En Coimagen Media convertimos tu contenido en un sistema: copy, embudos y automatización que trabajan todos los días. Agenda tu evaluación gratis en coimagenmedia.com o escríbenos por WhatsApp al 664 476 9223. Y si quieres las 8 fórmulas, el banco de 50 llamados a la acción y los 6 prompts de IA listos para usar, el Copy & CTA Kit (PDF de 12 páginas, $11 USD) está en tienda.coimagenmedia.com.",
      bodyEn: "At Coimagen Media, we turn your content into a system: copy, funnels, and automation working every day. Schedule your free assessment at coimagenmedia.com or message us on WhatsApp at +52 664 476 9223. For the 8 formulas, the bank of 50 calls to action, and 6 ready-to-use AI prompts, find the Copy & CTA Kit, a 12-page PDF priced at $11 USD, at tienda.coimagenmedia.com.",
    },
  ],
  faq: [
    {
      q: { es: "¿El copy es talento o sistema?", en: "Is copywriting a talent or a system?" },
      a: { es: "Sistema. Escribir para vender no es un talento innato reservado a genios de la literatura: es un método técnico y replicable. Las ocho fórmulas son esqueletos argumentales prefabricados; lo que cambia es la información que tú insertas en ellos.", en: "A system. Writing to sell is a technical, repeatable method. The eight formulas are ready-made argumentative frameworks. What changes is the information you put into them." },
    },
    {
      q: { es: "¿Cuántos verbos de acción debe tener un llamado a la acción?", en: "How many action verbs should a call to action contain?" },
      a: { es: "Uno solo. Pedir «escríbeme, sígueme, guarda y comparte» a la vez satura al cerebro y, por defecto, la persona no hace ninguna de las acciones. Antes de publicar hay que decidir cuál es la única acción que mueve la aguja y pedir exclusivamente esa.", en: "Just one. Asking someone to “message me, follow me, save, and share” all at once overloads the brain, and the default response is to do none of them. Before publishing, decide on the one action that matters and ask only for that." },
    },
    {
      q: { es: "¿La IA puede escribir mis textos por mí?", en: "Can AI write my copy for me?" },
      a: { es: "Como punto de partida, sí; como autora, no. La IA aplica el andamiaje de las fórmulas y audita tu borrador con el Prompt N.º 6, pero el ser humano debe inyectar la anécdota real, el matiz y la empatía. La IA da el esqueleto; la experiencia humana da la sangre y el alma.", en: "As a starting point, yes. AI applies the formulas’ framework and reviews your draft with Prompt No. 6, but a human must add real anecdotes, nuance, and empathy. AI supplies the skeleton. Human experience gives it blood and soul." },
    },
  ],
  relatedSlugs: ["comercio-agentico-negocios", "google-ads-vs-seo"],
};
