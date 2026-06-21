import { IndustryTemplate } from "./IndustryTemplate";

const content = {
  slug: "restaurant-os",
  icon: "🍽️",
  color: "#f97316",
  seoTitle: {
    es: "Restaurant OS | Marketing, reservas y automatización para restaurantes",
    en: "Restaurant OS | Marketing, reservations and automation for restaurants",
  },
  metaDesc: {
    es: "Sistema para restaurantes: reservas online, captación de clientes, menú digital, seguimiento por WhatsApp y marketing.",
    en: "System for restaurants: online reservations, customer acquisition, digital menu, WhatsApp follow-up and marketing.",
  },
  title: { es: "Restaurant OS", en: "Restaurant OS" },
  subtitle: {
    es: "Sistema de reservas, captación y marketing digital para restaurantes que quieren más mesas ocupadas.",
    en: "Reservation, lead capture and digital marketing system for restaurants that want more occupied tables.",
  },
  pain: {
    es: [
      "No hay sistema de reservas.",
      "No hay base de datos de clientes.",
      "Promociones que no convierten.",
      "No hay seguimiento por WhatsApp.",
      "Menú digital que no genera ventas.",
    ],
    en: [
      "No reservation system.",
      "No customer database.",
      "Promotions that don't convert.",
      "No WhatsApp follow-up.",
      "Digital menu that doesn't generate sales.",
    ],
  },
  solution: {
    es: "Restaurant OS conecta tu menú, redes, reservas y clientes en un sistema que trabaja para llenar tu restaurante.",
    en: "Restaurant OS connects your menu, social media, reservations and customers in one system that works to fill your restaurant.",
  },
  modules: [
    { icon: "🌐", name: "Landing restaurante" },
    { icon: "📅", name: "Reservas online" },
    { icon: "🍔", name: "Menú digital" },
    { icon: "💬", name: "WhatsApp marketing" },
    { icon: "👥", name: "CRM clientes" },
    { icon: "📱", name: "Redes sociales" },
    { icon: "🗺️", name: "Google Maps" },
    { icon: "📊", name: "Reportes" },
  ],
  ctaLabel: {
    es: "Solicitar diagnóstico gratuito para restaurante",
    en: "Request free diagnostic for restaurant",
  },
  faq: [
    {
      q: { es: "¿El menú digital se puede actualizar fácilmente?", en: "Can the digital menu be updated easily?" },
      a: { es: "Sí, desde un panel sencillo sin necesidad de desarrollador.", en: "Yes, from a simple panel without needing a developer." },
    },
  ],
};

export default function RestaurantOS() {
  return <IndustryTemplate content={content} />;
}
