import { useEffect, useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

const faqs = [
  {
    es: { q: "¿Qué es Coimagen Media Agency?", a: "Somos una agencia de marketing digital especializada en diseñar sistemas de captación, automatización e inteligencia artificial para negocios locales en Tijuana y San Diego." },
    en: { q: "What is Coimagen Media Agency?", a: "We are a digital marketing agency specializing in designing lead generation, automation and artificial intelligence systems for local businesses in Tijuana and San Diego." },
  },
  {
    es: { q: "¿En qué ciudades trabajan?", a: "Trabajamos principalmente en Tijuana y San Diego, con clientes en toda la zona fronteriza Baja California – California. También atendemos clientes en línea en toda Latinoamérica y USA." },
    en: { q: "Which cities do you work in?", a: "We mainly work in Tijuana and San Diego, with clients throughout the Baja California – California border area. We also serve clients online throughout Latin America and the USA." },
  },
  {
    es: { q: "¿Cuánto cuesta contratar Coimagen?", a: "Los planes comienzan desde $790 MXN / mes o $197 USD / mes, dependiendo de las necesidades de tu negocio. Solicita un diagnóstico gratuito para recibir una propuesta personalizada." },
    en: { q: "How much does hiring Coimagen cost?", a: "Plans start from $790 MXN / month or $197 USD / month, depending on your business needs. Request a free diagnostic to receive a personalized proposal." },
  },
  {
    es: { q: "¿Qué incluye el diagnóstico gratuito?", a: "Una evaluación de tu presencia digital, puntos de mejora, oportunidades de captación y un plan de acción inicial. Sin costo y sin compromiso." },
    en: { q: "What does the free diagnostic include?", a: "An evaluation of your digital presence, areas for improvement, lead generation opportunities and an initial action plan. No cost and no commitment." },
  },
  {
    es: { q: "¿Trabajan con médicos, dentistas y abogados?", a: "Sí. Tenemos sistemas operativos digitales específicos para médicos, dentistas, abogados, wellness, restaurantes, inmobiliarias y negocios locales." },
    en: { q: "Do you work with doctors, dentists and lawyers?", a: "Yes. We have specific digital operating systems for doctors, dentists, lawyers, wellness, restaurants, real estate and local businesses." },
  },
  {
    es: { q: "¿Qué es un Agente IA?", a: "Es un asistente digital inteligente que puede responder preguntas, calificar prospectos, agendar citas y dar seguimiento automáticamente — las 24 horas, sin intervención humana." },
    en: { q: "What is an AI Agent?", a: "It is an intelligent digital assistant that can answer questions, qualify leads, schedule appointments and follow up automatically — 24 hours a day, without human intervention." },
  },
  {
    es: { q: "¿Cuánto tiempo toma implementar el sistema?", a: "Depende del paquete. Un sitio web básico puede estar listo en 5–7 días. Sistemas con CRM, automatización e IA pueden tomar de 2 a 6 semanas." },
    en: { q: "How long does implementation take?", a: "It depends on the package. A basic website can be ready in 5–7 days. Systems with CRM, automation and AI can take 2 to 6 weeks." },
  },
  {
    es: { q: "¿Necesito conocimientos técnicos?", a: "No. Nosotros nos encargamos de todo. Solo necesitas definir tus objetivos de negocio y nosotros diseñamos e implementamos el sistema." },
    en: { q: "Do I need technical knowledge?", a: "No. We handle everything. You just need to define your business goals and we design and implement the system." },
  },
  {
    es: { q: "¿Tienen planes en español y en inglés?", a: "Sí. Atendemos clientes en español e inglés. Nuestro sitio, sistemas y comunicación son bilingües para servir mejor a la región fronteriza." },
    en: { q: "Do you have plans in Spanish and English?", a: "Yes. We serve clients in Spanish and English. Our site, systems and communication are bilingual to better serve the border region." },
  },
  {
    es: { q: "¿Qué es el Coimagen OS?", a: "Es nuestro sistema operativo digital completo: landing page, funnel de captación, CRM, automatizaciones, agentes IA, blog SEO y reportes — todo integrado para tu industria." },
    en: { q: "What is Coimagen OS?", a: "It is our complete digital operating system: landing page, lead funnel, CRM, automations, AI agents, SEO blog and reports — all integrated for your industry." },
  },
  {
    es: { q: "¿Pueden mejorar mi sitio web actual?", a: "Sí. Podemos auditar tu sitio actual e identificar mejoras, o construir uno nuevo desde cero optimizado para conversión y SEO." },
    en: { q: "Can you improve my current website?", a: "Yes. We can audit your current site and identify improvements, or build a new one from scratch optimized for conversion and SEO." },
  },
  {
    es: { q: "¿Qué resultados puedo esperar?", a: "Depende de tu industria y punto de partida. En promedio, nuestros clientes ven un incremento de 40–80% en captación de contactos dentro de los primeros 90 días con el sistema activo." },
    en: { q: "What results can I expect?", a: "It depends on your industry and starting point. On average, our clients see a 40–80% increase in lead capture within the first 90 days with the system active." },
  },
  {
    es: { q: "¿Cómo puedo contactarlos?", a: "Por WhatsApp al +1 555 931 8378, por correo a contacto@coimagenmedia.com, o agendando una sesión estratégica gratuita desde nuestra página." },
    en: { q: "How can I contact you?", a: "Via WhatsApp at +1 555 931 8378, by email at contacto@coimagenmedia.com, or by booking a free strategy session from our website." },
  },
  {
    es: { q: "¿Tienen programa de referidos?", a: "Sí. Clientes fundadores y activos reciben 1 mes al 50% de descuento por cada cliente referido que contrate. Sin límite de referidos." },
    en: { q: "Do you have a referral program?", a: "Yes. Founder and active clients receive 1 month at 50% off for every referred client who signs up. No limit on referrals." },
  },
  {
    es: { q: "¿Puedo cancelar en cualquier momento?", a: "Sí, nuestros planes son mensuales sin contratos a largo plazo. Recomendamos un mínimo de 3 meses para ver resultados sólidos, pero no hay penalización por cancelar." },
    en: { q: "Can I cancel at any time?", a: "Yes, our plans are monthly with no long-term contracts. We recommend a minimum of 3 months to see solid results, but there is no penalty for cancelling." },
  },
];

export default function Faqs() {
  const { lang } = useLang();
  const isEs = lang === "es";
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    const title = isEs ? "Preguntas Frecuentes — Coimagen Media Agency" : "FAQ — Coimagen Media Agency";
    const desc = isEs
      ? "Resolvemos tus dudas sobre marketing digital, automatización con IA, precios y procesos. 15 preguntas frecuentes sobre los servicios de Coimagen."
      : "Answers to the most common questions about digital marketing, AI automation, pricing and processes at Coimagen Media Agency.";
    const url = "https://www.coimagenmedia.com/faqs";
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
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">
          <div className="badge-neon text-[var(--c-cyan)] border border-[var(--c-cyan)]/25 bg-[var(--c-cyan)]/10 mb-4 w-fit mx-auto">
            {isEs ? "Preguntas frecuentes" : "FAQ"}
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
            {isEs ? "Todo lo que necesitas saber" : "Everything you need to know"}
          </h1>
          <p className="text-[var(--c-muted)] text-base">
            {isEs
              ? "Respuestas claras a las preguntas más comunes sobre nuestros servicios."
              : "Clear answers to the most common questions about our services."}
          </p>
        </div>

        <div className="space-y-3 mb-12">
          {faqs.map((faq, i) => {
            const item = isEs ? faq.es : faq.en;
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="glass border border-white/[0.06] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="text-white font-semibold text-sm leading-snug">{item.q}</span>
                  <svg
                    className={`w-5 h-5 text-[var(--c-cyan)] flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-[var(--c-muted)] text-sm leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center glass border border-[var(--c-cyan)]/20 rounded-2xl p-8">
          <h2 className="text-xl font-black text-white mb-3">
            {isEs ? "¿Tienes otra pregunta?" : "Have another question?"}
          </h2>
          <p className="text-[var(--c-muted)] text-sm mb-5">
            {isEs ? "Escríbenos por WhatsApp y te respondemos de inmediato." : "Message us on WhatsApp and we will reply immediately."}
          </p>
          <a
            href={siteConfig.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-black px-8 py-3 rounded-xl text-sm hover:brightness-110 transition-all"
          >
            {isEs ? "Enviar WhatsApp" : "Send WhatsApp"}
          </a>
        </div>
      </div>
    </div>
  );
}
