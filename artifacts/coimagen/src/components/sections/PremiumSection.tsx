import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export function PremiumSection() {
  const { t } = useLang();
  const pr = t.premium;

  return (
    <section className="py-24 bg-[#0d0d1a] relative overflow-hidden">
      <div className="orb w-[600px] h-[600px] bg-[var(--c-purple)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="glass border border-[var(--c-purple)]/25 rounded-3xl p-8 sm:p-12 lg:p-16 max-w-5xl mx-auto">
          <div className="badge-neon text-[var(--c-purple)] mb-6 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-purple)] inline-block" />
            {pr.tag}
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                {pr.title}
              </h2>
              <p className="text-[var(--c-muted)] text-lg leading-relaxed mb-8">{pr.subtitle}</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={siteConfig.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[var(--c-purple)] text-white font-bold px-7 py-3.5 rounded-xl text-sm hover:brightness-110 hover:shadow-[0_0_24px_rgba(139,92,246,0.4)] transition-all active:scale-95"
                >
                  {pr.cta1}
                </a>
                <a
                  href={siteConfig.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/10 text-white font-semibold px-7 py-3.5 rounded-xl text-sm hover:border-[var(--c-purple)]/40 hover:text-[var(--c-purple)] transition-all active:scale-95"
                >
                  {pr.cta2}
                </a>
              </div>
            </div>

            {/* Features grid */}
            <div className="flex-shrink-0 grid grid-cols-2 gap-3 lg:w-72">
              {pr.bullets.map((b, i) => (
                <div key={i} className="glass border border-white/[0.06] p-4 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-[var(--c-purple)] mb-2" />
                  <p className="text-white font-semibold text-sm">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
