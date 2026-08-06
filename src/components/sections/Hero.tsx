import { ArrowRight, Check } from "lucide-react";
import Button from "../Button";

const BADGES = ["Live in 7 days", "Flat, upfront quotes", "One-on-one service"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-20 lg:px-10 lg:pb-28 lg:pt-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(55%_60%_at_50%_0%,rgba(10,128,255,0.14),transparent)]"
        aria-hidden
      />
      <div className="mx-auto max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-xs font-medium text-muted">Freelance web design studio</span>
        </div>

        <h1 className="mt-8 text-5xl font-extrabold leading-[1.05] tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
          Websites that win
          <br />
          local customers.
        </h1>

        <p className="mt-6 text-2xl font-semibold text-accent">Sites that speak.</p>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Sytenest builds fast, modern websites for barbershops, gyms and local services — the kind
          of site that turns a Google search into a booked appointment.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button to="/contact" icon={<ArrowRight size={16} />}>
            Get a free quote
          </Button>
          <Button to="/work" variant="secondary">
            See recent work
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {BADGES.map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-sm text-muted">
              <Check size={16} className="text-accent" />
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
