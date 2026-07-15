import type { ReactNode } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "ink",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  tone?: "ink" | "paper";
}) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const toneClass = tone === "paper" ? "text-paper" : "text-ink";
  const ledeTone = tone === "paper" ? "text-paper/80" : "text-ink-soft";
  const eyebrowTone = tone === "paper" ? "text-primary-100" : "text-primary-700";

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <FadeIn>
          <span
            className={`text-xs font-semibold uppercase tracking-[0.28em] ${eyebrowTone}`}
          >
            {eyebrow}
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.05}>
        <h2 className={`font-sans text-3xl sm:text-4xl lg:text-[2.75rem] font-light leading-[1.12] tracking-tight text-balance ${toneClass}`}>
          {title}
        </h2>
      </FadeIn>
      {lede && (
        <FadeIn delay={0.1}>
          <p className={`text-base sm:text-lg leading-relaxed font-light ${ledeTone}`}>
            {lede}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
