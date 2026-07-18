import { Switch, Route, Router as WouterRouter } from "wouter";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider, useLang } from "@/context/LanguageContext";
import { CountryProvider } from "@/context/CountryContext";
import { AdminProvider } from "@/context/AdminContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CanonicalUrl } from "@/components/ui/CanonicalUrl";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Diagnostico from "@/pages/Diagnostico";
import DiagnosticoResultado from "@/pages/DiagnosticoResultado";
import Demos from "@/pages/Demos";
import Portal from "@/pages/Portal";
import Secure from "@/pages/Secure";
import Admin from "@/pages/Admin";
import Agendar from "@/pages/Agendar";
import About from "@/pages/About";
import Faqs from "@/pages/Faqs";
import Resources from "@/pages/Resources";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import CaseStudiesIndex from "@/pages/CaseStudiesIndex";
import DrSegovia from "@/pages/case-studies/DrSegovia";
import Chimichimi from "@/pages/case-studies/Chimichimi";
import CoimagenOS from "@/pages/case-studies/CoimagenOS";
import ConchasTower from "@/pages/case-studies/ConchasTower";
import MedicalOS from "@/pages/industries/MedicalOS";
import DentalOS from "@/pages/industries/DentalOS";
import LawOS from "@/pages/industries/LawOS";
import WellnessOS from "@/pages/industries/WellnessOS";
import RestaurantOS from "@/pages/industries/RestaurantOS";
import RealEstateOS from "@/pages/industries/RealEstateOS";
import LocalBusinessOS from "@/pages/industries/LocalBusinessOS";
import AIPoweredWebsites from "@/pages/services/AIPoweredWebsites";
import SEOGrowth from "@/pages/services/SEOGrowth";
import GoogleBusinessOptimization from "@/pages/services/GoogleBusinessOptimization";
import AIAutomation from "@/pages/services/AIAutomation";
import AIAgents from "@/pages/services/AIAgents";
import CamilaAIPage from "@/pages/services/CamilaAIPage";
import CoimagenOSPage from "@/pages/services/CoimagenOSPage";
import CloudSystems from "@/pages/services/CloudSystems";
import CrmParaMedicos from "@/pages/blog/CrmParaMedicos";
import AutomatizacionAbogados from "@/pages/blog/AutomatizacionAbogados";
import SeoLocalDentistas from "@/pages/blog/SeoLocalDentistas";
import GoogleBusinessProfile from "@/pages/blog/GoogleBusinessProfile";
import WhatsappVentas from "@/pages/blog/WhatsappVentas";
import IaPequenasEmpresas from "@/pages/blog/IaPequenasEmpresas";
import SitioWebRestaurantes from "@/pages/blog/SitioWebRestaurantes";
import CamilaAiAsistente from "@/pages/blog/CamilaAiAsistente";
import GoogleAdsVsSeo from "@/pages/blog/GoogleAdsVsSeo";
import AutomatizacionInmobiliaria from "@/pages/blog/AutomatizacionInmobiliaria";
import SistemaOperativoEmpresarial from "@/pages/blog/SistemaOperativoEmpresarial";
import MarketingClinicasEstetica from "@/pages/blog/MarketingClinicasEstetica";
import WhatsappBusinessIa from "@/pages/blog/WhatsappBusinessIa";
import GoogleAdsNegociosLocales from "@/pages/blog/GoogleAdsNegociosLocales";
import AgentesIaEmpresas from "@/pages/blog/AgentesIaEmpresas";
import MarketingWellnessSpas from "@/pages/blog/MarketingWellnessSpas";
import AiAgentsLocalBusiness from "@/pages/blog/AiAgentsLocalBusiness";
import RedesSocialesRestaurantes from "@/pages/blog/RedesSocialesRestaurantes";

const queryClient = new QueryClient();

function LangEffect() {
  const { lang } = useLang();
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang === "es" ? "es" : "en");
  }, [lang]);
  return null;
}

function AppLayout() {
  return (
    <div className="min-h-screen" style={{ background: "#06060f" }}>
      <CanonicalUrl />
      <LangEffect />
      <Header />
      <main>
        <Switch>
          {/* Core */}
          <Route path="/" component={Home} />
          <Route path="/diagnostico" component={Diagnostico} />
          <Route path="/diagnostico/resultado/:token" component={DiagnosticoResultado} />
          <Route path="/demos" component={Demos} />
          <Route path="/portal" component={Portal} />

          {/* Auth & Admin */}
          <Route path="/secure" component={Secure} />
          <Route path="/admin" component={Admin} />

          {/* Company pages */}
          <Route path="/about" component={About} />
          <Route path="/agendar" component={Agendar} />
          <Route path="/faqs" component={Faqs} />
          <Route path="/resources" component={Resources} />
          <Route path="/contacto" component={Contact} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-of-service" component={TermsOfService} />

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

          <Route component={NotFound} />
        </Switch>
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
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
