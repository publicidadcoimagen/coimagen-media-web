import { useEffect, useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { blogPosts } from "@/data/blogPosts";

const categories = {
  es: ["Todos", "Salud", "Legal", "Dental", "SEO", "Automatización", "IA", "Restaurantes", "Inmobiliaria"],
  en: ["All", "Health", "Legal", "Dental", "SEO", "Automation", "AI", "Restaurants", "Real Estate"],
};

const tagMap: Record<string, string> = {
  "Salud": "Health",
  "Legal": "Legal",
  "Dental": "Dental",
  "SEO": "SEO",
  "Automatización": "Automation",
  "IA": "AI",
  "Restaurantes": "Restaurants",
  "Inmobiliaria": "Real Estate",
};

export default function Blog() {
  const { lang } = useLang();
  const isEs = lang === "es";
  const [activeCategory, setActiveCategory] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const title = isEs
      ? "Blog — Marketing Digital & IA | Coimagen Media Agency"
      : "Blog — Digital Marketing & AI | Coimagen Media Agency";
    const desc = isEs
      ? "Artículos sobre marketing digital, automatización con IA, SEO local y estrategias de crecimiento para negocios en Tijuana y San Diego."
      : "Articles on digital marketing, AI automation, local SEO and growth strategies for businesses in Tijuana and San Diego.";
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", "https://www.coimagenmedia.com/blog");
  }, [isEs]);

  const cats = isEs ? categories.es : categories.en;

  const filtered = blogPosts.filter((p) => {
    const tag = isEs ? p.tagEs : p.tagEn;
    const title = isEs ? p.titleEs : p.titleEn;
    const activeCatLabel = cats[activeCategory];
    const catMatch =
      activeCategory === 0 ||
      tag === activeCatLabel ||
      (isEs
        ? p.tagEs === activeCatLabel
        : p.tagEn === activeCatLabel ||
          (tagMap[p.tagEs] || "") === activeCatLabel);
    const searchMatch =
      search === "" || title.toLowerCase().includes(search.toLowerCase());
    return catMatch && searchMatch;
  });

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString(isEs ? "es-MX" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

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
          <p className="text-[var(--c-muted)] max-w-xl mx-auto text-base">
            {isEs
              ? "Artículos prácticos sobre automatización, SEO, inteligencia artificial y estrategias de crecimiento para negocios en México y EE.UU."
              : "Practical articles on automation, SEO, artificial intelligence, and growth strategies for businesses in Mexico and the USA."}
          </p>
        </div>

        {/* Search + Categories */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1 max-w-sm">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--c-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
          <div className="mb-12">
            <h2 className="text-white font-bold text-sm mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--c-lime)]" />
              {isEs ? "Destacados" : "Featured"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featured.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="glass border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[var(--c-cyan)]/30 transition-all group block"
                >
                  <div
                    className="h-40 flex items-center justify-center text-6xl"
                    style={{ background: `radial-gradient(ellipse at center, ${post.tagColor}18, transparent 70%), #080810` }}
                  >
                    {post.icon}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="badge-neon text-xs font-semibold px-2 py-0.5 rounded"
                        style={{ color: post.tagColor, borderColor: `${post.tagColor}30`, background: `${post.tagColor}12` }}
                      >
                        {isEs ? post.tagEs : post.tagEn}
                      </span>
                      <span className="text-[var(--c-muted2)] text-xs">{formatDate(post.date)}</span>
                      <span className="text-[var(--c-muted2)] text-xs">· {post.readTimeMin} min</span>
                    </div>
                    <h3 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-[var(--c-cyan)] transition-colors">
                      {isEs ? post.titleEs : post.titleEn}
                    </h3>
                    <p className="text-[var(--c-muted)] text-sm leading-relaxed mb-4 line-clamp-2">
                      {isEs ? post.excerptEs : post.excerptEn}
                    </p>
                    <span className="text-[var(--c-cyan)] text-xs font-semibold flex items-center gap-1">
                      {isEs ? "Leer artículo" : "Read article"}
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Rest of posts */}
        {rest.length > 0 && (
          <div>
            <h2 className="text-white font-bold text-sm mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--c-purple)]" />
              {isEs ? "Todos los artículos" : "All articles"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="glass border border-white/[0.06] rounded-xl p-5 hover:border-white/20 transition-all group block"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ background: `${post.tagColor}12` }}
                    >
                      {post.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold" style={{ color: post.tagColor }}>
                          {isEs ? post.tagEs : post.tagEn}
                        </span>
                        <span className="text-[var(--c-muted2)] text-xs">· {post.readTimeMin} min</span>
                      </div>
                      <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-[var(--c-cyan)] transition-colors">
                        {isEs ? post.titleEs : post.titleEn}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[var(--c-muted)] text-xs leading-relaxed line-clamp-2">
                    {isEs ? post.excerptEs : post.excerptEn}
                  </p>
                </a>
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[var(--c-muted)]">
            {isEs ? "No se encontraron artículos." : "No articles found."}
          </div>
        )}
      </div>
    </div>
  );
}
