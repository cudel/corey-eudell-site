const PROJECTS = [
  {
    name: "Jeeves-Core",
    description: "Multi-agent orchestration framework. Agents talk through markdown inboxes.",
    tags: ["Python", "TypeScript", "Agents"],
    github: "https://github.com/coreyeudell/jeeves-core",
  },
  {
    name: "Blue Water Log",
    description: "Sailing logbook for offshore passages. Because paper gets wet.",
    tags: ["Java", "React Native", "SQLite"],
    github: "https://github.com/coreyeudell/blue-water-log",
  },
  {
    name: "This Site",
    description: "You're looking at it. Built to test the framework that builds things.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/coreyeudell/corey-eudell-site",
  },
];

function HeroSection() {
  return (
    <section className="flex flex-col justify-end min-h-[80vh] px-6 pb-16 sm:px-12 md:px-24">
      <p className="font-mono text-sm text-muted tracking-wider uppercase mb-4">
        Engineer / Builder / Liveaboard
      </p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
        Corey Eudell
      </h1>
      <p className="text-lg sm:text-xl text-accent max-w-xl leading-relaxed">
        I build things because I want to, not because they need to exist.
        Software, systems, boats &mdash; same impulse, different materials.
      </p>
    </section>
  );
}

function ProjectCard({
  name,
  description,
  tags,
  github,
}: {
  name: string;
  description: string;
  tags: string[];
  github: string;
}) {
  return (
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 border border-border rounded-lg transition-colors hover:border-accent/40 hover:bg-white/[0.02]"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold group-hover:text-white transition-colors">
          {name}
        </h3>
        <svg
          className="w-4 h-4 text-muted group-hover:text-accent transition-colors shrink-0 mt-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 17L17 7M17 7H7M17 7v10"
          />
        </svg>
      </div>
      <p className="text-accent text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono text-muted border border-border rounded-full px-2.5 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

function ProjectsSection() {
  return (
    <section className="px-6 py-24 sm:px-12 md:px-24 border-t border-border">
      <h2 className="font-mono text-sm text-muted tracking-wider uppercase mb-12">
        Projects
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="px-6 py-24 sm:px-12 md:px-24 border-t border-border">
      <h2 className="font-mono text-sm text-muted tracking-wider uppercase mb-12">
        About
      </h2>
      <div className="max-w-2xl space-y-6 text-accent leading-relaxed">
        <p>
          Software engineer who lives on a sailboat. I spend my time building
          agent frameworks, writing TypeScript, and occasionally sailing
          offshore. The boat and the code have more in common than you&apos;d
          think &mdash; both are systems that need to work when nobody&apos;s
          watching.
        </p>
        <p>
          I don&apos;t have a grand thesis about why any of this matters. Camus
          had Sisyphus; I have deploy scripts. One must imagine the developer
          happy.
        </p>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="px-6 py-24 sm:px-12 md:px-24 border-t border-border">
      <h2 className="font-mono text-sm text-muted tracking-wider uppercase mb-12">
        Contact
      </h2>
      <p className="text-accent mb-8 max-w-md">
        Want to talk about systems, sailing, or the absurdity of it all?
      </p>
      <a
        href="mailto:hello@coreyeudell.com"
        className="inline-flex items-center gap-2 text-foreground font-medium border border-border rounded-full px-6 py-3 transition-colors hover:border-accent/40 hover:bg-white/[0.02]"
      >
        Say hello
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 py-12 sm:px-12 md:px-24 border-t border-border">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted">
          &copy; {new Date().getFullYear()} Corey Eudell
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/coreyeudell"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/coreyeudell"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
