import { useState, type FormEvent } from "react";
import { Mail, Clock, MapPin, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { useDocumentTitle } from "../lib/useDocumentTitle";

interface FormValues {
  name: string;
  email: string;
  business: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

const INFO_ITEMS = [
  { icon: Mail, label: "sytenest@gmail.com", href: "mailto:sytenest@gmail.com" },
  { icon: Clock, label: "Replies within 24 hours" },
  { icon: MapPin, label: "Working with local businesses, remotely" },
];

export default function Contact() {
  useDocumentTitle("Contact — Sytenest");

  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    business: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  function validate(current: FormValues): FormErrors {
    const next: FormErrors = {};
    if (!current.name.trim()) next.name = "Please enter your name.";
    if (!current.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!EMAIL_PATTERN.test(current.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!current.message.trim()) next.message = "Let us know what you need.";
    return next;
  }

  function handleChange<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    if (!FORMSPREE_ENDPOINT) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          business: values.business,
          message: values.message,
        }),
      });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <PageHero eyebrow="Contact" heading="Get a free quote.">
        Tell me about your business and what you need. You&apos;ll get a straight answer on
        price and timeline — usually within 24 hours, always with no obligation.
      </PageHero>

      <section className="border-t border-white/5 px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <Reveal>
            <ul className="space-y-5">
              {INFO_ITEMS.map((item) => (
                <li key={item.label} className="flex items-center gap-3 text-sm text-muted">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <item.icon size={16} />
                  </span>
                  {item.href ? (
                    <a href={item.href} className="transition-colors hover:text-white">
                      {item.label}
                    </a>
                  ) : (
                    item.label
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-white/10 bg-panel/60 p-6 sm:p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle2 size={40} className="text-accent" />
                  <h3 className="mt-4 text-xl font-bold text-white">Enquiry sent.</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                    Thanks for reaching out — I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form noValidate onSubmit={handleSubmit} className="space-y-6">
                  {status === "error" && (
                    <div className="flex items-start gap-2.5 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                      <AlertCircle size={16} className="mt-0.5 shrink-0" />
                      <span>
                        Something went wrong sending that — please try again, or email directly at{" "}
                        <a href="mailto:sytenest@gmail.com" className="underline underline-offset-2">
                          sytenest@gmail.com
                        </a>
                        .
                      </span>
                    </div>
                  )}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-white">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Jordan Reyes"
                        value={values.name}
                        onChange={(event) => handleChange("name", event.target.value)}
                        className="mt-2 w-full rounded-lg border border-white/10 bg-navy px-4 py-3 text-sm text-white placeholder:text-muted/60 outline-none focus:border-accent"
                      />
                      {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-white">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@business.com"
                        value={values.email}
                        onChange={(event) => handleChange("email", event.target.value)}
                        className="mt-2 w-full rounded-lg border border-white/10 bg-navy px-4 py-3 text-sm text-white placeholder:text-muted/60 outline-none focus:border-accent"
                      />
                      {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="business" className="text-sm font-medium text-white">
                      Business name <span className="text-muted">(optional)</span>
                    </label>
                    <input
                      id="business"
                      type="text"
                      placeholder="Joe's Barbershop"
                      value={values.business}
                      onChange={(event) => handleChange("business", event.target.value)}
                      className="mt-2 w-full rounded-lg border border-white/10 bg-navy px-4 py-3 text-sm text-white placeholder:text-muted/60 outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-white">
                      What do you need?
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="A new site for my barbershop with online booking..."
                      value={values.message}
                      onChange={(event) => handleChange("message", event.target.value)}
                      className="mt-2 w-full resize-y rounded-lg border border-white/10 bg-navy px-4 py-3 text-sm text-white placeholder:text-muted/60 outline-none focus:border-accent"
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "submitting" ? "Sending..." : "Send enquiry"}
                    {status !== "submitting" && <ArrowRight size={16} />}
                  </button>

                  <p className="text-center text-xs text-muted">
                    Prefer email? Write directly to{" "}
                    <a href="mailto:sytenest@gmail.com" className="text-white underline underline-offset-2">
                      sytenest@gmail.com
                    </a>
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
