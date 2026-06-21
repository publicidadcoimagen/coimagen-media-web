import { useLang } from "@/context/LanguageContext";

export function CamilaSection() {
  const { t } = useLang();
  const c = t.camila;

  return (
    <section className="py-24 bg-[#06060f]" id="fundadora">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="glass border border-white/[0.06] rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-10 items-center">
          {/* Photo placeholder */}
          <div className="flex-shrink-0 w-48 h-48 lg:w-64 lg:h-64 rounded-2xl glass border border-[var(--c-cyan)]/20 flex flex-col items-center justify-center gap-3 text-center">
            <div className="text-5xl">👩‍💼</div>
            <p className="text-[var(--c-muted2)] text-xs px-4">{c.photo}</p>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="badge-neon text-[var(--c-cyan)] mb-4 w-fit mx-auto lg:mx-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-cyan)] inline-block" />
              Founder
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-1">{c.name}</h2>
            <p className="grad-text font-semibold text-lg mb-6">{c.role}</p>
            <p className="text-[var(--c-muted)] text-base leading-relaxed max-w-xl">{c.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
