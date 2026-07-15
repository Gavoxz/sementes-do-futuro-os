"use client";

import { Leaf } from "lucide-react";
import type { TimelineStep } from "@/types";
import { FadeIn } from "@/components/ui/FadeIn";

export function GrowthTimeline({
  steps,
  orientation = "vertical",
}: {
  steps: TimelineStep[];
  orientation?: "vertical" | "horizontal";
}) {
  if (orientation === "horizontal") {
    return (
      <div className="relative">
        <div className="hidden md:block absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-primary-300 via-secondary-300 to-accent-300" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-6 md:gap-6">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.06}>
              <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-5 md:text-center">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-paper ring-1 ring-primary-200 shadow-whisper">
                  <Leaf size={18} className="text-primary-700" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="font-medium text-ink">{step.title}</p>
                  <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative pl-12 sm:pl-14">
      <div className="absolute left-[1.4rem] sm:left-[1.65rem] top-2 bottom-2 w-px bg-gradient-to-b from-primary-300 via-secondary-300 to-accent-300" />
      <div className="flex flex-col gap-10">
        {steps.map((step, i) => (
          <FadeIn key={step.title} delay={i * 0.06}>
            <div className="relative">
              <span className="absolute -left-12 sm:-left-14 top-0 flex h-11 w-11 items-center justify-center rounded-full bg-paper ring-1 ring-primary-200 shadow-whisper">
                <Leaf size={16} className="text-primary-700" strokeWidth={1.5} />
              </span>
              <p className="font-medium text-lg text-ink">{step.title}</p>
              <p className="mt-1 text-ink-soft leading-relaxed max-w-md">
                {step.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
