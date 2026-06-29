import { useLang } from "@/context/LanguageContext";

interface BreadcrumbItem {
  labelEs: string;
  labelEn: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const { lang } = useLang();
  const isEs = lang === "es";

  const all: BreadcrumbItem[] = [
    { labelEs: "Inicio", labelEn: "Home", href: "/" },
    ...items,
  ];

  return (
    <nav aria-label="breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--c-muted)]">
        {all.map((item, i) => {
          const isLast = i === all.length - 1;
          const label = isEs ? item.labelEs : item.labelEn;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && (
                <svg className="w-3 h-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {isLast || !item.href ? (
                <span className={isLast ? "text-[var(--c-cyan)] font-medium" : ""}>{label}</span>
              ) : (
                <a
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
