import { useEffect, useState } from "react";
import { useParams } from "wouter";
import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { DIAGNOSIS_API_BASE, type DigitalDiagnosisResult } from "@/lib/diagnosisApi";

type LoadState = "loading" | "ready" | "not-found" | "error";

function getScoreTier(score: number, isEs: boolean) {
  const tiers = [
    { min: 0, max: 39, name: isEs ? "Crítico" : "Critical", color: "text-red-400", border: "border-red-400/30" },
    { min: 40, max: 59, name: isEs ? "Necesita atención" : "Needs attention", color: "text-orange-400", border: "border-orange-400/30" },
    { min: 60, max: 74, name: isEs ? "En progreso" : "In progress", color: "text-yellow-400", border: "border-yellow-400/30" },
    { min: 75, max: 89, name: isEs ? "Bien encaminado" : "On track", color: "text-[var(--c-lime)]", border: "border-[var(--c-lime)]/30" },
    { min: 90, max: 100, name: isEs ? "Excelente" : "Excellent", color: "text-[var(--c-cyan)]", border: "border-[var(--c-cyan)]/30" },
  ];
  return tiers.find((t) => score >= t.min && score <= t.max) ?? tiers[0];
}

const priorityStyles = {
  high: { es: "Alta", en: "High", color: "text-red-400", border: "border-red-400/30", bg: "bg-red-400/10" },
  medium: { es: "Media", en: "Medium", color: "text-orange-400", border: "border-orange-400/30", bg: "bg-orange-400/10" },
  low: { es: "Baja", en: "Low", color: "text-[var(--c-cyan)]", border: "border-[var(--c-cyan)]/30", bg: "bg-[var(--c-cyan)]/10" },
} as const;

function Check({ ok, label }: { ok: boolean; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className={ok ? "text-[var(--c-lime)]" : "text-red-400"}>{ok ? "✅" : "❌"}</span>
      <span className="text-white/80 text-sm">{label}</span>
    </div>
  );
}

function IssuesList({ issues }: { issues: string[] }) {
  if (issues.length === 0) return null;
  return (
    <ul className="mt-3 space-y-1.5">
      {issues.map((issue, i) => (
        <li key={i} className="text-[var(--c-muted)] text-xs flex items-start gap-2">
          <span className="text-orange-400 mt-0.5">•</span>
          {issue}
        </li>
      ))}
    </ul>
  );
}

