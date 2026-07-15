import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function Gallery() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Registros" title="Galeria" align="center" />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          <FadeIn className="col-span-2 row-span-2">
            <PlaceholderImage label="Vídeo dos encontros" ratio="aspect-square sm:aspect-auto sm:h-full" variant="video" />
          </FadeIn>
          <FadeIn delay={0.05}>
            <PlaceholderImage label="Foto da atividade" ratio="aspect-square" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <PlaceholderImage label="Foto da equipe" ratio="aspect-square" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <PlaceholderImage label="Foto do encontro" ratio="aspect-square" />
          </FadeIn>
          <FadeIn delay={0.2}>
            <PlaceholderImage label="Foto da oficina" ratio="aspect-square" />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
