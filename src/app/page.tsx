import { projects, type Project } from "@/data/projects";
import { ContactForm } from "@/components/ContactForm";
import { Navigation } from "@/components/Navigation";
import { ColorPalette } from "@/components/ColorPalette";

function SectionHeader({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4 mb-16 sm:mb-20">
      <span className="font-mono text-[11px] text-accent-warm tracking-wider">
        {number}
      </span>
      <span className="h-px flex-1 bg-border-subtle max-w-16" />
      <span className="font-mono text-[11px] text-text-muted tracking-[0.2em] uppercase">
        {label}
      </span>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative flex flex-col justify-end min-h-svh px-6 pb-20 sm:px-12 md:px-24 lg:px-32 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text-muted) 1px, transparent 1px), linear-gradient(90deg, var(--text-muted) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10">
        <p className="font-mono text-[11px] sm:text-xs text-text-muted tracking-[0.25em] uppercase mb-8">
          Engineer &middot; Builder &middot; Liveaboard
        </p>
        <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold tracking-[-0.03em] leading-[0.95] mb-8 text-text-primary">
          Corey
          <br />
          <span className="text-text-secondary">Eudell</span>
        </h1>
        <p className="text-base sm:text-lg text-text-secondary max-w-md leading-relaxed">
          I build things because I want to, not because they need to exist.
          Software, systems, sailboats&mdash;same impulse, different materials.
        </p>
      </div>

      <div className="relative z-10 mt-16 flex items-center gap-3 animate-pulse">
        <span className="inline-block w-8 h-px bg-accent-warm" />
        <span className="font-mono text-[10px] text-accent-warm/70 tracking-[0.2em] uppercase">
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
      className="group flex flex-col p-6 sm:p-8 border border-border-default rounded-none bg-bg-base transition-all duration-200 hover:border-accent-warm/40 hover:bg-bg-raised"
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
            className="text-[10px] font-mono text-text-muted border border-border-subtle px-2.5 py-1 tracking-wider uppercase"
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
      className="px-6 py-24 sm:px-12 sm:py-32 md:px-24 lg:px-32"
    >
      <SectionHeader number="01" label="Projects" />
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}

const skills = [
  { category: "Languages", items: ["Java", "TypeScript", "SQL", "Python", "JavaScript"] },
  { category: "Frontend", items: ["React", "Angular", "Next.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Spring Boot", "Java EE", "Node.js", "REST", "Kafka"] },
  { category: "Data", items: ["PostgreSQL", "Oracle", "MongoDB", "Elasticsearch", "Hibernate"] },
  { category: "Infra", items: ["Docker", "OpenShift", "Jenkins", "Linux", "Git", "CI/CD"] },
  { category: "Other", items: ["Agent Systems", "Microservices", "Agile/Scrum", "Jazz", "Sailing"] },
];

function AboutSection() {
  return (
    <section
      id="about"
      className="px-6 py-24 sm:px-12 sm:py-32 md:px-24 lg:px-32"
    >
      <SectionHeader number="02" label="About" />
      <div className="grid gap-16 lg:grid-cols-[1fr_1px_1fr] lg:gap-12">
        <div className="space-y-8">
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Fifteen years of shipping enterprise software&mdash;defense systems,
            health platforms, microservices at scale. Now I build agent
            frameworks and live on a sailboat. The systems have more in common
            than you&apos;d think&mdash;both need to work when nobody&apos;s
            watching.
          </p>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            I don&apos;t have a grand thesis about why any of this matters. Camus
            had Sisyphus; I have a sailboat and a backlog.{" "}
            <span className="text-accent-warm">
              One must imagine the developer happy.
            </span>
          </p>
        </div>

        <div className="hidden lg:block bg-border-subtle" />

        <div className="space-y-6">
          {skills.map(({ category, items }) => (
            <div key={category}>
              <h3 className="font-mono text-[10px] text-text-muted tracking-[0.2em] uppercase mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-text-secondary border border-border-default px-3 py-1.5 font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="px-6 py-24 sm:px-12 sm:py-32 md:px-24 lg:px-32"
    >
      <SectionHeader number="03" label="Contact" />
      <p className="text-text-secondary text-base sm:text-lg mb-10 max-w-md leading-relaxed">
        Want to talk about systems, sailing, or the{" "}
        <a
          href="/parenthetical"
          className="text-text-secondary hover:text-text-secondary transition-none cursor-text"
          tabIndex={-1}
        >
          absurdity
        </a>{" "}
        of it all?
      </p>
      <ContactForm />
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 py-20 sm:px-12 md:px-24 lg:px-32 border-t border-border-subtle">
      <div className="flex flex-col gap-10 sm:gap-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a
              href="#"
              className="font-mono text-sm font-semibold text-text-primary tracking-wider hover:text-accent-warm transition-colors duration-200"
            >
              CE
            </a>
            <p className="mt-3 text-sm text-text-muted max-w-xs leading-relaxed">
              Building things that don&apos;t need to exist, with unreasonable
              care.
            </p>
          </div>

          <div className="flex gap-8">
            {[
              { label: "Projects", href: "#projects" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="font-mono text-[11px] text-text-muted tracking-[0.15em] uppercase hover:text-text-primary transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between pt-8 border-t border-border-subtle">
          <p className="font-mono text-[11px] text-text-muted">
            &copy; {new Date().getFullYear()} Corey Eudell
          </p>
          <div className="flex gap-8">
            <a
              href="https://github.com/cudel"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-text-muted hover:text-accent-warm transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/coreyeudell"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-text-muted hover:text-accent-warm transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <ColorPalette />

        <p className="font-mono text-[10px] text-text-muted/40 text-center tracking-wider">
          The rock is heavy. Push it anyway.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Navigation />
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
