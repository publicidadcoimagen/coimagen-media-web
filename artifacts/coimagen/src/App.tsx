import { useState } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

const queryClient = new QueryClient();

type Lang = "es" | "en";

function AppContent() {
  const [lang, setLang] = useState<Lang>("es");

  function toggleLang() {
    setLang((l) => (l === "es" ? "en" : "es"));
  }

  return (
    <>
      {/* Language Toggle — fixed top-right, sits above navbar */}
      <div className="fixed top-3.5 right-36 z-[60] hidden md:block">
        <button
          data-testid="button-lang-toggle"
          onClick={toggleLang}
          className="flex items-center gap-0 bg-white/8 border border-white/15 rounded-full overflow-hidden text-xs font-bold transition-all hover:border-white/30"
        >
          <span className={`px-3 py-1.5 transition-colors ${lang === "es" ? "bg-orange-500 text-white" : "text-white/50 hover:text-white/80"}`}>
            ES
          </span>
          <span className={`px-3 py-1.5 transition-colors ${lang === "en" ? "bg-orange-500 text-white" : "text-white/50 hover:text-white/80"}`}>
            EN
          </span>
        </button>
      </div>
      <Switch>
        <Route path="/" component={() => <Home lang={lang} />} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <AppContent />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
