import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "./sonner";

const meta: Meta<typeof Toaster> = {
  title: "Components/UI/Toast",
  component: Toaster,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Toaster>;

/** Static toast variants — no SVG, no portal, no onclick. Pure layout for Figma scanning. */
export const ToastPanel: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-80">
      <div className="bg-background text-foreground flex items-center gap-3 rounded-lg border px-4 py-3 shadow-lg text-sm">
        <span className="font-medium">Default notification.</span>
      </div>
      <div className="bg-background text-foreground flex items-center gap-3 rounded-lg border px-4 py-3 shadow-lg text-sm">
        <span className="size-2 rounded-full bg-green-500 shrink-0" />
        <span className="font-medium text-green-700">Changes saved successfully.</span>
      </div>
      <div className="bg-background text-foreground flex items-center gap-3 rounded-lg border px-4 py-3 shadow-lg text-sm">
        <span className="size-2 rounded-full bg-blue-500 shrink-0" />
        <span className="font-medium text-blue-700">Here&apos;s some information.</span>
      </div>
      <div className="bg-background text-foreground flex items-center gap-3 rounded-lg border px-4 py-3 shadow-lg text-sm">
        <span className="size-2 rounded-full bg-yellow-500 shrink-0" />
        <span className="font-medium text-yellow-700">Proceed with caution.</span>
      </div>
      <div className="bg-background text-foreground flex items-center gap-3 rounded-lg border px-4 py-3 shadow-lg text-sm">
        <span className="size-2 rounded-full bg-red-500 shrink-0" />
        <span className="font-medium text-red-700">Something went wrong.</span>
      </div>
    </div>
  ),
};
