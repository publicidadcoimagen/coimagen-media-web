import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useAdmin } from "@/context/AdminContext";
import { isAuthenticated } from "@/pages/Secure";
import type { ProjectCard } from "@/context/AdminContext";

type AdminTab = "founder" | "projects" | "benefits" | "calendar" | "seo";

function logout() {
  try { sessionStorage.removeItem("coimagen_auth"); } catch { /* ignore */ }
}

export default function Admin() {
  const [, navigate] = useLocation();
  const { settings, updateSettings, resetSettings } = useAdmin();
  const [tab, setTab] = useState<AdminTab>("founder");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    document.title = "Admin Settings — Coimagen";
    if (!isAuthenticated()) navigate("/secure");
  }, [navigate]);

  const showSaved = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  const handleLogout = () => { logout(); navigate("/secure"); };

  return (
    <div className="min-h-screen bg-[#06060f] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="badge-neon text-[var(--c-purple)] border border-[var(--c-purple)]/25 bg-[var(--c-purple)]/10 mb-2 w-fit">
              🔐 Admin Settings
            </div>
            <h1 className="text-2xl font-black text-white">Panel de Configuración</h1>
          </div>
          <div className="flex items-center gap-3">
            {saved && (
              <span className="text-[var(--c-lime)] text-xs font-semibold flex items-center gap-1">
                ✅ Guardado
              </span>
            )}
            <a href="/" className="glass border border-white/[0.08] text-[var(--c-muted)] hover:text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors">
              Ver sitio
            </a>
            <button onClick={handleLogout} className="glass border border-red-500/20 text-red-400 hover:text-red-300 px-4 py-2 rounded-xl text-xs font-semibold transition-colors">
              Salir
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 glass border border-white/[0.06] rounded-xl p-1 mb-8 overflow-x-auto">
          {([
            { id: "founder", label: "👑 Fundadores" },
            { id: "projects", label: "📁 Proyectos" },
            { id: "benefits", label: "✅ Beneficios" },
            { id: "calendar", label: "📅 Calendario" },
            { id: "seo", label: "🔍 SEO" },
          ] as { id: AdminTab; label: string }[]).map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                tab === t.id ? "bg-[var(--c-cyan)] text-[#06060f]" : "text-[var(--c-muted)] hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab: Founder */}
        {tab === "founder" && (
          <div className="space-y-5">
            <h2 className="text-white font-black text-lg">Oferta Fundadores</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Días restantes" hint="Ventana de lanzamiento">
                <input type="number" min={0} value={settings.founderDaysRemaining}
                  onChange={(e) => updateSettings({ founderDaysRemaining: parseInt(e.target.value) || 0 })}
                  className="admin-input" />
              </Field>
              <Field label="Lugares disponibles" hint="Total de espacios fundadores">
                <input type="number" min={1} value={settings.founderSpotsAvailable}
                  onChange={(e) => updateSettings({ founderSpotsAvailable: parseInt(e.target.value) || 20 })}
                  className="admin-input" />
              </Field>
              <Field label="Precio regular MX" hint='Ej: "$1,490"'>
                <input type="text" value={settings.founderRegularPriceMx}
                  onChange={(e) => updateSettings({ founderRegularPriceMx: e.target.value })}
                  className="admin-input" />
              </Field>
              <Field label="Precio fundador MX" hint='Ej: "$990"'>
                <input type="text" value={settings.founderPriceMx}
                  onChange={(e) => updateSettings({ founderPriceMx: e.target.value })}
                  className="admin-input" />
              </Field>
              <Field label="Precio regular USD" hint='Ej: "$297"'>
                <input type="text" value={settings.founderRegularPriceUsd}
                  onChange={(e) => updateSettings({ founderRegularPriceUsd: e.target.value })}
                  className="admin-input" />
              </Field>
              <Field label="Precio fundador USD" hint='Ej: "$197"'>
                <input type="text" value={settings.founderPriceUsd}
                  onChange={(e) => updateSettings({ founderPriceUsd: e.target.value })}
                  className="admin-input" />
              </Field>
              <Field label="Descuento %" hint="Mismo porcentaje para MX y USA">
                <input type="number" min={0} max={100} value={settings.founderDiscountPct}
                  onChange={(e) => updateSettings({ founderDiscountPct: parseInt(e.target.value) || 0 })}
                  className="admin-input" />
              </Field>
              <Field label="Imagen fundadora (URL)" hint="URL de la imagen de Camila o fundadora">
                <input type="text" value={settings.founderImageUrl}
                  onChange={(e) => updateSettings({ founderImageUrl: e.target.value })}
                  placeholder="https://..." className="admin-input" />
              </Field>
            </div>

            <Field label="Posición de imagen" hint="left o right">
              <select value={settings.founderImagePosition}
                onChange={(e) => updateSettings({ founderImagePosition: e.target.value })}
                className="admin-input">
                <option value="right">Derecha</option>
                <option value="left">Izquierda</option>
              </select>
            </Field>

            <SaveBar onSave={showSaved} onReset={() => { resetSettings(); showSaved(); }} />
          </div>
        )}

        {/* Tab: Projects */}
        {tab === "projects" && (
          <div className="space-y-5">
            <h2 className="text-white font-black text-lg">Tarjetas de Proyectos</h2>
            {settings.projectCards.map((card, i) => (
              <ProjectCardEditor
                key={card.id}
                card={card}
                index={i}
                onChange={(updated) => {
                  const cards = [...settings.projectCards];
                  cards[i] = updated;
                  updateSettings({ projectCards: cards });
                }}
              />
            ))}
            <SaveBar onSave={showSaved} onReset={() => { resetSettings(); showSaved(); }} />
          </div>
        )}

        {/* Tab: Benefits */}
        {tab === "benefits" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-white font-black text-lg mb-4">Beneficios — Español</h2>
              {settings.founderBenefitsEs.map((b, i) => (
                <div key={i} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={b}
                    onChange={(e) => {
                      const arr = [...settings.founderBenefitsEs];
                      arr[i] = e.target.value;
                      updateSettings({ founderBenefitsEs: arr });
                    }}
                    className="admin-input flex-1"
                  />
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-white font-black text-lg mb-4">Benefits — English</h2>
              {settings.founderBenefitsEn.map((b, i) => (
                <div key={i} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={b}
                    onChange={(e) => {
                      const arr = [...settings.founderBenefitsEn];
                      arr[i] = e.target.value;
                      updateSettings({ founderBenefitsEn: arr });
                    }}
                    className="admin-input flex-1"
                  />
                </div>
              ))}
            </div>
            <SaveBar onSave={showSaved} onReset={() => { resetSettings(); showSaved(); }} />
          </div>
        )}

        {/* Tab: Calendar */}
        {tab === "calendar" && (
          <div className="space-y-5">
            <h2 className="text-white font-black text-lg">URL del Calendario</h2>
            <Field label="Google Calendar Embed URL" hint="URL del iframe de Google Calendar">
              <textarea
                value={settings.calendarUrl}
                onChange={(e) => updateSettings({ calendarUrl: e.target.value })}
                rows={3}
                className="admin-input resize-none"
              />
            </Field>
            <div className="glass border border-white/[0.06] rounded-xl p-4 text-xs text-[var(--c-muted)]">
              Esta URL se usa en las páginas /agendar y /contacto para mostrar el calendario de citas.
            </div>
            <SaveBar onSave={showSaved} onReset={() => { resetSettings(); showSaved(); }} />
          </div>
        )}

        {/* Tab: SEO */}
        {tab === "seo" && (
          <div className="space-y-5">
            <h2 className="text-white font-black text-lg">SEO Settings</h2>
            <div className="glass border border-[var(--c-cyan)]/10 rounded-xl p-6 text-[var(--c-muted)] text-sm space-y-2">
              <p>✅ <strong className="text-white">Sitemap:</strong> /sitemap.xml — 9 URLs reales indexadas</p>
              <p>✅ <strong className="text-white">Robots.txt:</strong> /admin y /portal excluidos</p>
              <p>✅ <strong className="text-white">Open Graph:</strong> opengraph.jpg con URL absoluta</p>
              <p>✅ <strong className="text-white">Twitter Card:</strong> summary_large_image</p>
              <p>✅ <strong className="text-white">Canonical:</strong> dinámico por página</p>
              <p className="pt-2 text-xs text-[var(--c-muted2)]">Los meta tags por página se editan en el código fuente. La configuración de SEO avanzado estará disponible en Prompt #4.</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-white/70 text-xs font-semibold mb-1 uppercase tracking-wider">{label}</label>
      {hint && <p className="text-[var(--c-muted2)] text-xs mb-1.5">{hint}</p>}
      {children}
    </div>
  );
}

function SaveBar({ onSave, onReset }: { onSave: () => void; onReset: () => void }) {
  return (
    <div className="flex gap-3 pt-4 border-t border-white/[0.06]">
      <button
        onClick={onSave}
        className="bg-[var(--c-cyan)] text-[#06060f] font-black px-8 py-2.5 rounded-xl text-sm hover:brightness-110 transition-all"
      >
        ✅ Guardar cambios
      </button>
      <button
        onClick={onReset}
        className="glass border border-white/[0.08] text-[var(--c-muted)] hover:text-white px-6 py-2.5 rounded-xl text-sm transition-colors"
      >
        Restablecer defaults
      </button>
    </div>
  );
}

function ProjectCardEditor({ card, index, onChange }: { card: ProjectCard; index: number; onChange: (c: ProjectCard) => void }) {
  return (
    <div className="glass border border-white/[0.06] rounded-xl p-6">
      <h3 className="text-white font-bold text-sm mb-4">Proyecto #{index + 1}: {card.title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field label="Título">
          <input type="text" value={card.title} onChange={(e) => onChange({ ...card, title: e.target.value })} className="admin-input" />
        </Field>
        <Field label="Tag / Industria">
          <input type="text" value={card.tag} onChange={(e) => onChange({ ...card, tag: e.target.value })} className="admin-input" />
        </Field>
        <Field label="Descripción">
          <input type="text" value={card.desc} onChange={(e) => onChange({ ...card, desc: e.target.value })} className="admin-input" />
        </Field>
        <Field label="URL de imagen">
          <input type="text" value={card.image} onChange={(e) => onChange({ ...card, image: e.target.value })} placeholder="https://..." className="admin-input" />
        </Field>
        <Field label="URL externa del proyecto">
          <input type="text" value={card.externalUrl} onChange={(e) => onChange({ ...card, externalUrl: e.target.value })} placeholder="https://..." className="admin-input" />
        </Field>
        <Field label="URL del case study">
          <input type="text" value={card.caseStudyUrl} onChange={(e) => onChange({ ...card, caseStudyUrl: e.target.value })} placeholder="/case-studies/..." className="admin-input" />
        </Field>
      </div>
    </div>
  );
}
