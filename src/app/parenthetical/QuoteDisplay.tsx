"use client";

import { useState, useEffect, useCallback } from "react";

const quotes = [
  {
    text: "In the end, we are self-perceiving, self-inventing, locked-in mirages that are little combats of self-reference.",
    source: "I Am a Strange Loop",
  },
  {
    text: "It turns out that an eerie type of chaos can lurk just behind a facade of order \u2014 and yet, deep inside the chaos lurks an even eerier type of order.",
    source: "Metamagical Themas",
  },
  {
    text: "Hofstadter\u2019s Law: It always takes longer than you expect, even when you take into account Hofstadter\u2019s Law.",
    source: "G\u00f6del, Escher, Bach",
  },
  {
    text: "The \u2018I\u2019 is not a thing, it is a pattern \u2014 a strange loop.",
    source: "I Am a Strange Loop",
  },
  {
    text: "What is a self, and how can a self come out of stuff that is as selfless as a stone or a puddle?",
    source: "G\u00f6del, Escher, Bach",
  },
  {
    text: "Sometimes it seems as though each new step towards AI, rather than producing something which everyone agrees is real intelligence, merely reveals what real intelligence is not.",
    source: "G\u00f6del, Escher, Bach",
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
    source: "G\u00f6del, Escher, Bach",
  },
  {
    text: "Meaning lies as much in the mind of the reader as in the Haiku.",
    source: "G\u00f6del, Escher, Bach",
  },
  {
    text: "One of the most important things about strange loops is that they blur the line between levels.",
    source: "I Am a Strange Loop",
  },
  {
    text: "There\u2019s always another level above you, and another level below you. That\u2019s the nature of strange loops.",
    source: "I Am a Strange Loop",
  },
  {
    text: "\u2018Yields falsehood when preceded by its quotation\u2019 yields falsehood when preceded by its quotation.",
    source: "Quine\u2019s paradox, via G\u00f6del, Escher, Bach",
  },
];

function randomInterval() {
  return (90 + Math.floor(Math.random() * 1710)) * 1000;
}

function pickRandom(currentIndex: number): number {
  if (quotes.length <= 1) return 0;
  let next: number;
  do {
    next = Math.floor(Math.random() * quotes.length);
  } while (next === currentIndex);
  return next;
}

export function QuoteDisplay() {
  const [index, setIndex] = useState(() =>
    Math.floor(Math.random() * quotes.length)
  );
  const [fading, setFading] = useState(false);

  const rotate = useCallback(() => {
    setFading(true);
    setTimeout(() => {
      setIndex((prev) => pickRandom(prev));
      setFading(false);
    }, 600);
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    function scheduleNext() {
      timeout = setTimeout(() => {
        rotate();
        scheduleNext();
      }, randomInterval());
    }

    scheduleNext();
    return () => clearTimeout(timeout);
  }, [rotate]);

  const quote = quotes[index];

  return (
    <div
      className={`max-w-lg text-center transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <p className="text-text-secondary text-base sm:text-lg leading-relaxed italic">
        &ldquo;{quote.text}&rdquo;
      </p>
      <p className="mt-6 font-mono text-[11px] text-text-muted tracking-wider">
        &mdash; Douglas Hofstadter, {quote.source}
      </p>
    </div>
  );
}
