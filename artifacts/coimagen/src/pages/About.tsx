import { useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

const timeline = [
  { year: "2020", es: "Inicio como freelance de marketing digital en Tijuana.", en: "Started as a digital marketing freelancer in Tijuana." },
  { year: "2021", es: "Primeros clientes: médicos y restaurantes en Baja California.", en: "First clients: doctors and restaurants in Baja California." },
  { year: "2022", es: "Integración de automatización y CRM para negocios locales.", en: "Integrated automation and CRM for local businesses." },
  { year: "2023", es: "Lanzamiento de los primeros Sistemas Operativos por industria.", en: "Launched the first industry-specific Operating Systems." },
  { year: "2024", es: "Incorporación de agentes de IA y expansión al mercado San Diego.", en: "Integrated AI agents and expanded to the San Diego market." },
  { year: "2025", es: "Coimagen AI Systems: plataforma completa de transformación digital.", en: "Coimagen AI Systems: complete digital transformation platform." },
];

const values = [
  { icon: "🎯", es: "Resultados reales", en: "Real results", descEs: "No prometemos, probamos.", descEn: "We don't promise, we prove." },
  { icon: "⚙️", es: "Sistemas, no esfuerzo", en: "Systems, not effort", descEs: "Automatizamos lo repetitivo para que te enfoques en crecer.", descEn: "We automate the repetitive so you focus on growing." },
  { icon: "🤝", es: "Relación a largo plazo", en: "Long-term partnership", descEs: "Crecemos cuando tú creces.", descEn: "We grow when you grow." },
  { icon: "🔍", es: "Transparencia total", en: "Full transparency", descEs: "Métricas claras, reportes honestos.", descEn: "Clear metrics, honest reports." },
  { icon: "🚀", es: "Innovación constante", en: "Constant innovation", descEs: "Adoptamos nuevas tecnologías antes que la competencia.", descEn: "We adopt new tech before the competition." },
  { icon: "🌎", es: "Frontera sin límites", en: "Border without limits", descEs: "Tijuana y San Diego: lo mejor de dos mercados.", descEn: "Tijuana and San Diego: the best of two markets." },
];

export default function About() {
  const { lang } = useLang();
  const isEs = lang === "es";

  useEffect(() => {
    document.title = isEs
      ? "Nosotros — Coimagen Media Agency"
      : "About Us — Coimagen Media Agency";
  }, [isEs]);

  return (
    <div className="min-h-screen bg-[#06060f] pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="badge-neon text-[var(--c-cyan)] border border-[var(--c-cyan)]/25 bg-[var(--c-cyan)]/10 mb-4 w-fit mx-auto">
            {isEs ? "Nuestra historia" : "Our story"}
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            {isEs ? "Marketing Digital + IA " : "Digital Marketing + AI "}
            <span className="text-[var(--c-cyan)]">
              {isEs ? "para negocios reales" : "for real businesses"}
            </span>
          </h1>
          <p className="text-[var(--c-muted)] text-lg max-w-2xl mx-auto leading-relaxed">
            {isEs
              ? "Coimagen nace en Tijuana con una misión simple: ayudar a negocios locales a operar con sistemas digitales inteligentes, no con esfuerzo manual y procesos desordenados."
              : "Coimagen was born in Tijuana with a simple mission: help local businesses operate with smart digital systems, not manual effort and disorganized processes."}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          <div className="glass border border-[var(--c-cyan)]/20 rounded-2xl p-8">
            <div className="text-3xl mb-4">🎯</div>
            <h2 className="text-xl font-black text-white mb-3">{isEs ? "Misión" : "Mission"}</h2>
            <p className="text-[var(--c-muted)] text-sm leading-relaxed">
              {isEs
                ? "Diseñar y operar sistemas digitales que permitan a pequeños y medianos negocios captar clientes, automatizar procesos y crecer de forma predecible usando marketing, automatización e inteligencia artificial."
                : "Design and operate digital systems that allow small and medium businesses to attract clients, automate processes and grow predictably using marketing, automation and artificial intelligence."}
            </p>
          </div>
          <div className="glass border border-[var(--c-purple)]/20 rounded-2xl p-8">
            <div className="text-3xl mb-4">🔭</div>
            <h2 className="text-xl font-black text-white mb-3">{isEs ? "Visión" : "Vision"}</h2>
            <p className="text-[var(--c-muted)] text-sm leading-relaxed">
              {isEs
                ? "Ser la agencia de referencia en la frontera Tijuana–San Diego para negocios que quieren operar con sistemas de IA, automatización y marketing digital de alto impacto."
                : "Be the reference agency on the Tijuana–San Diego border for businesses that want to operate with AI systems, automation and high-impact digital marketing."}
            </p>
          </div>
        </div>

        {/* Camila - Founder */}
        <div className="glass border border-white/[0.08] rounded-3xl overflow-hidden mb-16">
          <div className="p-8 lg:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 w-36 h-36 rounded-2xl bg-gradient-to-br from-[var(--c-cyan)]/20 to-[var(--c-purple)]/20 border border-white/[0.08] flex items-center justify-center text-6xl">
                👩‍💼
              </div>
              <div>
                <div className="badge-neon text-[var(--c-cyan)] border border-[var(--c-cyan)]/25 bg-[var(--c-cyan)]/10 mb-3 w-fit">
                  {isEs ? "Fundadora & CEO" : "Founder & CEO"}
                </div>
                <h2 className="text-2xl font-black text-white mb-2">{siteConfig.founder.name}</h2>
                <p className="text-[var(--c-muted)] text-sm leading-relaxed max-w-xl">
                  {isEs
                    ? "Emprendedora y estratega en marketing digital, automatización e inteligencia artificial aplicada a negocios. Coimagen nace de la convicción de que los negocios locales merecen las mismas herramientas que las grandes empresas — solo que adaptadas a su realidad, mercado y presupuesto."
                    : "Entrepreneur and strategist in digital marketing, automation and AI for business. Coimagen was born from the conviction that local businesses deserve the same tools as large companies — just adapted to their reality, market and budget."}
                </p>
                <div className="flex gap-3 mt-4">
                  <a
                    href={siteConfig.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-bold px-5 py-2.5 rounded-xl text-sm hover:brightness-110 transition-all"
                  >
                    {isEs ? "Hablar con Camila" : "Talk to Camila"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-black text-white text-center mb-8">{isEs ? "Nuestros valores" : "Our values"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v) => (
              <div key={v.icon} className="glass border border-white/[0.06] rounded-xl p-5">
                <div className="text-2xl mb-3">{v.icon}</div>
                <h3 className="text-white font-bold text-sm mb-1">{isEs ? v.es : v.en}</h3>
                <p className="text-[var(--c-muted)] text-xs">{isEs ? v.descEs : v.descEn}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-black text-white text-center mb-10">{isEs ? "Nuestra historia" : "Our timeline"}</h2>
          <div className="relative pl-6 border-l border-white/[0.08] space-y-8">
            {timeline.map((item) => (
              <div key={item.year} className="relative">
                <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-[var(--c-cyan)] border-2 border-[#06060f]" />
                <span className="text-[var(--c-cyan)] font-black text-sm mb-1 block">{item.year}</span>
                <p className="text-[var(--c-muted)] text-sm">{isEs ? item.es : item.en}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center glass border border-[var(--c-cyan)]/20 rounded-2xl p-10">
          <h2 className="text-2xl font-black text-white mb-3">
            {isEs ? "¿Listo para trabajar juntos?" : "Ready to work together?"}
          </h2>
          <p className="text-[var(--c-muted)] text-sm mb-6">
            {isEs
              ? "Agenda una sesión gratuita y descubre cómo podemos transformar tu negocio."
              : "Book a free session and discover how we can transform your business."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/diagnostico"
              className="inline-flex items-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-black px-8 py-3 rounded-xl text-sm hover:brightness-110 transition-all"
            >
              🤖 {isEs ? "Diagnóstico Gratuito" : "Free Diagnostic"}
            </a>
            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-bold px-8 py-3 rounded-xl text-sm hover:bg-white/5 transition-all"
            >
              {isEs ? "Enviar WhatsApp" : "Send WhatsApp"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
