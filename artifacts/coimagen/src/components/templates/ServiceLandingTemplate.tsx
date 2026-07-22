import { useEffect, useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { Breadcrumb } from "@/components/ui/SiteBreadcrumb";

export interface ServiceFAQ {
  q: { es: string; en: string };
  a: { es: string; en: string };
}

export interface WorkProcessStep {
  icon: string;
  es: string;
  en: string;
}

export interface ServiceContent {
  slug: string;
  heroImage?: string;
  accentColor: string;
  accentHex: string;
  icon: string;
  /** First breadcrumb label after "Inicio". Defaults to Servicios/Services. */
  category?: { es: string; en: string };
  /** JSON-LD @type override for the injected schema. Defaults to "Service". */
  schemaType?: string;
  /** Extra fields merged into the JSON-LD schema (e.g. offers, applicationCategory). */
  schemaExtra?: Record<string, unknown>;
  seoTitle: { es: string; en: string };
  metaDesc: { es: string; en: string };
  hero: {
    title: { es: string; en: string };
    subtitle: { es: string; en: string };
    benefit: { es: string; en: string };
  };
  /** Extra primary CTA linking out to a hosted tool (e.g. a GPT). Tracked via a GA4 "open_gpt" event. */
  gptLink?: {
    name: string;
    url: { es: string; en: string };
  };
  pain: {
    items: { icon: string; text: { es: string; en: string } }[];
  };
  solution: {
    steps: { icon: string; title: { es: string; en: string }; desc: { es: string; en: string } }[];
  };
  benefits: {
    items: { icon: string; title: { es: string; en: string }; desc: { es: string; en: string } }[];
  };
  includes: {
    items: { es: string; en: string }[];
  };
  /** Overrides the default paid-agency work timeline — for a free self-serve tool, for example. */
  workProcessOverride?: WorkProcessStep[];
  caseStudy?: {
    slug: string;
    nameEs: string;
    nameEn: string;
    summaryEs: string;
    summaryEn: string;
    metrics: { value: string; labelEs: string; labelEn: string }[];
    accentColor: string;
  };
  /** Adds a secondary "free diagnosis" link to the final CTA section. */
  diagnosisCta?: boolean;
  faq: ServiceFAQ[];
}

function trackGptOpen(gptName: string) {
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("event", "open_gpt", { event_category: "engagement", event_label: gptName, gpt_name: gptName });
}

const workProcess: WorkProcessStep[] = [
  { icon: "🔍", es: "Diagnóstico", en: "Diagnosis" },
  { icon: "📊", es: "Evaluación", en: "Evaluation" },
  { icon: "📋", es: "Propuesta", en: "Proposal" },
  { icon: "✍️", es: "Contrato", en: "Contract" },
  { icon: "💳", es: "Primer Pago", en: "First Payment" },
  { icon: "⚙️", es: "Producción", en: "Production" },
  { icon: "🚀", es: "Entrega", en: "Delivery" },
  { icon: "🔄", es: "Mensualidad", en: "Monthly" },
];

function FaqSection({ faq, accentHex, isEs }: { faq: ServiceFAQ[]; accentHex: string; isEs: boolean }) {
  const [openIndex, setOpenIndex] = useState(-1);
  return (
    <section className="py-20 bg-[#06060f]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-10">
          {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
        </h2>
        <div className="flex flex-col gap-3">
          {faq.map((item, i) => (
            <div key={i} className="glass border border-white/[0.06] rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-white font-semibold pr-4">{isEs ? item.q.es : item.q.en}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                  style={{ color: accentHex }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-[var(--c-muted)] text-sm leading-relaxed border-t border-white/[0.05] pt-4">
                  {isEs ? item.a.es : item.a.en}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceLandingTemplate({ content }: { content: ServiceContent }) {
  const { lang } = useLang();
  const isEs = lang === "es";
  const L = (v: { es: string; en: string }) => v[isEs ? "es" : "en"];

  useEffect(() => {
    const title = L(content.seoTitle);
    const desc = L(content.metaDesc);
    const url = `https://www.coimagenmedia.com/${content.slug}`;
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", url);
    const ogImage = content.heroImage
      ? `https://www.coimagenmedia.com${content.heroImage}`
      : "https://www.coimagenmedia.com/opengraph.jpg";
    document.querySelector('meta[property="og:image"]')?.setAttribute("content", ogImage);
    document.querySelector('meta[name="twitter:image"]')?.setAttribute("content", ogImage);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", desc);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
    document.documentElement.setAttribute("lang", isEs ? "es" : "en");
    window.scrollTo(0, 0);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faq.map((f) => ({
        "@type": "Question",
        name: L(f.q),
        acceptedAnswer: { "@type": "Answer", text: L(f.a) },
      })),
    };
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": content.schemaType ?? "Service",
      name: L(content.seoTitle),
      description: L(content.metaDesc),
      provider: { "@type": "Organization", name: "Coimagen Media Agency", url: "https://www.coimagenmedia.com" },
      areaServed: ["México", "Estados Unidos"],
      ...content.schemaExtra,
    };
    const injectSchema = (id: string, data: object) => {
      let el = document.getElementById(id);
      if (!el) {
        el = document.createElement("script");
        el.id = id;
        (el as HTMLScriptElement).type = "application/ld+json";
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(data);
    };
    injectSchema(`faq-schema-${content.slug}`, faqSchema);
    injectSchema(`service-schema-${content.slug}`, serviceSchema);

    return () => {
      document.getElementById(`faq-schema-${content.slug}`)?.remove();
      document.getElementById(`service-schema-${content.slug}`)?.remove();
    };
  }, [lang]);

  return (
    <div className="min-h-screen" style={{ background: "#06060f" }}>

      {/* HERO */}
      <section
        className="relative pt-32 pb-24 overflow-hidden grid-bg"
        style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${content.accentHex}18 0%, transparent 65%), #06060f` }}
      >
        <div
          className="orb w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 opacity-[0.08]"
          style={{ background: content.accentHex }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <Breadcrumb
            items={[
              { labelEs: content.category?.es ?? "Servicios", labelEn: content.category?.en ?? "Services" },
              { labelEs: L(content.seoTitle), labelEn: L(content.seoTitle) },
            ]}
          />
          <div className="text-5xl mb-6">{content.icon}</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            {L(content.hero.title)}
          </h1>
          <p className="text-xl text-[var(--c-muted)] mb-4 max-w-2xl mx-auto leading-relaxed">
            {L(content.hero.subtitle)}
          </p>
          <p className="text-base font-semibold mb-10" style={{ color: content.accentHex }}>
            ✓ {L(content.hero.benefit)}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {content.gptLink && (
              <a
                href={L(content.gptLink.url)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackGptOpen(content.gptLink!.name)}
                className="inline-flex items-center gap-2 font-bold text-base px-8 py-4 rounded-xl transition-all hover:brightness-110 hover:shadow-lg"
                style={{ background: content.accentHex, color: "#06060f" }}
              >
                {isEs ? "Abrir el GPT" : "Open the GPT"}
              </a>
            )}
            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className={
                content.gptLink
                  ? "inline-flex items-center gap-2 glass border border-white/10 text-white font-bold text-base px-8 py-4 rounded-xl hover:border-white/30 transition-all"
                  : "inline-flex items-center gap-2 font-bold text-base px-8 py-4 rounded-xl transition-all hover:brightness-110 hover:shadow-lg"
              }
              style={content.gptLink ? undefined : { background: content.accentHex, color: "#06060f" }}
            >
              {isEs ? "Habla con Camila AI" : "Talk to Camila AI"}
            </a>
            <a
              href="/agendar"
              className="inline-flex items-center gap-2 glass border border-white/10 text-white font-bold text-base px-8 py-4 rounded-xl hover:border-white/30 transition-all"
            >
              {isEs ? "Agenda una reunión" : "Schedule a meeting"}
            </a>
          </div>
          {content.heroImage && (
            <div
              className="mt-14 relative rounded-2xl overflow-hidden mx-auto max-w-4xl"
              style={{ border: `1px solid ${content.accentHex}20`, boxShadow: `0 0 80px ${content.accentHex}12` }}
            >
              <img
                src={content.heroImage}
                alt=""
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06060f]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          )}
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-20 bg-[#06060f]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-12">
            {isEs ? "¿Reconoces estos problemas?" : "Do any of these sound familiar?"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.pain.items.map((item, i) => (
              <div key={i} className="glass border border-white/[0.06] rounded-xl p-5 flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <p className="text-[var(--c-muted)] leading-relaxed">{L(item.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="py-20" style={{ background: "#080810" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-4">
            {isEs ? "Nuestra solución" : "Our solution"}
          </h2>
          <p className="text-[var(--c-muted)] text-center mb-12 max-w-2xl mx-auto">
            {isEs ? "Un proceso claro, resultados medibles." : "A clear process, measurable results."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.solution.steps.map((step, i) => (
              <div
                key={i}
                className="glass border rounded-xl p-6"
                style={{ borderColor: `${content.accentHex}20` }}
              >
                <div className="text-3xl mb-3">{step.icon}</div>
                <h3 className="text-white font-bold mb-2">{L(step.title)}</h3>
                <p className="text-[var(--c-muted)] text-sm leading-relaxed">{L(step.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-20 bg-[#06060f]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-12">
            {isEs ? "¿Qué gana tu negocio?" : "What does your business gain?"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.benefits.items.map((b, i) => (
              <div key={i} className="glass border border-white/[0.06] rounded-xl p-6 hover:border-white/20 transition-all">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="text-white font-bold mb-2">{L(b.title)}</h3>
                <p className="text-[var(--c-muted)] text-sm leading-relaxed">{L(b.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="py-20" style={{ background: "#080810" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-10">
            {isEs ? "¿Qué incluye?" : "What's included?"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {content.includes.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3 glass border border-white/[0.06] rounded-xl p-4">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: content.accentHex, color: "#06060f" }}
                >
                  ✓
                </span>
                <span className="text-[var(--c-muted)] text-sm">{L(item)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="py-20 bg-[#06060f]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-4">
            {isEs ? "Cómo trabajamos" : "How we work"}
          </h2>
          <p className="text-[var(--c-muted)] text-center mb-12 max-w-xl mx-auto">
            {isEs ? "Un proceso transparente de inicio a fin." : "A transparent process from start to finish."}
          </p>
          <div className="flex flex-wrap justify-center">
            {(content.workProcessOverride ?? workProcess).map((step, i, arr) => (
              <div key={i} className="flex flex-col items-center w-[100px] sm:w-[120px] mb-4">
                <div className="flex items-center w-full mb-2">
                  {i > 0 && <div className="flex-1 h-px bg-white/10" />}
                  <div
                    className="w-10 h-10 rounded-full glass border flex items-center justify-center text-lg flex-shrink-0"
                    style={{ borderColor: `${content.accentHex}30` }}
                  >
                    {step.icon}
                  </div>
                  {i < arr.length - 1 && <div className="flex-1 h-px bg-white/10" />}
                </div>
                <span className="text-[var(--c-muted)] text-xs text-center leading-tight px-1">
                  {isEs ? step.es : step.en}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASO DE ÉXITO — solo se renderiza si existe un caso real y verificado */}
      {content.caseStudy && (
        <section className="py-20" style={{ background: "#080810" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-10">
              {isEs ? "Caso de Éxito Real" : "Real Success Story"}
            </h2>
            <div
              className="glass border rounded-2xl p-8"
              style={{ borderColor: `${content.caseStudy.accentColor}25` }}
            >
              <div
                className="badge-neon mb-4 w-fit"
                style={{
                  color: content.caseStudy.accentColor,
                  borderColor: `${content.caseStudy.accentColor}30`,
                  background: `${content.caseStudy.accentColor}12`,
                }}
              >
                {isEs ? content.caseStudy.nameEs : content.caseStudy.nameEn}
              </div>
              <p className="text-[var(--c-muted)] mb-8 max-w-2xl leading-relaxed">
                {isEs ? content.caseStudy.summaryEs : content.caseStudy.summaryEn}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {content.caseStudy.metrics.map((m, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-black text-white">{m.value}</div>
                    <div className="text-[var(--c-muted)] text-xs mt-1">{isEs ? m.labelEs : m.labelEn}</div>
                  </div>
                ))}
              </div>
              <a
                href={`/case-studies/${content.caseStudy.slug}`}
                className="inline-flex items-center gap-2 text-[var(--c-cyan)] text-sm font-semibold hover:underline"
              >
                {isEs ? "Ver caso completo" : "See full case study"} →
              </a>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <FaqSection faq={content.faq} accentHex={content.accentHex} isEs={isEs} />

      {/* CTA FINAL */}
      <section className="py-24" style={{ background: "#080810" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            {isEs ? "¿Listo para empezar?" : "Ready to get started?"}
          </h2>
          <p className="text-[var(--c-muted)] mb-10 text-lg">
            {isEs
              ? "Respuesta en menos de 24 horas · Sin compromiso · 100% gratuito"
              : "Response within 24 hours · No commitment · 100% free"}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            {content.gptLink ? (
              <a
                href={L(content.gptLink.url)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackGptOpen(content.gptLink!.name)}
                className="inline-flex items-center gap-2 font-bold text-lg px-10 py-4 rounded-xl hover:brightness-110 transition-all active:scale-95"
                style={{ background: content.accentHex, color: "#06060f" }}
              >
                🚀 {isEs ? "Abrir el GPT" : "Open the GPT"}
              </a>
            ) : (
              <button
                onClick={() => {
                  const jf = document.querySelector<HTMLElement>('button[class*="Jotform"], button[class*="jotform"], [id*="JotformAI"] button, iframe[src*="jotform"]');
                  if (jf) { jf.click(); return; }
                  window.open(siteConfig.whatsapp.url, "_blank");
                }}
                className="inline-flex items-center gap-2 font-bold text-lg px-10 py-4 rounded-xl hover:brightness-110 transition-all active:scale-95"
                style={{ background: content.accentHex, color: "#06060f" }}
              >
                💬 {isEs ? "Hablar con Camila AI" : "Talk to Camila AI"}
              </button>
            )}
            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass border border-white/10 text-white font-bold text-lg px-10 py-4 rounded-xl hover:border-white/30 transition-all"
            >
              WhatsApp
            </a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <a
              href="/agendar"
              className="text-[var(--c-muted)] text-sm hover:text-white transition-colors underline underline-offset-2"
            >
              {isEs ? "o agenda una reunión →" : "or book a meeting →"}
            </a>
            {content.diagnosisCta && (
              <a
                href="/diagnostico"
                className="text-[var(--c-muted)] text-sm hover:text-white transition-colors underline underline-offset-2"
              >
                {isEs ? "o haz tu diagnóstico gratis →" : "or get your free diagnosis →"}
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
