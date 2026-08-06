import Hero from "../components/sections/Hero";
import ServicesSection from "../components/sections/ServicesSection";
import WhySytenestSection from "../components/sections/WhySytenestSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CtaSection from "../components/sections/CtaSection";
import { useDocumentTitle } from "../lib/useDocumentTitle";

export default function Home() {
  useDocumentTitle("Sytenest — Websites for Small Businesses | Sites that speak.");

  return (
    <>
      <Hero />
      <ServicesSection />
      <WhySytenestSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
