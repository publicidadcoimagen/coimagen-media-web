import { useEffect, useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import ResourceDownloadModal from "@/components/ui/ResourceDownloadModal";
import type { ServiceContent } from "@/components/templates/ServiceLandingTemplate";
import { content as salesFunnelAIContent } from "@/pages/resources/SalesFunnelAI";
import { content as coimagenProAIContent } from "@/pages/resources/CoimagenProAI";
import { content as aiSalesAutomationContent } from "@/pages/resources/AISalesAutomation";
import { content as seoContentAIContent } from "@/pages/resources/SEOContentAI";
import { content as funnelCopyAIContent } from "@/pages/resources/FunnelCopyAI";
import { content as communityManagerProContent } from "@/pages/resources/CommunityManagerPro";
import { content as viralCopyAIContent } from "@/pages/resources/ViralCopyAI";
import { content as adsStrategistAIContent } from "@/pages/resources/AdsStrategistAI";
import { content as marketIntelligenceAIContent } from "@/pages/resources/MarketIntelligenceAI";

interface Resource {
  icon: string;
  color: string;
  borderColor: string;
  type: string;
  titleEs: string;
  titleEn: string;
  descEs: string;
  descEn: string;
  pdfEs: string;
  pdfEn: string;
}

const BASE = "/resources/";

const resources: Resource[] = [
  {
    icon: "✅",
    color: "#00CFFF",
    borderColor: "border-[var(--c-cyan)]/25",
    type: "Checklist",
    titleEs: "Auditoría Digital de tu Negocio",
    titleEn: "Digital Business Audit",
    descEs: "Revisa los 30 puntos clave de tu presencia digital: web, SEO, Google Business, redes sociales y automatización.",
    descEn: "Review the 30 key points of your digital presence: website, SEO, Google Business, social media, and automation.",
    pdfEs: `${BASE}auditoria-digital-negocio-es.pdf`,
    pdfEn: `${BASE}digital-business-audit-en.pdf`,
  },
  {
    icon: "📘",
    color: "#A8FF3E",
    borderColor: "border-[var(--c-lime)]/25",
    type: "eBook",
    titleEs: "10 formas de usar IA en tu negocio local",
    titleEn: "10 Ways to Use AI in Your Local Business",
    descEs: "Guía práctica con casos reales: chatbots, automatización de citas, respuestas automáticas en WhatsApp y más.",
    descEn: "Practical guide with real cases: chatbots, appointment automation, WhatsApp auto-replies, and more.",
    pdfEs: `${BASE}10-formas-ia-negocio-es.pdf`,
    pdfEn: `${BASE}10-ways-ai-business-en.pdf`,
  },
  {
    icon: "🗺️",
    color: "#A855F7",
    borderColor: "border-[var(--c-purple)]/25",
    type: "Guía PDF",
    titleEs: "Google Business Profile en 30 minutos",
    titleEn: "Google Business Profile in 30 Minutes",
    descEs: "Configura y optimiza tu perfil de Google desde cero. Paso a paso con capturas y ejemplos reales.",
    descEn: "Set up and optimize your Google profile from scratch. Step by step with screenshots and real examples.",
    pdfEs: `${BASE}google-business-profile-es.pdf`,
    pdfEn: `${BASE}google-business-profile-en.pdf`,
  },
  {
    icon: "📋",
    color: "#f59e0b",
    borderColor: "border-yellow-400/25",
    type: "Template",
    titleEs: "CRM Básico para Médicos — Excel/Notion",
    titleEn: "Basic CRM for Doctors — Excel/Notion",
    descEs: "Plantilla lista para gestionar pacientes, citas y seguimiento. Compatible con Excel, Google Sheets y Notion.",
    descEn: "Ready-to-use template to manage patients, appointments, and follow-up. Compatible with Excel, Google Sheets, and Notion.",
    pdfEs: `${BASE}crm-medicos-es.pdf`,
    pdfEn: `${BASE}crm-doctors-en.pdf`,
  },
  {
    icon: "💬",
    color: "#00CFFF",
    borderColor: "border-[var(--c-cyan)]/25",
    type: "Guía PDF",
    titleEs: "WhatsApp Business para negocios (2026)",
    titleEn: "WhatsApp Business for Companies (2026)",
    descEs: "Configura mensajes automáticos, catálogo de productos, etiquetas y métricas en WhatsApp Business.",
    descEn: "Set up automatic messages, product catalog, labels, and metrics in WhatsApp Business.",
    pdfEs: `${BASE}whatsapp-business-negocios-es.pdf`,
    pdfEn: `${BASE}whatsapp-business-guide-en.pdf`,
  },
  {
    icon: "🚀",
    color: "#A8FF3E",
    borderColor: "border-[var(--c-lime)]/25",
    type: "Checklist",
    titleEs: "Checklist: Lanzamiento de Landing Page",
    titleEn: "Checklist: Landing Page Launch",
    descEs: "Los 25 puntos que debes revisar antes de publicar cualquier landing page: SEO, velocidad, CTA, mobile y más.",
    descEn: "The 25 points to check before publishing any landing page: SEO, speed, CTA, mobile, and more.",
    pdfEs: `${BASE}checklist-landing-page-es.pdf`,
    pdfEn: `${BASE}checklist-landing-page-en.pdf`,
  },
  {
    icon: "📊",
    color: "#A855F7",
    borderColor: "border-[var(--c-purple)]/25",
    type: "Guía PDF",
    titleEs: "Cómo medir el ROI de tu Marketing Digital",
    titleEn: "How to Measure Your Digital Marketing ROI",
    descEs: "Aprende a calcular el retorno de inversión de tus campañas de marketing con fórmulas y ejemplos reales.",
    descEn: "Learn to calculate the return on investment of your marketing campaigns with formulas and real examples.",
    pdfEs: `${BASE}roi-marketing-digital-es.pdf`,
    pdfEn: `${BASE}roi-digital-marketing-en.pdf`,
  },
  {
    icon: "🏪",
    color: "#f59e0b",
    borderColor: "border-yellow-400/25",
    type: "Template",
    titleEs: "Plan de Contenidos para 90 días",
    titleEn: "90-Day Content Plan Template",
    descEs: "Planifica tus publicaciones en redes sociales, blog y WhatsApp con esta plantilla editorial lista para usar.",
    descEn: "Plan your social media, blog, and WhatsApp posts with this ready-to-use editorial template.",
    pdfEs: `${BASE}plan-contenidos-90-dias-es.pdf`,
    pdfEn: `${BASE}90-day-content-plan-en.pdf`,
  },
];

interface GPTResource {
  slug: string;
  icon: string;
  accentHex: string;
  name: string;
  descEs: string;
  descEn: string;
}

// The 9 landing pages' `metaDesc` is written for search engines, so it always
// trails off into a promo clause ("...gratis con X, el GPT de Coimagen
// Media" / "...free with X, Coimagen Media's GPT"). That clause is redundant
// on a card that already has its own "Abrir asistente" button, so this cuts
// the sentence at the promo marker instead of showing the SEO boilerplate.
function trimPromoTail(desc: string, marker: string): string {
  const idx = desc.toLowerCase().indexOf(marker.toLowerCase());
  if (idx === -1) return desc;
  const head = desc
    .slice(0, idx)
    .replace(/\s*(for|—|,)\s*$/i, "")
    .replace(/[\s,—]+$/, "");
  return `${head}.`;
}

// These 9 landing pages are all built from the GPT-linking branch of
// ServiceContent, so `gptLink` is always present here even though the
// shared type marks it optional for non-GPT service pages.
function toGPTResource(content: ServiceContent): GPTResource {
  return {
    slug: content.slug,
    icon: content.icon,
    accentHex: content.accentHex,
    name: content.gptLink!.name,
    descEs: trimPromoTail(content.metaDesc.es, "gratis con"),
    descEn: trimPromoTail(content.metaDesc.en, "free with"),
  };
}

const gptResources: GPTResource[] = [
  salesFunnelAIContent,
  coimagenProAIContent,
  aiSalesAutomationContent,
  seoContentAIContent,
  funnelCopyAIContent,
  communityManagerProContent,
  viralCopyAIContent,
  adsStrategistAIContent,
  marketIntelligenceAIContent,
].map(toGPTResource);

export default function Resources() {
  const { lang } = useLang();
  const isEs = lang === "es";

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  useEffect(() => {
    const title = isEs
      ? "Recursos Gratuitos — Marketing Digital & IA | Coimagen Media Agency"
      : "Free Resources — Digital Marketing & AI | Coimagen Media Agency";
    const desc = isEs
      ? "Descarga gratis checklists, eBooks, guías PDF y templates de marketing digital, IA y automatización para negocios en Tijuana y San Diego."
      : "Free download: checklists, eBooks, PDF guides and templates on digital marketing, AI, and automation for businesses in Tijuana and San Diego.";
    const url = "https://www.coimagenmedia.com/resources";
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", url);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", desc);
  }, [isEs]);

  const openModal = (resource: Resource) => {
    setSelectedResource(resource);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedResource(null);
  };

  return (
    <div className="min-h-screen bg-[#06060f] pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14">
          <div className="badge-neon text-[var(--c-lime)] border border-[var(--c-lime)]/25 bg-[var(--c-lime)]/10 mb-4 w-fit mx-auto">
            {isEs ? "Centro de recursos" : "Resource center"}
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">
            {isEs ? "Recursos gratuitos" : "Free resources"}
            <span className="block text-[var(--c-cyan)]">
              {isEs ? "para hacer crecer tu negocio" : "to grow your business"}
            </span>
          </h1>
          <p className="text-[var(--c-muted)] text-base max-w-xl mx-auto leading-relaxed">
            {isEs
              ? "Checklists, eBooks, guías y templates listos para usar. Déjanos tu correo y te los enviamos de inmediato."
              : "Checklists, eBooks, guides and templates ready to use. Leave your email and we'll send them right away."}
          </p>
        </div>

        {/* Jotform AI CTA Banner */}
        <div className="glass border border-[var(--c-cyan)]/20 rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center gap-5">
          <div className="text-4xl flex-shrink-0">🤖</div>
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-white font-black text-lg mb-1">
              {isEs ? "¿No sabes por dónde empezar?" : "Not sure where to start?"}
            </h2>
            <p className="text-[var(--c-muted)] text-sm">
              {isEs
                ? "Camila AI analiza tu negocio y te recomienda exactamente qué recursos necesitas."
                : "Camila AI analyzes your business and recommends exactly which resources you need."}
            </p>
          </div>
          <button
            onClick={() => {
              const btn =
                document.querySelector<HTMLElement>("[data-jotform-toggle]") ||
                document.querySelector<HTMLElement>(".JotformAIAssistant button") ||
                document.querySelector<HTMLElement>('iframe[src*="jotform"]');
              if (btn) btn.click();
              else window.open(siteConfig.whatsapp.url, "_blank");
            }}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-black px-6 py-3 rounded-xl text-sm hover:brightness-110 transition-all whitespace-nowrap"
          >
            💬 {isEs ? "Hablar con Camila AI" : "Talk to Camila AI"}
          </button>
        </div>

        {/* Resource grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
          {resources.map((res) => (
            <div
              key={res.titleEs}
              className={`glass border ${res.borderColor} rounded-2xl p-6 flex flex-col group hover:border-opacity-60 transition-all`}
            >
              <div className="text-4xl mb-4">{res.icon}</div>
              <span className="text-xs font-bold mb-2 inline-block" style={{ color: res.color }}>
                {res.type}
              </span>
              <h3 className="text-white font-black text-sm mb-2 leading-snug flex-1">
                {isEs ? res.titleEs : res.titleEn}
              </h3>
              <p className="text-[var(--c-muted)] text-xs leading-relaxed mb-5">
                {isEs ? res.descEs : res.descEn}
              </p>
              <button
                onClick={() => openModal(res)}
                className="mt-auto inline-flex items-center justify-center gap-2 border rounded-xl px-4 py-2.5 text-xs font-bold transition-all hover:brightness-110 active:scale-95"
                style={{
                  color: res.color,
                  borderColor: `${res.color}50`,
                  background: `${res.color}10`,
                }}
              >
                📩 {isEs ? "Solicitar gratis" : "Get it free"}
              </button>
            </div>
          ))}
        </div>

        {/* AI assistants (GPTs) section — separate from the PDF grid above:
            these open directly on their own landing page / ChatGPT, no email
            capture modal. */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            {isEs ? "Asistentes de IA Gratuitos" : "Free AI Assistants"}
          </h2>
          <p className="text-[var(--c-muted)] text-base max-w-xl mx-auto leading-relaxed">
            {isEs
              ? "Herramientas de IA listas para usar, directo en ChatGPT — sin instalar nada."
              : "Ready-to-use AI tools, right inside ChatGPT — nothing to install."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
          {gptResources.map((gpt) => (
            <div
              key={gpt.slug}
              className="glass rounded-2xl p-6 flex flex-col group hover:border-opacity-60 transition-all"
              style={{ border: `1px solid ${gpt.accentHex}40` }}
            >
              <div className="text-4xl mb-4">{gpt.icon}</div>
              <span className="text-xs font-bold mb-2 inline-block text-[var(--c-cyan)]">
                {isEs ? "Asistente IA" : "AI Assistant"}
              </span>
              <h3 className="text-white font-black text-sm mb-2 leading-snug flex-1">{gpt.name}</h3>
              <p className="text-[var(--c-muted)] text-xs leading-relaxed mb-5">
                {isEs ? gpt.descEs : gpt.descEn}
              </p>
              <a
                href={`/${gpt.slug}`}
                className="mt-auto inline-flex items-center justify-center gap-2 border rounded-xl px-4 py-2.5 text-xs font-bold transition-all hover:brightness-110 active:scale-95"
                style={{
                  color: gpt.accentHex,
                  borderColor: `${gpt.accentHex}50`,
                  background: `${gpt.accentHex}10`,
                }}
              >
                {isEs ? "Abrir asistente →" : "Open assistant →"}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center glass border border-[var(--c-cyan)]/15 rounded-2xl p-10">
          <div className="text-3xl mb-4">📚</div>
          <h2 className="text-2xl font-black text-white mb-3">
            {isEs ? "¿Quieres un recurso personalizado?" : "Want a custom resource?"}
          </h2>
          <p className="text-[var(--c-muted)] text-sm mb-6 max-w-md mx-auto">
            {isEs
              ? "Dinos qué necesitas y te preparamos una guía específica para tu industria y tu etapa de negocio."
              : "Tell us what you need and we'll prepare a guide specific to your industry and business stage."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-black px-8 py-3 rounded-xl text-sm hover:brightness-110 transition-all"
            >
              💬 WhatsApp
            </a>
            <a
              href="/diagnostico"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-bold px-8 py-3 rounded-xl text-sm hover:bg-white/5 transition-all"
            >
              🤖 {isEs ? "Diagnóstico gratuito" : "Free diagnostic"}
            </a>
          </div>
        </div>
      </div>

      {/* Email capture modal */}
      {selectedResource && (
        <ResourceDownloadModal
          isOpen={modalOpen}
          onClose={closeModal}
          titleEs={selectedResource.titleEs}
          titleEn={selectedResource.titleEn}
          pdfEs={selectedResource.pdfEs}
          pdfEn={selectedResource.pdfEn}
          accentColor={selectedResource.color}
        />
      )}
    </div>
  );
}
