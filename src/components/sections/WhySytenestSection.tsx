import { Zap, Wallet, MessageSquare, Sparkles } from "lucide-react";
import Eyebrow from "../Eyebrow";
import Reveal from "../Reveal";
import { whySytenestFeatures, type Feature } from "../../lib/content";

const ICONS: Record<Feature["icon"], typeof Zap> = {
  zap: Zap,
  wallet: Wallet,
  message: MessageSquare,
  sparkles: Sparkles,
};

export default function WhySytenestSection() {
  return (
    <section className="border-t border-white/5 px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <Reveal>
          <Eyebrow>Why Sytenest</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            Big-agency quality. Small-studio attention.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            You shouldn&apos;t need a marketing budget to look credible online. Sytenest keeps the
            process simple, the price honest and the result sharp.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {whySytenestFeatures.map((feature, index) => {
            const Icon = ICONS[feature.icon];
            return (
              <Reveal key={feature.title} delay={index * 80}>
                <div className="h-full rounded-2xl border border-white/10 bg-panel/40 p-6">
                  <Icon size={22} strokeWidth={1.75} className="text-accent" />
                  <h3 className="mt-4 text-base font-bold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
