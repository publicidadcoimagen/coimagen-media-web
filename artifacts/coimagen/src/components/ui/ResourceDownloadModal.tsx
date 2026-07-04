import { useState, useEffect, useRef } from "react";
import { useLang } from "@/context/LanguageContext";

interface ResourceDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  titleEs: string;
  titleEn: string;
  pdfEs: string;
  pdfEn: string;
  accentColor: string;
}

export default function ResourceDownloadModal({
  isOpen,
  onClose,
  titleEs,
  titleEn,
  pdfEs,
  pdfEn,
  accentColor,
}: ResourceDownloadModalProps) {
  const { lang } = useLang();
  const isEs = lang === "es";
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setSubmitted(false);
      setLoading(false);
      setError("");
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const pdfUrl = isEs ? pdfEs : pdfEn;
  const fileName = pdfUrl.split("/").pop() ?? "recurso-coimagen.pdf";
  const resourceTitle = isEs ? titleEs : titleEn;

  const isValidEmail = (val: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError(
        isEs
          ? "Por favor escribe un correo válido."
          : "Please enter a valid email address."
      );
      return;
    }
    setError("");
    setLoading(true);

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-[#0d0d1a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        <div
          className="h-1 w-full"
          style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }}
        />

        <div className="p-7">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/40 hover:text-white/80 transition-colors text-xl leading-none"
            aria-label="Cerrar"
          >
            ✕
          </button>

          {!submitted ? (
            <>
              <div className="mb-5">
                <p className="text-xs font-bold mb-1" style={{ color: accentColor }}>
                  {isEs ? "RECURSO GRATUITO" : "FREE RESOURCE"}
                </p>
                <h2
                  id="modal-title"
                  className="text-white font-black text-xl leading-snug"
                >
                  {resourceTitle}
                </h2>
                <p className="text-[var(--c-muted)] text-sm mt-2 leading-relaxed">
                  {isEs
                    ? "Déjanos tu correo y te enviamos el recurso de inmediato."
                    : "Leave us your email and we'll send the resource right away."}
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-4">
                  <label
                    htmlFor="resource-email"
                    className="block text-xs font-semibold text-white/60 mb-1.5"
                  >
                    {isEs ? "Tu correo electrónico" : "Your email address"}
                  </label>
                  <input
                    ref={inputRef}
                    id="resource-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder={
                      isEs ? "nombre@empresa.com" : "name@company.com"
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                    required
                  />
                  {error && (
                    <p className="text-red-400 text-xs mt-1.5">{error}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl font-black text-sm transition-all hover:brightness-110 active:scale-95 disabled:opacity-60 flex items-center justify-center gap-2"
                  style={{
                    background: accentColor,
                    color: "#06060f",
                  }}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      {isEs ? "Preparando..." : "Preparing..."}
                    </>
                  ) : (
                    <>
                      📩 {isEs ? "Enviarme el recurso" : "Send me the resource"}
                    </>
                  )}
                </button>

                <p className="text-[var(--c-muted)] text-xs text-center mt-3">
                  {isEs
                    ? "Sin spam. Solo recibirás el recurso que solicitaste."
                    : "No spam. You'll only receive the resource you requested."}
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-white font-black text-xl mb-3">
                {isEs ? "¡Gracias por tu interés!" : "Thank you for your interest!"}
              </h2>
              <p className="text-[var(--c-muted)] text-sm leading-relaxed mb-2">
                {isEs
                  ? "Tu recurso ya está descargando. Si tienes problemas para encontrarlo, revisa tu carpeta de "
                  : "Your resource is now downloading. If you have trouble finding it, check your "}
                <span className="text-white font-bold">
                  {isEs ? "spam o correo no deseado" : "spam or junk mail folder"}
                </span>
                {isEs ? "." : "."}
              </p>
              <p className="text-[var(--c-muted)] text-xs mb-6">
                {isEs
                  ? "¿Necesitas ayuda personalizada? Nuestro equipo está listo."
                  : "Need personalized help? Our team is ready."}
              </p>
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm border border-white/15 text-white hover:bg-white/5 transition-all"
              >
                {isEs ? "Cerrar" : "Close"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
