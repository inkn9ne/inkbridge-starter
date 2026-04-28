import { clsx } from "clsx";

const VARIANTS = [
  "Default",
  "Destructive",
  "Outline",
  "Secondary",
  "Ghost",
  "Link",
] as const;
const STATES = ["default", "focus-visible", "disabled", "hover"] as const;
type Variant = (typeof VARIANTS)[number];
type State = (typeof STATES)[number];

const BASE_BTN =
  "text-[9px] font-medium px-2.5 py-[5px] rounded-md whitespace-nowrap inline-flex";

const VARIANT_CLASSES: Record<State, Record<Variant, string>> = {
  default: {
    Default: "bg-primary text-primary-foreground",
    Destructive: "bg-red-600 text-white",
    Outline: "border border-primary text-primary",
    Secondary: "bg-muted text-foreground",
    Ghost: "text-foreground",
    Link: "text-primary",
  },
  "focus-visible": {
    Default:
      "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-1",
    Destructive: "bg-red-600 text-white ring-2 ring-red-500 ring-offset-1",
    Outline:
      "border border-primary text-primary ring-2 ring-primary ring-offset-1",
    Secondary: "bg-muted text-foreground ring-2 ring-border ring-offset-1",
    Ghost: "text-foreground ring-2 ring-border ring-offset-1",
    Link: "text-primary underline ring-2 ring-primary ring-offset-1",
  },
  disabled: {
    Default: "bg-primary/40 text-white",
    Destructive: "bg-red-500/40 text-white",
    Outline: "border border-primary/30 text-primary/30",
    Secondary: "bg-muted text-muted-foreground/50",
    Ghost: "text-foreground/30",
    Link: "text-primary/40",
  },
  hover: {
    Default: "border border-primary text-primary",
    Destructive: "border border-red-600 text-red-600",
    Outline: "bg-primary/10 border border-primary text-primary",
    Secondary: "bg-muted/70 text-foreground",
    Ghost: "bg-muted text-foreground",
    Link: "text-primary underline",
  },
};

