import { Switch, Route, Router as WouterRouter } from "wouter";
import { lazy, Suspense, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider, useLang } from "@/context/LanguageContext";
import { CountryProvider } from "@/context/CountryContext";
import { AdminProvider } from "@/context/AdminContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CanonicalUrl } from "@/components/ui/CanonicalUrl";
import Home from "@/pages/Home";

// Keep the homepage in the entry bundle; other routes load only when visited.
const NotFound = lazy(() => import("@/pages/not-found"));
const Diagnostico = lazy(() => import("@/pages/Diagnostico"));
const DiagnosticoResultado = lazy(() => import("@/pages/DiagnosticoResultado"));
const PropuestaResultado = lazy(() => import("@/pages/PropuestaResultado"));
const FacturaResultado = lazy(() => import("@/pages/FacturaResultado"));
const FacturaDeclinar = lazy(() => import("@/pages/FacturaDeclinar"));
const Demos = lazy(() => import("@/pages/Demos"));
const Portal = lazy(() => import("@/pages/Portal"));
const Agendar = lazy(() => import("@/pages/Agendar"));
const About = lazy(() => import("@/pages/About"));
const Faqs = lazy(() => import("@/pages/Faqs"));
const Resources = lazy(() => import("@/pages/Resources"));
const Recursos = lazy(() => import("@/pages/Recursos"));
const Contact = lazy(() => import("@/pages/Contact"));
const Blog = lazy(() => import("@/pages/Blog"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const UnderConstruction = lazy(() => import("@/pages/UnderConstruction"));
const CaseStudiesIndex = lazy(() => import("@/pages/CaseStudiesIndex"));
const DrSegovia = lazy(() => import("@/pages/case-studies/DrSegovia"));
const Chimichimi = lazy(() => import("@/pages/case-studies/Chimichimi"));
const CoimagenOS = lazy(() => import("@/pages/case-studies/CoimagenOS"));
const ConchasTower = lazy(() => import("@/pages/case-studies/ConchasTower"));
const MedicalOS = lazy(() => import("@/pages/industries/MedicalOS"));
const DentalOS = lazy(() => import("@/pages/industries/DentalOS"));
const LawOS = lazy(() => import("@/pages/industries/LawOS"));
const WellnessOS = lazy(() => import("@/pages/industries/WellnessOS"));
const RestaurantOS = lazy(() => import("@/pages/industries/RestaurantOS"));
const RealEstateOS = lazy(() => import("@/pages/industries/RealEstateOS"));
const LocalBusinessOS = lazy(() => import("@/pages/industries/LocalBusinessOS"));
const AIPoweredWebsites = lazy(() => import("@/pages/services/AIPoweredWebsites"));
const SEOGrowth = lazy(() => import("@/pages/services/SEOGrowth"));
const GoogleBusinessOptimization = lazy(() => import("@/pages/services/GoogleBusinessOptimization"));
const AIAutomation = lazy(() => import("@/pages/services/AIAutomation"));
const AIAgents = lazy(() => import("@/pages/services/AIAgents"));
const CamilaAIPage = lazy(() => import("@/pages/services/CamilaAIPage"));
const CoimagenOSPage = lazy(() => import("@/pages/services/CoimagenOSPage"));
const CloudSystems = lazy(() => import("@/pages/services/CloudSystems"));
const SalesFunnelAI = lazy(() => import("@/pages/resources/SalesFunnelAI"));
const CoimagenProAI = lazy(() => import("@/pages/resources/CoimagenProAI"));
const AISalesAutomation = lazy(() => import("@/pages/resources/AISalesAutomation"));
const SEOContentAI = lazy(() => import("@/pages/resources/SEOContentAI"));
const FunnelCopyAI = lazy(() => import("@/pages/resources/FunnelCopyAI"));
const CommunityManagerPro = lazy(() => import("@/pages/resources/CommunityManagerPro"));
const ViralCopyAI = lazy(() => import("@/pages/resources/ViralCopyAI"));
const AdsStrategistAI = lazy(() => import("@/pages/resources/AdsStrategistAI"));
const MarketIntelligenceAI = lazy(() => import("@/pages/resources/MarketIntelligenceAI"));
const CrmParaMedicos = lazy(() => import("@/pages/blog/CrmParaMedicos"));
const AutomatizacionAbogados = lazy(() => import("@/pages/blog/AutomatizacionAbogados"));
const SeoLocalDentistas = lazy(() => import("@/pages/blog/SeoLocalDentistas"));
const GoogleBusinessProfile = lazy(() => import("@/pages/blog/GoogleBusinessProfile"));
const WhatsappVentas = lazy(() => import("@/pages/blog/WhatsappVentas"));
const IaPequenasEmpresas = lazy(() => import("@/pages/blog/IaPequenasEmpresas"));
const SitioWebRestaurantes = lazy(() => import("@/pages/blog/SitioWebRestaurantes"));
const CamilaAiAsistente = lazy(() => import("@/pages/blog/CamilaAiAsistente"));
const GoogleAdsVsSeo = lazy(() => import("@/pages/blog/GoogleAdsVsSeo"));
const AutomatizacionInmobiliaria = lazy(() => import("@/pages/blog/AutomatizacionInmobiliaria"));
const SistemaOperativoEmpresarial = lazy(() => import("@/pages/blog/SistemaOperativoEmpresarial"));
const MarketingClinicasEstetica = lazy(() => import("@/pages/blog/MarketingClinicasEstetica"));
const WhatsappBusinessIa = lazy(() => import("@/pages/blog/WhatsappBusinessIa"));
const GoogleAdsNegociosLocales = lazy(() => import("@/pages/blog/GoogleAdsNegociosLocales"));
const AgentesIaEmpresas = lazy(() => import("@/pages/blog/AgentesIaEmpresas"));
const ComercioAgenticoNegocios = lazy(() => import("@/pages/blog/ComercioAgenticoNegocios"));
const MarketingWellnessSpas = lazy(() => import("@/pages/blog/MarketingWellnessSpas"));
const AiAgentsLocalBusiness = lazy(() => import("@/pages/blog/AiAgentsLocalBusiness"));
const RedesSocialesRestaurantes = lazy(() => import("@/pages/blog/RedesSocialesRestaurantes"));

const queryClient = new QueryClient();

function LangEffect() {
  const { lang } = useLang();
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang === "es" ? "es" : "en");
  }, [lang]);
  return null;
}

