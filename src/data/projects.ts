export type ProjectStatus = "Shipped" | "In progress";

export interface Project {
  title: string;
  description: string;
  tags: string;
  status: ProjectStatus;
  href: string;
}

// Placeholder project set — swap in real projects, screenshots and links
// whenever they're ready.
export const projects: Project[] = [
  {
    title: "Meridian Banking auth flow",
    description:
      "Screen-reader completion of two-factor sign-in went from 41% to 96%.",
    tags: "REACT · NVDA",
    status: "Shipped",
    href: "#",
  },
  {
    title: "Orchard Design System",
    description:
      "42 components with keyboard specs and axe tests wired into CI.",
    tags: "TYPESCRIPT · STORYBOOK",
    status: "Shipped",
    href: "#",
  },
  {
    title: "Civic Transit planner",
    description: "A full non-visual equivalent for a map-first trip planner.",
    tags: "SVELTE · MAPLIBRE",
    status: "Shipped",
    href: "#",
  },
  {
    title: "Pixel Farm game UI",
    description: "A farming sim playable start to finish from the keyboard.",
    tags: "CANVAS · GAME A11Y",
    status: "In progress",
    href: "#",
  },
  {
    title: "Lantern audit toolkit",
    description:
      "Open-source CLI that turns axe output into a prioritised remediation plan.",
    tags: "NODE · OSS",
    status: "Shipped",
    href: "#",
  },
];
