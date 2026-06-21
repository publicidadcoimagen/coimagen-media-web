interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({ children, className = "", hover = false, onClick }: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={`glass ${hover ? "glass-hover cursor-pointer" : ""} p-6 ${className}`}
    >
      {children}
    </div>
  );
}
