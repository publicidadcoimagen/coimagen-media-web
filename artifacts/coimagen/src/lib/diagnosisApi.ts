export const DIAGNOSIS_API_BASE =
  (import.meta.env.VITE_DIAGNOSIS_API_URL as string | undefined) ?? "https://coimagen-os-api.onrender.com";

export interface DigitalDiagnosisAnalysis {
  overallScore: number;
  metaInfo: {
    title: string | null;
    titleLength: number;
    metaDescription: string | null;
    metaDescriptionLength: number;
    hasViewportMeta: boolean;
    language: string | null;
    issues: string[];
  };
  contentQuality: {
    wordCount: number;
    hasH1: boolean;
    headingStructureOk: boolean;
    readabilityNotes: string;
    issues: string[];
  };
  structure: {
    mobileFriendlySignals: boolean;
    hasSsl: boolean;
    issues: string[];
  };
  links: {
    internalLinksCount: number;
    externalLinksCount: number;
    issues: string[];
  };
  generalFactors: {
    hasContactInfo: boolean;
    hasSocialLinks: boolean;
    hasCallToAction: boolean;
    issues: string[];
  };
  prioritizedTasks: {
    priority: "high" | "medium" | "low";
    title: string;
    description: string;
  }[];
  summary: string;
}

export interface DigitalDiagnosisResult {
  title: string;
  status: string;
  sourceUrl: string | null;
  result: DigitalDiagnosisAnalysis | null;
  createdAt: string;
  // Language this specific diagnosis was generated in (see P-diagnosis-lang)
  // — independent of the site-wide ES/EN toggle, since the AI content can't
  // be regenerated on the fly when the toggle changes.
  language: "es" | "en";
}
