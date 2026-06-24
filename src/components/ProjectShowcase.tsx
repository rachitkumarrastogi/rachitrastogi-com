import { projects, type Project } from "../data/projects";
import { projectThemes } from "../data/projectThemes";
import { profile } from "../data/profile";
import { ScrollArrow } from "./ScrollArrow";

const statusLabel: Record<string, string> = {
  live: "Live",
  active: "Active",
  "open-source": "Open Source",
};

function liveLabel(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "Live demo";
  }
}

function ProjectPanel({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const theme = projectThemes[project.id];
  const reversed = index % 2 === 1;

  return (
    <div className="cv-auto relative px-6 py-6 md:py-8">
      <div
        className={`panel-shadow mx-auto flex max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br dark:border-white/10 ${theme.gradient} md:flex-row ${
          reversed ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="relative flex flex-1 items-center justify-center p-8 md:p-12">
          <span
            className="pointer-events-none absolute select-none font-serif text-[8rem] leading-none text-black/[0.04] dark:text-white/[0.03] md:text-[10rem]"
            aria-hidden
          >
            {theme.number}
          </span>
          <div className="relative text-center">
            <span className="text-6xl md:text-7xl" role="img" aria-hidden>
              {theme.emoji}
            </span>
            <p
              className={`mt-3 inline-block rounded-full border px-4 py-1 text-xs font-bold uppercase tracking-wider ${theme.accent} ${theme.accentText}`}
            >
              {statusLabel[project.status]}
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center border-t border-line bg-surface/80 p-8 backdrop-blur-sm dark:border-white/5 dark:bg-ink/40 md:border-l md:border-t-0 md:p-12">
          <p
            className={`text-sm font-bold uppercase tracking-[0.15em] ${theme.accentText}`}
          >
            {project.tagline}
          </p>
          <h3 className="mt-2 font-serif text-3xl text-ink dark:text-cream md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-body md:text-lg">
            {project.description}
          </p>

          <ul className="mt-5 space-y-1.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-body">
                <span className={`mt-0.5 font-bold ${theme.accentText}`}>→</span>
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-line bg-paper px-3 py-1 text-xs font-medium text-muted dark:border-white/10 dark:bg-white/5 dark:text-cream/60"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-gold-light dark:text-ink"
            >
              View on GitHub ↗
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-xl border-2 bg-transparent px-5 py-2.5 text-sm font-bold ${theme.accentText} border-current`}
              >
                {liveLabel(project.live)} ↗
              </a>
            )}
          </div>
        </div>
      </div>

      {index < projects.length - 1 && (
        <ScrollArrow
          href={`#project-${projects[index + 1].id}`}
          label="next project"
          inline
        />
      )}
    </div>
  );
}

export function ProjectShowcase() {
  return (
    <section id="work" className="pb-4">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-8 text-center">
        <p className="section-label">Projects & open source</p>
        <h2 className="section-title mt-3">What I build</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-body">
          AI platforms, agent infrastructure, and tools I ship outside the
          day job — each linked to its repository.
        </p>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link-gold mt-4 inline-block text-sm"
        >
          @{profile.githubUsername} on GitHub
        </a>
      </div>

      {projects.map((project, i) => (
        <div key={project.id} id={`project-${project.id}`}>
          <ProjectPanel project={project} index={i} />
        </div>
      ))}
    </section>
  );
}
