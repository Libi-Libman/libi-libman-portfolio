export interface Skill {
  label: string;
  level: "Expert" | "Strong";
  score: number; // out of 10, drives the filled bar count
}

export const skills: Skill[] = [
  { label: "React & TypeScript", level: "Expert", score: 9 },
  { label: "WCAG & ARIA", level: "Expert", score: 9 },
  { label: "Accessibility auditing", level: "Strong", score: 8 },
  { label: "Automated & manual testing", level: "Strong", score: 8 },
  { label: "Mentoring & cross-team collaboration", level: "Strong", score: 7 },
];

export const SKILL_BAR_MAX = 10;
