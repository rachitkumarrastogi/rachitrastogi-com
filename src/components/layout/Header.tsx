import { profile } from "../data/profile";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#life", label: "Life" },
  { href: "#work", label: "Work" },
  { href: "#expertise", label: "Expertise" },
  { href: "#career", label: "Career" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-section bg-paper/90 backdrop-blur-md dark:bg-ink/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#" className="font-serif text-lg text-ink dark:text-cream">
          {profile.shortName}
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-gold dark:text-cream/55"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={profile.resumePath}
            className="rounded-full border border-gold/40 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-gold transition-colors hover:bg-gold/10"
            download
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
