import { profile } from "../../data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-section py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-subtle md:flex-row">
        <p>
          © {year} {profile.shortName}. Engineering leader · AI-native builder.
        </p>
        <p className="text-xs">
          I build something every week — and I&apos;m always learning.
        </p>
      </div>
    </footer>
  );
}
