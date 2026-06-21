import { useLang } from "@/context/LanguageContext";
import { SectionTitle } from "@/components/ui/SectionTitle";

const tagColors: Record<string, string> = {
  Salud: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Health: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Legal: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  Dental: "text-teal-400 bg-teal-400/10 border-teal-400/20",
  SEO: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  "Automatización": "text-orange-400 bg-orange-400/10 border-orange-400/20",
  Automation: "text-orange-400 bg-orange-400/10 border-orange-400/20",
  IA: "text-pink-400 bg-pink-400/10 border-pink-400/20",
  AI: "text-pink-400 bg-pink-400/10 border-pink-400/20",
  Restaurante: "text-orange-400 bg-orange-400/10 border-orange-400/20",
  Restaurant: "text-orange-400 bg-orange-400/10 border-orange-400/20",
};

export function BlogPreview() {
  const { t } = useLang();
  const b = t.blog;

  return (
    <section className="py-24 bg-[#06060f]" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle tag="Blog" title={b.title} subtitle={b.subtitle} accent="lime" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {b.posts.map((post, i) => (
            <a
              key={i}
              href={post.slug}
              className="glass glass-hover p-6 flex flex-col group"
            >
              {/* Placeholder image */}
              <div className="h-32 rounded-xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.06] mb-5 flex items-center justify-center">
                <svg className="w-8 h-8 text-white/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              <div className={`badge-neon text-[0.65rem] w-fit mb-3 border ${tagColors[post.tag] || "text-[var(--c-muted)] border-white/10"}`}>
                {post.tag}
              </div>

              <h3 className="text-white font-semibold text-sm leading-snug mb-4 group-hover:text-[var(--c-cyan)] transition-colors flex-1">
                {post.title}
              </h3>

              <div className="flex items-center gap-1.5 text-[var(--c-cyan)] text-xs font-semibold">
                {b.readMore}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
