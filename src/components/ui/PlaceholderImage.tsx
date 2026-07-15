import { ImageIcon, Video } from "lucide-react";

export function PlaceholderImage({
  label,
  ratio = "aspect-[4/5]",
  variant = "image",
  className = "",
}: {
  label: string;
  ratio?: string;
  variant?: "image" | "video";
  className?: string;
}) {
  const Icon = variant === "video" ? Video : ImageIcon;
  return (
    <div
      role="img"
      aria-label={`Espaço reservado para ${label}`}
      className={`relative overflow-hidden rounded-2xl ${ratio} bg-gradient-to-br from-mist via-primary-50 to-secondary-50 ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-ink-soft/60">
        <Icon size={28} strokeWidth={1.25} aria-hidden="true" />
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-center px-6">
          {label}
        </span>
      </div>
      <div className="absolute inset-0 ring-1 ring-inset ring-ink/5 rounded-2xl" />
    </div>
  );
}
