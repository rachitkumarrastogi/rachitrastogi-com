import { useEffect, useState } from "react";
import { journeyPins } from "../data/journey";
import { ScrollArrow } from "./ScrollArrow";
import { JourneyMapCanvas } from "./JourneyMapCanvas";

function PinGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState<Set<number>>(new Set());

  useEffect(() => {
    setIndex(0);
    setFailed(new Set());
  }, [images]);

  const validImages = images.filter((_, i) => !failed.has(i));

  if (validImages.length === 0) {
    return (
      <div className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-stone-100 to-paper dark:from-slate-850 dark:to-ink">
        <span className="text-xs text-subtle">Photo coming soon</span>
      </div>
    );
  }

  const safeIndex = Math.min(index, validImages.length - 1);
  const current = validImages[safeIndex];
  const originalIndex = images.indexOf(current);

  return (
    <div className="relative">
      <img
        src={current}
        alt={alt}
        className="h-48 w-full object-cover"
        onError={() =>
          setFailed((prev) => new Set(prev).add(originalIndex))
        }
        loading="lazy"
      />
      {validImages.length > 1 && (
        <>
          <button
            type="button"
            onClick={() =>
              setIndex((i) => (i - 1 + validImages.length) % validImages.length)
            }
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-ink/60 px-2 py-1 text-sm text-white backdrop-blur-sm hover:bg-ink/80"
            aria-label="Previous photo"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % validImages.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-ink/60 px-2 py-1 text-sm text-white backdrop-blur-sm hover:bg-ink/80"
            aria-label="Next photo"
          >
            ›
          </button>
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
            {validImages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === safeIndex ? "w-4 bg-gold" : "w-1.5 bg-white/70"
                }`}
                aria-label={`Photo ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function JourneyMap() {
  const [mounted, setMounted] = useState(false);
  const [activeId, setActiveId] = useState(journeyPins[0].id);

  useEffect(() => setMounted(true), []);

  const active = journeyPins.find((p) => p.id === activeId) ?? journeyPins[0];

  return (
    <section id="life" className="border-b border-section py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label mb-3">Life in places</p>
        <h2 className="section-title mb-4">Journey across the map</h2>
        <p className="mb-10 max-w-2xl text-body">
          Real map with pins for each chapter — hover or tap a pin to see photos
          and story. Powered by OpenStreetMap (no API key needed). Add more
          photos in{" "}
          <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm text-gold-dim dark:bg-white/5">
            public/photos/
          </code>
          .
        </p>

        <div className="grid gap-8 lg:grid-cols-[1.45fr_1fr]">
          <div className="card overflow-hidden p-2 md:p-3">
            {mounted ? (
              <JourneyMapCanvas activeId={activeId} onSelect={setActiveId} />
            ) : (
              <div className="flex min-h-[360px] items-center justify-center rounded-xl bg-stone-100 dark:bg-slate-850">
                <span className="text-sm text-subtle">Loading map…</span>
              </div>
            )}
            <p className="mt-3 px-2 text-center text-xs text-subtle">
              UP → Pantnagar → IIIT → Bangalore → Cologne → NYC → New Jersey
            </p>
          </div>

          <article className="card overflow-hidden transition-all">
            <PinGallery images={active.images} alt={active.title} />
            <div className="p-6">
              <p className="text-[10px] font-medium uppercase tracking-widest text-gold">
                {active.period}
              </p>
              <h3 className="mt-1 font-serif text-2xl text-ink dark:text-cream">
                {active.place}
                <span className="text-base font-sans text-muted">
                  , {active.region}
                </span>
              </h3>
              <p className="mt-1 text-sm font-medium text-gold-dim">
                {active.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-body">
                {active.caption}
              </p>
            </div>
          </article>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {journeyPins.map((pin) => (
            <button
              key={pin.id}
              type="button"
              onClick={() => setActiveId(pin.id)}
              className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                activeId === pin.id
                  ? "border-gold/50 bg-gold/10 text-gold"
                  : "border-line text-muted hover:border-gold/30 dark:border-white/10"
              }`}
            >
              {pin.place}
              {pin.images.length > 0 && (
                <span className="ml-1 text-gold">·</span>
              )}
            </button>
          ))}
        </div>
      </div>

      <ScrollArrow href="#work" label="see projects" inline />
    </section>
  );
}
