import { DIAGNOSIS_API_BASE } from "./diagnosisApi";

// Same backend as the Digital Diagnosis Agent and the propuesta page —
// reused as-is, see diagnosisApi.ts for the VITE_DIAGNOSIS_API_URL
// override logic.
export const INVOICE_API_BASE = DIAGNOSIS_API_BASE;

// PayPal client ID is public by design (only the secret is sensitive) —
// safe to ship in the frontend bundle.
export const PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID as string | undefined;

// Mirrors InvoicePublicView in coimagen-os's lib/api-zod/src/generated/api.ts
// (public-invoices.ts route).
export interface InvoicePublicView {
  publicToken: string;
  label: string;
  amount: number;
  currency: string;
  status: "draft" | "sent" | "paid" | "overdue" | "cancelled";
  subscriptionApproveUrl: string | null;
  // True as soon as the last cuota is paid and there's a recurring plan to
  // authorize, even before subscriptionApproveUrl exists — the fiscal-data
  // mini-form for the monthly plan (submitSubscriptionFiscalData below)
  // shows exactly when this is true and subscriptionApproveUrl is still null.
  subscriptionPending: boolean;
  // True once a payment-recovery reactivation email (30d/60d) has ever
  // gone out for this invoice — `amount` above is ALREADY the discounted
  // price when this is true, computed server-side (same number the client
  // would actually be charged). Nothing to compute on this side, just show it.
  discountApplied: boolean;
}

export interface FiscalDataInput {
  rfc: string;
  razonSocial: string;
  constanciaBase64: string;
  constanciaFileName: string;
}

export interface CreatePaypalOrderResponse {
  paypalOrderId: string;
  totalAmount: number;
  ivaAmount: number;
  currency: string;
}

export async function fetchPublicInvoice(token: string): Promise<InvoicePublicView | null> {
  const res = await fetch(`${INVOICE_API_BASE}/api/public/invoices/${token}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("No se pudo cargar la factura");
  return (await res.json()) as InvoicePublicView;
}

export async function createPaypalOrder(token: string, requiresFiscalInvoice: boolean): Promise<CreatePaypalOrderResponse> {
  const res = await fetch(`${INVOICE_API_BASE}/api/public/invoices/${token}/create-paypal-order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ requiresFiscalInvoice }),
  });
  const json = await res.json().catch(() => null);
  if (!res.ok) throw new Error((json && typeof json.error === "string" && json.error) || "No se pudo crear la orden de pago");
  return json as CreatePaypalOrderResponse;
}

export async function capturePaypalOrder(token: string, paypalOrderId: string): Promise<void> {
  const res = await fetch(`${INVOICE_API_BASE}/api/public/invoices/${token}/capture-paypal-order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ paypalOrderId }),
  });
  if (!res.ok) {
    const json = await res.json().catch(() => null);
    throw new Error((json && typeof json.error === "string" && json.error) || "No se pudo confirmar el pago");
  }
}

// CASO 1 — this cuota's RFC/razón social/constancia, saved before the
// PayPal order is created (create-paypal-order 400s if requiresFiscalInvoice
// is true and this hasn't been submitted yet).
export async function submitInvoiceFiscalData(token: string, data: FiscalDataInput): Promise<void> {
  const res = await fetch(`${INVOICE_API_BASE}/api/public/invoices/${token}/fiscal-data`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const json = await res.json().catch(() => null);
    throw new Error((json && typeof json.error === "string" && json.error) || "No se pudieron guardar tus datos fiscales");
  }
}

// CASO 2 — the client's one-time fiscal choice for their recurring plan.
// Finalizes the PayPal subscription (price includes 16% IVA if requested)
// and returns the updated view, now with subscriptionApproveUrl set.
export async function submitSubscriptionFiscalData(
  token: string,
  data: { requiresFiscalInvoice: boolean } & Partial<FiscalDataInput>,
): Promise<InvoicePublicView> {
  const res = await fetch(`${INVOICE_API_BASE}/api/public/invoices/${token}/subscription-fiscal-data`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const json = await res.json().catch(() => null);
  if (!res.ok) throw new Error((json && typeof json.error === "string" && json.error) || "No se pudo autorizar tu mensualidad");
  return json as InvoicePublicView;
}

// Payment-recovery "ya no quiero continuar" — reached only from the
// /factura/:token/declinar confirmation page, never triggered directly by
// the reminder email's link itself (see FacturaDeclinar.tsx). Purely
// informational on the backend: doesn't touch PayPal, doesn't cancel
// anything. Idempotent — calling this on an already-declined invoice just
// returns its current state, not an error.
export async function declineInvoice(token: string): Promise<InvoicePublicView> {
  const res = await fetch(`${INVOICE_API_BASE}/api/public/invoices/${token}/decline`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  const json = await res.json().catch(() => null);
  if (!res.ok) throw new Error((json && typeof json.error === "string" && json.error) || "No se pudo registrar tu decisión");
  return json as InvoicePublicView;
}

export function fileToDataUri(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error("No se pudo leer el archivo"));
    reader.readAsDataURL(file);
  });
}
