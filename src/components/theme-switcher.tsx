"use client";

import { useEffect, useState } from "react";

/**
 * Navbar-styled brand theme toggle (primary ↔ secondary).
 *
 * Styled to sit on top of the `bg-primary` header bar. Persists the
 * selected theme in a `theme` cookie and toggles the `.secondary` class
 * on the <html> element. The site's full-featured ThemeToggles (dark
 * mode + brand) lives in `src/components/theme-toggle.tsx`.
 */
export function ThemeSwitcher() {
  const [theme, setTheme] = useState<"primary" | "secondary" | null>(null);

  useEffect(() => {
    const stored = document.cookie.match(/(?:^|;\s*)theme=([^;]*)/)?.[1];
    setTheme(stored === "secondary" ? "secondary" : "primary");
  }, []);

  useEffect(() => {
    if (theme === null) return;
    document.documentElement.classList.toggle("secondary", theme === "secondary");
    document.cookie = `theme=${theme}; path=/; max-age=31536000; SameSite=Lax`;
  }, [theme]);

  return (
    <div className="flex items-center rounded-lg bg-white/10 p-0.5 gap-0.5">
      {(["primary", "secondary"] as const).map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors capitalize ${
            theme === t
              ? "bg-white/20 text-primary-foreground shadow-sm"
              : "text-primary-foreground/60 hover:text-primary-foreground"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
