import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { IMPACT_STATS } from "@/data/impact";

export function Impact() {
  return (
    <section id="impacto" className="bg-ink py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Este projeto em números"
          title="Uma equipe, um propósito"
          lede="Números que representam a organização deste projeto acadêmico — não resultados de impacto social mensurado."
          align="center"
          tone="paper"
        />

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {IMPACT_STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.08}>
              <div className="flex flex-col items-center gap-2 text-center">
                <span className="font-sans text-4xl font-light text-paper sm:text-5xl">
                  {stat.value}
                </span>
                <span className="text-sm font-light text-paper/60">{stat.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
