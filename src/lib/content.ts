export interface Service {
  icon: "layout" | "server" | "wrench";
  name: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: "layout",
    name: "Website design",
    description:
      "A custom-designed, mobile-first site built around one goal: getting visitors to call, book or walk in. Copy guidance included.",
    features: ["Up to 5 pages", "Mobile-first design", "Booking & contact forms", "Basic SEO setup"],
  },
  {
    icon: "server",
    name: "Hosting setup",
    description:
      "Domain, hosting, SSL and email handled end to end. You get a fast, secure site and logins you actually own.",
    features: ["Domain & DNS", "SSL certificate", "Business email", "Analytics install"],
  },
  {
    icon: "wrench",
    name: "Maintenance",
    description:
      "Keep things current without lifting a finger. Content edits, updates and monitoring, handled by the same person who built it.",
    features: ["Monthly content edits", "Security updates", "Uptime monitoring", "Priority support"],
  },
];

export interface Feature {
  icon: "zap" | "wallet" | "message" | "sparkles";
  title: string;
  description: string;
}

export const whySytenestFeatures: Feature[] = [
  {
    icon: "zap",
    title: "Fast turnaround",
    description: "Most sites go live within 7 days of our first call. No drawn-out agency timelines.",
  },
  {
    icon: "wallet",
    title: "Affordable pricing",
    description: "Flat, upfront quotes built for small businesses. No retainers, no surprise invoices.",
  },
  {
    icon: "message",
    title: "One-on-one service",
    description: "You talk directly to the person designing and building your site. Every time.",
  },
  {
    icon: "sparkles",
    title: "Modern design",
    description: "Clean, current and quick to load — on the phone where most of your customers find you.",
  },
];

export interface Testimonial {
  quote: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "The new site's brought in noticeably more walk-ins booking online. Looks like a proper business now — really happy with it.",
    role: "Barbershop owner",
  },
  {
    quote:
      "Process was smooth from start to finish — quick replies, no chasing, and they nailed exactly what we wanted.",
    role: "Gym owner",
  },
  {
    quote:
      "Fair pricing, no back-and-forth headaches, and the site finally reflects the quality of our work. Couldn't be happier.",
    role: "Local services",
  },
];

export interface WorkItem {
  category: string;
  title: string;
  description: string;
  mockup: "landing" | "dashboard" | "grid";
}

export const workItems: WorkItem[] = [
  {
    category: "Barbershop",
    title: "Booking-first landing page",
    description: "A concept layout built around prices, hours and a one-tap call button.",
    mockup: "landing",
  },
  {
    category: "Gym & studio",
    title: "Membership & class dashboard",
    description: "A concept for a class timetable, membership tiers and a free-trial signup flow.",
    mockup: "dashboard",
  },
  {
    category: "Local services",
    title: "Service request page",
    description: "A concept for service areas, a quote request form and clear emergency contact.",
    mockup: "grid",
  },
];
