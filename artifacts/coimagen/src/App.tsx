import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/context/LanguageContext";
import { CountryProvider } from "@/context/CountryContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
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
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} />
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
        <LanguageProvider>
          <CountryProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <AppLayout />
            </WouterRouter>
          </CountryProvider>
        </LanguageProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
