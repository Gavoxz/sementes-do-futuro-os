import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { PROBLEMS } from "@/data/problem";

export function Problem() {
  return (
    <section className="bg-ink py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="O desafio"
          title="O que observamos na infância de hoje"
          lede="Percepções construídas na prática, no contato direto com famílias, escolas e comunidades — não um levantamento estatístico formal."
          tone="paper"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={(i % 3) * 0.07}>
                <div className="flex h-full flex-col gap-4 rounded-xl2 border border-paper/10 bg-paper/[0.04] p-7 backdrop-blur-xs">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-paper/10 text-paper">
                    <Icon size={19} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="font-medium text-paper">{item.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-paper/70">
                    {item.description}
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
