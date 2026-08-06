import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

interface PageHeroProps {
  eyebrow: string;
  heading: string;
  children?: ReactNode;
}

export default function PageHero({ eyebrow, heading, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-16 lg:px-10 lg:pt-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(10,128,255,0.12),transparent)]"
        aria-hidden
      />
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
            {heading}
          </h1>
          {children && <div className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
