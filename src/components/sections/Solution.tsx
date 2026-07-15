import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { GrowthTimeline } from "@/components/ui/GrowthTimeline";
import { SOLUTION_TIMELINE } from "@/data/timeline";

export function Solution() {
  return (
    <section className="bg-mist py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Nossa abordagem"
              title="Uma jornada, não um evento isolado"
              lede="Cada encontro é uma etapa de um caminho maior — do primeiro contato à transformação que permanece."
            />
          </div>
          <div className="lg:col-span-7">
            <GrowthTimeline steps={SOLUTION_TIMELINE} orientation="vertical" />
          </div>
        </div>
      </Container>
    </section>
  );
}
