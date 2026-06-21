import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export function Footer() {
  const { t } = useLang();
  const f = t.footer;

  const industryLinks = siteConfig.industryPages;

  return (
    <footer className="border-t border-white/[0.06] bg-[#06060f] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--c-cyan)] to-[var(--c-purple)] flex items-center justify-center text-white font-black">
                C
              </div>
              <span className="font-bold text-white">
                COIMAGEN<span className="text-[var(--c-cyan)]"> AI</span>
              </span>
            </div>
            <p className="text-[var(--c-muted)] text-sm leading-relaxed mb-5">{f.tagline}</p>
            {/* Social */}
            <div className="flex gap-3">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="glass p-2.5 rounded-lg glass-hover">
                <svg className="w-4 h-4 text-[var(--c-muted)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href={`https://instagram.com/coimagenmedia`} target="_blank" rel="noopener noreferrer" className="glass p-2.5 rounded-lg glass-hover">
                <svg className="w-4 h-4 text-[var(--c-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href={siteConfig.social.linkedin} className="glass p-2.5 rounded-lg glass-hover">
                <svg className="w-4 h-4 text-[var(--c-muted)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{f.solutions}</h4>
            <ul className="space-y-2.5">
              {f.solutionLinks.map((l) => (
                <li key={l}>
                  <a href="#soluciones" className="text-[var(--c-muted)] hover:text-[var(--c-cyan)] text-sm transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{f.industries}</h4>
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

          {/* Company + Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{f.company}</h4>
            <ul className="space-y-2.5 mb-6">
              {f.companyLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-[var(--c-muted)] hover:text-[var(--c-cyan)] text-sm transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
            <div className="space-y-1.5">
              <a href={`mailto:${siteConfig.email}`} className="block text-[var(--c-muted)] hover:text-white text-xs transition-colors">
                {siteConfig.email}
              </a>
              <a href={siteConfig.whatsapp.url} target="_blank" rel="noopener noreferrer" className="block text-[var(--c-muted)] hover:text-white text-xs transition-colors">
                {siteConfig.whatsapp.display}
              </a>
              <p className="text-[var(--c-muted2)] text-xs">{siteConfig.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--c-muted2)] text-xs">{f.rights}</p>
          <div className="flex gap-4">
            {f.legalLinks.map((l) => (
              <a key={l} href="#" className="text-[var(--c-muted2)] hover:text-white text-xs transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
