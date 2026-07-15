import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ACTIVITIES } from "@/data/activities";

export function Activities() {
  return (
    <section id="atividades" className="bg-paper py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="No dia a dia"
          title="O que fazemos nos encontros"
          align="center"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {ACTIVITIES.map((activity, i) => {
            const Icon = activity.icon;
            return (
              <FadeIn key={activity.title} delay={(i % 5) * 0.05}>
                <div className="flex h-full flex-col items-center gap-4 rounded-xl2 bg-mist p-6 text-center transition-transform hover:-translate-y-1">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-paper text-secondary-700 shadow-whisper">
                    <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <p className="text-sm font-medium text-ink">{activity.title}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
