import { useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { useAdmin } from "@/context/AdminContext";
import { siteConfig } from "@/config/site";

export default function Contact() {
  const { lang } = useLang();
  const { settings } = useAdmin();
  const isEs = lang === "es";

  useEffect(() => {
    const title = isEs ? "Contacto — Coimagen Media Agency" : "Contact — Coimagen Media Agency";
    const desc = isEs
      ? "Contáctanos por WhatsApp, email o agenda una llamada. Atendemos negocios en Tijuana, Baja California y San Diego, California."
      : "Contact us via WhatsApp, email or book a call. We serve businesses in Tijuana, Baja California and San Diego, California.";
    const url = "https://www.coimagenmedia.com/contacto";
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", url);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", desc);
  }, [isEs]);

  const contacts = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      color: "#25d366",
      labelEs: "WhatsApp",
      labelEn: "WhatsApp",
      valueEs: siteConfig.whatsapp.display,
      valueEn: siteConfig.whatsapp.display,
      href: siteConfig.whatsapp.url,
      external: true,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      color: "var(--c-cyan)",
      labelEs: "Correo electrónico",
      labelEn: "Email",
      valueEs: siteConfig.email,
      valueEn: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      external: false,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
      color: "#1877f2",
      labelEs: "Facebook",
      labelEn: "Facebook",
      valueEs: siteConfig.social.facebookHandle,
      valueEn: siteConfig.social.facebookHandle,
      href: siteConfig.social.facebook,
      external: true,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      ),
      color: "#e1306c",
      labelEs: "Instagram",
      labelEn: "Instagram",
      valueEs: siteConfig.social.instagramHandle,
      valueEn: siteConfig.social.instagramHandle,
      href: siteConfig.social.instagram,
      external: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#06060f] pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">
          <div className="badge-neon text-[var(--c-cyan)] border border-[var(--c-cyan)]/25 bg-[var(--c-cyan)]/10 mb-4 w-fit mx-auto">
            {isEs ? "Contáctanos" : "Contact us"}
          </div>
          <h1 className="text-4xl font-black text-white mb-4">
            {isEs ? "Hablemos de tu negocio" : "Let's talk about your business"}
          </h1>
          <p className="text-[var(--c-muted)] text-base max-w-xl mx-auto">
            {isEs
              ? "Estamos en Tijuana / San Diego. Escríbenos por WhatsApp, correo o redes sociales — respondemos el mismo día."
              : "We are in Tijuana / San Diego. Write to us via WhatsApp, email or social media — we respond the same day."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Contact cards */}
          <div className="space-y-4">
            <h2 className="text-white font-black text-lg mb-5">{isEs ? "Canales de contacto" : "Contact channels"}</h2>
            {contacts.map((c) => (
              <a
                key={c.labelEs}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 glass border border-white/[0.06] rounded-xl p-5 hover:border-white/20 transition-all group"
              >
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: c.color + "20", color: c.color }}
                >
                  {c.icon}
                </div>
                <div>
                  <p className="text-white/50 text-xs mb-0.5">{isEs ? c.labelEs : c.labelEn}</p>
                  <p className="text-white font-semibold text-sm group-hover:text-[var(--c-cyan)] transition-colors">{isEs ? c.valueEs : c.valueEn}</p>
                </div>
                <svg className="w-4 h-4 text-white/30 ml-auto group-hover:text-[var(--c-cyan)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            ))}

            <div className="glass border border-white/[0.06] rounded-xl p-5">
              <p className="text-white/50 text-xs mb-1">📍 {isEs ? "Ubicación" : "Location"}</p>
              <p className="text-white font-semibold text-sm">{siteConfig.location}</p>
              <p className="text-[var(--c-muted)] text-xs mt-1">{isEs ? "Baja California, México · California, USA" : "Baja California, Mexico · California, USA"}</p>
            </div>
          </div>

          {/* Calendar */}
          <div>
            <h2 className="text-white font-black text-lg mb-5">{isEs ? "Agenda una llamada" : "Book a call"}</h2>
            <div className="glass border border-[var(--c-cyan)]/20 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[var(--c-cyan)]/10 to-[var(--c-purple)]/10 border-b border-white/[0.06] px-5 py-3 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--c-lime)] animate-pulse" />
                <span className="text-white font-semibold text-xs">{isEs ? "Calendario de sesiones estratégicas" : "Strategy session calendar"}</span>
              </div>
              <div className="p-3">
                <iframe
                  src={settings.calendarUrl}
                  style={{ border: 0 }}
                  width="100%"
                  height="420"
                  frameBorder="0"
                  scrolling="no"
                  title={isEs ? "Agendar cita" : "Book appointment"}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center glass border border-white/[0.06] rounded-2xl p-8">
          <p className="text-[var(--c-muted)] text-sm mb-4">
            {isEs
              ? "¿Prefieres empezar con un diagnóstico digital gratuito?"
              : "Would you prefer to start with a free digital diagnostic?"}
          </p>
          <a
            href="/diagnostico"
            className="inline-flex items-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-black px-8 py-3 rounded-xl text-sm hover:brightness-110 transition-all"
          >
            🤖 {isEs ? "Iniciar Diagnóstico Gratuito" : "Start Free Diagnostic"}
          </a>
        </div>
      </div>
    </div>
  );
}
