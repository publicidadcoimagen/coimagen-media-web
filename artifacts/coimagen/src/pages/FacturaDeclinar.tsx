import { useEffect, useState } from "react";
import { useParams } from "wouter";
import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { fetchPublicInvoice, declineInvoice, type InvoicePublicView } from "@/lib/facturaApi";

type LoadState = "loading" | "confirm" | "declining" | "declined" | "already-paid" | "not-found" | "error";

// Confirmation page for the "ya no quiero continuar" link in the 24h
// payment-recovery reminder email. Deliberately a separate page the client
// must load and click a real button on — the email link itself never
// triggers the decline directly, so a security scanner pre-fetching links
// in transit (Outlook Safe Links, corporate proxies) can't record a decline
// nobody actually clicked. Same reasoning as the proposal-approve flow.
export default function FacturaDeclinar() {
  const { token } = useParams<{ token: string }>();
  const { lang } = useLang();
  const isEs = lang === "es";

  const [state, setState] = useState<LoadState>("loading");
  const [invoice, setInvoice] = useState<InvoicePublicView | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setState("loading");
    fetchPublicInvoice(token)
      .then((inv) => {
        if (cancelled) return;
        if (!inv) {
          setState("not-found");
          return;
        }
        setInvoice(inv);
        setState(inv.status === "paid" ? "already-paid" : "confirm");
      })
      .catch(() => {
        if (!cancelled) setState("error");
      });
    return () => {
      cancelled = true;
    };
  }, [token]);

  useEffect(() => {
    document.title = isEs ? "Cancelar pago — Coimagen Media Agency" : "Cancel payment — Coimagen Media Agency";
  }, [isEs]);

  const handleDecline = async () => {
    setState("declining");
    setErrorMsg(null);
    try {
      const updated = await declineInvoice(token);
      setInvoice(updated);
      setState("declined");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : (isEs ? "No se pudo registrar tu decisión. Intenta de nuevo." : "Couldn't record your decision. Try again."));
      setState("confirm");
    }
  };

  return (
    <div className="min-h-screen bg-[#06060f] pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        {state === "loading" && (
          <div className="glass border border-[var(--c-cyan)]/25 rounded-2xl p-14 text-center">
            <svg className="w-8 h-8 animate-spin text-[var(--c-cyan)] mx-auto mb-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <p className="text-white font-bold text-sm">{isEs ? "Cargando..." : "Loading..."}</p>
          </div>
        )}

        {state === "not-found" && (
          <div className="glass border border-white/[0.08] rounded-2xl p-10 text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h1 className="text-white font-black text-xl mb-2">
              {isEs ? "No encontramos esa factura" : "We couldn't find that invoice"}
            </h1>
            <p className="text-[var(--c-muted)] text-sm mb-6">
              {isEs
                ? "El enlace puede estar mal escrito o la factura ya no existe."
                : "The link may be mistyped, or the invoice no longer exists."}
            </p>
            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-black px-6 py-3 rounded-xl text-sm hover:brightness-110 transition-all"
            >
              {isEs ? "Contactar por WhatsApp" : "Contact us on WhatsApp"}
            </a>
          </div>
        )}

        {state === "error" && (
          <div className="glass border border-red-400/30 rounded-2xl p-10 text-center">
            <p className="text-red-400 text-sm font-bold mb-2">⚠️ {isEs ? "Algo salió mal" : "Something went wrong"}</p>
            <p className="text-[var(--c-muted)] text-sm mb-6">
              {isEs ? "No pudimos cargar la información. Intenta de nuevo en unos minutos." : "We couldn't load this. Try again in a few minutes."}
            </p>
            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-black px-6 py-3 rounded-xl text-sm hover:brightness-110 transition-all"
            >
              {isEs ? "Contactar por WhatsApp" : "Contact us on WhatsApp"}
            </a>
          </div>
        )}

        {state === "already-paid" && (
          <div className="glass border border-[var(--c-lime)]/30 rounded-2xl p-10 text-center">
            <p className="text-[var(--c-lime)] font-black text-lg mb-2">✅ {isEs ? "Esta cuota ya fue pagada" : "This installment is already paid"}</p>
            <p className="text-[var(--c-muted)] text-sm">
              {isEs ? "No hay nada que cancelar — gracias." : "There's nothing to cancel — thank you."}
            </p>
          </div>
        )}

        {(state === "confirm" || state === "declining") && invoice && (
          <div className="glass border border-white/[0.08] rounded-2xl p-10 text-center">
            <div className="text-4xl mb-4">🤔</div>
            <h1 className="text-white font-black text-xl mb-2">
              {isEs ? "¿Seguro que ya no quieres continuar con tu pago?" : "Are you sure you don't want to continue with your payment?"}
            </h1>
            <p className="text-[var(--c-muted)] text-sm mb-8 max-w-md mx-auto">
              {isEs
                ? "Solo le avisaremos a nuestro equipo. No se cancela ningún cargo — no tenías nada pendiente en PayPal."
                : "We'll just let our team know. No charge gets cancelled — you had nothing pending on PayPal."}
            </p>

            {errorMsg && <p className="text-red-400 text-sm mb-4">{errorMsg}</p>}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleDecline}
                disabled={state === "declining"}
                className="inline-flex items-center justify-center gap-2 border border-red-400/40 text-red-400 font-bold px-6 py-3 rounded-xl text-sm hover:bg-red-400/10 transition-all disabled:opacity-50"
              >
                {state === "declining"
                  ? (isEs ? "Registrando..." : "Recording...")
                  : (isEs ? "Sí, ya no quiero continuar" : "Yes, I don't want to continue")}
              </button>
              <a
                href={`/factura/${token}`}
                className="inline-flex items-center justify-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-black px-6 py-3 rounded-xl text-sm hover:brightness-110 transition-all"
              >
                {isEs ? "No, quiero pagar →" : "No, I want to pay →"}
              </a>
            </div>
          </div>
        )}

        {state === "declined" && (
          <div className="glass border border-white/[0.08] rounded-2xl p-10 text-center">
            <div className="text-4xl mb-4">👍</div>
            <h1 className="text-white font-black text-xl mb-2">{isEs ? "Listo, quedó registrado" : "Done, we've noted it"}</h1>
            <p className="text-[var(--c-muted)] text-sm mb-6 max-w-md mx-auto">
              {isEs
                ? "Gracias por avisarnos. Si cambias de opinión más adelante, este mismo link sigue disponible para pagar cuando quieras."
                : "Thanks for letting us know. If you change your mind later, this same link is still available to pay whenever you'd like."}
            </p>
            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-black px-6 py-3 rounded-xl text-sm hover:brightness-110 transition-all"
            >
              💬 {isEs ? "Hablar por WhatsApp" : "Message on WhatsApp"}
            </a>
          </div>
        )}

      </div>
    </div>
  );
}
