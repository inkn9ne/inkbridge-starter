import clsx from "clsx";
import { SiReact, SiNextdotjs, SiStorybook, SiTailwindcss, SiFigma, SiShadcnui } from "react-icons/si";
import type { IconType } from "react-icons";

// `brandClass` uses arbitrary Tailwind color utilities (text-[#hex]) rather than
// an inline `style={{ color }}` so the Figma scanner can resolve them as classes.
const STACK: { Icon: IconType; name: string; brandClass: string; version: string }[] = [
  { Icon: SiReact,       name: "React",        brandClass: "text-[#61DAFB]", version: "18+" },
  { Icon: SiNextdotjs,   name: "Next.js",      brandClass: "text-[#000000]", version: "14+" },
  { Icon: SiStorybook,   name: "Storybook",    brandClass: "text-[#FF4785]", version: "8+"  },
  { Icon: SiTailwindcss, name: "Tailwind CSS", brandClass: "text-[#06B6D4]", version: "v4"  },
  { Icon: SiShadcnui,    name: "shadcn/ui",    brandClass: "text-[#000000]", version: ""        },
  { Icon: SiFigma,       name: "Figma",        brandClass: "text-[#F24E1E]", version: ""        },
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

          {STACK.map(({ Icon, name, brandClass, version }, i) => (
            <div key={i} className="flex items-center gap-2">
              <Icon
                className={clsx("size-4 shrink-0 dark:brightness-90", brandClass)}
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
