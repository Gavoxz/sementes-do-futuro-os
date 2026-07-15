import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { FadeIn } from "@/components/ui/FadeIn";

export function About() {
  return (
    <section id="sobre" className="bg-paper py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Nossa origem" title="Quem somos" />
          </div>

          <div className="flex flex-col gap-10 lg:col-span-7">
            <FadeIn>
              <div className="flex flex-col gap-5 text-base sm:text-lg font-light leading-relaxed text-ink-soft">
                <p>
                  O nome <span className="font-medium text-ink">Sementes do Futuro</span>{" "}
                  representa a ideia de plantar oportunidades no presente para formar
                  um futuro melhor. A organização nasceu com o propósito de incentivar
                  crianças e adolescentes a descobrirem novos interesses além das
                  telas.
                </p>
                <p>
                  Percebemos que muitos jovens passavam horas diante do celular, do
                  computador ou do videogame, reduzindo o tempo dedicado ao convívio
                  social, ao esporte, à criatividade e às experiências que marcam a
                  infância.
                </p>
                <p className="text-ink font-medium">
                  Todo futuro brilhante nasce de uma memória feliz.
                </p>
                <p>
                  Acreditamos que cada jovem é um solo fértil. Ao oferecer acolhimento,
                  experiências e incentivo, plantamos sementes capazes de transformar
                  vidas.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <PlaceholderImage label="Foto das atividades" ratio="aspect-square" />
                <PlaceholderImage label="Foto da equipe" ratio="aspect-square" className="mt-8" />
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
