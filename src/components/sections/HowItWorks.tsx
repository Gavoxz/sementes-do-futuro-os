import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { GrowthTimeline } from "@/components/ui/GrowthTimeline";
import { MEETING_TIMELINE } from "@/data/timeline";

export function HowItWorks() {
  return (
    <section className="bg-mist py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Estrutura do encontro"
          title="Como funcionam os encontros"
          align="center"
        />
        <div className="mt-16">
          <GrowthTimeline steps={MEETING_TIMELINE} orientation="horizontal" />
        </div>
      </Container>
    </section>
  );
}
