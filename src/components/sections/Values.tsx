import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { VALUES } from "@/data/values";

export function Values() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="O que nos guia"
          title="Nossos valores"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, i) => {
            const Icon = value.icon;
            return (
              <FadeIn key={value.title} delay={(i % 4) * 0.06}>
                <div className="group flex h-full flex-col gap-4 rounded-xl2 border border-ink/5 bg-paper p-7 transition-shadow hover:shadow-whisper">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mist text-primary-700 transition-colors group-hover:bg-primary-50">
                    <Icon size={19} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="font-medium text-ink">{value.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-ink-soft">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
