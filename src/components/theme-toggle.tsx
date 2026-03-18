"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const THEMES = ["light", "dark", "secondary"] as const;
type Theme = (typeof THEMES)[number];

const ICONS: Record<Theme, React.ReactNode> = {
  light: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
  ),
  dark: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
  ),
  secondary: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
  ),
};

const LABELS: Record<Theme, string> = {
  light: "Light",
  dark: "Dark",
  secondary: "Secondary",
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-8 w-24" />;

  const current = (theme as Theme) ?? "light";
  const next = THEMES[(THEMES.indexOf(current) + 1) % THEMES.length];

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      className="gap-2"
    >
      {ICONS[current]}
      {LABELS[current]}
    </Button>
  );
}
