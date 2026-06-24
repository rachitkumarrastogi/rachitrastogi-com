const STORAGE_KEY = "rachitrastogi-theme";

export type Theme = "light" | "dark";

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light";
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem(STORAGE_KEY, theme);
}

export function initTheme() {
  applyTheme(getStoredTheme());
}

export function toggleTheme(): Theme {
  const next = getStoredTheme() === "dark" ? "light" : "dark";
  applyTheme(next);
  return next;
}
