import { useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { Hero } from "@/components/sections/Hero";
import { PainSection } from "@/components/sections/PainSection";
import { SolutionLadder } from "@/components/sections/SolutionLadder";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FounderOfferSection } from "@/components/sections/FounderOfferSection";
import { ReferralSection } from "@/components/sections/ReferralSection";
import { PremiumSection } from "@/components/sections/PremiumSection";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { BusinessOSSection } from "@/components/sections/BusinessOSSection";
import { CamilaSection } from "@/components/sections/CamilaSection";
import { DiagnosticCTA } from "@/components/sections/DiagnosticCTA";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SpotifyEmbedSection } from "@/components/sections/SpotifyEmbedSection";
import { SHOW_FOUNDER_AND_REFERRAL } from "@/config/featureFlags";

// Spanish values are index.html's own defaults (unchanged); the English home
// (/en) needs its own instead of inheriting them.
const HOME_META = {
  es: {
    title: "Coimagen Media Agency — Marketing Digital + IA | Tijuana",
    description: "Agencia de marketing digital en Tijuana y San Diego: automatización, CRM, chatbot WhatsApp, agentes IA, landing pages, SEO local. Diagnóstico gratis.",
    ogTitle: "Coimagen Media Agency — Marketing Digital + IA para Negocios",
    ogDescription: "Agencia de marketing digital en Tijuana. Automatización, CRM, agentes IA, landing pages y SEO local para negocios locales.",
    twitterDescription: "Agencia de marketing digital en Tijuana. Automatización, CRM, agentes IA y SEO local para negocios.",
  },
  en: {
    title: "Coimagen Media Agency — Digital Marketing + AI | Tijuana & San Diego",
    description: "Digital marketing agency in Tijuana and San Diego: automation, CRM, WhatsApp chatbot, AI agents, landing pages, local SEO. Free diagnostic.",
    ogTitle: "Coimagen Media Agency — Digital Marketing + AI for Businesses",
    ogDescription: "Digital marketing agency in Tijuana. Automation, CRM, AI agents, landing pages and local SEO for local businesses.",
    twitterDescription: "Digital marketing agency in Tijuana. Automation, CRM, AI agents and local SEO for businesses.",
  },
};

export default function Home() {
  const { lang } = useLang();

  useEffect(() => {
    const meta = HOME_META[lang];
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", meta.ogTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", meta.ogDescription);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", meta.ogTitle);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", meta.twitterDescription);
  }, [lang]);

  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    // Sections render synchronously, but the browser's own scroll-to-hash
    // (on initial load, e.g. after the /verticales/ -> /#industrias redirect)
    // fires before React commits/paints, so it lands at the top instead of
    // the target section. Retry it ourselves once a frame has painted.
    const raf = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <Hero />
      <PainSection />
      <SolutionLadder />
      <ServicesSection />
      <IndustriesSection />
      <PricingSection />
      {SHOW_FOUNDER_AND_REFERRAL && (
        <>
          <FounderOfferSection />
          <ReferralSection />
        </>
      )}
      <PremiumSection />
      <CaseStudies />
      <BusinessOSSection />
      <CamilaSection />
      <DiagnosticCTA />
      <BlogPreview />
      <FinalCTA />
      <SpotifyEmbedSection />
    </>
  );
}
