import PageHero from "../components/PageHero";
import ServicesSection from "../components/sections/ServicesSection";
import CtaSection from "../components/sections/CtaSection";
import { useDocumentTitle } from "../lib/useDocumentTitle";

export default function Services() {
  useDocumentTitle("Services — Sytenest");

  return (
    <>
      <PageHero eyebrow="Services" heading="Three ways to get your business online.">
        Pick the piece you need, or hand over the whole thing. Every quote is flat and agreed
        before any work starts.
      </PageHero>
      <ServicesSection showHeading={false} />
      <CtaSection
        heading="Not sure which one you need?"
        subtext="Send a couple of lines about your business and I'll recommend the smallest package that does the job."
      />
    </>
  );
}
