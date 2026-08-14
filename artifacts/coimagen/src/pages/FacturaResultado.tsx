import { useEffect, useState } from "react";
import { useParams } from "wouter";
import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { fetchPublicInvoice, type InvoicePublicView } from "@/lib/facturaApi";
import PaymentBox from "@/components/PaymentBox";

type LoadState = "loading" | "ready" | "not-found" | "error";

export default function FacturaResultado() {
  const { token } = useParams<{ token: string }>();
  const { lang } = useLang();
  const isEs = lang === "es";

  const [state, setState] = useState<LoadState>("loading");
  const [data, setData] = useState<InvoicePublicView | null>(null);

  useEffect(() => {
    let cancelled = false;
    setState("loading");
    fetchPublicInvoice(token)
      .then((invoice) => {
        if (cancelled) return;
        if (!invoice) {
          setState("not-found");
          return;
        }
        setData(invoice);
        setState("ready");
      })
      .catch(() => {
        if (!cancelled) setState("error");
      });
    return () => {
      cancelled = true;
    };
  }, [token]);

  useEffect(() => {
    const title = isEs ? "Tu Factura — Coimagen Media Agency" : "Your Invoice — Coimagen Media Agency";
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      isEs ? "Revisa y paga tu factura de Coimagen Media Agency." : "Review and pay your Coimagen Media Agency invoice."
    );
  }, [isEs]);

  return (
    <div className="min-h-screen bg-[#06060f] pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        {state === "loading" && (
          <div className="glass border border-[var(--c-cyan)]/25 rounded-2xl p-14 text-center">
            <svg className="w-8 h-8 animate-spin text-[var(--c-cyan)] mx-auto mb-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <p className="text-white font-bold text-sm">{isEs ? "Cargando tu factura..." : "Loading your invoice..."}</p>
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
              {isEs ? "No pudimos cargar tu factura. Intenta de nuevo en unos minutos." : "We couldn't load your invoice. Try again in a few minutes."}
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

        {state === "ready" && data && (
          <>
            <div className="text-center mb-8">
              <div className="badge-neon text-[var(--c-cyan)] border border-[var(--c-cyan)]/25 bg-[var(--c-cyan)]/10 mb-4 w-fit mx-auto">
                🧾 {isEs ? "Tu Factura" : "Your Invoice"}
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white mb-2">{data.label}</h1>
            </div>

            <PaymentBox invoice={data} onUpdated={setData} isEs={isEs} />

            <div className="glass border border-white/[0.06] rounded-2xl p-8 text-center">
              <p className="text-[var(--c-muted)] text-sm mb-6">
                {isEs ? "¿Tienes preguntas sobre tu factura?" : "Have questions about your invoice?"}
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
          </>
        )}

      </div>
    </div>
  );
}
