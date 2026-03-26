import { projects, type Project } from "@/data/projects";
import { ContactForm } from "@/components/ContactForm";

function HeroSection() {
  return (
    <section className="flex flex-col justify-end min-h-[85vh] px-6 pb-20 sm:px-12 md:px-24 lg:px-32">
      <p className="font-mono text-xs sm:text-sm text-text-muted tracking-[0.2em] uppercase mb-6">
        Engineer &middot; Builder &middot; Liveaboard
      </p>
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8 text-text-primary">
        Corey
        <br />
        Eudell
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-lg leading-relaxed">
        I build things because I want to, not because they need to exist.
        Software, systems, sailboats&mdash;same impulse, different materials.
      </p>
      <div className="mt-10 flex items-center gap-3">
        <span className="inline-block w-8 h-px bg-accent-warm" />
        <span className="font-mono text-xs text-accent-warm tracking-wider">
          Scroll
        </span>
      </div>
    </section>
  );
}

function ProjectCard({ name, description, tags, github }: Project) {
  return (
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col p-6 sm:p-8 border border-border-default rounded-lg bg-bg-base transition-all duration-200 hover:border-border-hover hover:bg-bg-raised"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-text-primary group-hover:text-accent-warm transition-colors duration-200">
          {name}
        </h3>
        <svg
          className="w-4 h-4 text-text-muted group-hover:text-accent-warm transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 mt-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 17L17 7M17 7H7M17 7v10"
          />
        </svg>
      </div>
      <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-mono text-text-muted border border-border-subtle rounded-full px-2.5 py-1 tracking-wide"
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
    <section
      id="projects"
      className="px-6 py-24 sm:px-12 sm:py-32 md:px-24 lg:px-32 border-t border-border-subtle"
    >
      <h2 className="font-mono text-xs text-text-muted tracking-[0.2em] uppercase mb-16">
        Projects
      </h2>
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="px-6 py-24 sm:px-12 sm:py-32 md:px-24 lg:px-32 border-t border-border-subtle"
    >
      <h2 className="font-mono text-xs text-text-muted tracking-[0.2em] uppercase mb-16">
        About
      </h2>
      <div className="max-w-2xl space-y-8">
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
          Software engineer who lives on a sailboat. I spend my time building
          agent frameworks, writing TypeScript, and occasionally sailing
          offshore. The boat and the code have more in common than you&apos;d
          think&mdash;both are systems that need to work when nobody&apos;s
          watching.
        </p>
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
          I don&apos;t have a grand thesis about why any of this matters. Camus
          had Sisyphus; I have deploy scripts.{" "}
          <span className="text-accent-warm">
            One must imagine the developer happy.
          </span>
        </p>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="px-6 py-24 sm:px-12 sm:py-32 md:px-24 lg:px-32 border-t border-border-subtle"
    >
      <h2 className="font-mono text-xs text-text-muted tracking-[0.2em] uppercase mb-16">
        Contact
      </h2>
      <p className="text-text-secondary text-base sm:text-lg mb-10 max-w-md leading-relaxed">
        Want to talk about systems, sailing, or the absurdity of it all?
      </p>
      <ContactForm />
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 py-16 sm:px-12 md:px-24 lg:px-32 border-t border-border-subtle">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Corey Eudell
        </p>
        <div className="flex gap-8">
          <a
            href="https://github.com/cudel"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-muted hover:text-accent-warm transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/coreyeudell"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-muted hover:text-accent-warm transition-colors duration-200"
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
