import type { Metadata } from "next";
import { QuoteDisplay } from "./QuoteDisplay";

export const metadata: Metadata = {
  title: "( )",
  robots: { index: false, follow: false },
};

export default function ParentheticalPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh px-6">
      <QuoteDisplay />
      <a
        href="/"
        className="mt-20 font-mono text-[10px] text-text-muted/30 tracking-[0.2em] uppercase hover:text-text-muted transition-colors duration-500"
      >
        ( back )
      </a>
    </div>
  );
}
