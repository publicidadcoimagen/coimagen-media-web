import { useEffect } from "react";
import { Hero } from "@/components/sections/Hero";
import { PainSection } from "@/components/sections/PainSection";
import { SolutionLadder } from "@/components/sections/SolutionLadder";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { PricingSection } from "@/components/sections/PricingSection";
// FounderOfferSection: temporarily unmounted from the homepage (P-50) — the
// "20 spots" counter is hardcoded, not a real count (see P-49). Component
// kept intact, not deleted: planned to come back later as a pop-up instead
// of an inline section.
import { ReferralSection } from "@/components/sections/ReferralSection";
import { PremiumSection } from "@/components/sections/PremiumSection";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { BusinessOSSection } from "@/components/sections/BusinessOSSection";
import { CamilaSection } from "@/components/sections/CamilaSection";
import { DiagnosticCTA } from "@/components/sections/DiagnosticCTA";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SpotifyEmbedSection } from "@/components/sections/SpotifyEmbedSection";

export default function Home() {
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
      <ReferralSection />
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
