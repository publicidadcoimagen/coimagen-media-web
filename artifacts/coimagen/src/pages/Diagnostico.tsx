import { useEffect, useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

type Step = 1 | 2 | 3 | 4;

const industries = [
  { id: "medical", icon: "🏥", es: "Médicos / Clínicas", en: "Medical / Clinics" },
  { id: "dental", icon: "🦷", es: "Dentistas", en: "Dentists" },
  { id: "law", icon: "⚖️", es: "Abogados / Despachos", en: "Law Firms" },
  { id: "real-estate", icon: "🏠", es: "Inmobiliarias", en: "Real Estate" },
  { id: "restaurant", icon: "🍽️", es: "Restaurantes", en: "Restaurants" },
  { id: "local-business", icon: "🏪", es: "Negocios Locales", en: "Local Business" },
];

const questions = {
  es: [
    { q: "¿Tienes un sitio web funcional que genera contactos?", icon: "🌐" },
    { q: "¿Tienes tu perfil de Google Business Profile optimizado?", icon: "📍" },
    { q: "¿Usas un CRM para dar seguimiento a tus prospectos?", icon: "📋" },
    { q: "¿Tienes automatizaciones activas en tu negocio?", icon: "⚡" },
    { q: "¿Capturas leads de manera sistemática?", icon: "🎯" },
  ],
  en: [
    { q: "Do you have a functional website that generates leads?", icon: "🌐" },
    { q: "Do you have an optimized Google Business Profile?", icon: "📍" },
    { q: "Do you use a CRM to follow up with prospects?", icon: "📋" },
    { q: "Do you have active automations in your business?", icon: "⚡" },
    { q: "Do you systematically capture leads?", icon: "🎯" },
  ],
};

const levels = {
  es: [
    { min: 0, max: 0, name: "Punto de Partida", color: "text-red-400", border: "border-red-400/30", desc: "Tu negocio aún no tiene presencia digital. Es el mejor momento para empezar desde cero y hacerlo bien.", rec: "Comenzar con presencia digital básica" },
    { min: 1, max: 1, name: "Digital Básico", color: "text-orange-400", border: "border-orange-400/30", desc: "Tienes los primeros pasos pero hay grandes oportunidades de mejora en captación y automatización.", rec: "Optimizar presencia y comenzar automatización" },
    { min: 2, max: 3, name: "En Crecimiento", color: "text-yellow-400", border: "border-yellow-400/30", desc: "Buen avance. Tienes algunos sistemas pero no están conectados. Un CRM o automatización cambiaría todo.", rec: "Conectar sistemas e implementar CRM" },
    { min: 4, max: 4, name: "Escalando", color: "text-[var(--c-lime)]", border: "border-[var(--c-lime)]/30", desc: "Tienes una base sólida. Agregar agentes IA y automatización avanzada llevaría tu negocio al siguiente nivel.", rec: "Implementar agentes IA y automatización avanzada" },
    { min: 5, max: 5, name: "Sistema Completo", color: "text-[var(--c-cyan)]", border: "border-[var(--c-cyan)]/30", desc: "¡Excelente! Tu negocio ya opera con sistemas digitales. Podemos ayudarte a optimizar y añadir IA.", rec: "Optimizar y agregar IA avanzada" },
  ],
  en: [
    { min: 0, max: 0, name: "Starting Point", color: "text-red-400", border: "border-red-400/30", desc: "Your business has no digital presence yet. It's the best time to start from scratch and do it right.", rec: "Start with basic digital presence" },
    { min: 1, max: 1, name: "Digital Basics", color: "text-orange-400", border: "border-orange-400/30", desc: "You have the first steps but there are big opportunities to improve in lead capture and automation.", rec: "Optimize presence and start automation" },
    { min: 2, max: 3, name: "Growing", color: "text-yellow-400", border: "border-yellow-400/30", desc: "Good progress. You have some systems but they're not connected. A CRM or automation would change everything.", rec: "Connect systems and implement CRM" },
    { min: 4, max: 4, name: "Scaling", color: "text-[var(--c-lime)]", border: "border-[var(--c-lime)]/30", desc: "You have a solid foundation. Adding AI agents and advanced automation would take your business to the next level.", rec: "Implement AI agents and advanced automation" },
    { min: 5, max: 5, name: "Complete System", color: "text-[var(--c-cyan)]", border: "border-[var(--c-cyan)]/30", desc: "Excellent! Your business already operates with digital systems. We can help you optimize and add AI.", rec: "Optimize and add advanced AI" },
  ],
};

function getLevel(score: number, isEs: boolean) {
  const arr = isEs ? levels.es : levels.en;
  return arr.find((l) => score >= l.min && score <= l.max) ?? arr[0];
}

export default function Diagnostico() {
  const { lang } = useLang();
  const isEs = lang === "es";

  const [step, setStep] = useState<Step>(1);
  const [industry, setIndustry] = useState<string | null>(null);
  const [answers, setAnswers] = useState<(boolean | null)[]>([null, null, null, null, null]);
  const [showJotform, setShowJotform] = useState(false);

  useEffect(() => {
    const title = isEs ? "Diagnóstico Digital Gratuito — Coimagen Media Agency" : "Free Digital Diagnostic — Coimagen Media Agency";
    const desc = isEs
      ? "Descubre el nivel digital de tu negocio en 5 preguntas. Diagnóstico gratuito con recomendaciones personalizadas por industria y plan de acción real."
      : "Discover your business digital score in 5 questions. Free diagnostic with personalized recommendations by industry and a real action plan.";
    const url = "https://www.coimagenmedia.com/diagnostico";
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", url);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", desc);
  }, [isEs]);

  const score = answers.filter((a) => a === true).length;
  const level = getLevel(score, isEs);
  const qs = isEs ? questions.es : questions.en;
  const allAnswered = answers.every((a) => a !== null);

  const setAnswer = (i: number, val: boolean) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[i] = val;
      return next;
    });
  };

  const restart = () => {
    setStep(1);
    setIndustry(null);
    setAnswers([null, null, null, null, null]);
    setShowJotform(false);
  };

  return (
    <div className="min-h-screen bg-[#06060f] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="badge-neon text-[var(--c-cyan)] border border-[var(--c-cyan)]/25 bg-[var(--c-cyan)]/10 mb-4 w-fit mx-auto">
            🤖 {isEs ? "Diagnóstico Digital Gratuito" : "Free Digital Diagnostic"}
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
            {isEs ? "¿Cuánto vale tu presencia digital?" : "How strong is your digital presence?"}
          </h1>
          <p className="text-[var(--c-muted)] text-sm max-w-lg mx-auto">
            {isEs ? "Responde 5 preguntas y descubre tu nivel digital + qué hacer primero." : "Answer 5 questions and discover your digital level + what to do first."}
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {([1, 2, 3, 4] as Step[]).map((s) => (
            <div key={s} className={`flex items-center gap-2 ${s < 4 ? "flex-1" : ""}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                step === s ? "bg-[var(--c-cyan)] text-[#06060f]" :
                step > s ? "bg-[var(--c-lime)] text-[#06060f]" :
                "glass border border-white/[0.08] text-[var(--c-muted)]"
              }`}>
                {step > s ? "✓" : s}
              </div>
              {s < 4 && <div className={`flex-1 h-0.5 ${step > s ? "bg-[var(--c-lime)]" : "bg-white/[0.08]"}`} />}
            </div>
          ))}
        </div>

        {/* STEP 1 — Industry */}
        {step === 1 && (
          <div>
            <h2 className="text-white font-black text-xl text-center mb-6">
              {isEs ? "¿Cuál es tu industria?" : "What is your industry?"}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {industries.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setIndustry(ind.id)}
                  className={`glass border rounded-2xl p-6 text-center transition-all hover:scale-[1.02] active:scale-95 ${
                    industry === ind.id
                      ? "border-[var(--c-cyan)]/60 bg-[var(--c-cyan)]/10"
                      : "border-white/[0.06] hover:border-white/20"
                  }`}
                >
                  <div className="text-4xl mb-3">{ind.icon}</div>
                  <p className={`font-bold text-sm ${industry === ind.id ? "text-[var(--c-cyan)]" : "text-white/80"}`}>
                    {isEs ? ind.es : ind.en}
                  </p>
                </button>
              ))}
            </div>
            <div className="text-center">
              <button
                disabled={!industry}
                onClick={() => setStep(2)}
                className="bg-[var(--c-cyan)] text-[#06060f] font-black px-12 py-3.5 rounded-xl text-sm hover:brightness-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {isEs ? "Continuar →" : "Continue →"}
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 — Questions */}
        {step === 2 && (
          <div>
            <h2 className="text-white font-black text-xl text-center mb-2">
              {isEs ? "5 preguntas rápidas" : "5 quick questions"}
            </h2>
            <p className="text-[var(--c-muted)] text-sm text-center mb-8">
              {isEs ? "Sé honesto — el diagnóstico es para ti." : "Be honest — the diagnostic is for you."}
            </p>
            <div className="space-y-4 mb-8">
              {qs.map((q, i) => (
                <div key={i} className="glass border border-white/[0.06] rounded-xl p-5">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-xl flex-shrink-0 mt-0.5">{q.icon}</span>
                    <p className="text-white text-sm font-medium leading-snug">{q.q}</p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setAnswer(i, true)}
                      className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
                        answers[i] === true
                          ? "bg-[var(--c-lime)] text-[#06060f]"
                          : "glass border border-white/[0.08] text-white/60 hover:text-white"
                      }`}
                    >
                      ✅ {isEs ? "Sí" : "Yes"}
                    </button>
                    <button
                      onClick={() => setAnswer(i, false)}
                      className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
                        answers[i] === false
                          ? "bg-red-500/20 border border-red-400/40 text-red-400"
                          : "glass border border-white/[0.08] text-white/60 hover:text-white"
                      }`}
                    >
                      ❌ {isEs ? "No" : "No"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="glass border border-white/[0.08] text-[var(--c-muted)] hover:text-white px-6 py-3 rounded-xl text-sm transition-colors">
                ← {isEs ? "Atrás" : "Back"}
              </button>
              <button
                disabled={!allAnswered}
                onClick={() => setStep(3)}
                className="flex-1 bg-[var(--c-cyan)] text-[#06060f] font-black py-3 rounded-xl text-sm hover:brightness-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {isEs ? "Ver mi diagnóstico →" : "See my diagnostic →"}
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 — Score */}
        {step === 3 && (
          <div>
            <div className={`glass border ${level.border} rounded-2xl p-8 text-center mb-6`}>
              <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-4">{isEs ? "Tu nivel digital" : "Your digital level"}</p>
              {/* Score meter */}
              <div className="flex justify-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div
                    key={n}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm ${
                      n <= score ? "bg-[var(--c-cyan)] text-[#06060f]" : "glass border border-white/[0.08] text-white/20"
                    }`}
                  >
                    {n}
                  </div>
                ))}
              </div>
              <p className={`text-3xl font-black mb-2 ${level.color}`}>{level.name}</p>
              <p className="text-[var(--c-muted)] text-sm leading-relaxed max-w-md mx-auto mb-5">{level.desc}</p>
              <div className="inline-flex items-center gap-2 glass border border-[var(--c-cyan)]/25 rounded-xl px-5 py-2.5">
                <span className="text-[var(--c-cyan)] text-xs font-bold">🎯 {isEs ? "Recomendación:" : "Recommendation:"}</span>
                <span className="text-white text-xs">{level.rec}</span>
              </div>
            </div>
            {/* Industry tag */}
            <div className="text-center mb-6">
              <span className="text-[var(--c-muted)] text-xs">
                {isEs ? "Industria:" : "Industry:"} <span className="text-white font-semibold">{industries.find((i) => i.id === industry)?.[isEs ? "es" : "en"]}</span>
                {" · "}
                {isEs ? "Respuestas positivas:" : "Positive answers:"} <span className="text-[var(--c-cyan)] font-black">{score}/5</span>
              </span>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setStep(2)} className="glass border border-white/[0.08] text-[var(--c-muted)] hover:text-white px-6 py-3 rounded-xl text-sm transition-colors">
                ← {isEs ? "Atrás" : "Back"}
              </button>
              <button
                onClick={() => setStep(4)}
                className="flex-1 bg-[var(--c-cyan)] text-[#06060f] font-black py-3 rounded-xl text-sm hover:brightness-110 transition-all"
              >
                {isEs ? "¿Qué hago ahora? →" : "What do I do now? →"}
              </button>
            </div>
          </div>
        )}

        {/* STEP 4 — Options + optional Jotform */}
        {step === 4 && !showJotform && (
          <div>
            <h2 className="text-white font-black text-2xl text-center mb-2">
              {isEs ? "¿Cómo quieres continuar?" : "How do you want to continue?"}
            </h2>
            <p className="text-[var(--c-muted)] text-sm text-center mb-8">
              {isEs ? "Elige la opción que mejor se adapte a ti." : "Choose the option that works best for you."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <button
                onClick={() => setShowJotform(true)}
                className="glass border border-[var(--c-cyan)]/30 rounded-2xl p-6 text-center hover:border-[var(--c-cyan)]/60 hover:bg-[var(--c-cyan)]/5 transition-all group"
              >
                <div className="text-4xl mb-3">🤖</div>
                <p className="text-white font-black text-sm mb-1">{isEs ? "Hablar con Camila IA" : "Talk to Camila AI"}</p>
                <p className="text-[var(--c-muted)] text-xs">{isEs ? "Asistente digital disponible ahora" : "Digital assistant available now"}</p>
              </button>
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass border border-[#25d366]/30 rounded-2xl p-6 text-center hover:border-[#25d366]/60 hover:bg-[#25d366]/5 transition-all block"
              >
                <div className="text-4xl mb-3">💬</div>
                <p className="text-white font-black text-sm mb-1">WhatsApp</p>
                <p className="text-[var(--c-muted)] text-xs">{isEs ? "Respuesta el mismo día" : "Same-day response"}</p>
              </a>
              <a
                href="/agendar"
                className="glass border border-[var(--c-purple)]/30 rounded-2xl p-6 text-center hover:border-[var(--c-purple)]/60 hover:bg-[var(--c-purple)]/5 transition-all block"
              >
                <div className="text-4xl mb-3">📅</div>
                <p className="text-white font-black text-sm mb-1">{isEs ? "Agendar sesión" : "Book a session"}</p>
                <p className="text-[var(--c-muted)] text-xs">{isEs ? "30 minutos con Camila" : "30 minutes with Camila"}</p>
              </a>
            </div>

            <div className="text-center">
              <button onClick={restart} className="text-[var(--c-muted)] hover:text-white text-xs transition-colors">
                ↺ {isEs ? "Reiniciar diagnóstico" : "Restart diagnostic"}
              </button>
            </div>
          </div>
        )}

        {/* Jotform embed (shown when user picks Camila AI) */}
        {step === 4 && showJotform && (
          <div>
            <button
              onClick={() => setShowJotform(false)}
              className="flex items-center gap-2 text-[var(--c-muted)] hover:text-white text-sm mb-6 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
              {isEs ? "Volver a opciones" : "Back to options"}
            </button>

            <div className="glass border border-[var(--c-cyan)]/20 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,207,255,0.06)]">
              <div className="bg-gradient-to-r from-[var(--c-cyan)]/10 to-[var(--c-purple)]/10 border-b border-white/[0.06] px-6 py-4 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[var(--c-lime)] animate-pulse" />
                <span className="text-white font-semibold text-sm">
                  Camila — {isEs ? "Help Desk IA" : "AI Help Desk"}
                </span>
                <span className="ml-auto text-[var(--c-muted)] text-xs">Coimagen Media Agency</span>
              </div>
              <iframe
                id="JotFormIFrame-0199f974e9097a9badd918a3a92c617fc5b7"
                title="Camila: Help Desk Representative"
                allow="geolocation; microphone; camera; fullscreen"
                src="https://agent.jotform.com/0199f974e9097a9badd918a3a92c617fc5b7?embedMode=iframe&autofocus=0&background=1&shadow=1"
                style={{ width: "100%", height: "640px", border: "none", display: "block" }}
                scrolling="no"
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
