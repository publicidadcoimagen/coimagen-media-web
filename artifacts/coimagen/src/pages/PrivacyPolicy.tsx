import { useEffect } from "react";
import { useLang } from "@/context/LanguageContext";

export default function PrivacyPolicy() {
  const { lang } = useLang();
  const isEs = lang === "es";

  useEffect(() => {
    const title = isEs ? "Aviso de Privacidad — Coimagen Media Agency" : "Privacy Policy — Coimagen Media Agency";
    const desc = isEs
      ? "Aviso de privacidad de Coimagen Media Agency. Información sobre el tratamiento de datos personales conforme a la LFPDPPP de México."
      : "Privacy Policy of Coimagen Media Agency. Information on personal data processing in accordance with Mexican privacy law.";
    const url = "https://www.coimagenmedia.com/privacy-policy";
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", url);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", desc);
    window.scrollTo(0, 0);
  }, [isEs]);

  const sections = isEs ? [
    {
      title: "1. Responsable del tratamiento de datos",
      content: "Coimagen Media Agency, con domicilio en Tijuana, Baja California, México, es responsable del tratamiento de sus datos personales conforme a las disposiciones de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)."
    },
    {
      title: "2. Datos personales que recabamos",
      content: "Podemos recabar los siguientes datos personales: nombre completo, correo electrónico, número de teléfono o WhatsApp, nombre del negocio, industria o giro empresarial, e información proporcionada voluntariamente a través de formularios, agentes IA o mensajes directos."
    },
    {
      title: "3. Finalidades del tratamiento",
      content: "Sus datos personales serán utilizados para: (a) brindar los servicios de marketing digital, automatización e inteligencia artificial contratados; (b) enviar comunicaciones de interés relacionadas con nuestros servicios; (c) dar seguimiento a solicitudes y diagnósticos; (d) mejorar la experiencia del usuario en nuestra plataforma."
    },
    {
      title: "4. Transferencia de datos",
      content: "Coimagen Media Agency no transfiere datos personales a terceros sin consentimiento previo del titular, salvo que sea requerido por ley o autoridad competente."
    },
    {
      title: "5. Derechos ARCO",
      content: "Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (derechos ARCO). Para ejercerlos, envíenos un correo a contacto@coimagenmedia.com indicando su nombre, los datos a tratar y el derecho que desea ejercer."
    },
    {
      title: "6. Cookies y tecnologías de seguimiento",
      content: "Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar la experiencia de navegación, analizar el tráfico y personalizar contenido. Puede deshabilitar las cookies desde la configuración de su navegador."
    },
    {
      title: "7. Medidas de seguridad",
      content: "Implementamos medidas técnicas y organizativas para proteger sus datos personales contra pérdida, uso indebido, acceso no autorizado, divulgación, alteración o destrucción."
    },
    {
      title: "8. Cambios al aviso de privacidad",
      content: "Nos reservamos el derecho de modificar este aviso de privacidad en cualquier momento. Los cambios serán publicados en esta página con indicación de la fecha de actualización."
    },
    {
      title: "9. Contacto",
      content: "Para cualquier duda o aclaración sobre el tratamiento de sus datos, contáctenos en: contacto@coimagenmedia.com | WhatsApp: +1 555 934 1706"
    },
  ] : [
    {
      title: "1. Data Controller",
      content: "Coimagen Media Agency, located in Tijuana, Baja California, Mexico, is responsible for processing your personal data in accordance with applicable data protection laws."
    },
    {
      title: "2. Personal data we collect",
      content: "We may collect the following personal data: full name, email address, phone or WhatsApp number, business name, industry or business type, and information voluntarily provided through forms, AI agents or direct messages."
    },
    {
      title: "3. Purposes of data processing",
      content: "Your personal data will be used to: (a) provide contracted digital marketing, automation and AI services; (b) send relevant communications about our services; (c) follow up on requests and diagnostics; (d) improve the user experience on our platform."
    },
    {
      title: "4. Data transfers",
      content: "Coimagen Media Agency does not transfer personal data to third parties without prior consent from the data subject, unless required by law or competent authority."
    },
    {
      title: "5. Your rights",
      content: "You have the right to access, correct, delete or object to the processing of your personal data. To exercise these rights, send us an email at contacto@coimagenmedia.com indicating your name, the data in question and the right you wish to exercise."
    },
    {
      title: "6. Cookies and tracking technologies",
      content: "Our website may use cookies and similar technologies to improve the browsing experience, analyze traffic and personalize content. You can disable cookies from your browser settings."
    },
    {
      title: "7. Security measures",
      content: "We implement technical and organizational measures to protect your personal data against loss, misuse, unauthorized access, disclosure, alteration or destruction."
    },
    {
      title: "8. Changes to this Privacy Policy",
      content: "We reserve the right to modify this privacy policy at any time. Changes will be published on this page with the date of update."
    },
    {
      title: "9. Contact",
      content: "For any questions about the processing of your data, contact us at: contacto@coimagenmedia.com | WhatsApp: +1 555 934 1706"
    },
  ];

  return (
    <div className="min-h-screen bg-[#06060f] pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="badge-neon text-[var(--c-purple)] border border-[var(--c-purple)]/25 bg-[var(--c-purple)]/10 mb-4 w-fit mx-auto">
            📄 {isEs ? "Aviso Legal" : "Legal Notice"}
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
            {isEs ? "Aviso de Privacidad" : "Privacy Policy"}
          </h1>
          <p className="text-[var(--c-muted)] text-sm">
            {isEs ? "Última actualización: junio 2026" : "Last updated: June 2026"}
          </p>
        </div>

        <div className="glass border border-white/[0.06] rounded-2xl p-8 space-y-8">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-white font-black text-base mb-3">{s.title}</h2>
              <p className="text-[var(--c-muted)] text-sm leading-relaxed">{s.content}</p>
              {i < sections.length - 1 && <hr className="border-white/[0.04] mt-8" />}
            </div>
          ))}
        </div>

        <p className="text-center text-[var(--c-muted)] text-xs mt-8">
          <a href="/" className="hover:text-white transition-colors">← {isEs ? "Volver al inicio" : "Back to home"}</a>
          {" · "}
          <a href="/terms-of-service" className="hover:text-white transition-colors">{isEs ? "Términos de Servicio" : "Terms of Service"}</a>
        </p>
      </div>
    </div>
  );
}
