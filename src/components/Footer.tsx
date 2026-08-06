import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import logoIcon from "../assets/logo-icon.png";

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const EXPLORE_LINKS = [
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logoIcon} alt="Sytenest" className="h-8 w-8 rounded-md" />
              <span className="text-lg font-bold tracking-tight text-white">Sytenest</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              A small web design studio building fast, affordable websites for local businesses.
            </p>
          </div>

          <div>
            <Link to="/" className="text-sm font-semibold text-white transition-colors hover:text-accent">
              Explore
            </Link>
            <ul className="mt-4 space-y-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Get in touch</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:sytenest@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
                >
                  <Mail size={15} />
                  sytenest@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sytenest/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
                >
                  <InstagramIcon />
                  @sytenest
                </a>
              </li>
              <li className="text-sm text-muted">Replies within 24 hours</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/5 pt-8">
          <p className="text-sm text-muted">© 2026 Sytenest — Sites that speak.</p>
        </div>
      </div>
    </footer>
  );
}
