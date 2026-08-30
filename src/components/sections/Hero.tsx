import { headshotPath } from "../data/journey";
import { profile, socialLinks } from "../data/profile";
import { ScrollArrow } from "./ScrollArrow";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden border-b border-section">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 80% 10%, rgba(166,124,0,0.08), transparent), radial-gradient(ellipse 40% 30% at 10% 90%, rgba(0,0,0,0.02), transparent)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_280px] md:items-center lg:grid-cols-[1.2fr_320px]">
        <div className="animate-fade-up">
          <p className="section-label mb-4">{profile.tagline}</p>
          <h1 className="font-serif text-4xl leading-[1.08] text-ink dark:text-cream md:text-5xl lg:text-6xl">
            {profile.shortName.split(" ")[0]}
            <br />
            <span className="text-gold">
              {profile.shortName.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <p className="mt-6 text-xl font-medium text-ink/90 dark:text-cream/90 md:text-2xl">
            {profile.title}
          </p>
          <p className="mt-2 text-sm text-gold-dim md:text-base">
            {profile.subtitle}
          </p>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-body">
            {profile.summary[0]}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#work" className="btn-primary">
              See my work
            </a>
            <a href={profile.resumePath} className="btn-secondary" download>
              Resume
            </a>
            <SocialLinks links={socialLinks} size="sm" />
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-2xl text-gold md:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-subtle">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-fade-up mx-auto w-full max-w-xs md:max-w-none">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-gold/15 to-transparent blur-xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gold/20 bg-surface dark:bg-slate-850">
              <img
                src={headshotPath}
                alt={profile.shortName}
                className="h-full w-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling;
                  if (fallback) (fallback as HTMLElement).style.display = "flex";
                }}
              />
              <div
                className="hidden h-full w-full flex-col items-center justify-center bg-gradient-to-br from-stone-100 to-paper p-6 text-center dark:from-slate-850 dark:to-ink"
                aria-hidden
              >
                <span className="font-serif text-6xl text-gold/30">R</span>
                <p className="mt-4 text-xs uppercase tracking-widest text-subtle">
                  Add photo at
                  <br />
                  public/photos/headshot/headshot.jpg
                </p>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-subtle">
              {profile.location}
            </p>
          </div>
        </div>
      </div>

      <ScrollArrow href="#about" label="about me" animated />
    </section>
  );
}