export default function DiagnosticoResultado() {
  const { token } = useParams<{ token: string }>();
  const { lang } = useLang();
  const isEs = lang === "es";

  const [state, setState] = useState<LoadState>("loading");
  const [data, setData] = useState<DigitalDiagnosisResult | null>(null);

  useEffect(() => {
    let cancelled = false;
    setState("loading");
    fetch(`${DIAGNOSIS_API_BASE}/api/public/digital-diagnosis/${token}`)
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
        const json = (await res.json()) as DigitalDiagnosisResult;
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
    const title = isEs ? "Tu Diagnóstico Digital — Coimagen Media Agency" : "Your Digital Diagnostic — Coimagen Media Agency";
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      isEs ? "Resultados de tu diagnóstico digital gratuito." : "Your free digital diagnostic results."
    );
  }, [isEs]);

  const analysis = data?.result ?? null;
  const tier = analysis ? getScoreTier(analysis.overallScore, isEs) : null;
  const sortedTasks = analysis
    ? [...analysis.prioritizedTasks].sort((a, b) => {
        const order = { high: 0, medium: 1, low: 2 };
        return order[a.priority] - order[b.priority];
      })
    : [];

  return (
    <div className="min-h-screen bg-[#06060f] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {state === "loading" && (
          <div className="glass border border-[var(--c-cyan)]/25 rounded-2xl p-14 text-center">
            <svg className="w-8 h-8 animate-spin text-[var(--c-cyan)] mx-auto mb-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <p className="text-white font-bold text-sm">{isEs ? "Cargando tu diagnóstico..." : "Loading your diagnostic..."}</p>
          </div>
        )}

        {state === "not-found" && (
          <div className="glass border border-white/[0.08] rounded-2xl p-10 text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h1 className="text-white font-black text-xl mb-2">
              {isEs ? "No encontramos ese diagnóstico" : "We couldn't find that diagnostic"}
            </h1>
            <p className="text-[var(--c-muted)] text-sm mb-6">
              {isEs
                ? "El enlace puede estar mal escrito o el diagnóstico ya no existe."
                : "The link may be mistyped, or the diagnostic no longer exists."}
            </p>
            <a
              href="/diagnostico"
              className="inline-flex items-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-black px-6 py-3 rounded-xl text-sm hover:brightness-110 transition-all"
            >
              {isEs ? "Hacer un nuevo diagnóstico →" : "Start a new diagnostic →"}
            </a>
          </div>
        )}

        {state === "error" && (
          <div className="glass border border-red-400/30 rounded-2xl p-10 text-center">
            <p className="text-red-400 text-sm font-bold mb-2">⚠️ {isEs ? "Algo salió mal" : "Something went wrong"}</p>
            <p className="text-[var(--c-muted)] text-sm mb-6">
              {isEs ? "No pudimos cargar tu diagnóstico. Intenta de nuevo en unos minutos." : "We couldn't load your diagnostic. Try again in a few minutes."}
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

        {state === "ready" && data && (!analysis || !tier) && (
          <div className="glass border border-white/[0.08] rounded-2xl p-10 text-center">
            <div className="text-4xl mb-4">⏳</div>
            <h1 className="text-white font-black text-xl mb-2">
              {isEs ? "Tu diagnóstico se está generando" : "Your diagnostic is still generating"}
            </h1>
            <p className="text-[var(--c-muted)] text-sm">
              {isEs ? "Vuelve a revisar en unos minutos." : "Check back again in a few minutes."}
            </p>
          </div>
        )}

        {state === "ready" && data && analysis && tier && (
          <>
            {/* Header */}
            <div className="text-center mb-8">
              <div className="badge-neon text-[var(--c-cyan)] border border-[var(--c-cyan)]/25 bg-[var(--c-cyan)]/10 mb-4 w-fit mx-auto">
                🔍 {isEs ? "Tu Diagnóstico Digital" : "Your Digital Diagnostic"}
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white mb-2">{data.title}</h1>
              {data.sourceUrl && (
                <a href={data.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--c-cyan)] text-sm hover:underline">
                  {data.sourceUrl}
                </a>
              )}
            </div>

            {/* Overall score */}
            <div className={`glass border ${tier.border} rounded-2xl p-8 text-center mb-6`}>
              <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">
                {isEs ? "Puntaje general" : "Overall score"}
              </p>
              <p className={`text-6xl font-black mb-2 ${tier.color}`}>{analysis.overallScore}</p>
              <p className={`text-xl font-black mb-4 ${tier.color}`}>{tier.name}</p>
              <p className="text-[var(--c-muted)] text-sm leading-relaxed max-w-xl mx-auto">{analysis.summary}</p>
            </div>

            {/* Prioritized tasks */}
            {sortedTasks.length > 0 && (
              <div className="mb-8">
                <h2 className="text-white font-black text-lg mb-4">
                  {isEs ? "Plan de acción prioritario" : "Priority action plan"}
                </h2>
                <div className="space-y-3">
                  {sortedTasks.map((task, i) => {
                    const p = priorityStyles[task.priority];
                    return (
                      <div key={i} className={`glass border ${p.border} rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${p.bg} ${p.color}`}>
                            {isEs ? p.es : p.en}
                          </span>
                          <p className="text-white font-bold text-sm">{task.title}</p>
                        </div>
                        <p className="text-[var(--c-muted)] text-sm leading-relaxed">{task.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Detail sections */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="glass border border-white/[0.06] rounded-xl p-5">
                <p className="text-white font-bold text-sm mb-3">🏷️ {isEs ? "Meta información" : "Meta info"}</p>
                <div className="space-y-2">
                  <Check ok={analysis.metaInfo.hasViewportMeta} label={isEs ? "Meta viewport presente" : "Viewport meta present"} />
                  <Check ok={!!analysis.metaInfo.title} label={isEs ? "Título de página" : "Page title"} />
                  <Check ok={!!analysis.metaInfo.metaDescription} label={isEs ? "Meta descripción" : "Meta description"} />
                </div>
                <IssuesList issues={analysis.metaInfo.issues} />
              </div>

              <div className="glass border border-white/[0.06] rounded-xl p-5">
                <p className="text-white font-bold text-sm mb-3">📝 {isEs ? "Calidad de contenido" : "Content quality"}</p>
                <div className="space-y-2">
                  <Check ok={analysis.contentQuality.hasH1} label={isEs ? "Tiene encabezado H1" : "Has H1 heading"} />
                  <Check ok={analysis.contentQuality.headingStructureOk} label={isEs ? "Estructura de encabezados correcta" : "Heading structure OK"} />
                  <p className="text-[var(--c-muted)] text-xs">
                    {isEs ? "Palabras" : "Words"}: <span className="text-white/80">{analysis.contentQuality.wordCount}</span>
                  </p>
                </div>
                <IssuesList issues={analysis.contentQuality.issues} />
              </div>

              <div className="glass border border-white/[0.06] rounded-xl p-5">
                <p className="text-white font-bold text-sm mb-3">📱 {isEs ? "Estructura técnica" : "Technical structure"}</p>
                <div className="space-y-2">
                  <Check ok={analysis.structure.mobileFriendlySignals} label={isEs ? "Señales de compatibilidad móvil" : "Mobile-friendly signals"} />
                  <Check ok={analysis.structure.hasSsl} label={isEs ? "Certificado SSL (https)" : "SSL certificate (https)"} />
                </div>
                <IssuesList issues={analysis.structure.issues} />
              </div>

              <div className="glass border border-white/[0.06] rounded-xl p-5">
                <p className="text-white font-bold text-sm mb-3">🔗 {isEs ? "Enlaces" : "Links"}</p>
                <div className="space-y-2">
                  <p className="text-[var(--c-muted)] text-xs">
                    {isEs ? "Enlaces internos" : "Internal links"}: <span className="text-white/80">{analysis.links.internalLinksCount}</span>
                  </p>
                  <p className="text-[var(--c-muted)] text-xs">
                    {isEs ? "Enlaces externos" : "External links"}: <span className="text-white/80">{analysis.links.externalLinksCount}</span>
                  </p>
                </div>
                <IssuesList issues={analysis.links.issues} />
              </div>

              <div className="glass border border-white/[0.06] rounded-xl p-5 sm:col-span-2">
                <p className="text-white font-bold text-sm mb-3">🎯 {isEs ? "Factores generales" : "General factors"}</p>
                <div className="grid sm:grid-cols-3 gap-2">
                  <Check ok={analysis.generalFactors.hasContactInfo} label={isEs ? "Información de contacto" : "Contact info"} />
                  <Check ok={analysis.generalFactors.hasSocialLinks} label={isEs ? "Enlaces a redes sociales" : "Social media links"} />
                  <Check ok={analysis.generalFactors.hasCallToAction} label={isEs ? "Llamado a la acción claro" : "Clear call to action"} />
                </div>
                <IssuesList issues={analysis.generalFactors.issues} />
              </div>
            </div>

            {/* CTA */}
            <div className="glass border border-[var(--c-cyan)]/25 rounded-2xl p-8 text-center">
              <h2 className="text-white font-black text-xl mb-2">
                {isEs ? "¿Implementamos esto por ti?" : "Want us to implement this for you?"}
              </h2>
              <p className="text-[var(--c-muted)] text-sm mb-6 max-w-md mx-auto">
                {isEs
                  ? "Hablemos de cómo resolver estos puntos y llevar tu presencia digital al siguiente nivel."
                  : "Let's talk about fixing these and taking your digital presence to the next level."}
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
