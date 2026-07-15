import Image from "next/image";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CONTACT, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink text-paper" id="contato">
      <Container className="py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src="/logo.jpg"
                  alt={`Logo ${SITE.name}`}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </span>
              <span className="font-medium tracking-tight">{SITE.name}</span>
            </div>
            <p className="max-w-sm text-sm font-light leading-relaxed text-paper/70">
              {SITE.tagline}
            </p>

            <ul className="flex flex-col gap-3 text-sm text-paper/80">
              <li className="flex items-center gap-3">
                <Mail size={16} aria-hidden="true" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-paper">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} aria-hidden="true" />
                <a href={`tel:${CONTACT.phone}`} className="hover:text-paper">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>{CONTACT.address.full}</span>
              </li>
            </ul>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={CONTACT.social.instagram}
                aria-label="Instagram da Sementes do Futuro"
                className="rounded-full border border-paper/20 p-2.5 transition-colors hover:border-paper/50"
              >
                <Instagram size={16} aria-hidden="true" />
              </a>
              <a
                href={CONTACT.social.facebook}
                aria-label="Facebook da Sementes do Futuro"
                className="rounded-full border border-paper/20 p-2.5 transition-colors hover:border-paper/50"
              >
                <Facebook size={16} aria-hidden="true" />
              </a>
              <a
                href={CONTACT.social.youtube}
                aria-label="YouTube da Sementes do Futuro"
                className="rounded-full border border-paper/20 p-2.5 transition-colors hover:border-paper/50"
              >
                <Youtube size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl ring-1 ring-paper/10">
            <iframe
              title="Mapa com a localização da Sementes do Futuro"
              src={CONTACT.mapsEmbedSrc}
              width="100%"
              height="280"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[280px] w-full grayscale-[20%]"
            />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-paper/10 pt-8 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. Projeto acadêmico.</p>
          <p>Feito com propósito em Jundiaí — SP.</p>
        </div>
      </Container>
    </footer>
  );
}
