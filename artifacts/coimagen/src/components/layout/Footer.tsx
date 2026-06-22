import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

const companyLinksEs = [
  { label: "Nosotros", href: "/about" },
  { label: "Casos de Éxito", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Diagnóstico", href: "/diagnostico" },
  { label: "Contacto", href: "/contacto" },
  { label: "Recursos", href: "/resources" },
  { label: "FAQs", href: "/faqs" },
];

const companyLinksEn = [
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Diagnostic", href: "/diagnostico" },
  { label: "Contact", href: "/contact" },
  { label: "Resources", href: "/resources" },
  { label: "FAQs", href: "/faqs" },
];

const legalLinksEs = [
  { label: "Aviso de Privacidad", href: "/privacy-policy" },
  { label: "Términos de Servicio", href: "/terms-of-service" },
];

const legalLinksEn = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export function Footer() {
  const { lang, t } = useLang();
  const f = t.footer;
  const isEs = lang === "es";
  const industryLinks = siteConfig.industryPages;
  const companyLinks = isEs ? companyLinksEs : companyLinksEn;
  const legalLinks = isEs ? legalLinksEs : legalLinksEn;

  return (
    <footer className="border-t border-white/[0.06] bg-[#06060f] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-4">
              <img
                src="/logo-coimagen.png"
                alt="Coimagen Media Agency"
                className="h-14 w-auto object-contain"
                onError={(e) => {
                  const el = e.currentTarget;
                  el.style.display = "none";
                  const fb = el.nextElementSibling as HTMLElement;
                  if (fb) fb.style.display = "flex";
                }}
              />
              <span className="hidden items-center font-bold text-white text-sm" aria-hidden="true">
                COIMAGEN<span className="text-[var(--c-cyan)]"> AI SYSTEMS</span>
              </span>
            </a>
            <p className="text-[var(--c-muted)] text-sm leading-relaxed mb-5">{f.tagline}</p>
            {/* Social */}
            <div className="flex gap-3">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" title={siteConfig.social.facebookHandle} className="glass p-2.5 rounded-lg glass-hover">
                <svg className="w-4 h-4 text-[var(--c-muted)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" title={siteConfig.social.instagramHandle} className="glass p-2.5 rounded-lg glass-hover">
                <svg className="w-4 h-4 text-[var(--c-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href={siteConfig.social.linkedin} className="glass p-2.5 rounded-lg glass-hover">
                <svg className="w-4 h-4 text-[var(--c-muted)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{f.solutions}</h4>
            <ul className="space-y-2.5">
              {industryLinks.map((il) => (
                <li key={il.slug}>
                  <a href={`/${il.slug}`} className="text-[var(--c-muted)] hover:text-[var(--c-cyan)] text-sm transition-colors">
                    {il.labelEs}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{f.company}</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[var(--c-muted)] hover:text-[var(--c-cyan)] text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{isEs ? "Contacto" : "Contact"}</h4>
            <div className="space-y-2.5 mb-5">
              <a href={`mailto:${siteConfig.email}`} className="block text-[var(--c-muted)] hover:text-[var(--c-cyan)] text-sm transition-colors">
                {siteConfig.email}
              </a>
              <a href={siteConfig.whatsapp.url} target="_blank" rel="noopener noreferrer" className="block text-[var(--c-muted)] hover:text-[var(--c-cyan)] text-sm transition-colors">
                {siteConfig.whatsapp.display}
              </a>
              <p className="text-[var(--c-muted2)] text-xs">{siteConfig.location}</p>
            </div>
            <a
              href="/agendar"
              className="inline-flex items-center gap-1.5 border border-[var(--c-cyan)]/30 text-[var(--c-cyan)] text-xs font-semibold px-3 py-2 rounded-lg hover:bg-[var(--c-cyan)]/10 transition-all"
            >
              📅 {isEs ? "Agendar sesión" : "Book a session"}
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--c-muted2)] text-xs">{f.rights}</p>
          <div className="flex gap-4 flex-wrap justify-center">
            {legalLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-[var(--c-muted2)] hover:text-white text-xs transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
