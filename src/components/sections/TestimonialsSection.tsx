import { Quote } from "lucide-react";
import Eyebrow from "../Eyebrow";
import Reveal from "../Reveal";
import { testimonials } from "../../lib/content";

export default function TestimonialsSection() {
  return (
    <section className="border-t border-white/5 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Eyebrow>Social proof</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            What clients are saying.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.role} delay={index * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-panel/60 p-7">
                <Quote size={22} className="text-accent" fill="currentColor" strokeWidth={0} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{testimonial.quote}</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-sm font-semibold text-white">{testimonial.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
