import { careerRoles } from "../../data/career";

export function CareerSnapshot() {
  return (
    <section id="career" className="border-b border-section py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="section-label mb-3">Professional path</p>
        <h2 className="section-title mb-4">Career highlights</h2>
        <p className="mb-12 max-w-2xl text-body">
          Two decades building and leading platforms at global scale.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {careerRoles.map((role) => (
            <article
              key={role.company}
              className="card p-5 transition-colors hover:border-gold/30"
            >
              <a
                href={role.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-gold transition-colors hover:text-gold-light"
              >
                {role.company}
                <span aria-hidden>↗</span>
              </a>
              <h3 className="mt-1 text-base font-medium text-ink dark:text-cream">
                {role.title}
              </h3>
              <p className="mt-1 text-xs text-subtle">
                {role.period} · {role.location}
              </p>
              <ul className="mt-4 space-y-2">
                {role.highlights.slice(0, 2).map((h) => (
                  <li key={h.slice(0, 40)} className="flex gap-2 text-sm text-body">
                    <span className="shrink-0 text-gold">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
