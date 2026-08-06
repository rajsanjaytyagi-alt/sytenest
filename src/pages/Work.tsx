import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CtaSection from "../components/sections/CtaSection";
import { useDocumentTitle } from "../lib/useDocumentTitle";
import { workItems, type WorkItem } from "../lib/content";
import { LandingPageMockup, DashboardMockup, ServiceGridMockup } from "../components/mockups/WebsiteMockups";

const MOCKUPS: Record<WorkItem["mockup"], typeof LandingPageMockup> = {
  landing: LandingPageMockup,
  dashboard: DashboardMockup,
  grid: ServiceGridMockup,
};

export default function Work() {
  useDocumentTitle("Work — Sytenest");

  return (
    <>
      <PageHero eyebrow="Work" heading="Sites built to get the phone ringing.">
        Sytenest is a new studio, so these are concept designs rather than live client work —
        a preview of the kind of clean, modern site each type of business would get. Every
        build starts with one question: what should a visitor do within ten seconds of landing
        here?
      </PageHero>

      <section className="border-t border-white/5 px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {workItems.map((item, index) => {
              const Mockup = MOCKUPS[item.mockup];
              return (
                <Reveal key={item.title} delay={index * 100}>
                  <div className="group overflow-hidden rounded-2xl border border-white/10 bg-panel/60 transition-colors hover:border-white/20">
                    <div className="aspect-[4/3] overflow-hidden">
                      <Mockup />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                        {item.category}
                      </p>
                      <h3 className="mt-2 text-lg font-bold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CtaSection
        heading="Want something like this for your business?"
        subtext="Send over your details and I'll put together a quote and a rough timeline."
      />
    </>
  );
}
