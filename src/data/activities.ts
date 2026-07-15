import {
  Presentation,
  Puzzle,
  Hammer,
  Gamepad2,
  Trophy,
  Music,
  Palette,
  PartyPopper,
  MessageCircle,
} from "lucide-react";
import type { ActivityItem } from "@/types";

export const ACTIVITIES: ActivityItem[] = [
  { title: "Palestras educativas", icon: Presentation },
  { title: "Dinâmicas", icon: Puzzle },
  { title: "Oficinas", icon: Hammer },
  { title: "Jogos", icon: Gamepad2 },
  { title: "Esportes", icon: Trophy },
  { title: "Música", icon: Music },
  { title: "Cultura", icon: Palette },
  { title: "Recreação", icon: PartyPopper },
  { title: "Rodas de conversa", icon: MessageCircle },
];
