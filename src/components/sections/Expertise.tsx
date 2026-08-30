import { leadershipPillars } from "../../data/career";
import { skillGroups } from "../../data/skills";

export function Expertise() {
  return (
    <section id="expertise" className="border-y border-section py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label mb-3">Depth & leadership</p>
        <h2 className="section-title mb-14">How I operate</h2>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            {leadershipPillars.map((pillar, i) => (
              <article
                key={pillar.title}
                className="card p-5 transition-colors hover:border-gold/30"
              >
                <span className="font-serif text-2xl text-gold/20 dark:text-gold/25">
                  0{i + 1}
                </span>
                <h3 className="mt-1 font-medium text-ink dark:text-cream">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>

          <div className="space-y-4">
            {skillGroups.map((group) => (
              <article key={group.category} className="card p-5">
                <h3 className="text-xs font-medium uppercase tracking-wider text-gold">
                  {group.category}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {group.skills.join(" · ")}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
