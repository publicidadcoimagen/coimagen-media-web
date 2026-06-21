import { Hero } from "@/components/sections/Hero";
import { PainSection } from "@/components/sections/PainSection";
import { SolutionLadder } from "@/components/sections/SolutionLadder";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { PremiumSection } from "@/components/sections/PremiumSection";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { BusinessOSSection } from "@/components/sections/BusinessOSSection";
import { CamilaSection } from "@/components/sections/CamilaSection";
import { DiagnosticCTA } from "@/components/sections/DiagnosticCTA";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <PainSection />
      <SolutionLadder />
      <ServicesSection />
      <IndustriesSection />
      <PricingSection />
      <PremiumSection />
      <CaseStudies />
      <BusinessOSSection />
      <CamilaSection />
      <DiagnosticCTA />
      <BlogPreview />
      <FinalCTA />
    </>
  );
}
