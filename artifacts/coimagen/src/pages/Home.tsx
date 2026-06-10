import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Globe, Monitor, Search, Users, Zap, Bell, ChevronRight,
  CheckCircle, ArrowRight, Phone, Mail, MapPin,
  Brain, TrendingUp, MessageSquare, Menu, X,
  Stethoscope, Scale, PawPrint, Scissors, UtensilsCrossed,
  Building2, ShoppingBag, Bot, Workflow, Database,
  HeartHandshake, ListChecks, MessagesSquare, Cpu, Flame
} from "lucide-react";
import logoPath from "@assets/logo-coimagen_1781127053538.png";

type Lang = "es" | "en";

const t = {
  es: {
    nav: {
      services: "Servicios",
      diagnostic: "Diagnóstico",
      portfolio: "Portafolio",
      contact: "Contacto",
      cta: "Diagnóstico Gratuito",
    },
    hero: {
      title: "¿Tu negocio está perdiendo clientes y no sabes por qué?",
      subtitle:
        "Descubre qué oportunidades digitales están frenando tu crecimiento. Recibe un Diagnóstico Digital Gratuito y conoce cómo atraer más clientes, automatizar seguimientos y convertir tu presencia digital en ventas reales.",
      cta1: "Solicitar Diagnóstico Gratuito",
      cta2: "Ver soluciones",
      badges: ["Marketing Digital", "IA & Automatización", "CRM & Prospectos", "SEO Local"],
    },
    pain: {
      title: "¿Te identificas con alguno de estos problemas?",
      items: [
        { title: "Tu página web no genera contactos", desc: "Tienes sitio web pero nadie te escribe ni llama." },
        { title: "Tus redes sociales no convierten", desc: "Publicas contenido pero no se traduce en clientes." },
        { title: "No apareces bien en Google", desc: "Tu competencia te supera en búsquedas locales." },
        { title: "Tu competencia gana más clientes", desc: "Ves cómo otros negocios crecen mientras tú estancas." },
        { title: "Pierdes tiempo en tareas repetitivas", desc: "Respondes manualmente mensajes y seguimientos." },
        { title: "Sin seguimiento automático", desc: "Los prospectos se enfrían y no tienes sistema." },
      ],
    },
    solution: {
      title: "Consigue más clientes sin depender solo de recomendaciones, publicaciones improvisadas o seguimiento manual.",
      desc: "En Coimagen diseñamos sistemas digitales que ayudan a captar prospectos, dar seguimiento automático y convertir oportunidades en clientes reales usando marketing, automatización e inteligencia artificial.",
      features: [
        { title: "Marketing Digital", desc: "Estrategias que convierten visitas en clientes reales." },
        { title: "Inteligencia Artificial", desc: "Herramientas de IA para escalar tu negocio." },
        { title: "Automatización", desc: "Procesos automáticos que trabajan 24/7 por ti." },
        { title: "CRM & Prospectos", desc: "Seguimiento inteligente de cada oportunidad." },
      ],
    },
    trust: {
      title: "No vendemos herramientas. Diseñamos soluciones según lo que tu negocio necesita.",
      desc: "Primero escuchamos. Después diagnosticamos. Luego recomendamos. Y solo entonces implementamos.",
      cards: [
        { title: "Diagnóstico antes de vender", desc: "Entendemos tu negocio antes de proponer cualquier solución." },
        { title: "Soluciones personalizadas", desc: "Nada genérico. Todo diseñado para tu industria y metas." },
        { title: "Seguimiento claro", desc: "Sabes exactamente qué se hace, cuándo y por qué." },
        { title: "Procesos automatizados", desc: "Tu negocio trabaja incluso cuando tú no puedes." },
      ],
    },
    diagnostic: {
      title: "Diagnóstico Digital Express",
      subtitle: "Responde 5 preguntas y descubre las oportunidades que está perdiendo tu negocio.",
      questions: [
        { q: "¿Tu negocio tiene sitio web?", opts: ["Sí", "No"] },
        { q: "¿Tu sitio web genera clientes regularmente?", opts: ["Sí", "No", "No estoy seguro"] },
        { q: "¿Tu negocio aparece en Google Maps o Google Business?", opts: ["Sí", "No", "No sé"] },
        { q: "¿Tienes seguimiento automático para prospectos?", opts: ["Sí", "No"] },
        { q: "¿Cuál es tu principal reto actualmente?", opts: ["Conseguir más clientes", "Más ventas", "Automatizar procesos", "Mejorar presencia digital", "Otro"] },
      ],
      resultTitle: "Tu negocio puede tener oportunidades digitales no aprovechadas.",
      resultDesc: "Con base en tus respuestas, podemos realizar un Diagnóstico Digital Gratuito más completo para detectar áreas de mejora y recomendarte un plan personalizado.",
      formTitle: "Solicita tu diagnóstico completo",
      fields: {
        name: "Nombre completo",
        business: "Nombre del negocio",
        city: "Ciudad",
        industry: "Giro del negocio",
        email: "Email",
        whatsapp: "WhatsApp",
        website: "Sitio web (si tienes)",
        social: "Facebook o Instagram",
        message: "Mensaje adicional",
      },
      submit: "Solicitar Diagnóstico Completo",
      success: "¡Solicitud enviada! Te contactaremos pronto.",
    },
    services: {
      title: "Nuestros Paquetes",
      subtitle: "Soluciones diseñadas para cada etapa de tu negocio.",
      priceNote: "Los precios pueden variar según necesidades, alcance y diagnóstico del negocio.",
      popularLabel: "Más popular",
      packages: [
        {
          name: "Presencia Digital Starter",
          tag: "Paquete A",
          price: "Desde $99 USD/mes",
          items: ["Landing Page profesional", "Integración WhatsApp", "Formulario de contacto", "Hosting incluido", "Actualizaciones básicas"],
        },
        {
          name: "Growth Digital",
          tag: "Paquete B",
          price: "Desde $149 USD/mes",
          popular: true,
          items: ["Todo lo de Starter", "Google Business Profile", "SEO Local", "Blog con IA", "Optimización de conversión"],
        },
        {
          name: "Growth Automation",
          tag: "Paquete C",
          price: "Desde $199 USD/mes",
          items: ["Todo lo de Growth", "Automatización WhatsApp", "CRM básico", "Seguimiento de prospectos", "Reportes mensuales"],
        },
      ],
      cta: "Solicitar información",
    },
    founders: {
      tag: "Oferta Fundadores",
      title: "Cupos limitados para clientes fundadores",
      desc: "Estamos aceptando un número limitado de negocios para nuestra etapa inicial. Los primeros 10 clientes reciben precio preferencial de lanzamiento.",
      spotsLeft: "Primeros 10 clientes",
      cta: "Quiero ser fundador",
    },
    highticket: {
      tag: "Solución Premium",
      title: "Transformación Digital Coimagen",
      desc: "Implementamos sistemas personalizados de IA, automatización, CRM, agentes digitales y procesos inteligentes para negocios que quieren escalar.",
      features: ["IA Personalizada", "Automatización Total", "CRM Avanzado", "Agentes Digitales"],
      cta: "Agendar consulta",
    },
    sectors: {
      title: "Sectores que atendemos",
      items: ["Médicos", "Dentistas", "Abogados", "Veterinarias", "Estéticas", "Restaurantes", "Inmobiliarias", "Negocios Locales"],
    },
    process: {
      title: "Cómo trabajamos",
      steps: [
        { title: "Solicitas el diagnóstico", desc: "Completas el formulario y nos cuentas sobre tu negocio." },
        { title: "Analizamos tu presencia", desc: "Revisamos tu sitio, redes y visibilidad en Google." },
        { title: "Detectamos oportunidades", desc: "Identificamos los puntos débiles y áreas de mejora." },
        { title: "Te presentamos la solución", desc: "Diseñamos un plan personalizado para tu negocio." },
        { title: "Implementamos y optimizamos", desc: "Ejecutamos y medimos resultados para escalar." },
      ],
    },
    authority: {
      title: "Marketing, automatización e inteligencia artificial para negocios reales.",
      desc: "Coimagen Media ayuda a negocios locales y profesionales a simplificar procesos, captar prospectos y convertir su presencia digital en una herramienta de crecimiento.",
      stats: [
        { value: "Activos", label: "Proyectos en desarrollo" },
        { value: "Reales", label: "Laboratorios reales" },
        { value: "TJ / SD", label: "Tijuana / San Diego" },
        { value: "IA+", label: "Marketing + IA + Automatización" },
      ],
    },
    portfolio: {
      title: "Proyectos y laboratorios de crecimiento",
      subtitle: "Estos proyectos nos permiten probar, optimizar y documentar procesos reales antes de implementarlos con nuevos clientes.",
      cta: "Ver proyecto",
      projects: [
        { name: "Dr. Segovia Neurocirugía", tag: "Salud", color: "from-blue-600 to-indigo-800" },
        { name: "Clínica EMT", tag: "Salud", color: "from-teal-600 to-cyan-800" },
        { name: "Chimichimi", tag: "Restaurante", color: "from-orange-600 to-red-800" },
        { name: "Conchas Tower", tag: "Inmobiliaria", color: "from-purple-600 to-violet-800" },
        { name: "Coimagen OS", tag: "Tecnología", color: "from-slate-600 to-gray-800" },
      ],
    },
    finalcta: {
      title: "Descubre qué oportunidades está perdiendo tu negocio.",
      cta: "Solicitar Diagnóstico Digital Gratuito",
    },
    footer: {
      tagline: "Sistemas digitales para negocios que quieren crecer.",
      navLinks: [
        { label: "Servicios", id: "servicios" },
        { label: "Diagnóstico", id: "diagnostico" },
        { label: "Portafolio", id: "portafolio" },
        { label: "Contacto", id: "contacto" },
        { label: "Aviso de Privacidad", id: "" },
        { label: "Términos de Servicio", id: "" },
      ],
      rights: "© 2026 Coimagen Media Agency. Todos los derechos reservados.",
    },
    whatsapp: "¡Chatea con nosotros!",
  },
  en: {
    nav: {
      services: "Services",
      diagnostic: "Diagnosis",
      portfolio: "Portfolio",
      contact: "Contact",
      cta: "Free Diagnosis",
    },
    hero: {
      title: "Is your business losing customers and you don't know why?",
      subtitle:
        "Discover the digital opportunities holding your business back. Get a Free Digital Diagnosis and learn how to attract more customers, automate follow-ups, and turn your online presence into real sales.",
      cta1: "Request Free Diagnosis",
      cta2: "View Solutions",
      badges: ["Digital Marketing", "AI & Automation", "CRM & Leads", "Local SEO"],
    },
    pain: {
      title: "Do any of these problems sound familiar?",
      items: [
        { title: "Your website doesn't generate leads", desc: "You have a website but nobody contacts you." },
        { title: "Your social media doesn't convert", desc: "You post content but it doesn't translate to clients." },
        { title: "You don't rank well on Google", desc: "Your competition outranks you in local searches." },
        { title: "Your competition gets more clients", desc: "You watch other businesses grow while you stagnate." },
        { title: "You waste time on repetitive tasks", desc: "Manually responding to messages and follow-ups." },
        { title: "No automatic follow-up system", desc: "Prospects go cold and you have no system." },
      ],
    },
    solution: {
      title: "Get more customers without relying only on referrals, random posts, or manual follow-up.",
      desc: "At Coimagen, we design digital systems that help capture leads, automate follow-ups, and turn opportunities into real customers using marketing, automation, and artificial intelligence.",
      features: [
        { title: "Digital Marketing", desc: "Strategies that convert visits into real clients." },
        { title: "Artificial Intelligence", desc: "AI tools to scale your business." },
        { title: "Automation", desc: "Automatic processes that work 24/7 for you." },
        { title: "CRM & Leads", desc: "Smart tracking of every opportunity." },
      ],
    },
    trust: {
      title: "We don't sell tools. We design solutions based on what your business actually needs.",
      desc: "First we listen. Then we diagnose. Then we recommend. Only then do we implement.",
      cards: [
        { title: "Diagnosis before selling", desc: "We understand your business before proposing any solution." },
        { title: "Custom solutions", desc: "Nothing generic. Everything designed for your industry and goals." },
        { title: "Clear follow-up", desc: "You know exactly what's being done, when, and why." },
        { title: "Automated processes", desc: "Your business works even when you can't." },
      ],
    },
    diagnostic: {
      title: "Digital Diagnosis Express",
      subtitle: "Answer 5 questions and discover the opportunities your business is missing.",
      questions: [
        { q: "Does your business have a website?", opts: ["Yes", "No"] },
        { q: "Does your website generate clients regularly?", opts: ["Yes", "No", "Not sure"] },
        { q: "Does your business appear on Google Maps or Google Business?", opts: ["Yes", "No", "I don't know"] },
        { q: "Do you have automated follow-up for prospects?", opts: ["Yes", "No"] },
        { q: "What is your main challenge right now?", opts: ["Get more clients", "More sales", "Automate processes", "Improve digital presence", "Other"] },
      ],
      resultTitle: "Your business may have untapped digital opportunities.",
      resultDesc: "Based on your answers, we can complete a Free Digital Diagnosis to identify improvement areas and recommend a personalized growth plan.",
      formTitle: "Request your complete diagnosis",
      fields: {
        name: "Full name",
        business: "Business name",
        city: "City",
        industry: "Industry / Business type",
        email: "Email",
        whatsapp: "WhatsApp / Phone",
        website: "Website (if any)",
        social: "Facebook or Instagram",
        message: "Additional message",
      },
      submit: "Request Full Diagnosis",
      success: "Request sent! We'll contact you soon.",
    },
    services: {
      title: "Our Packages",
      subtitle: "Solutions designed for every stage of your business.",
      priceNote: "Pricing may vary depending on business needs, scope, and diagnosis.",
      popularLabel: "Most Popular",
      packages: [
        {
          name: "Digital Presence Starter",
          tag: "Package A",
          price: "Starting at $299 USD/month",
          items: ["Professional Landing Page", "WhatsApp Integration", "Contact Form", "Hosting Included", "Basic Updates"],
        },
        {
          name: "Growth Digital",
          tag: "Package B",
          price: "Starting at $499 USD/month",
          popular: true,
          items: ["Everything in Starter", "Google Business Profile", "Local SEO", "AI-powered Blog", "Conversion Optimization"],
        },
        {
          name: "Growth Automation",
          tag: "Package C",
          price: "Starting at $799 USD/month",
          items: ["Everything in Growth", "WhatsApp Automation", "Basic CRM", "Prospect Tracking", "Monthly Reports"],
        },
      ],
      cta: "Request info",
    },
    founders: {
      tag: "Founders Offer",
      title: "Limited spots for founding clients",
      desc: "We are accepting a limited number of businesses during our initial stage. The first 10 clients receive preferred launch pricing.",
      spotsLeft: "First 10 clients",
      cta: "I want to be a founder",
    },
    highticket: {
      tag: "Premium Solution",
      title: "Coimagen Digital Transformation",
      desc: "We implement personalized AI systems, automation, CRM, digital agents, and intelligent processes for businesses that want to scale.",
      features: ["Custom AI", "Full Automation", "Advanced CRM", "Digital Agents"],
      cta: "Schedule consultation",
    },
    sectors: {
      title: "Sectors we serve",
      items: ["Doctors", "Dentists", "Lawyers", "Veterinary", "Beauty Salons", "Restaurants", "Real Estate", "Local Business"],
    },
    process: {
      title: "How we work",
      steps: [
        { title: "You request the diagnosis", desc: "Fill out the form and tell us about your business." },
        { title: "We analyze your presence", desc: "We review your website, social media, and Google visibility." },
        { title: "We detect opportunities", desc: "We identify weak points and areas for improvement." },
        { title: "We present the solution", desc: "We design a personalized plan for your business." },
        { title: "We implement and optimize", desc: "We execute and measure results to scale." },
      ],
    },
    authority: {
      title: "Marketing, automation and artificial intelligence for real businesses.",
      desc: "Coimagen Media helps local businesses and professionals simplify processes, capture prospects, and turn their digital presence into a growth tool.",
      stats: [
        { value: "Active", label: "Projects in development" },
        { value: "Real", label: "Real growth labs" },
        { value: "TJ / SD", label: "Tijuana / San Diego" },
        { value: "AI+", label: "Marketing + AI + Automation" },
      ],
    },
    portfolio: {
      title: "Growth Projects and Labs",
      subtitle: "These projects allow us to test, optimize, and document real processes before implementing them with new clients.",
      cta: "View project",
      projects: [
        { name: "Dr. Segovia Neurosurgery", tag: "Health", color: "from-blue-600 to-indigo-800" },
        { name: "Clínica EMT", tag: "Health", color: "from-teal-600 to-cyan-800" },
        { name: "Chimichimi", tag: "Restaurant", color: "from-orange-600 to-red-800" },
        { name: "Conchas Tower", tag: "Real Estate", color: "from-purple-600 to-violet-800" },
        { name: "Coimagen OS", tag: "Technology", color: "from-slate-600 to-gray-800" },
      ],
    },
    finalcta: {
      title: "Discover what opportunities your business is missing.",
      cta: "Request Free Digital Diagnosis",
    },
    footer: {
      tagline: "Digital systems for businesses that want to grow.",
      navLinks: [
        { label: "Services", id: "servicios" },
        { label: "Diagnosis", id: "diagnostico" },
        { label: "Portfolio", id: "portafolio" },
        { label: "Contact", id: "contacto" },
        { label: "Privacy Notice", id: "" },
        { label: "Terms of Service", id: "" },
      ],
      rights: "© 2026 Coimagen Media Agency. All rights reserved.",
    },
    whatsapp: "Chat with us!",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const painIcons = [Monitor, Globe, Search, Users, Zap, Bell];
const solutionIcons = [TrendingUp, Brain, Workflow, Database];
const trustIcons = [HeartHandshake, ListChecks, MessagesSquare, Cpu];
const sectorIcons = [Stethoscope, Bot, Scale, PawPrint, Scissors, UtensilsCrossed, Building2, ShoppingBag];

function SectionReveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

function FadeReveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home({ lang }: { lang: Lang }) {
  const text = t[lang];
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", business: "", city: "", industry: "",
    email: "", whatsapp: "", website: "", social: "", message: "",
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalSteps = text.diagnostic.questions.length;

  function handleAnswer(opt: string) {
    const newAnswers = [...answers, opt];
    setAnswers(newAnswers);
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      setShowForm(true);
    }
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormSubmitted(true);
  }

  function scrollTo(id: string) {
    if (!id) return;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  }

  return (
    <div className="min-h-screen bg-[#0D0F1C] text-white overflow-x-hidden">

      {/* ── NAVBAR ─────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0F1C]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <img src={logoPath} alt="Coimagen" className="h-10 w-auto" />
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollTo("servicios")} className="text-sm text-white/70 hover:text-white transition-colors">{text.nav.services}</button>
              <button onClick={() => scrollTo("diagnostico")} className="text-sm text-white/70 hover:text-white transition-colors">{text.nav.diagnostic}</button>
              <button onClick={() => scrollTo("portafolio")} className="text-sm text-white/70 hover:text-white transition-colors">{text.nav.portfolio}</button>
              <button onClick={() => scrollTo("contacto")} className="text-sm text-white/70 hover:text-white transition-colors">{text.nav.contact}</button>
            </div>
            <div className="flex items-center gap-3">
              <button
                data-testid="cta-nav"
                onClick={() => scrollTo("diagnostico")}
                className="hidden sm:inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all"
              >
                {text.nav.cta}
              </button>
              <button
                className="md:hidden p-2 text-white/70 hover:text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-[#131627] border-t border-white/5 px-4 py-4 flex flex-col gap-3"
            >
              {[text.nav.services, text.nav.diagnostic, text.nav.portfolio, text.nav.contact].map((item, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(["servicios","diagnostico","portafolio","contacto"][i])}
                  className="text-left text-white/80 py-2 border-b border-white/5 last:border-0"
                >
                  {item}
                </button>
              ))}
              <button onClick={() => scrollTo("diagnostico")} className="mt-2 bg-orange-500 text-white font-semibold py-2 rounded-lg">
                {text.nav.cta}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── HERO ───────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <Zap size={12} /> Coimagen Media Agency — Tijuana / San Diego
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {text.hero.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed">
            {text.hero.subtitle}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <button data-testid="cta-hero-primary" onClick={() => scrollTo("diagnostico")}
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105">
              {text.hero.cta1} <ArrowRight size={18} />
            </button>
            <button data-testid="cta-hero-secondary" onClick={() => scrollTo("servicios")}
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:bg-white/5">
              {text.hero.cta2} <ChevronRight size={18} />
            </button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-white/50">
            {text.hero.badges.map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-orange-400" /> {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PAIN POINTS ────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-center mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {text.pain.title}
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {text.pain.items.map((item, i) => {
                const Icon = painIcons[i];
                return (
                  <motion.div key={i} variants={fadeUp} data-testid={`card-pain-${i}`}
                    className="bg-[#131627] border border-red-500/15 rounded-2xl p-6 hover:border-red-500/35 transition-all group">
                    <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                      <Icon size={20} className="text-red-400" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/55">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── SOLUTION ───────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {text.solution.title}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/65 text-lg leading-relaxed">{text.solution.desc}</motion.p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {text.solution.features.map((feat, i) => {
                const Icon = solutionIcons[i];
                return (
                  <motion.div key={i} variants={fadeUp}
                    className="bg-[#131627] border border-blue-500/15 rounded-2xl p-6 text-center hover:border-blue-500/35 transition-all">
                    <div className="w-12 h-12 bg-blue-500/15 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <Icon size={22} className="text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">{feat.title}</h3>
                    <p className="text-sm text-white/55">{feat.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── TRUST / CONFIANZA ──────────────────────────── */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {text.trust.title}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/60 text-lg">{text.trust.desc}</motion.p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {text.trust.cards.map((card, i) => {
                const Icon = trustIcons[i];
                return (
                  <motion.div key={i} variants={fadeUp} data-testid={`card-trust-${i}`}
                    className="bg-[#131627] border border-white/8 rounded-2xl p-6 hover:border-orange-500/25 transition-all group">
                    <div className="w-11 h-11 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                      <Icon size={20} className="text-orange-400" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">{card.title}</h3>
                    <p className="text-sm text-white/55">{card.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── DIAGNOSTIC ─────────────────────────────────── */}
      <section id="diagnostico" className="py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                {lang === "es" ? "Gratis" : "Free"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {text.diagnostic.title}
              </h2>
              <p className="text-white/60">{text.diagnostic.subtitle}</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[#131627] border border-white/8 rounded-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                {!showForm ? (
                  <motion.div key={`step-${step}`} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3 }} className="p-8 sm:p-10">
                    <div className="mb-8">
                      <div className="flex justify-between text-xs text-white/40 mb-2">
                        <span>{lang === "es" ? `Pregunta ${step + 1} de ${totalSteps}` : `Question ${step + 1} of ${totalSteps}`}</span>
                        <span>{Math.round((step / totalSteps) * 100)}%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full" animate={{ width: `${(step / totalSteps) * 100}%` }} transition={{ duration: 0.4 }} />
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-7" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {text.diagnostic.questions[step].q}
                    </h3>
                    <div className="flex flex-col gap-3">
                      {text.diagnostic.questions[step].opts.map((opt, i) => (
                        <button key={i} data-testid={`button-answer-${i}`} onClick={() => handleAnswer(opt)}
                          className="text-left px-5 py-4 rounded-xl border border-white/10 hover:border-orange-500/60 hover:bg-orange-500/5 text-white/80 hover:text-white transition-all font-medium">
                          {opt}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : formSubmitted ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-10 text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle size={32} className="text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{text.diagnostic.success}</h3>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-8 sm:p-10">
                    <div className="bg-orange-500/10 border border-orange-500/25 rounded-2xl p-5 mb-8">
                      <h3 className="font-bold text-orange-300 mb-2">{text.diagnostic.resultTitle}</h3>
                      <p className="text-sm text-white/65">{text.diagnostic.resultDesc}</p>
                    </div>
                    <h3 className="text-xl font-bold mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {text.diagnostic.formTitle}
                    </h3>
                    <form onSubmit={handleFormSubmit} className="grid sm:grid-cols-2 gap-4">
                      {(Object.entries(text.diagnostic.fields) as [keyof typeof form, string][]).map(([key, label]) => {
                        const isTextarea = key === "message";
                        return (
                          <div key={key} className={isTextarea ? "sm:col-span-2" : ""}>
                            {isTextarea ? (
                              <textarea placeholder={label} value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                                data-testid={`input-${key}`} rows={3}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/35 focus:outline-none focus:border-orange-500/60 transition-colors resize-none text-sm" />
                            ) : (
                              <input type={key === "email" ? "email" : "text"} placeholder={label} value={form[key]}
                                onChange={(e) => setForm({ ...form, [key]: e.target.value })} data-testid={`input-${key}`}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/35 focus:outline-none focus:border-orange-500/60 transition-colors text-sm" />
                            )}
                          </div>
                        );
                      })}
                      <div className="sm:col-span-2">
                        <button type="submit" data-testid="button-submit-form"
                          className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-xl transition-all text-lg shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35">
                          {text.diagnostic.submit}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </SectionReveal>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────── */}
      <section id="servicios" className="py-20 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/8 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <SectionReveal>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{text.services.title}</h2>
              <p className="text-white/55">{text.services.subtitle}</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {text.services.packages.map((pkg, i) => (
                <motion.div key={i} variants={fadeUp} data-testid={`card-service-${i}`}
                  className={`relative bg-[#131627] border rounded-3xl p-7 flex flex-col ${(pkg as { popular?: boolean }).popular ? "border-orange-500/50 shadow-lg shadow-orange-500/10" : "border-white/8 hover:border-white/15"} transition-all`}>
                  {(pkg as { popular?: boolean }).popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                      {text.services.popularLabel}
                    </div>
                  )}
                  <span className="text-xs text-orange-400 font-semibold mb-1">{pkg.tag}</span>
                  <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{pkg.name}</h3>
                  <p className="text-lg font-bold text-white/90 mb-5">{pkg.price}</p>
                  <ul className="flex-1 flex flex-col gap-3 mb-7">
                    {pkg.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm text-white/75">
                        <CheckCircle size={15} className="text-green-400 flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  <button data-testid={`button-service-${i}`} onClick={() => scrollTo("diagnostico")}
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${(pkg as { popular?: boolean }).popular ? "bg-orange-500 hover:bg-orange-400 text-white" : "border border-white/15 hover:border-orange-500/50 text-white/80 hover:text-white"}`}>
                    {text.services.cta}
                  </button>
                </motion.div>
              ))}
            </div>
            <motion.p variants={fadeUp} className="text-center text-sm text-white/40 italic">{text.services.priceNote}</motion.p>
          </SectionReveal>
        </div>
      </section>

      {/* ── FOUNDERS OFFER ─────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <FadeReveal className="relative bg-gradient-to-r from-orange-900/30 via-[#1a1627] to-orange-900/10 border border-orange-500/30 rounded-3xl p-8 sm:p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/8 rounded-full blur-[80px]" />
            <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 bg-orange-500/15 border border-orange-500/35 text-orange-400 text-xs font-bold px-3 py-1 rounded-full">
                    <Flame size={11} /> {text.founders.tag}
                  </span>
                  <span className="text-xs text-white/40 border border-white/10 px-2.5 py-1 rounded-full">{text.founders.spotsLeft}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{text.founders.title}</h3>
                <p className="text-white/65 max-w-xl">{text.founders.desc}</p>
              </div>
              <div className="flex-shrink-0">
                <button data-testid="button-founders" onClick={() => scrollTo("diagnostico")}
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-7 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 hover:scale-105 whitespace-nowrap">
                  {text.founders.cta} <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </FadeReveal>
        </div>
      </section>

      {/* ── HIGH TICKET ────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <FadeReveal className="relative bg-gradient-to-br from-[#1a1033] via-[#131627] to-[#0f1a2e] border border-blue-500/20 rounded-3xl p-8 sm:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/8 rounded-full blur-[80px]" />
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
              <div className="flex-1">
                <span className="inline-block bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-bold px-3 py-1 rounded-full mb-4">{text.highticket.tag}</span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{text.highticket.title}</h2>
                <p className="text-white/65 text-lg max-w-xl leading-relaxed mb-6">{text.highticket.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {text.highticket.features.map((f, i) => (
                    <span key={i} className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-sm px-3 py-1.5 rounded-lg text-white/80">
                      <Bot size={14} className="text-blue-400" /> {f}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0">
                <button data-testid="button-highticket" onClick={() => scrollTo("diagnostico")}
                  className="inline-flex items-center gap-2 bg-white text-[#0D0F1C] font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-all text-lg">
                  {text.highticket.cta} <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </FadeReveal>
        </div>
      </section>

      {/* ── SECTORS ────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-center mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {text.sectors.title}
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {text.sectors.items.map((sector, i) => {
                const Icon = sectorIcons[i];
                return (
                  <motion.div key={i} variants={fadeUp} data-testid={`card-sector-${i}`}
                    className="bg-[#131627] border border-white/8 rounded-2xl p-5 flex flex-col items-center gap-3 text-center hover:border-orange-500/30 hover:bg-[#1a1d30] transition-all cursor-default">
                    <div className="w-11 h-11 bg-orange-500/10 rounded-xl flex items-center justify-center">
                      <Icon size={20} className="text-orange-400" />
                    </div>
                    <span className="text-sm font-medium text-white/80">{sector}</span>
                  </motion.div>
                );
              })}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/5 to-transparent" />
        <div className="relative max-w-5xl mx-auto">
          <SectionReveal>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-center mb-14" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {text.process.title}
            </motion.h2>
            <div className="flex flex-col gap-5">
              {text.process.steps.map((s, i) => (
                <motion.div key={i} variants={fadeUp} data-testid={`card-process-${i}`}
                  className="flex items-start gap-5 bg-[#131627] border border-white/8 rounded-2xl p-6 hover:border-orange-500/20 transition-all">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/15 rounded-xl flex items-center justify-center font-bold text-orange-400 text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{s.title}</h3>
                    <p className="text-sm text-white/55">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── AUTHORITY ──────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {text.authority.title}
                </motion.h2>
                <motion.p variants={fadeUp} className="text-white/60 text-lg leading-relaxed">{text.authority.desc}</motion.p>
              </div>
              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
                {text.authority.stats.map((stat, i) => (
                  <div key={i} data-testid={`stat-authority-${i}`} className="bg-[#131627] border border-white/8 rounded-2xl p-6 text-center">
                    <div className="text-2xl font-bold text-orange-400 mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{stat.value}</div>
                    <div className="text-xs text-white/55">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── PORTFOLIO ──────────────────────────────────── */}
      <section id="portafolio" className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{text.portfolio.title}</h2>
              <p className="text-white/55 max-w-2xl mx-auto">{text.portfolio.subtitle}</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {text.portfolio.projects.map((proj, i) => (
                <motion.div key={i} variants={fadeUp} data-testid={`card-portfolio-${i}`}
                  className="group relative rounded-2xl overflow-hidden border border-white/8 hover:border-white/20 transition-all">
                  <div className={`h-44 bg-gradient-to-br ${proj.color} relative`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">{proj.tag}</span>
                    </div>
                  </div>
                  <div className="bg-[#131627] p-5 flex items-center justify-between">
                    <h3 className="font-semibold text-white">{proj.name}</h3>
                    <button className="flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 transition-colors font-medium">
                      {text.portfolio.cta} <ArrowRight size={13} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────── */}
      <section id="contacto" className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeReveal className="relative bg-gradient-to-br from-orange-900/30 via-[#131627] to-blue-900/20 border border-orange-500/20 rounded-3xl p-10 sm:p-16 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-orange-500/10 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {text.finalcta.title}
              </h2>
              <button data-testid="cta-final" onClick={() => scrollTo("diagnostico")}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-10 py-5 rounded-xl text-xl transition-all shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105">
                {text.finalcta.cta} <ArrowRight size={20} />
              </button>
            </div>
          </FadeReveal>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <footer className="border-t border-white/8 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div className="lg:col-span-2">
              <img src={logoPath} alt="Coimagen" className="h-10 mb-4" />
              <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-4">{text.footer.tagline}</p>
              <div className="flex flex-col gap-2 text-sm text-white/50">
                <span className="flex items-center gap-2"><MapPin size={14} className="text-orange-400" /> Tijuana / San Diego</span>
                <span className="flex items-center gap-2"><Mail size={14} className="text-orange-400" /> publicidadcoimagen@gmail.com</span>
                <span className="flex items-center gap-2"><Phone size={14} className="text-orange-400" /> WhatsApp (próximamente)</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm">Links</h4>
              <ul className="flex flex-col gap-2">
                {text.footer.navLinks.map((link, i) => (
                  <li key={i}>
                    <button onClick={() => scrollTo(link.id)} className="text-sm text-white/50 hover:text-orange-400 transition-colors text-left">
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm">Social</h4>
              <div className="flex flex-wrap gap-3">
                {["Facebook", "Instagram", "LinkedIn", "TikTok"].map((s) => (
                  <a key={s} href="#" data-testid={`link-social-${s.toLowerCase()}`}
                    className="w-9 h-9 bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500/30 rounded-lg flex items-center justify-center transition-all" title={s}>
                    <MessageSquare size={14} className="text-white/50" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/8 pt-6 text-center text-xs text-white/30">
            {text.footer.rights}
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ──────────────────────────── */}
      <a href="https://wa.me/526640000000" target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-float"
        className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-4 py-3 rounded-2xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all hover:scale-105">
        <Phone size={18} />
        <span className="text-sm hidden group-hover:inline-block transition-all">{text.whatsapp}</span>
      </a>
    </div>
  );
}
