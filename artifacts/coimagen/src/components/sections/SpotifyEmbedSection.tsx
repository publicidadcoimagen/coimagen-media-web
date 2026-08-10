import { useLang } from "@/context/LanguageContext";

const SPOTIFY_EMBED_ES = "https://open.spotify.com/embed/episode/27uurw7TqeO363kL4qU7CF?utm_source=generator";
const SPOTIFY_EMBED_EN = "https://open.spotify.com/embed/episode/7nHXH4ne4BvMxhxGpg2Z6S?utm_source=generator&si=4643fc0ae1d240cb";

export function SpotifyEmbedSection() {
  const { lang } = useLang();
  const isEs = lang === "es";

  return (
    <section className="py-16 bg-[#06060f]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
          {isEs ? "Escúchanos en Spotify" : "Listen to us on Spotify"}
        </h2>
        <p className="text-[var(--c-muted)] text-sm mb-6">
          {isEs
            ? "Marketing digital e IA para negocios, directo en tu podcast player."
            : "Digital marketing and AI for businesses, straight to your podcast player."}
        </p>
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src={isEs ? SPOTIFY_EMBED_ES : SPOTIFY_EMBED_EN}
          width="100%"
          height={isEs ? "152" : "352"}
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Coimagen Media — Spotify"
        />
      </div>
    </section>
  );
}
