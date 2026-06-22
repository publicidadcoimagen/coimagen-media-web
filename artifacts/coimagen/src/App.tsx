import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/context/LanguageContext";
import { CountryProvider } from "@/context/CountryContext";
import { AdminProvider } from "@/context/AdminContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CanonicalUrl } from "@/components/ui/CanonicalUrl";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Diagnostico from "@/pages/Diagnostico";
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

const queryClient = new QueryClient();

function AppLayout() {
  return (
    <div className="min-h-screen" style={{ background: "#06060f" }}>
      <CanonicalUrl />
      <Header />
      <main>
        <Switch>
          {/* Core */}
          <Route path="/" component={Home} />
          <Route path="/diagnostico" component={Diagnostico} />
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
