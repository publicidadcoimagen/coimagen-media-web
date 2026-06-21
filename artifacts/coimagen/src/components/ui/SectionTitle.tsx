interface SectionTitleProps {
  tag?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  accent?: "cyan" | "lime" | "purple";
}

export function SectionTitle({ tag, title, subtitle, center = true, accent = "cyan" }: SectionTitleProps) {
  const accentColors = {
    cyan: "text-[var(--cyan)]",
    lime: "text-[var(--lime)]",
    purple: "text-[var(--purple)]",
  };

  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {tag && (
        <div className={`badge mb-4 ${center ? "mx-auto" : ""} ${accentColors[accent]}`}>
          <span className={`w-1.5 h-1.5 rounded-full bg-current inline-block`} />
          {tag}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">{title}</h2>
      {subtitle && <p className="text-[var(--muted)] text-lg max-w-2xl leading-relaxed mx-auto">{subtitle}</p>}
    </div>
  );
}
