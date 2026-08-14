import { useEffect, useRef, useState } from "react";
import { usePaypalSdk } from "@/lib/usePaypalSdk";
import { fetchPublicInvoice, createPaypalOrder, capturePaypalOrder, type InvoicePublicView } from "@/lib/facturaApi";

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

interface PaymentBoxProps {
  invoice: InvoicePublicView;
  onUpdated: (invoice: InvoicePublicView) => void;
  isEs: boolean;
}

export default function PaymentBox({ invoice, onUpdated, isEs }: PaymentBoxProps) {
  const { loaded: sdkLoaded, error: sdkError } = usePaypalSdk(invoice.currency);
  const [requiresFiscalInvoice, setRequiresFiscalInvoice] = useState(false);
  const [phase, setPhase] = useState<"idle" | "confirming" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const payable = invoice.status === "sent" || invoice.status === "overdue";

  useEffect(() => {
    if (!sdkLoaded || !payable || !containerRef.current || !window.paypal) return;
    containerRef.current.innerHTML = "";

    const buttons = window.paypal.Buttons({
      style: { layout: "vertical", color: "black", shape: "rect", label: "pay" },
      createOrder: async () => {
        setError(null);
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
      onError: () => {
        setError(isEs ? "Ocurrió un error con PayPal. Intenta de nuevo." : "Something went wrong with PayPal. Try again.");
        setPhase("error");
      },
    });
    buttons.render(containerRef.current);
    return () => {
      try { buttons.close(); } catch { /* already unmounted, ignore */ }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sdkLoaded, payable, requiresFiscalInvoice, invoice.publicToken]);

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
      <p className="text-4xl font-black mb-6 text-[var(--c-cyan)] text-center">{formatAmount(invoice.amount, invoice.currency, isEs)}</p>

      <label className="flex items-start gap-3 mb-6 cursor-pointer">
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

      <div ref={containerRef} />
    </div>
  );
}
