"use client";

import { useState, type FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Something went wrong.");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (state === "success") {
    return (
      <div className="border border-accent-warm/30 rounded-lg p-8 max-w-md">
        <p className="text-accent-warm font-medium mb-2">Message sent.</p>
        <p className="text-text-secondary text-sm">
          Thanks for reaching out. I&apos;ll get back to you.
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-4 font-mono text-xs text-text-muted hover:text-text-secondary transition-colors"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block font-mono text-xs text-text-muted tracking-wider uppercase mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          maxLength={200}
          className="w-full bg-bg-raised border border-border-default rounded-lg px-4 py-3 text-text-primary text-sm placeholder:text-text-muted/60 focus:outline-none focus:border-accent-warm transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block font-mono text-xs text-text-muted tracking-wider uppercase mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          maxLength={320}
          className="w-full bg-bg-raised border border-border-default rounded-lg px-4 py-3 text-text-primary text-sm placeholder:text-text-muted/60 focus:outline-none focus:border-accent-warm transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-mono text-xs text-text-muted tracking-wider uppercase mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={5}
          className="w-full bg-bg-raised border border-border-default rounded-lg px-4 py-3 text-text-primary text-sm placeholder:text-text-muted/60 focus:outline-none focus:border-accent-warm transition-colors resize-y"
          placeholder="What's on your mind?"
        />
      </div>

      {state === "error" && (
        <p className="text-sm text-red-400">{error}</p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="group inline-flex items-center gap-3 text-text-primary font-medium border border-border-default rounded-full px-8 py-4 transition-all duration-200 hover:border-accent-warm hover:text-accent-warm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state === "submitting" ? "Sending..." : "Send message"}
        <svg
          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
    </form>
  );
}
