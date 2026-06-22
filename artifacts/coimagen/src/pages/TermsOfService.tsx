import { useEffect } from "react";
import { useLang } from "@/context/LanguageContext";

export default function TermsOfService() {
  const { lang } = useLang();
  const isEs = lang === "es";

  useEffect(() => {
    document.title = isEs
      ? "Términos de Servicio — Coimagen Media Agency"
      : "Terms of Service — Coimagen Media Agency";
    window.scrollTo(0, 0);
  }, [isEs]);

  const sections = isEs ? [
    { title: "1. Aceptación de los términos", content: "Al contratar, acceder o utilizar cualquier servicio de Coimagen Media Agency, usted acepta quedar vinculado por estos Términos de Servicio. Si no está de acuerdo con alguno de estos términos, le pedimos que no utilice nuestros servicios." },
    { title: "2. Descripción de los servicios", content: "Coimagen Media Agency ofrece servicios de marketing digital, diseño web, SEO, automatización de procesos, integración de CRM, agentes de inteligencia artificial y sistemas operativos digitales para negocios. El alcance específico de cada servicio se define en la propuesta comercial acordada con el cliente." },
    { title: "3. Obligaciones del cliente", content: "El cliente se compromete a: (a) proporcionar información veraz y actualizada sobre su negocio; (b) realizar los pagos acordados en los tiempos establecidos; (c) cooperar en la implementación de los servicios; (d) no utilizar los servicios para actividades ilegales o contrarias a la buena fe." },
    { title: "4. Pagos y facturación", content: "Los pagos se realizan de forma mensual o según lo acordado en la propuesta comercial. Los precios están sujetos a actualización con aviso previo de 30 días. Los planes fundadores mantienen su precio mientras el plan permanezca activo." },
    { title: "5. Cancelación de servicios", content: "El cliente puede cancelar sus servicios en cualquier momento con aviso previo de 15 días. No se realizan reembolsos de períodos ya pagados. Los archivos y accesos entregados al cliente son propiedad del cliente." },
    { title: "6. Propiedad intelectual", content: "Los materiales, diseños, código y sistemas desarrollados por Coimagen Media Agency para el cliente son propiedad del cliente una vez liquidado el pago correspondiente. Coimagen conserva el derecho de mencionar el proyecto como referencia de portafolio, salvo acuerdo de confidencialidad." },
    { title: "7. Limitación de responsabilidad", content: "Coimagen Media Agency no garantiza resultados específicos de ventas o conversiones. Los resultados dependen de múltiples factores externos. Nuestra responsabilidad se limita al valor de los servicios contratados en el período correspondiente." },
    { title: "8. Confidencialidad", content: "Ambas partes se comprometen a mantener la confidencialidad de la información comercial sensible compartida durante la relación de trabajo, incluyendo estrategias, precios internos y datos de clientes." },
    { title: "9. Modificaciones", content: "Coimagen Media Agency se reserva el derecho de modificar estos términos en cualquier momento. Los cambios serán notificados a los clientes activos con un mínimo de 15 días de anticipación." },
    { title: "10. Jurisdicción", content: "Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier controversia será resuelta ante los tribunales competentes de Tijuana, Baja California, México." },
  ] : [
    { title: "1. Acceptance of terms", content: "By contracting, accessing or using any service from Coimagen Media Agency, you agree to be bound by these Terms of Service. If you disagree with any of these terms, please do not use our services." },
    { title: "2. Description of services", content: "Coimagen Media Agency offers digital marketing, web design, SEO, process automation, CRM integration, artificial intelligence agents and digital operating systems for businesses. The specific scope of each service is defined in the commercial proposal agreed upon with the client." },
    { title: "3. Client obligations", content: "The client agrees to: (a) provide truthful and up-to-date information about their business; (b) make agreed payments on time; (c) cooperate in the implementation of services; (d) not use the services for illegal or bad-faith activities." },
    { title: "4. Payments and billing", content: "Payments are made monthly or as agreed in the commercial proposal. Prices are subject to change with 30 days prior notice. Founder plans maintain their price as long as the plan remains active." },
    { title: "5. Cancellation of services", content: "The client may cancel their services at any time with 15 days prior notice. No refunds are made for periods already paid. Files and accesses delivered to the client are the client's property." },
    { title: "6. Intellectual property", content: "Materials, designs, code and systems developed by Coimagen Media Agency for the client become the client's property once the corresponding payment is settled. Coimagen retains the right to mention the project as a portfolio reference, unless a confidentiality agreement is in place." },
    { title: "7. Limitation of liability", content: "Coimagen Media Agency does not guarantee specific sales or conversion results. Results depend on multiple external factors. Our liability is limited to the value of contracted services for the corresponding period." },
    { title: "8. Confidentiality", content: "Both parties agree to maintain the confidentiality of sensitive commercial information shared during the working relationship, including strategies, internal pricing and client data." },
    { title: "9. Modifications", content: "Coimagen Media Agency reserves the right to modify these terms at any time. Active clients will be notified with a minimum of 15 days advance notice." },
    { title: "10. Jurisdiction", content: "These terms are governed by the laws of the United Mexican States. Any disputes will be resolved before the competent courts of Tijuana, Baja California, Mexico." },
  ];

  return (
    <div className="min-h-screen bg-[#06060f] pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="badge-neon text-[var(--c-cyan)] border border-[var(--c-cyan)]/25 bg-[var(--c-cyan)]/10 mb-4 w-fit mx-auto">
            📋 {isEs ? "Legal" : "Legal"}
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
            {isEs ? "Términos de Servicio" : "Terms of Service"}
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
          <a href="/privacy-policy" className="hover:text-white transition-colors">{isEs ? "Aviso de Privacidad" : "Privacy Policy"}</a>
        </p>
      </div>
    </div>
  );
}
