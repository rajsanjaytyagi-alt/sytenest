export default function Eyebrow({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
      {children}
    </span>
  );
}
