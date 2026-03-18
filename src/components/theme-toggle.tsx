"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function Switcher({
  options,
  value,
  onChange,
}: {
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center rounded-lg border border-border bg-muted p-0.5 gap-0.5">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
            value === opt.value
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export function ThemeToggles() {
  const { resolvedTheme, setTheme } = useTheme();
  const [brand, setBrand] = useState<"primary" | "secondary">("primary");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const html = document.documentElement;
    if (brand === "secondary") {
      html.classList.add("secondary");
    } else {
      html.classList.remove("secondary");
    }
  }, [brand, mounted]);

  if (!mounted) return <div className="h-8 w-48" />;

  return (
    <div className="flex items-center gap-2">
      <Switcher
        options={[
          { value: "light", label: "Light" },
          { value: "dark", label: "Dark" },
        ]}
        value={resolvedTheme ?? "light"}
        onChange={setTheme}
      />
      <Switcher
        options={[
          { value: "primary", label: "Green" },
          { value: "secondary", label: "Blue" },
        ]}
        value={brand}
        onChange={(v) => setBrand(v as "primary" | "secondary")}
      />
    </div>
  );
}
