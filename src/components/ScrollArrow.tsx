interface ScrollArrowProps {
  href: string;
  label?: string;
  inline?: boolean;
  animated?: boolean;
}

export function ScrollArrow({
  href,
  label = "scroll",
  inline = false,
  animated = false,
}: ScrollArrowProps) {
  const base =
    "group flex flex-col items-center gap-2 text-muted/50 transition-colors hover:text-gold dark:text-cream/30";

  return (
    <a
      href={href}
      className={
        inline
          ? `${base} py-8`
          : `${base} absolute bottom-8 left-1/2 -translate-x-1/2`
      }
      aria-label={`Scroll to ${label}`}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.2em]">
        {label}
      </span>
      <svg
        className={`h-5 w-5 ${animated ? "animate-bounce-soft" : ""}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </a>
  );
}
