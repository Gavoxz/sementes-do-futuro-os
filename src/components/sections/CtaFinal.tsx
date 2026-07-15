import Image from "next/image";
import { SITE } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-secondary-700 to-accent-700 py-28 sm:py-36">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-paper/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-paper/10 blur-3xl" />

      <Container className="relative flex flex-col items-center gap-7 text-center">
        <FadeIn>
          <span className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-paper/40">
            <Image src="/logo.jpg" alt={`Logo ${SITE.name}`} fill sizes="56px" className="object-cover" />
          </span>
        </FadeIn>

        <FadeIn delay={0.06}>
          <h2 className="max-w-2xl font-sans text-3xl font-light leading-tight text-paper text-balance sm:text-4xl lg:text-5xl">
            Toda transformação começa com uma pequena semente.
          </h2>
        </FadeIn>

        <FadeIn delay={0.12}>
          <p className="max-w-xl font-light leading-relaxed text-paper/85">
            Você pode ser parte do solo que ajuda essa semente a crescer — como
            voluntário, parceiro ou apoiador. Cada gesto planta uma possibilidade a
            mais no futuro de uma criança.
          </p>
        </FadeIn>

        <FadeIn delay={0.18}>
          <a
            href="#contato"
            className="mt-2 inline-block rounded-full bg-paper px-8 py-4 text-sm font-medium text-ink shadow-soft transition-transform hover:scale-[1.03]"
          >
            Conheça nosso propósito
          </a>
        </FadeIn>
      </Container>
    </section>
  );
}
