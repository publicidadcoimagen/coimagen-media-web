import { useEffect, useRef, useState } from "react";
import { usePaypalSdk } from "@/lib/usePaypalSdk";
import {
  fetchPublicInvoice,
  createPaypalOrder,
  capturePaypalOrder,
  submitInvoiceFiscalData,
  submitSubscriptionFiscalData,
  fileToDataUri,
  type InvoicePublicView,
} from "@/lib/facturaApi";

function formatAmount(amount: number, currency: string, isEs: boolean) {
  return `$${amount.toLocaleString(isEs ? "es-MX" : "en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currency}`;
}

// Polls GET /public/invoices/:token after a PayPal capture — the
// synchronous capture response is optimistic-UI-only, the webhook is the
// real source of truth for invoices.status flipping to "paid" (see
// coimagen-os's webhooks-paypal.ts). A few seconds of "confirmando..." is
// the honest state to show rather than pretending it's instant.
async function pollUntilPaid(token: string, attempts = 8, delayMs = 2500): Promise<InvoicePublicView | null> {
  for (let i = 0; i < attempts; i++) {
    await new Promise((r) => setTimeout(r, delayMs));
    const invoice = await fetchPublicInvoice(token);
    if (invoice && invoice.status === "paid") return invoice;
  }
  return fetchPublicInvoice(token);
}

interface FiscalFieldsProps {
  rfc: string;
  onRfc: (v: string) => void;
  razonSocial: string;
  onRazonSocial: (v: string) => void;
  onFile: (f: File | null) => void;
  isEs: boolean;
}

