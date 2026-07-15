import type { LucideIcon } from "lucide-react";

export interface ValueItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ActivityItem {
  title: string;
  icon: LucideIcon;
}

export interface TimelineStep {
  title: string;
  description: string;
}

export interface ProblemItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ImpactStat {
  value: string;
  label: string;
}

export interface TeamMember {
  name: string;
}

export interface TeamGroup {
  name: string;
  description: string;
  members: TeamMember[];
}
