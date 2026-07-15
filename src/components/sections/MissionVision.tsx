import { Target, Eye, Sprout } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function MissionVision() {
  return (
    <section id="missao" className="bg-mist py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FadeIn>
            <div className="flex h-full flex-col gap-5 rounded-xl2 bg-paper p-8 shadow-whisper sm:p-10">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                <Target size={20} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className="text-xl font-medium text-ink">Missão</h3>
              <p className="font-light leading-relaxed text-ink-soft">
                Proporcionar às crianças e adolescentes experiências que ampliem sua
                visão de mundo, incentivando a descoberta de novos ambientes,
                profissões e possibilidades para o futuro, promovendo o aprendizado,
                a criatividade e momentos de lazer longe das telas.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="flex h-full flex-col gap-5 rounded-xl2 bg-paper p-8 shadow-whisper sm:p-10">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary-50 text-secondary-700">
                <Eye size={20} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className="text-xl font-medium text-ink">Visão</h3>
              <p className="font-light leading-relaxed text-ink-soft">
                Ser reconhecida como uma organização referência no desenvolvimento de
                crianças e adolescentes, promovendo inclusão, aprendizado,
                criatividade e bem-estar por meio de experiências que incentivem a
                autonomia, a convivência e um futuro mais sustentável.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.14}>
          <div className="mt-6 flex flex-col gap-5 rounded-xl2 bg-gradient-to-br from-accent-700 to-accent-900 p-8 text-paper shadow-soft sm:p-10 md:flex-row md:items-center md:gap-10">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-paper/10">
              <Sprout size={20} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-medium">Por que existimos</h3>
              <p className="max-w-2xl font-light leading-relaxed text-paper/85">
                A Sementes do Futuro nasceu do desejo de plantar oportunidades e
                despertar novos interesses além das telas. Acreditamos que toda
                criança possui potencial para transformar sua realidade quando recebe
                incentivo, acolhimento e oportunidades.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
