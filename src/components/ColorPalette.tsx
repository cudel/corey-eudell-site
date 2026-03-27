"use client";

import { useState, useCallback } from "react";

const accents = [
  { warm: "#d97706", muted: "#92400e", label: "ochre" },
  { warm: "#0d9488", muted: "#115e59", label: "teal" },
  { warm: "#e11d48", muted: "#9f1239", label: "rose" },
  { warm: "#7c3aed", muted: "#5b21b6", label: "violet" },
  { warm: "#2563eb", muted: "#1e40af", label: "blue" },
];

const swatches = [
  { color: "var(--bg-base)", hex: "#09090b" },
  { color: "var(--bg-raised)", hex: "#0f0f12" },
  { color: "var(--bg-hover)", hex: "#18181b" },
  { color: "var(--border-default)", hex: "#27272a" },
  { color: "var(--text-muted)", hex: "#52525b" },
  { color: "var(--text-secondary)", hex: "#a1a1aa" },
  { color: "var(--text-primary)", hex: "#e4e4e7" },
];

export function ColorPalette() {
  const [accentIndex, setAccentIndex] = useState(0);

  const cycleAccent = useCallback(() => {
    const next = (accentIndex + 1) % accents.length;
    setAccentIndex(next);
    const root = document.documentElement;
    root.style.setProperty("--accent-warm", accents[next].warm);
    root.style.setProperty("--accent-warm-muted", accents[next].muted);
  }, [accentIndex]);

  return (
    <div className="flex flex-wrap justify-center gap-4 pt-4">
      {swatches.map(({ color, hex }) => (
        <div key={hex} className="flex flex-col items-center gap-1.5">
          <div
            className="w-5 h-5 border border-border-subtle"
            style={{ backgroundColor: color }}
          />
          <span className="font-mono text-[8px] text-text-muted/40 tracking-wider">
            {hex}
          </span>
        </div>
      ))}
      <div className="flex flex-col items-center gap-1.5">
        <button
          onClick={cycleAccent}
          className="w-5 h-5 border border-border-subtle cursor-default"
          style={{ backgroundColor: "var(--accent-warm)" }}
          aria-hidden="true"
          tabIndex={-1}
        />
        <span className="font-mono text-[8px] text-text-muted/40 tracking-wider">
          {accents[accentIndex].warm}
        </span>
      </div>
    </div>
  );
}
