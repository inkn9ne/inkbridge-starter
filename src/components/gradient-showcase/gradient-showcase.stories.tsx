import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Components/GradientShowcase",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj;

export const LinearGradient: Story = {
  render: () => (
    <div className="flex w-100 flex-col gap-2">
      <div className="h-32 rounded-xl bg-linear-to-r from-primary to-primary/20" />
      <div className="h-32 rounded-xl bg-linear-to-br from-primary via-primary/40 to-transparent" />
      <div className="h-32 rounded-xl bg-linear-to-b from-primary/80 to-background" />
    </div>
  ),
};

export const RadialGradient: Story = {
  render: () => (
    <div className="flex h-48 w-100 items-center justify-center rounded-xl border bg-radial from-primary/50 to-transparent">
      <p className="text-lg font-semibold text-foreground">Radial glow</p>
    </div>
  ),
};

export const ThreeStopGradient: Story = {
  render: () => (
    <div className="flex h-24 w-140 items-center rounded-xl bg-linear-to-r from-primary via-primary/50 to-transparent px-8">
      <p className="text-lg font-semibold text-primary-foreground">
        Three-stop gradient
      </p>
    </div>
  ),
};

export const GradientBlob: Story = {
  render: () => (
    <div className="isolate relative h-64 w-120 overflow-hidden rounded-xl border bg-background">
      <div
        className="absolute -top-20 left-[calc(50%-18rem)] aspect-1155/678 w-xl rotate-30 bg-linear-to-tr from-primary to-primary/30 opacity-30 blur-3xl"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
      />
      <div className="relative z-10 flex h-full items-center justify-center">
        <p className="text-lg font-semibold text-foreground">Gradient blob</p>
      </div>
    </div>
  ),
};
