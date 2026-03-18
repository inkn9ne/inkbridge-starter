import type { Meta, StoryObj } from "@storybook/react";
import { GradientShowcase } from "./gradient-showcase";

const meta: Meta<typeof GradientShowcase> = {
  component: GradientShowcase,
};
export default meta;
type Story = StoryObj<typeof GradientShowcase>;

export const LinearGradient: Story = {
  render: () => (
    <div className="w-64 h-32 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600" />
  ),
};

export const RadialGradient: Story = {
  render: () => (
    <div className="w-64 h-32 rounded-2xl bg-[radial-gradient(circle_at_30%_40%,#a855f7,#6366f1)]" />
  ),
};

export const ThreeStopGradient: Story = {
  render: () => (
    <div className="w-64 h-32 rounded-2xl bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500" />
  ),
};

export const GradientBlob: Story = {
  render: () => (
    <div className="relative w-64 h-64 flex items-center justify-center overflow-hidden rounded-3xl bg-slate-950">
      <div
        className="absolute w-48 h-48 bg-gradient-to-br from-violet-500 to-pink-500 opacity-70 blur-2xl"
        style={{ clipPath: "polygon(50% 0%, 80% 20%, 100% 50%, 80% 80%, 50% 100%, 20% 80%, 0% 50%, 20% 20%)" }}
      />
      <p className="relative text-white font-semibold text-sm">Gradient Blob</p>
    </div>
  ),
};
