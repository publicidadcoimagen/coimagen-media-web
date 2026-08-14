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
