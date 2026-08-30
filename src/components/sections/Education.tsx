import { education, publications } from "../data/skills";

export function Education() {
  return (
    <section id="education" className="border-b border-section py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label mb-3">Foundations</p>
        <h2 className="section-title mb-12">Education & research</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {education.map((edu) => (
            <article key={edu.school} className="card p-6">
              <h3 className="font-medium text-ink dark:text-cream">
                {edu.degree}
              </h3>
              {"specialization" in edu && edu.specialization && (
                <p className="mt-1 text-sm text-gold-dim">{edu.specialization}</p>
              )}
              <p className="mt-2 text-sm text-subtle">
                {edu.location}
              </p>
              <a
                href={edu.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-gold mt-3 inline-flex items-center gap-1 text-sm"
              >
                {edu.school} ↗
              </a>
            </article>
          ))}

          {publications.map((pub) => (
            <article
              key={pub.title}
              className="card p-6 md:col-span-2 lg:col-span-1"
            >
              <p className="text-xs uppercase tracking-wider text-gold-dim">
                Publication
              </p>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-sm font-medium text-ink transition-colors hover:text-gold dark:text-cream"
              >
                {pub.title} ↗
              </a>
              <p className="mt-1 text-xs text-subtle">
                {pub.venue} · {pub.year}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
