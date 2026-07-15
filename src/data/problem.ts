import {
  Smartphone,
  UserX,
  MessagesSquare,
  Armchair,
  Frown,
  CloudFog,
} from "lucide-react";
import type { ProblemItem } from "@/types";

// Descrições qualitativas de desafios observados no dia a dia — não representam
// dados estatísticos oficiais ou levantamentos formais.
export const PROBLEMS: ProblemItem[] = [
  {
    title: "Excesso de telas",
    description:
      "Horas do dia dedicadas a celulares e videogames, no lugar de vivências reais.",
    icon: Smartphone,
  },
  {
    title: "Isolamento",
    description: "Menos momentos de convívio em família, na escola e na vizinhança.",
    icon: UserX,
  },
  {
    title: "Pouca interação",
    description: "Amizades e brincadeiras coletivas perdendo espaço para o virtual.",
    icon: MessagesSquare,
  },
  {
    title: "Sedentarismo",
    description: "Corpos parados onde antes havia esporte, dança e movimento.",
    icon: Armchair,
  },
  {
    title: "Ansiedade",
    description: "Inquietação crescente diante de comparações e estímulos constantes.",
    icon: Frown,
  },
  {
    title: "Pouca criatividade",
    description: "Imaginação acomodada por respostas prontas e conteúdos passivos.",
    icon: CloudFog,
  },
];
