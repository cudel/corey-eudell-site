"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-base/90 backdrop-blur-md border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 sm:px-12 md:px-24 lg:px-32 h-14">
        <a
          href="#"
          className="font-mono text-sm font-semibold text-text-primary tracking-wider hover:text-accent-warm transition-colors duration-200"
        >
          CE
        </a>
        <div className="flex items-center gap-8">
          {links.map(({ label, href }) => (
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
    </nav>
  );
}
