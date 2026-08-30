export interface ProjectTheme {
  emoji: string;
  gradient: string;
  accent: string;
  accentText: string;
  number: string;
}

export const projectThemes: Record<string, ProjectTheme> = {
  "apregistry-prompt": {
    emoji: "🤖",
    gradient: "from-amber-50 via-orange-50/80 to-amber-50/40 dark:from-amber-950/80 dark:via-slate-850 dark:to-ink",
    accent: "border-gold/25 bg-gold/10",
    accentText: "text-gold-dim dark:text-gold",
    number: "01",
  },
  apregistry: {
    emoji: "📦",
    gradient: "from-stone-50 via-slate-50 to-zinc-50 dark:from-slate-800/90 dark:via-slate-850 dark:to-ink",
    accent: "border-gold/25 bg-gold/10",
    accentText: "text-gold-dim dark:text-gold-light",
    number: "02",
  },
  vectorsentry: {
    emoji: "🛡️",
    gradient: "from-zinc-50 via-neutral-50 to-stone-50 dark:from-zinc-900/90 dark:via-slate-850 dark:to-ink",
    accent: "border-gold/25 bg-gold/10",
    accentText: "text-gold-dim dark:text-gold",
    number: "03",
  },
  "unity-mcp": {
    emoji: "🎮",
    gradient: "from-violet-50 via-purple-50/60 to-fuchsia-50/40 dark:from-stone-900/80 dark:via-slate-850 dark:to-ink",
    accent: "border-gold/25 bg-gold/10",
    accentText: "text-gold-dim dark:text-gold-light",
    number: "04",
  },
  careerflow360: {
    emoji: "🎓",
    gradient: "from-yellow-50 via-amber-50/70 to-orange-50/50 dark:from-yellow-950/60 dark:via-slate-850 dark:to-ink",
    accent: "border-gold/25 bg-gold/10",
    accentText: "text-gold-dim dark:text-gold",
    number: "05",
  },
  projecteuler: {
    emoji: "∑",
    gradient: "from-slate-50 via-gray-50 to-neutral-50 dark:from-neutral-900/80 dark:via-slate-850 dark:to-ink",
    accent: "border-gold/25 bg-gold/10",
    accentText: "text-gold-dim dark:text-gold-light",
    number: "06",
  },
};
