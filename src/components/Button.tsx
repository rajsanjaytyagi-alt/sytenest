import { type ReactNode } from "react";
import { Link } from "react-router-dom";

interface BaseProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
}

interface LinkButtonProps extends BaseProps {
  to: string;
  href?: never;
}

interface AnchorButtonProps extends BaseProps {
  href: string;
  to?: never;
}

type ButtonProps = LinkButtonProps | AnchorButtonProps;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-200 whitespace-nowrap";

const variants = {
  primary:
    "bg-accent text-ink hover:bg-accent-dark shadow-[0_0_0_0_rgba(10,128,255,0.4)] hover:shadow-[0_0_24px_2px_rgba(10,128,255,0.35)]",
  secondary:
    "border border-white/15 text-white hover:bg-white/5 hover:border-white/25",
};

export default function Button({ children, className = "", variant = "primary", icon, to, href }: ButtonProps) {
  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link to={to!} className={classes}>
      {children}
      {icon}
    </Link>
  );
}
