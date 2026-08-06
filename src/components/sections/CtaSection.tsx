import { ArrowRight, Mail } from "lucide-react";
import Reveal from "../Reveal";
import Button from "../Button";

interface CtaSectionProps {
  heading?: string;
  subtext?: string;
}

export default function CtaSection({
  heading = "Ready for a site that actually brings in customers?",
  subtext = "Tell me about your business and get a straight answer on price and timeline — usually within 24 hours.",
}: CtaSectionProps) {
  return (
    <section className="border-t border-white/5 bg-navy-light px-6 py-24 lg:px-10">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">{subtext}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button to="/contact" icon={<ArrowRight size={16} />}>
            Get a free quote
          </Button>
          <Button href="mailto:sytenest@gmail.com" variant="secondary" icon={<Mail size={16} />}>
            Email sytenest@gmail.com
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