function DesignSystemMockup() {
  return (
    <div className="rounded-2xl border border-zinc-200 overflow-hidden shadow-xl">
      {/* Figma-style titlebar */}
      <div className="flex items-center gap-3 px-4 h-10 bg-[#2c2c2c] border-b border-zinc-700">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/60" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
          <div className="h-3 w-3 rounded-full bg-green-500/60" />
        </div>
        <span className="mx-auto text-xs text-zinc-400">
          Design System — Inkbridge
        </span>
      </div>

      {/* Canvas */}
      <div className="bg-[#f0f0f0] p-4 sm:p-8">
        <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-4 sm:p-6 w-full">
          <p className="text-sm font-bold text-zinc-900 mb-1">Button</p>

          {/* Default story */}
          <p className="text-[10px] text-zinc-500 mb-2">Default</p>
          <div className="mb-6">
            <div className="bg-primary text-primary-foreground text-xs font-medium px-4 py-2 rounded-md inline-flex">
              Primary Action
            </div>
          </div>

          {/* State Matrix */}
          <p className="text-[11px] font-bold text-zinc-800 mb-1">
            State Matrix
          </p>
          <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
            <table className="text-[9px] border-collapse mb-5 w-full">
              <thead>
                <tr>
                  <th className="text-left pb-2 pr-3 align-bottom w-16 sm:w-20 sm:pr-5">
                    <span className="block text-[9px] text-zinc-400 font-normal">
                      States
                    </span>
                    <span className="block text-[9px] text-zinc-400 font-normal">
                      Variants
                    </span>
                  </th>
                  {VARIANTS.map((v, i) => (
                    <th
                      key={v}
                      className={clsx(
                        "text-zinc-600 font-semibold pb-2 px-2 sm:px-3 text-center min-w-16 sm:min-w-19",
                        i >= 3 && "hidden lg:table-cell"
                      )}
                    >
                      {v}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {STATES.map((state) => (
                  <tr key={state}>
                    <td className="text-zinc-500 pr-3 sm:pr-5 py-1.5 font-medium align-middle">
                      {state}
                    </td>
                    {VARIANTS.map((variant, i) => (
                      <td
                        key={variant}
                        className={clsx(
                          "px-2 sm:px-3 py-1.5 text-center align-middle",
                          i >= 3 && "hidden lg:table-cell"
                        )}
                      >
                        <div
                          className={clsx(
                            BASE_BTN,
                            VARIANT_CLASSES[state][variant]
                          )}
                        >
                          Primary Action
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Variants strip */}
          <p className="text-[9px] text-zinc-500 mb-2">Variants</p>
          <div className="flex gap-2 flex-wrap mb-4 items-center">
            {(
              [
                [
                  "Default",
                  "bg-primary text-primary-foreground rounded-md px-3 py-1",
                ],
                ["Secondary", "bg-zinc-100 text-zinc-800 rounded-md px-3 py-1"],
                [
                  "Outline",
                  "border border-primary text-primary rounded-md px-3 py-1",
                ],
                ["Ghost", "text-zinc-700 rounded-md px-3 py-1", true],
                ["Destructive", "bg-red-600 text-white rounded-md px-3 py-1"],
                ["Link", "text-primary px-3 py-1", true],
              ] as [string, string, boolean?][]
            ).map(([label, cls, lgOnly]) => (
              <div
                key={label}
                className={clsx(
                  "text-[9px] font-medium",
                  cls,
                  lgOnly && "hidden lg:inline-flex"
                )}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Sizes strip */}
          <p className="text-[9px] text-zinc-500 mb-2">Sizes</p>
          <div className="flex gap-2 items-end">
            <div className="bg-primary text-primary-foreground text-[8px] font-medium px-2 py-0.5 rounded">
              Small
            </div>
            <div className="bg-primary text-primary-foreground text-[9px] font-medium px-3 py-1 rounded-md">
              Default
            </div>
            <div className="bg-primary text-primary-foreground text-[10px] font-medium px-4 py-1.5 rounded-md">
              Large
            </div>
            <div className="bg-primary text-primary-foreground text-[9px] font-medium px-2 py-1 rounded-md">
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PushToCodeMockup() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white shadow-xl overflow-hidden w-full max-w-sm">
      <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-100">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-md bg-zinc-900 flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">&lt;/&gt;</span>
          </div>
          <span className="text-sm font-semibold text-zinc-900">
            Inkbridge
          </span>
        </div>
        <div className="text-zinc-300">✕</div>
      </div>

      <div className="px-5 py-5">
        <p className="text-base font-bold text-zinc-900 mb-4">Push to Code</p>

        <div className="rounded-lg bg-zinc-50 border border-zinc-200 px-4 py-2.5 mb-4 text-xs">
          <span className="text-zinc-500">Target: </span>
          <span className="font-semibold text-zinc-900">
            acme/design-system
          </span>
          <span className="ml-2 text-primary font-medium cursor-pointer">
            Change
          </span>
        </div>

        <div className="mb-3">
          <p className="text-xs text-zinc-600 mb-1.5">Commit Message</p>
          <div className="rounded-md border border-zinc-200 px-3 py-2 text-xs text-zinc-800">
            Update design tokens
          </div>
        </div>

        <div className="mb-5">
          <p className="text-xs text-zinc-600 mb-1.5">
            PR Description <span className="text-zinc-400">(optional)</span>
          </p>
          <div className="rounded-md border border-zinc-200 px-3 py-2 text-xs text-zinc-400 h-16 flex items-start">
            Describe what changed...
          </div>
        </div>

        <button className="w-full rounded-lg bg-primary px-3 py-2.5 text-sm font-semibold text-primary-foreground">
          Create Pull Request
        </button>
      </div>
    </div>
  );
}

function StepBadge({ n }: { n: number }) {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary shrink-0">
      {n}
    </span>
  );
}

export function DemoSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            See it in action
          </span>
          <h2 className="text-3xl font-bold text-foreground">
            A complete Figma design system, generated automatically
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            The plugin reads your Storybook stories and renders every variant,
            state, and size as native Figma frames — then lets you push token
            changes straight back to your repo.
          </p>
        </div>

        {/* Demo 1: Generate Design System */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-5">
            <StepBadge n={1} />
            <div>
              <p className="font-semibold text-foreground">
                Run "Generate Design System Page" from the plugin
              </p>
              <p className="text-sm text-muted-foreground">
                Plugins → Inkbridge → Generate Design System Page
              </p>
            </div>
          </div>
          <DesignSystemMockup />
        </div>

        {/* Demo 2: Push to Code */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <StepBadge n={2} />
            <div>
              <p className="font-semibold text-foreground">
                Push token changes back to your codebase
              </p>
              <p className="text-sm text-muted-foreground">
                Edit colours or spacing in Figma Variables — open a GitHub PR in
                one click
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <ul className="flex flex-col gap-5">
              {[
                {
                  title: "Edit in Figma Variables",
                  desc: "Change a token value directly in Figma — no DTCG JSON editing required.",
                },
                {
                  title: "Preview the diff",
                  desc: "Inkbridge shows exactly which Tailwind config lines will change before anything is committed.",
                },
                {
                  title: "Open a pull request",
                  desc: "One click creates a branch, commits the updated tokens, and opens a PR ready for review.",
                },
              ].map(({ title, desc }) => (
                <li key={title} className="flex gap-4">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {title}
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-center lg:justify-end">
              <PushToCodeMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
