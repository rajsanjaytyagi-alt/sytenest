import { LayoutPanelLeft, Server, Wrench, Check } from "lucide-react";
import Eyebrow from "../Eyebrow";
import Reveal from "../Reveal";
import { services, type Service } from "../../lib/content";

const ICONS: Record<Service["icon"], typeof LayoutPanelLeft> = {
  layout: LayoutPanelLeft,
  server: Server,
  wrench: Wrench,
};

interface ServicesSectionProps {
  eyebrow?: string;
  heading?: string;
  subtext?: string;
  showHeading?: boolean;
}

export default function ServicesSection({
  eyebrow = "Services",
  heading = "Everything you need to be online, done properly.",
  subtext,
  showHeading = true,
}: ServicesSectionProps) {
  return (
    <section className="border-t border-white/5 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {showHeading && (
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
              {heading}
            </h2>
            {subtext && <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{subtext}</p>}
          </Reveal>
        )}

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal key={service.name} delay={index * 100}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-panel/60 p-8 transition-colors hover:border-white/20">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">{service.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
                  <div className="mt-6 border-t border-white/10 pt-6">
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5 text-sm text-muted">
                          <Check size={15} className="shrink-0 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
