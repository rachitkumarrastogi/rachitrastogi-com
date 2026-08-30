import { profile } from "../../data/profile";
import { ScrollArrow } from "../layout/ScrollArrow";

const focusAreas = [
  "Distributed systems",
  "Applied AI & LLM infra",
  "Platform engineering",
  "Engineering leadership",
];

export function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-[60vh] items-center border-b border-section py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-20">
        <div>
          <p className="section-label mb-3">About</p>
          <h2 className="section-title">
            Leader, architect,
            <br />
            <span className="text-gold">always building.</span>
          </h2>
        </div>

        <div className="space-y-5 text-base leading-relaxed text-body md:text-lg">
          {profile.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 30)}>{paragraph}</p>
          ))}

          <div className="flex flex-wrap gap-2 pt-4">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-muted dark:border-white/10 dark:bg-white/5 dark:text-cream/70"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ScrollArrow href="#life" label="life in frames" />
    </section>
  );
}
