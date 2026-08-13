import { DIAGNOSIS_API_BASE } from "./diagnosisApi";

// Same backend as the Digital Diagnosis Agent (coimagen-os), reused as-is —
// see diagnosisApi.ts for the VITE_DIAGNOSIS_API_URL override logic.
export const PROPOSAL_API_BASE = DIAGNOSIS_API_BASE;

// Mirrors GetPublicProposalResponse/ApprovePublicProposalResponse in
// coimagen-os's lib/api-zod/src/generated/api.ts (public-proposals.ts route).
export interface PublicProposalView {
  title: string;
  status: "draft" | "sent" | "accepted" | "rejected";
  amount: number | null;
  notes: string | null;
  validUntil: string | null;
}
