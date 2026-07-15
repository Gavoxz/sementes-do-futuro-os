import type { TeamGroup } from "@/types";

export const TEAM_GROUPS: TeamGroup[] = [
  {
    name: "Organização",
    description: "Coordena o direcionamento estratégico e a estrutura do projeto.",
    members: [{ name: "Pedro" }, { name: "Derek" }, { name: "Flavia" }],
  },
  {
    name: "Marketing",
    description: "Constrói a comunicação, a identidade e a presença da organização.",
    members: [
      { name: "Dhiovana" },
      { name: "Fernanda" },
      { name: "Xavier" },
      { name: "Karine" },
      { name: "Lívia" },
      { name: "Gustavo" },
    ],
  },
  {
    name: "Qualidade",
    description: "Garante consistência, cuidado e excelência em cada entrega.",
    members: [{ name: "Lucas" }, { name: "Giovana" }, { name: "Caio" }, { name: "Beatriz" }],
  },
  {
    name: "Eventos",
    description: "Planeja e conduz os encontros, do primeiro ao último minuto.",
    members: [
      { name: "Andressa" },
      { name: "Camilly" },
      { name: "Fernanda Moreira" },
      { name: "Gislainy Fernanda" },
      { name: "Maria Claudia" },
    ],
  },
];
