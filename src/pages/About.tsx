import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import WhySytenestSection from "../components/sections/WhySytenestSection";
import CtaSection from "../components/sections/CtaSection";
import { useDocumentTitle } from "../lib/useDocumentTitle";

const STATS = [
  { value: "7 days", label: "Typical build time" },
  { value: "1:1", label: "Direct with your designer" },
  { value: "100%", label: "Mobile-first builds" },
];

export default function About() {
  useDocumentTitle("About — Sytenest");

  return (
    <>
      <PageHero eyebrow="About" heading="A small studio, fully invested.">
        No account managers, no template factories — just careful design, clear pricing and
        direct contact with the person building your site.
      </PageHero>

      <section className="border-t border-white/5 px-6 py-20 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted">
            Sytenest is a small, dedicated web design studio working with local business owners
            who need a site that earns its keep. No account managers, no template factories —
            just careful design, clear pricing and a build that reflects how good your business
            already is in person.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-extrabold text-accent">{stat.value}</p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <WhySytenestSection />
      <CtaSection />
    </>
  );
}