function FiscalFields({ rfc, onRfc, razonSocial, onRazonSocial, onFile, isEs }: FiscalFieldsProps) {
  return (
    <div className="space-y-3 mb-5 pl-1 border-l-2 border-[var(--c-cyan)]/25">
      <div className="pl-4">
        <label className="block text-[var(--c-muted)] text-xs font-semibold mb-1">RFC</label>
        <input
          type="text"
          value={rfc}
          onChange={(e) => onRfc(e.target.value.toUpperCase())}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[var(--c-cyan)]/50"
          placeholder="XAXX010101000"
        />
      </div>
      <div className="pl-4">
        <label className="block text-[var(--c-muted)] text-xs font-semibold mb-1">{isEs ? "Razón social" : "Legal business name"}</label>
        <input
          type="text"
          value={razonSocial}
          onChange={(e) => onRazonSocial(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[var(--c-cyan)]/50"
        />
      </div>
      <div className="pl-4">
        <label className="block text-[var(--c-muted)] text-xs font-semibold mb-1">
          {isEs ? "Constancia de situación fiscal (PDF)" : "Tax status certificate (PDF)"}
        </label>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => onFile(e.target.files?.[0] ?? null)}
          className="w-full text-[var(--c-muted)] text-xs file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:bg-[var(--c-cyan)]/15 file:text-[var(--c-cyan)] file:text-xs file:font-semibold"
        />
      </div>
    </div>
  );
}

interface PaymentBoxProps {
  invoice: InvoicePublicView;
  onUpdated: (invoice: InvoicePublicView) => void;
  isEs: boolean;
}

export default function PaymentBox({ invoice, onUpdated, isEs }: PaymentBoxProps) {
  const { loaded: sdkLoaded, error: sdkError } = usePaypalSdk(invoice.currency);
  const [requiresFiscalInvoice, setRequiresFiscalInvoice] = useState(false);
  const [rfc, setRfc] = useState("");
  const [razonSocial, setRazonSocial] = useState("");
  const [constanciaFile, setConstanciaFile] = useState<File | null>(null);
  const [phase, setPhase] = useState<"idle" | "confirming" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [subRequiresFiscalInvoice, setSubRequiresFiscalInvoice] = useState(false);
  const [subRfc, setSubRfc] = useState("");
  const [subRazonSocial, setSubRazonSocial] = useState("");
  const [subConstanciaFile, setSubConstanciaFile] = useState<File | null>(null);
  const [subSubmitting, setSubSubmitting] = useState(false);
  const [subError, setSubError] = useState<string | null>(null);

  const payable = invoice.status === "sent" || invoice.status === "overdue";
  const fiscalFieldsComplete = !requiresFiscalInvoice || (rfc.trim() !== "" && razonSocial.trim() !== "" && constanciaFile !== null);

  useEffect(() => {
    if (!sdkLoaded || !payable || !fiscalFieldsComplete || !containerRef.current || !window.paypal) return;
    containerRef.current.innerHTML = "";

    const buttons = window.paypal.Buttons({
      style: { layout: "vertical", color: "black", shape: "rect", label: "pay" },
      createOrder: async () => {
        setError(null);
        if (requiresFiscalInvoice && constanciaFile) {
          const constanciaBase64 = await fileToDataUri(constanciaFile);
          await submitInvoiceFiscalData(invoice.publicToken, { rfc: rfc.trim(), razonSocial: razonSocial.trim(), constanciaBase64, constanciaFileName: constanciaFile.name });
        }
        const order = await createPaypalOrder(invoice.publicToken, requiresFiscalInvoice);
        return order.paypalOrderId;
      },
      onApprove: async (data) => {
        setPhase("confirming");
        try {
          await capturePaypalOrder(invoice.publicToken, data.orderID);
          const updated = await pollUntilPaid(invoice.publicToken);
          if (updated) onUpdated(updated);
          setPhase("idle");
        } catch (err) {
          setError(err instanceof Error ? err.message : (isEs ? "No pudimos confirmar el pago" : "We couldn't confirm the payment"));
          setPhase("error");
        }
      },
      onError: (err) => {
        setError((err instanceof Error && err.message) || (isEs ? "Ocurrió un error con PayPal. Intenta de nuevo." : "Something went wrong with PayPal. Try again."));
        setPhase("error");
      },
    });
    buttons.render(containerRef.current);
    return () => {
      try { buttons.close(); } catch { /* already unmounted, ignore */ }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sdkLoaded, payable, fiscalFieldsComplete, requiresFiscalInvoice, invoice.publicToken]);

  const handleSubscriptionContinue = async () => {
    setSubError(null);
    if (subRequiresFiscalInvoice && (!subRfc.trim() || !subRazonSocial.trim() || !subConstanciaFile)) {
      setSubError(isEs ? "Completa tus datos fiscales para continuar." : "Complete your fiscal data to continue.");
      return;
    }
    setSubSubmitting(true);
    try {
      const constanciaBase64 = subConstanciaFile ? await fileToDataUri(subConstanciaFile) : undefined;
      const updated = await submitSubscriptionFiscalData(invoice.publicToken, {
        requiresFiscalInvoice: subRequiresFiscalInvoice,
        rfc: subRequiresFiscalInvoice ? subRfc.trim() : undefined,
        razonSocial: subRequiresFiscalInvoice ? subRazonSocial.trim() : undefined,
        constanciaBase64,
        constanciaFileName: subConstanciaFile?.name,
      });
      onUpdated(updated);
    } catch (err) {
      setSubError(err instanceof Error ? err.message : (isEs ? "No se pudo continuar" : "Couldn't continue"));
    } finally {
      setSubSubmitting(false);
    }
  };

  if (invoice.status === "paid") {
    return (
      <div className="glass border border-[var(--c-lime)]/30 rounded-2xl p-8 text-center mb-6">
        <p className="text-[var(--c-lime)] font-black text-lg mb-2">✅ {isEs ? "Pago recibido" : "Payment received"}</p>

        {invoice.subscriptionApproveUrl && (
          <>
            <p className="text-[var(--c-muted)] text-sm mb-5 max-w-md mx-auto">
              {isEs
                ? "Un último paso: autoriza tu cobro mensual en PayPal para activar tu plan."
                : "One last step: authorize your monthly charge on PayPal to activate your plan."}
            </p>
            <a
              href={invoice.subscriptionApproveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-black px-6 py-3 rounded-xl text-sm hover:brightness-110 transition-all"
            >
              {isEs ? "Autorizar cobro mensual →" : "Authorize monthly billing →"}
            </a>
          </>
        )}

        {!invoice.subscriptionApproveUrl && invoice.subscriptionPending && (
          <div className="text-left mt-6 pt-6 border-t border-white/10">
            <p className="text-white font-bold text-sm mb-1">{isEs ? "Antes de activar tu mensualidad" : "Before activating your monthly plan"}</p>
            <p className="text-[var(--c-muted)] text-xs mb-4">
              {isEs
                ? "Dinos si necesitas factura fiscal para tu cobro mensual — este dato no se pregunta cada mes."
                : "Tell us if you need a fiscal invoice for your monthly charge — you won't be asked again each month."}
            </p>
            <label className="flex items-start gap-3 mb-3 cursor-pointer">
              <input
                type="checkbox"
                checked={subRequiresFiscalInvoice}
                onChange={(e) => setSubRequiresFiscalInvoice(e.target.checked)}
                className="mt-1 w-4 h-4 accent-[var(--c-cyan)]"
              />
              <span className="text-[var(--c-muted)] text-sm">
                {isEs
                  ? "Necesito factura fiscal mexicana para mi mensualidad (se agrega 16% de IVA)"
                  : "I need a Mexican fiscal invoice for my monthly charge (16% IVA added)"}
              </span>
            </label>
            {subRequiresFiscalInvoice && (
              <FiscalFields rfc={subRfc} onRfc={setSubRfc} razonSocial={subRazonSocial} onRazonSocial={setSubRazonSocial} onFile={setSubConstanciaFile} isEs={isEs} />
            )}
            {subError && <p className="text-red-400 text-sm mb-3">{subError}</p>}
            <button
              onClick={handleSubscriptionContinue}
              disabled={subSubmitting}
              className="inline-flex items-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-black px-6 py-3 rounded-xl text-sm hover:brightness-110 transition-all disabled:opacity-50"
            >
              {subSubmitting ? (isEs ? "Procesando..." : "Processing...") : (isEs ? "Continuar →" : "Continue →")}
            </button>
          </div>
        )}
      </div>
    );
  }

  if (!payable) {
    return (
      <div className="glass border border-white/[0.08] rounded-2xl p-6 mb-6 text-center">
        <p className="text-[var(--c-muted)] text-sm">
          {isEs ? "Esta cuota todavía no está disponible para pago." : "This installment isn't payable yet."}
        </p>
      </div>
    );
  }

  return (
    <div className="glass border border-[var(--c-cyan)]/25 rounded-2xl p-8 mb-6">
      <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-2 text-center">{invoice.label}</p>
      {invoice.discountApplied && (
        <p className="text-center mb-2">
          <span className="inline-flex items-center gap-1 bg-[var(--c-lime)]/15 text-[var(--c-lime)] border border-[var(--c-lime)]/30 rounded-full px-3 py-1 text-xs font-bold">
            🎉 {isEs ? "10% de descuento aplicado" : "10% discount applied"}
          </span>
        </p>
      )}
      {/* amount is already the discounted price when discountApplied is true — computed server-side, nothing to calculate here. */}
      <p className="text-4xl font-black mb-6 text-[var(--c-cyan)] text-center">{formatAmount(invoice.amount, invoice.currency, isEs)}</p>

      <label className="flex items-start gap-3 mb-4 cursor-pointer">
        <input
          type="checkbox"
          checked={requiresFiscalInvoice}
          onChange={(e) => setRequiresFiscalInvoice(e.target.checked)}
          className="mt-1 w-4 h-4 accent-[var(--c-cyan)]"
        />
        <span className="text-[var(--c-muted)] text-sm">
          {isEs
            ? "Necesito factura fiscal mexicana (se agrega 16% de IVA sobre el precio)"
            : "I need a Mexican fiscal invoice (16% IVA added on top of the price)"}
        </span>
      </label>

      {requiresFiscalInvoice && (
        <FiscalFields rfc={rfc} onRfc={setRfc} razonSocial={razonSocial} onRazonSocial={setRazonSocial} onFile={setConstanciaFile} isEs={isEs} />
      )}

      {requiresFiscalInvoice && !fiscalFieldsComplete && (
        <p className="text-[var(--c-muted)] text-xs text-center mb-4">
          {isEs ? "Completa tus datos fiscales para continuar con el pago." : "Complete your fiscal data to continue with payment."}
        </p>
      )}

      {phase === "confirming" && (
        <p className="text-[var(--c-cyan)] text-sm text-center mb-4">
          {isEs ? "Confirmando tu pago..." : "Confirming your payment..."}
        </p>
      )}
      {error && <p className="text-red-400 text-sm text-center mb-4">{error}</p>}
      {sdkError && <p className="text-red-400 text-sm text-center mb-4">{sdkError}</p>}
      {!sdkLoaded && !sdkError && (
        <p className="text-[var(--c-muted)] text-xs text-center mb-4">{isEs ? "Cargando PayPal..." : "Loading PayPal..."}</p>
      )}

      {fiscalFieldsComplete && <div ref={containerRef} />}
    </div>
  );
}
