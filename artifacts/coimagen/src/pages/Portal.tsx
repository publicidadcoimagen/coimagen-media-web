import { useLang } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export default function Portal() {
  const { lang } = useLang();
  const isEs = lang === "es";

  return (
    <div className="min-h-screen bg-[#06060f] flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="text-6xl mb-6">🔐</div>
        <div className="badge-neon text-[var(--c-purple)] border border-[var(--c-purple)]/25 bg-[var(--c-purple)]/10 mb-4 w-fit mx-auto">
          {isEs ? "Próximamente" : "Coming Soon"}
        </div>
        <h1 className="text-3xl font-black text-white mb-4">
          {isEs ? "Portal de Clientes" : "Client Portal"}
        </h1>
        <p className="text-[var(--c-muted)] text-base leading-relaxed mb-8">
          {isEs
            ? "El portal exclusivo para clientes de Coimagen estará disponible pronto. Aquí podrás monitorear campañas, métricas y acceder a tu sistema operativo digital."
            : "The exclusive Coimagen client portal will be available soon. Here you will be able to monitor campaigns, metrics and access your digital operating system."}
        </p>
        <div className="glass border border-[var(--c-purple)]/20 rounded-2xl p-6 mb-6">
          <p className="text-white/70 text-sm">
            {isEs
              ? "¿Ya eres cliente fundador? Contáctanos por WhatsApp para acceso anticipado."
              : "Already a founder client? Contact us via WhatsApp for early access."}
          </p>
        </div>
        <a
          href={siteConfig.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[var(--c-cyan)] text-[#06060f] font-bold px-8 py-3 rounded-xl text-sm hover:brightness-110 transition-all"
        >
          {isEs ? "Contactar por WhatsApp" : "Contact via WhatsApp"}
        </a>
      </div>
    </div>
  );
}
