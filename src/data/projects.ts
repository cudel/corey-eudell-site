export interface Project {
  name: string;
  description: string;
  tags: string[];
  github: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "Jeeves-Core",
    description:
      "Multi-agent orchestration framework. Agents talk through markdown inboxes. A daemon watches, dispatches, and pretends everything is fine.",
    tags: ["Python", "TypeScript", "Agents"],
    github: "https://github.com/coreyeudell/jeeves-core",
    featured: true,
  },
  {
    name: "Blue Water Log",
    description:
      "Sailing logbook for offshore passages. Because paper gets wet and GPS tracks don't capture the 3am watch.",
    tags: ["Java", "React Native", "SQLite"],
    github: "https://github.com/coreyeudell/blue-water-log",
    featured: true,
  },
  {
    name: "This Site",
    description:
      "You're looking at it. Built to test the framework that builds things. The snake eating its own tail.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/coreyeudell/corey-eudell-site",
    featured: true,
  },
];
