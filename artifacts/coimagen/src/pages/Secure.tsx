import { useState, useEffect } from "react";
import { useLocation } from "wouter";

const ADMIN_PASSWORD = "Coimagen2026!";
const SESSION_KEY = "coimagen_auth";

export function isAuthenticated(): boolean {
  try { return sessionStorage.getItem(SESSION_KEY) === "true"; } catch { return false; }
}

function setAuthenticated() {
  try { sessionStorage.setItem(SESSION_KEY, "true"); } catch { /* ignore */ }
}

export default function Secure() {
  const [, navigate] = useLocation();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Acceso Autorizado — Coimagen";
    if (isAuthenticated()) navigate("/admin");
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        setAuthenticated();
        navigate("/admin");
      } else {
        setError(true);
        setLoading(false);
        setPassword("");
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#06060f] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <a href="/" className="inline-block mb-6">
            <img src="/logo-coimagen.png" alt="Coimagen" className="h-12 w-auto object-contain mx-auto" />
          </a>
          <div className="badge-neon text-[var(--c-purple)] border border-[var(--c-purple)]/25 bg-[var(--c-purple)]/10 mb-4 w-fit mx-auto">
            🔐 Acceso Autorizado
          </div>
          <h1 className="text-2xl font-black text-white">Panel Interno</h1>
          <p className="text-[var(--c-muted)] text-sm mt-2">Ingresa tu contraseña para continuar.</p>
        </div>

        <form onSubmit={handleSubmit} className="glass border border-white/[0.08] rounded-2xl p-8">
          <div className="mb-5">
            <label className="block text-white/70 text-xs font-semibold mb-2 uppercase tracking-wider">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              placeholder="••••••••••••"
              autoFocus
              className={`w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none transition-colors ${
                error ? "border-red-500/50 focus:border-red-500" : "border-white/[0.08] focus:border-[var(--c-cyan)]/50"
              }`}
            />
            {error && (
              <p className="text-red-400 text-xs mt-2">⚠️ Contraseña incorrecta. Intenta de nuevo.</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || password.length === 0}
            className="w-full bg-[var(--c-cyan)] text-[#06060f] font-black py-3 rounded-xl text-sm hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                Verificando...
              </>
            ) : "Entrar →"}
          </button>
        </form>

        <p className="text-center text-[var(--c-muted2)] text-xs mt-8">
          <a href="/" className="hover:text-white transition-colors">← Volver al sitio</a>
        </p>
      </div>

      {/* Footer required text */}
      <footer className="absolute bottom-6 text-center">
        <p className="text-[var(--c-muted2)] text-xs">Authorized Access · Coimagen Media Agency</p>
      </footer>
    </div>
  );
}
