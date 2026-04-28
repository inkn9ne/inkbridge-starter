import { SiNextdotjs, SiStorybook, SiTailwindcss, SiFigma, SiShadcnui } from "react-icons/si";
import type { IconType } from "react-icons";

const STACK: { Icon: IconType; name: string; color: string; version: string }[] = [
  { Icon: SiNextdotjs,   name: "Next.js",      color: "#000000", version: "15 / 16" },
  { Icon: SiStorybook,   name: "Storybook",    color: "#FF4785", version: "8 / 10"  },
  { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4", version: "v3 / v4" },
  { Icon: SiFigma,       name: "Figma",        color: "#F24E1E", version: ""        },
  { Icon: SiShadcnui,    name: "shadcn/ui",    color: "#000000", version: ""        },
];

export function CompatibilityBar() {
  return (
    <div className="border-y bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest shrink-0">
            Works with
          </span>

          <div className="h-4 w-px bg-border hidden sm:block" />

          {STACK.map(({ Icon, name, color, version }, i) => (
            <div key={i} className="flex items-center gap-2">
              <Icon
                style={{ color }}
                className="size-4 shrink-0 dark:brightness-90"
                aria-hidden
              />
              <span className="text-sm font-medium text-foreground">{name}</span>
              {version && (
                <span className="text-[11px] text-muted-foreground leading-none">{version}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
