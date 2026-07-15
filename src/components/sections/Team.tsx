import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { TEAM_GROUPS } from "@/data/team";

export function Team() {
  return (
    <section id="equipe" className="bg-mist py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Quem faz acontecer" title="Nossa equipe" align="center" />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {TEAM_GROUPS.map((group, i) => (
            <FadeIn key={group.name} delay={(i % 2) * 0.08}>
              <div className="flex h-full flex-col gap-6 rounded-xl2 bg-paper p-8 shadow-whisper sm:p-9">
                <div className="flex items-start gap-5">
                  <PlaceholderImage
                    label={`Foto — ${group.name}`}
                    ratio="aspect-square"
                    className="h-16 w-16 shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-ink">{group.name}</h3>
                    <p className="mt-1 text-sm font-light leading-relaxed text-ink-soft">
                      {group.description}
                    </p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.members.map((member) => (
                    <li
                      key={member.name}
                      className="rounded-full bg-mist px-4 py-1.5 text-sm font-medium text-ink-soft"
                    >
                      {member.name}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
