import { useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { blogPosts } from "@/data/blogPosts";

export interface BlogSection {
  type: "intro" | "heading" | "paragraph" | "list" | "highlight" | "steps" | "cta_inline";
  titleEs?: string;
  titleEn?: string;
  bodyEs?: string;
  bodyEn?: string;
  items?: { es: string; en: string }[];
}

export interface BlogFAQ {
  q: { es: string; en: string };
  a: { es: string; en: string };
}

export interface BlogContent {
  slug: string;
  categoryEs: string;
  categoryEn: string;
  categoryColor: string;
  icon: string;
  date: string;
  readTimeMin: number;
  titleEs: string;
  titleEn: string;
  subtitleEs: string;
  subtitleEn: string;
  accentHex: string;
  sections: BlogSection[];
  faq: BlogFAQ[];
  relatedSlugs: string[];
}

export function BlogPostTemplate({ content }: { content: BlogContent }) {
  const { lang } = useLang();
  const isEs = lang === "es";
  const L = (v: { es: string; en: string } | undefined) =>
    v ? v[isEs ? "es" : "en"] : "";

  const title = isEs ? content.titleEs : content.titleEn;
  const subtitle = isEs ? content.subtitleEs : content.subtitleEn;
  const category = isEs ? content.categoryEs : content.categoryEn;

  useEffect(() => {
    const seoTitle = `${title} | Blog Coimagen`;
    const desc = subtitle;
    const url = `https://www.coimagenmedia.com/blog/${content.slug}`;
    document.title = seoTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", seoTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", url);
    document.querySelector('meta[property="og:type"]')?.setAttribute("content", "article");
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", seoTitle);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", desc);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
    window.scrollTo(0, 0);

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title,
      description: subtitle,
      datePublished: content.date,
      author: { "@type": "Organization", name: "Coimagen Media Agency", url: "https://www.coimagenmedia.com" },
      publisher: { "@type": "Organization", name: "Coimagen Media Agency", url: "https://www.coimagenmedia.com" },
      url,
    };
    const faqSchema = content.faq.length > 0 ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faq.map((f) => ({
        "@type": "Question",
        name: L(f.q),
        acceptedAnswer: { "@type": "Answer", text: L(f.a) },
      })),
    } : null;

    const inject = (id: string, data: object) => {
      let el = document.getElementById(id);
      if (!el) { el = document.createElement("script"); el.id = id; (el as HTMLScriptElement).type = "application/ld+json"; document.head.appendChild(el); }
      el.textContent = JSON.stringify(data);
    };
    inject(`article-schema-${content.slug}`, articleSchema);
    if (faqSchema) inject(`faq-schema-blog-${content.slug}`, faqSchema);

    return () => {
      document.getElementById(`article-schema-${content.slug}`)?.remove();
      document.getElementById(`faq-schema-blog-${content.slug}`)?.remove();
    };
  }, [lang]);

  const related = blogPosts.filter((p) => content.relatedSlugs.includes(p.slug));

  const formatDate = (d: string) => {
    const dt = new Date(d);
    return dt.toLocaleDateString(isEs ? "es-MX" : "en-US", { year: "numeric", month: "long", day: "numeric" });
  };

  return (
    <div className="min-h-screen bg-[#06060f] pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[var(--c-muted)] mb-8">
          <a href="/" className="hover:text-white transition-colors">{isEs ? "Inicio" : "Home"}</a>
          <span>/</span>
          <a href="/blog" className="hover:text-white transition-colors">Blog</a>
          <span>/</span>
          <span className="text-white truncate max-w-[200px]">{title}</span>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="badge-neon text-xs font-bold px-3 py-1 rounded-lg"
              style={{ color: content.categoryColor, borderColor: `${content.categoryColor}30`, background: `${content.categoryColor}12` }}
            >
              {content.icon} {category}
            </span>
            <span className="text-[var(--c-muted2)] text-xs">{formatDate(content.date)}</span>
            <span className="text-[var(--c-muted2)] text-xs">·</span>
            <span className="text-[var(--c-muted2)] text-xs">{content.readTimeMin} min {isEs ? "de lectura" : "read"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg text-[var(--c-muted)] leading-relaxed">{subtitle}</p>

          {/* Author */}
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/[0.06]">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--c-cyan)]/30 to-[var(--c-purple)]/30 flex items-center justify-center text-lg">
              👩‍💼
            </div>
            <div>
              <div className="text-white font-semibold text-sm">{siteConfig.founder.name}</div>
              <div className="text-[var(--c-muted)] text-xs">{isEs ? siteConfig.founder.title.es : siteConfig.founder.title.en} · Coimagen Media Agency</div>
            </div>
          </div>
        </header>

        {/* Hero banner */}
        <div
          className="h-52 sm:h-64 rounded-2xl mb-12 flex items-center justify-center overflow-hidden"
          style={{ background: `radial-gradient(ellipse at center, ${content.accentHex}20 0%, ${content.accentHex}08 60%, transparent 100%), #080810` }}
        >
          <span className="text-7xl sm:text-8xl">{content.icon}</span>
        </div>

        {/* Content sections */}
        <div className="prose-like">
          {content.sections.map((section, i) => {
            const sTitle = section.titleEs && section.titleEn ? L({ es: section.titleEs, en: section.titleEn }) : undefined;
            const sBody = section.bodyEs && section.bodyEn ? L({ es: section.bodyEs, en: section.bodyEn }) : undefined;

            if (section.type === "intro") return (
              <div key={i} className="text-[var(--c-muted)] text-base leading-relaxed mb-8 text-lg">
                {sBody}
              </div>
            );

            if (section.type === "heading") return (
              <h2 key={i} className="text-2xl font-black text-white mt-10 mb-4">{sTitle}</h2>
            );

            if (section.type === "paragraph") return (
              <p key={i} className="text-[var(--c-muted)] leading-relaxed mb-5">{sBody}</p>
            );

            if (section.type === "list" && section.items) return (
              <ul key={i} className="space-y-3 mb-8">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5" style={{ background: content.accentHex, color: "#06060f" }}>✓</span>
                    <span className="text-[var(--c-muted)] leading-relaxed">{L(item)}</span>
                  </li>
                ))}
              </ul>
            );

            if (section.type === "highlight") return (
              <div key={i} className="glass border rounded-xl p-6 mb-8" style={{ borderColor: `${content.accentHex}25`, background: `${content.accentHex}08` }}>
                {sTitle && <h3 className="font-bold text-white mb-2">{sTitle}</h3>}
                {sBody && <p className="text-[var(--c-muted)] text-sm leading-relaxed">{sBody}</p>}
                {section.items && (
                  <ul className="space-y-2 mt-3">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <span style={{ color: content.accentHex }}>→</span>
                        <span className="text-[var(--c-muted)]">{L(item)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );

            if (section.type === "steps" && section.items) return (
              <div key={i} className="space-y-4 mb-8">
                {sTitle && <h3 className="text-white font-black text-xl mb-5">{sTitle}</h3>}
                {section.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-4 glass border border-white/[0.06] rounded-xl p-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black" style={{ background: content.accentHex, color: "#06060f" }}>{j + 1}</span>
                    <p className="text-[var(--c-muted)] text-sm leading-relaxed">{L(item)}</p>
                  </div>
                ))}
              </div>
            );

            if (section.type === "cta_inline") return (
              <div key={i} className="glass border border-white/[0.08] rounded-2xl p-6 mb-8 text-center">
                {sTitle && <h3 className="text-white font-black text-lg mb-2">{sTitle}</h3>}
                {sBody && <p className="text-[var(--c-muted)] text-sm mb-4">{sBody}</p>}
                <a
                  href={siteConfig.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl hover:brightness-110 transition-all"
                  style={{ background: content.accentHex, color: "#06060f" }}
                >
                  {isEs ? "Habla con Camila AI" : "Talk to Camila AI"}
                </a>
              </div>
            );

            return null;
          })}
        </div>

        {/* FAQ */}
        {content.faq.length > 0 && (
          <div className="mt-12 mb-12">
            <h2 className="text-2xl font-black text-white mb-6">
              {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
            </h2>
            <div className="space-y-3">
              {content.faq.map((item, i) => (
                <details key={i} className="glass border border-white/[0.06] rounded-xl group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="text-white font-semibold pr-4 text-sm">{L(item.q)}</span>
                    <svg className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-open:rotate-180" style={{ color: content.accentHex }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-[var(--c-muted)] text-sm leading-relaxed border-t border-white/[0.05] pt-4">
                    {L(item.a)}
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* CTA final */}
        <div
          className="rounded-2xl p-8 text-center mb-12"
          style={{ background: `linear-gradient(135deg, ${content.accentHex}15 0%, ${content.accentHex}05 100%)`, border: `1px solid ${content.accentHex}20` }}
        >
          <div className="text-3xl mb-3">🚀</div>
          <h2 className="text-xl font-black text-white mb-2">
            {isEs ? "¿Listo para implementarlo en tu negocio?" : "Ready to implement it in your business?"}
          </h2>
          <p className="text-[var(--c-muted)] text-sm mb-6">
            {isEs ? "Habla con Camila AI y obtén un diagnóstico gratuito en minutos." : "Talk to Camila AI and get a free diagnosis in minutes."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={siteConfig.whatsapp.url} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold px-7 py-3 rounded-xl hover:brightness-110 transition-all"
              style={{ background: content.accentHex, color: "#06060f" }}>
              {isEs ? "Diagnóstico gratuito" : "Free diagnosis"}
            </a>
            <a href="/agendar"
              className="inline-flex items-center gap-2 glass border border-white/10 text-white font-bold px-7 py-3 rounded-xl hover:border-white/30 transition-all">
              {isEs ? "Agendar reunión" : "Schedule a meeting"}
            </a>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div>
            <h2 className="text-xl font-black text-white mb-5">
              {isEs ? "Artículos relacionados" : "Related articles"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((post) => (
                <a key={post.slug} href={`/blog/${post.slug}`}
                  className="glass border border-white/[0.06] rounded-xl p-5 hover:border-white/20 transition-all group">
                  <div className="text-2xl mb-2">{post.icon}</div>
                  <div className="text-xs mb-2" style={{ color: post.tagColor }}>
                    {isEs ? post.tagEs : post.tagEn}
                  </div>
                  <h3 className="text-white text-sm font-semibold leading-snug group-hover:text-[var(--c-cyan)] transition-colors">
                    {isEs ? post.titleEs : post.titleEn}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Back to blog */}
        <div className="mt-10 pt-8 border-t border-white/[0.06] text-center">
          <a href="/blog" className="inline-flex items-center gap-2 text-[var(--c-muted)] hover:text-white text-sm transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
            {isEs ? "Ver todos los artículos" : "View all articles"}
          </a>
        </div>
      </div>
    </div>
  );
}
