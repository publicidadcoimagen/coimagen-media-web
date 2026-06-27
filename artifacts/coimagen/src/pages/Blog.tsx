import { useEffect, useState } from "react";
import { useLang } from "@/context/LanguageContext";

const categories = {
  es: ["Todos", "Salud", "Legal", "Dental", "SEO", "Automatización", "IA", "Restaurantes", "Inmobiliaria"],
  en: ["All", "Health", "Legal", "Dental", "SEO", "Automation", "AI", "Restaurants", "Real Estate"],
};

const posts = [
  { titleEs: "CRM para médicos: cómo organizar pacientes y dar seguimiento automático", titleEn: "CRM for doctors: how to organize patients and automate follow-up", tagEs: "Salud", tagEn: "Health", slug: "crm-para-medicos", date: "2026-06-10", featured: true },
  { titleEs: "Automatización para abogados: cómo no perder prospectos", titleEn: "Automation for lawyers: how to stop losing leads", tagEs: "Legal", tagEn: "Legal", slug: "automatizacion-abogados", date: "2026-06-05", featured: true },
  { titleEs: "SEO local para dentistas: cómo aparecer primero en Google", titleEn: "Local SEO for dentists: how to appear first on Google", tagEs: "Dental", tagEn: "Dental", slug: "seo-local-dentistas", date: "2026-05-28", featured: false },
  { titleEs: "Google Business Profile para negocios locales: guía completa", titleEn: "Google Business Profile for local businesses: complete guide", tagEs: "SEO", tagEn: "SEO", slug: "google-business-profile", date: "2026-05-20", featured: false },
  { titleEs: "WhatsApp para ventas: cómo dar seguimiento automático a prospectos", titleEn: "WhatsApp for sales: how to automatically follow up with leads", tagEs: "Automatización", tagEn: "Automation", slug: "whatsapp-ventas", date: "2026-05-12", featured: false },
  { titleEs: "IA para pequeñas empresas: por dónde empezar en 2026", titleEn: "AI for small businesses: where to start in 2026", tagEs: "IA", tagEn: "AI", slug: "ia-pequenas-empresas", date: "2026-05-05", featured: false },
];

export default function Blog() {
  const { lang } = useLang();
  const isEs = lang === "es";
  const [activeCategory, setActiveCategory] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const title = isEs ? "Blog — Marketing Digital & IA | Coimagen Media Agency" : "Blog — Digital Marketing & AI | Coimagen Media Agency";
    const desc = isEs
      ? "Artículos sobre marketing digital, automatización con IA, SEO local y estrategias de crecimiento para negocios en Tijuana y San Diego."
      : "Articles on digital marketing, AI automation, local SEO and growth strategies for businesses in Tijuana and San Diego.";
    const url = "https://www.coimagenmedia.com/blog";
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", url);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", desc);
  }, [isEs]);

  const cats = isEs ? categories.es : categories.en;

  const filtered = posts.filter((p) => {
    const tag = isEs ? p.tagEs : p.tagEn;
    const title = isEs ? p.titleEs : p.titleEn;
    const catMatch = activeCategory === 0 || tag === cats[activeCategory];
    const searchMatch = search === "" || title.toLowerCase().includes(search.toLowerCase());
    return catMatch && searchMatch;
  });

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-[#06060f] pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge-neon text-[var(--c-cyan)] border border-[var(--c-cyan)]/25 bg-[var(--c-cyan)]/10 mb-4 w-fit mx-auto">
            Blog
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {isEs ? "Marketing Digital + IA" : "Digital Marketing + AI"}
            <span className="block text-[var(--c-cyan)] text-3xl mt-1">
              {isEs ? "para negocios que quieren crecer" : "for businesses that want to grow"}
            </span>
          </h1>
        </div>

        {/* Search + Categories */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-sm">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--c-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={isEs ? "Buscar artículos..." : "Search articles..."}
              className="w-full glass border border-white/[0.08] rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder:text-[var(--c-muted)] focus:outline-none focus:border-[var(--c-cyan)]/40 bg-transparent"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {cats.map((cat, i) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(i)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === i
                    ? "bg-[var(--c-cyan)] text-[#06060f]"
                    : "glass border border-white/[0.08] text-[var(--c-muted)] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured posts */}
        {featured.length > 0 && (
          <div className="mb-10">
            <h2 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--c-lime)]" />
              {isEs ? "Destacados" : "Featured"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featured.map((post) => (
                <article key={post.slug} className="glass border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[var(--c-cyan)]/30 transition-all group">
                  <div className="h-40 bg-gradient-to-br from-[var(--c-cyan)]/10 to-[var(--c-purple)]/10 flex items-center justify-center text-5xl">
                    📝
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="badge-neon text-[var(--c-cyan)] border border-[var(--c-cyan)]/25 bg-[var(--c-cyan)]/10 text-xs">
                        {isEs ? post.tagEs : post.tagEn}
                      </span>
                      <span className="text-[var(--c-muted2)] text-xs">{post.date}</span>
                    </div>
                    <h3 className="text-white font-bold text-base leading-snug mb-4 group-hover:text-[var(--c-cyan)] transition-colors">
                      {isEs ? post.titleEs : post.titleEn}
                    </h3>
                    <span className="text-[var(--c-cyan)] text-xs font-semibold flex items-center gap-1">
                      {isEs ? "Próximamente" : "Coming soon"}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Rest of posts */}
        {rest.length > 0 && (
          <div>
            <h2 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--c-purple)]" />
              {isEs ? "Más artículos" : "More articles"}
            </h2>
            <div className="space-y-4">
              {rest.map((post) => (
                <article key={post.slug} className="glass border border-white/[0.06] rounded-xl p-6 flex items-center gap-5 hover:border-[var(--c-cyan)]/20 transition-all group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--c-cyan)]/10 to-[var(--c-purple)]/10 flex items-center justify-center text-2xl">
                    📄
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[var(--c-cyan)] text-xs font-semibold">{isEs ? post.tagEs : post.tagEn}</span>
                      <span className="text-[var(--c-muted2)] text-xs">{post.date}</span>
                    </div>
                    <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-[var(--c-cyan)] transition-colors">
                      {isEs ? post.titleEs : post.titleEn}
                    </h3>
                  </div>
                  <span className="text-[var(--c-muted)] text-xs flex-shrink-0">{isEs ? "Próximamente" : "Coming soon"}</span>
                </article>
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[var(--c-muted)]">
            {isEs ? "No se encontraron artículos." : "No articles found."}
          </div>
        )}

        {/* Pagination placeholder */}
        <div className="flex justify-center gap-2 mt-10">
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              className={`w-9 h-9 rounded-lg text-sm font-semibold transition-all ${
                n === 1 ? "bg-[var(--c-cyan)] text-[#06060f]" : "glass border border-white/[0.08] text-[var(--c-muted)] hover:text-white"
              }`}
            >
              {n}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
