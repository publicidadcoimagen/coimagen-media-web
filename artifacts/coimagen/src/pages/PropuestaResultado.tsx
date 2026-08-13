import { useEffect, useState } from "react";
import { useParams } from "wouter";
import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { PROPOSAL_API_BASE, type PublicProposalView } from "@/lib/propuestaApi";

type LoadState = "loading" | "ready" | "not-found" | "error";
type ApproveState = "idle" | "approving" | "error";

function formatAmount(amount: number, isEs: boolean) {
  return `$${amount.toLocaleString(isEs ? "es-MX" : "en-US")}`;
}

export default function PropuestaResultado() {
  const { token } = useParams<{ token: string }>();
  const { lang } = useLang();
  const isEs = lang === "es";

  const [state, setState] = useState<LoadState>("loading");
  const [data, setData] = useState<PublicProposalView | null>(null);
  const [approveState, setApproveState] = useState<ApproveState>("idle");
  const [approveError, setApproveError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setState("loading");
    fetch(`${PROPOSAL_API_BASE}/api/public/proposals/${token}`)
      .then(async (res) => {
        if (cancelled) return;
        if (res.status === 404) {
          setState("not-found");
          return;
        }
        if (!res.ok) {
          setState("error");
          return;
        }
        const json = (await res.json()) as PublicProposalView;
        setData(json);
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
    const title = isEs ? "Tu Propuesta — Coimagen Media Agency" : "Your Proposal — Coimagen Media Agency";
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      isEs ? "Revisa y aprueba tu propuesta de Coimagen Media Agency." : "Review and approve your Coimagen Media Agency proposal."
    );
  }, [isEs]);

  const handleApprove = async () => {
    setApproveState("approving");
    setApproveError(null);
    const fallbackMessage = isEs
      ? "No pudimos procesar tu aprobación en este momento. Intenta de nuevo o contáctanos por WhatsApp."
      : "We couldn't process your approval right now. Try again or reach us on WhatsApp.";
    try {
      const res = await fetch(`${PROPOSAL_API_BASE}/api/public/proposals/${token}/approve`, { method: "POST" });
      const json = await res.json().catch(() => null);
      if (!res.ok) {
        throw new Error((json && typeof json.error === "string" && json.error) || fallbackMessage);
      }
      setData(json as PublicProposalView);
      setApproveState("idle");
    } catch (err) {
      setApproveError(err instanceof Error ? err.message : fallbackMessage);
      setApproveState("error");
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
            <p className="text-white font-bold text-sm">{isEs ? "Cargando tu propuesta..." : "Loading your proposal..."}</p>
          </div>
        )}

        {state === "not-found" && (
          <div className="glass border border-white/[0.08] rounded-2xl p-10 text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h1 className="text-white font-black text-xl mb-2">
              {isEs ? "No encontramos esa propuesta" : "We couldn't find that proposal"}
            </h1>
            <p className="text-[var(--c-muted)] text-sm mb-6">
              {isEs
                ? "El enlace puede estar mal escrito o la propuesta ya no existe."
                : "The link may be mistyped, or the proposal no longer exists."}
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
              {isEs ? "No pudimos cargar tu propuesta. Intenta de nuevo en unos minutos." : "We couldn't load your proposal. Try again in a few minutes."}
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
            {/* Header */}
            <div className="text-center mb-8">
              <div className="badge-neon text-[var(--c-cyan)] border border-[var(--c-cyan)]/25 bg-[var(--c-cyan)]/10 mb-4 w-fit mx-auto">
                📄 {isEs ? "Tu Propuesta" : "Your Proposal"}
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white mb-2">{data.title}</h1>
            </div>

            {/* Status + amount card */}
            <div className={`glass border rounded-2xl p-8 text-center mb-6 ${
              data.status === "accepted" ? "border-[var(--c-lime)]/30" :
              data.status === "rejected" ? "border-red-400/30" :
              "border-[var(--c-cyan)]/25"
            }`}>
              {data.amount !== null && (
                <>
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">
                    {isEs ? "Inversión" : "Investment"}
                  </p>
                  <p className="text-5xl font-black mb-4 text-[var(--c-cyan)]">{formatAmount(data.amount, isEs)}</p>
                </>
              )}

              {data.status === "accepted" && (
                <p className="text-[var(--c-lime)] font-black text-lg mb-2">
                  ✅ {isEs ? "Propuesta aprobada" : "Proposal approved"}
                </p>
              )}
              {data.status === "rejected" && (
                <p className="text-red-400 font-black text-lg mb-2">
                  {isEs ? "Propuesta rechazada" : "Proposal rejected"}
                </p>
              )}
              {(data.status === "draft" || data.status === "sent") && (
                <p className="text-white/70 text-sm mb-2">
                  {isEs ? "Pendiente de tu aprobación" : "Awaiting your approval"}
                </p>
              )}

              {data.validUntil && (
                <p className="text-[var(--c-muted)] text-xs mt-1">
                  {isEs ? "Vigente hasta" : "Valid until"}: <span className="text-white/80">{data.validUntil}</span>
                </p>
              )}

              {data.notes && (
                <p className="text-[var(--c-muted)] text-sm leading-relaxed max-w-lg mx-auto mt-5 text-left whitespace-pre-line">
                  {data.notes}
                </p>
              )}
            </div>

            {/* Approve action */}
            {(data.status === "draft" || data.status === "sent") && (
              <div className="glass border border-[var(--c-cyan)]/25 rounded-2xl p-8 text-center mb-6">
                <h2 className="text-white font-black text-lg mb-2">
                  {isEs ? "¿Listo para avanzar?" : "Ready to move forward?"}
                </h2>
                <p className="text-[var(--c-muted)] text-sm mb-6">
                  {isEs
                    ? "Al aprobar, nuestro equipo se pondrá en contacto para los siguientes pasos."
                    : "Once approved, our team will reach out with next steps."}
                </p>
                {approveState === "error" && approveError && (
                  <p className="text-red-400 text-sm mb-4">{approveError}</p>
                )}
                <button
                  onClick={handleApprove}
                  disabled={approveState === "approving"}
                  className="bg-[var(--c-cyan)] text-[#06060f] font-black px-8 py-3.5 rounded-xl text-sm hover:brightness-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {approveState === "approving"
                    ? (isEs ? "Procesando..." : "Processing...")
                    : (isEs ? "Aprobar propuesta →" : "Approve proposal →")}
                </button>
              </div>
            )}

            {data.status === "rejected" && (
              <div className="glass border border-red-400/20 rounded-2xl p-6 mb-6 text-center">
                <p className="text-[var(--c-muted)] text-sm">
                  {isEs
                    ? "Esta propuesta ya fue rechazada — contáctanos si quieres actualizarla."
                    : "This proposal was already rejected — contact us if you'd like to update it."}
                </p>
              </div>
            )}

            {/* CTA */}
            <div className="glass border border-white/[0.06] rounded-2xl p-8 text-center">
              <p className="text-[var(--c-muted)] text-sm mb-6">
                {isEs ? "¿Tienes preguntas sobre tu propuesta?" : "Have questions about your proposal?"}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={siteConfig.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-black px-6 py-3 rounded-xl text-sm hover:brightness-110 transition-all"
                >
                  💬 {isEs ? "Hablar por WhatsApp" : "Message on WhatsApp"}
                </a>
                <a
                  href="/agendar"
                  className="inline-flex items-center justify-center gap-2 glass border border-white/[0.08] text-white/80 hover:text-white px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  📅 {isEs ? "Agendar sesión" : "Book a session"}
                </a>
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
