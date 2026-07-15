import {
  Users,
  HeartHandshake,
  Sparkles,
  BookOpen,
  Heart,
  Handshake,
  ShieldCheck,
  Sprout,
} from "lucide-react";
import type { ValueItem } from "@/types";

export const VALUES: ValueItem[] = [
  {
    title: "Inclusão",
    description: "Espaço para todas as crianças, sem exceção.",
    icon: Users,
  },
  {
    title: "Respeito",
    description: "Escuta e acolhimento em cada encontro.",
    icon: HeartHandshake,
  },
  {
    title: "Criatividade",
    description: "Estímulo à imaginação e à expressão própria.",
    icon: Sparkles,
  },
  {
    title: "Aprendizado",
    description: "Descoberta contínua além da sala de aula.",
    icon: BookOpen,
  },
  {
    title: "Empatia",
    description: "Compreensão genuína pelo outro.",
    icon: Heart,
  },
  {
    title: "Cooperação",
    description: "Construção coletiva de cada experiência.",
    icon: Handshake,
  },
  {
    title: "Responsabilidade Social",
    description: "Compromisso com o entorno e a comunidade.",
    icon: ShieldCheck,
  },
  {
    title: "Desenvolvimento Humano",
    description: "Crescimento pleno, dentro e fora das telas.",
    icon: Sprout,
  },
];
