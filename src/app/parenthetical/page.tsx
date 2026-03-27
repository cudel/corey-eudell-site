import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "( )",
  robots: { index: false, follow: false },
};

const quotes = [
  {
    text: "In the end, we are self-perceiving, self-inventing, locked-in mirages that are little combats of self-reference.",
    source: "I Am a Strange Loop",
  },
  {
    text: "It turns out that an eerie type of chaos can lurk just behind a facade of order — and yet, deep inside the chaos lurks an even eerier type of order.",
    source: "Metamagical Themas",
  },
  {
    text: "Hofstadter's Law: It always takes longer than you expect, even when you take into account Hofstadter's Law.",
    source: "Gödel, Escher, Bach",
  },
  {
    text: "The 'I' is not a thing, it is a pattern — a strange loop.",
    source: "I Am a Strange Loop",
  },
  {
    text: "What is a self, and how can a self come out of stuff that is as selfless as a stone or a puddle?",
    source: "Gödel, Escher, Bach",
  },
  {
    text: "Sometimes it seems as though each new step towards AI, rather than producing something which everyone agrees is real intelligence, merely reveals what real intelligence is not.",
    source: "Gödel, Escher, Bach",
  },
  {
    text: "You make yourself and then you forget you made yourself.",
    source: "I Am a Strange Loop",
  },
  {
    text: "We are all egocentric, and we all have the illusion that we are the center of the universe. But we are not. We are just a small part of a vast, indifferent cosmos.",
    source: "I Am a Strange Loop",
  },
  {
    text: "The world is a construct of our sensations, perceptions, memories. It is convenient to regard it as existing objectively on its own. But it certainly does not become manifest by its mere existence.",
    source: "Gödel, Escher, Bach",
  },
  {
    text: "Meaning lies as much in the mind of the reader as in the Haiku.",
    source: "Gödel, Escher, Bach",
  },
  {
    text: "One of the most important things about strange loops is that they blur the line between levels.",
    source: "I Am a Strange Loop",
  },
  {
    text: "There's always another level above you, and another level below you. That's the nature of strange loops.",
    source: "I Am a Strange Loop",
  },
  {
    text: "I am the subject of this sentence.",
    source: "self-reference",
  },
  {
    text: "This sentence contradicts itself — no actually it doesn't.",
    source: "self-reference",
  },
  {
    text: "If this sentence were in Chinese, it would say something else.",
    source: "self-reference",
  },
  {
    text: "This sentence no verb.",
    source: "self-reference",
  },
  {
    text: "'Yields falsehood when preceded by its quotation' yields falsehood when preceded by its quotation.",
    source: "Quine's paradox, via Gödel, Escher, Bach",
  },
];

export const dynamic = "force-dynamic";

export default function ParentheticalPage() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="flex flex-col items-center justify-center min-h-svh px-6">
      <div className="max-w-lg text-center">
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed italic">
          &ldquo;{quote.text}&rdquo;
        </p>
        <p className="mt-6 font-mono text-[11px] text-text-muted tracking-wider">
          &mdash;{" "}
          {quote.source === "self-reference"
            ? "( self-reference )"
            : `Douglas Hofstadter, ${quote.source}`}
        </p>
      </div>

      <a
        href="/"
        className="mt-20 font-mono text-[10px] text-text-muted/30 tracking-[0.2em] uppercase hover:text-text-muted transition-colors duration-500"
      >
        ( back )
      </a>
    </div>
  );
}
