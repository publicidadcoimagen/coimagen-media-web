interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: string;
}

export function CTAButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  target,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer select-none";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variants = {
    primary:
      "bg-[var(--cyan)] text-[#060610] hover:brightness-110 hover:shadow-[0_0_24px_rgba(0,207,255,0.45)] active:scale-95",
    outline:
      "border border-[var(--border)] glass text-white hover:border-[var(--cyan)] hover:text-[var(--cyan)] hover:shadow-[0_0_16px_rgba(0,207,255,0.15)] active:scale-95",
    ghost: "text-[var(--muted)] hover:text-white hover:bg-white/5 active:scale-95",
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
