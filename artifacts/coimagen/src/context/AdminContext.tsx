import { createContext, useContext, useState, useEffect } from "react";

export interface ProjectCard {
  id: string;
  image: string;
  title: string;
  desc: string;
  externalUrl: string;
  caseStudyUrl: string;
  tag: string;
  color: string;
}

export interface AdminSettings {
  projectCards: ProjectCard[];
  calendarUrl: string;
}

export const DEFAULT_PROJECT_CARDS: ProjectCard[] = [
  { id: "dr-segovia", image: "", title: "Dr. José Manuel Segovia Neurocirugía", desc: "Intranet + flujos con IA para expedientes médicos. Caso real en producción.", externalUrl: "#", caseStudyUrl: "/case-studies/dr-segovia", tag: "Salud", color: "from-blue-600 to-indigo-800" },
  { id: "clinica-emt", image: "", title: "Clínica EMT", desc: "Sistema de gestión de pacientes con automatización de seguimiento digital.", externalUrl: "#", caseStudyUrl: "#", tag: "Salud", color: "from-teal-600 to-cyan-700" },
  { id: "chimichimi", image: "", title: "Chimichimi", desc: "Presencia digital con contenido, marca y estrategia de captación.", externalUrl: "#", caseStudyUrl: "/case-studies/chimichimi", tag: "Restaurante", color: "from-orange-500 to-red-700" },
  { id: "conchas-tower", image: "", title: "Conchas Tower", desc: "Landing de captación, filtrado de leads, inventario y operación escalable.", externalUrl: "#", caseStudyUrl: "/case-studies/conchas-tower", tag: "Inmobiliaria", color: "from-purple-600 to-violet-800" },
  { id: "coimagen-os", image: "", title: "Coimagen OS", desc: "Plataforma interna de operación con IA, CRM, facturación, clientes y flujos automatizados.", externalUrl: "#", caseStudyUrl: "/case-studies/coimagen-os", tag: "Tecnología", color: "from-cyan-600 to-blue-800" },
];

const DEFAULTS: AdminSettings = {
  projectCards: DEFAULT_PROJECT_CARDS,
  calendarUrl: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1tFYTxaqG70W8BLfvdIaKTQBN54Q1C4lTxVkvKGgCbddfTtX4B4JsNCFToDl_J1To-aZL1Nn1_?gv=true",
};

const STORAGE_KEY = "coimagen_admin_v1";

function loadSettings(): AdminSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch { /* ignore */ }
  return { ...DEFAULTS };
}

interface AdminContextValue {
  settings: AdminSettings;
  updateSettings: (patch: Partial<AdminSettings>) => void;
  resetSettings: () => void;
}

const AdminContext = createContext<AdminContextValue | null>(null);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<AdminSettings>(loadSettings);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(settings)); } catch { /* ignore */ }
  }, [settings]);

  const updateSettings = (patch: Partial<AdminSettings>) =>
    setSettings((prev) => ({ ...prev, ...patch }));

  const resetSettings = () => setSettings({ ...DEFAULTS });

  return (
    <AdminContext.Provider value={{ settings, updateSettings, resetSettings }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin must be within AdminProvider");
  return ctx;
}