// Proposal, invoice and diagnosis-result links carry a private access token
// in the path. Mask it before the pageview reaches Vercel Analytics so tokens
// never end up stored in a third-party dashboard. Shared by Analytics
// (pageviews) and Speed Insights (web vitals), which both report the URL.
const TOKEN_ROUTE = /^\/(propuesta|factura|diagnostico\/resultado)\/[^/?#]+/;

function redactTokens<T extends { url: string }>(event: T): T {
  const url = new URL(event.url);
  if (TOKEN_ROUTE.test(url.pathname)) {
    url.pathname = url.pathname.replace(TOKEN_ROUTE, "/$1/:token");
    url.search = "";
  }
  return { ...event, url: url.toString() };
}

function AppLayout() {
  return (
    <div className="min-h-screen" style={{ background: "#06060f" }}>
      <CanonicalUrl />
      <LangEffect />
      <Header />
      <main>
        <Suspense fallback={<div className="min-h-[70vh]" aria-busy="true" />}>
        <Switch>
          {/* Core */}
          <Route path="/" component={Home} />
          <Route path="/diagnostico" component={Diagnostico} />
          <Route path="/diagnostico/resultado/:token" component={DiagnosticoResultado} />
          <Route path="/propuesta/:token" component={PropuestaResultado} />
          <Route path="/factura/:token/declinar" component={FacturaDeclinar} />
          <Route path="/factura/:token" component={FacturaResultado} />
          <Route path="/demos" component={Demos} />
          <Route path="/portal" component={Portal} />

          {/* Company pages */}
          <Route path="/about" component={About} />
          <Route path="/agendar" component={Agendar} />
          <Route path="/faqs" component={Faqs} />
          <Route path="/resources" component={Resources} />
          <Route path="/recursos" component={Recursos} />
          <Route path="/contacto" component={Contact} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route path="/under-construction" component={UnderConstruction} />

          {/* Case studies */}
          <Route path="/case-studies" component={CaseStudiesIndex} />
          <Route path="/case-studies/dr-segovia" component={DrSegovia} />
          <Route path="/case-studies/chimichimi" component={Chimichimi} />
          <Route path="/case-studies/coimagen-os" component={CoimagenOS} />
          <Route path="/case-studies/conchas-tower" component={ConchasTower} />
          <Route path="/conchas-tower" component={ConchasTower} />

          {/* Industry OS */}
          <Route path="/medical-os" component={MedicalOS} />
          <Route path="/dental-os" component={DentalOS} />
          <Route path="/law-os" component={LawOS} />
          <Route path="/wellness-os" component={WellnessOS} />
          <Route path="/restaurant-os" component={RestaurantOS} />
          <Route path="/real-estate-os" component={RealEstateOS} />
          <Route path="/local-business-os" component={LocalBusinessOS} />

          {/* Service landing pages */}
          <Route path="/ai-powered-websites" component={AIPoweredWebsites} />
          <Route path="/seo-growth" component={SEOGrowth} />
          <Route path="/google-business-optimization" component={GoogleBusinessOptimization} />
          <Route path="/ai-automation" component={AIAutomation} />
          <Route path="/ai-agents" component={AIAgents} />
          <Route path="/camila-ai" component={CamilaAIPage} />
          <Route path="/coimagen-os" component={CoimagenOSPage} />
          <Route path="/cloud-systems" component={CloudSystems} />

          {/* AI resource landing pages */}
          <Route path="/recursos/sales-funnel-ai" component={SalesFunnelAI} />
          <Route path="/recursos/coimagen-pro-ai" component={CoimagenProAI} />
          <Route path="/recursos/ai-sales-automation" component={AISalesAutomation} />
          <Route path="/recursos/seo-content-ai" component={SEOContentAI} />
          <Route path="/recursos/funnel-copy-ai" component={FunnelCopyAI} />
          <Route path="/recursos/community-manager-pro" component={CommunityManagerPro} />
          <Route path="/recursos/viral-copy-ai" component={ViralCopyAI} />
          <Route path="/recursos/ads-strategist-ai" component={AdsStrategistAI} />
          <Route path="/recursos/market-intelligence-ai" component={MarketIntelligenceAI} />

          {/* Blog articles */}
          <Route path="/blog/crm-para-medicos" component={CrmParaMedicos} />
          <Route path="/blog/automatizacion-abogados" component={AutomatizacionAbogados} />
          <Route path="/blog/seo-local-dentistas" component={SeoLocalDentistas} />
          <Route path="/blog/google-business-profile" component={GoogleBusinessProfile} />
          <Route path="/blog/whatsapp-ventas" component={WhatsappVentas} />
          <Route path="/blog/ia-pequenas-empresas" component={IaPequenasEmpresas} />
          <Route path="/blog/sitio-web-restaurantes" component={SitioWebRestaurantes} />
          <Route path="/blog/camila-ai-asistente" component={CamilaAiAsistente} />
          <Route path="/blog/google-ads-vs-seo" component={GoogleAdsVsSeo} />
          <Route path="/blog/automatizacion-inmobiliaria" component={AutomatizacionInmobiliaria} />
          <Route path="/blog/sistema-operativo-empresarial" component={SistemaOperativoEmpresarial} />
          <Route path="/blog/marketing-clinicas-estetica" component={MarketingClinicasEstetica} />
          <Route path="/blog/whatsapp-business-ia" component={WhatsappBusinessIa} />
          <Route path="/blog/google-ads-negocios-locales" component={GoogleAdsNegociosLocales} />
          <Route path="/blog/agentes-ia-empresas" component={AgentesIaEmpresas} />
          <Route path="/blog/marketing-wellness-spas" component={MarketingWellnessSpas} />
          <Route path="/blog/ai-agents-local-business" component={AiAgentsLocalBusiness} />
          <Route path="/blog/redes-sociales-restaurantes" component={RedesSocialesRestaurantes} />
          <Route path="/blog/comercio-agentico-negocios" component={ComercioAgenticoNegocios} />

          <Route component={NotFound} />
        </Switch>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AdminProvider>
          <LanguageProvider>
            <CountryProvider>
              <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
                <AppLayout />
              </WouterRouter>
            </CountryProvider>
          </LanguageProvider>
        </AdminProvider>
        <Toaster />
        <Analytics beforeSend={redactTokens} />
        <SpeedInsights beforeSend={redactTokens} />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
