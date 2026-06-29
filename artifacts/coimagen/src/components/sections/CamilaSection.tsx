import { useLang } from "@/context/LanguageContext";

export function CamilaSection() {
  const { t } = useLang();
  const c = t.camila;

  return (
    <section className="py-24 bg-[#06060f]" id="fundadora">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="glass border border-white/[0.06] rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-10 items-center">

          {/* Founder photo — cropped to show face + upper body only */}
          <div className="flex-shrink-0">
            <div
              className="relative w-56 lg:w-64 rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 0 60px rgba(249,115,22,0.35)" }}
            >
              <img
                src="/images/camila-founder-v3.png"
                alt="Camila Segovia — Founder & CEO, Coimagen Media Agency"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="badge-neon text-[var(--c-cyan)] mb-4 w-fit mx-auto lg:mx-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-cyan)] inline-block" />
              Founder & CEO
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
