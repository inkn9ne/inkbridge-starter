import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./separator";

const meta: Meta<typeof Separator> = {
  title: "Components/UI/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-80 flex flex-col gap-4">
      <p className="text-sm font-medium">Above the line</p>
      <Separator />
      <p className="text-sm text-muted-foreground">Below the line</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-8 items-center gap-4">
      <span className="text-sm font-medium">Left</span>
      <Separator orientation="vertical" />
      <span className="text-sm text-muted-foreground">Right</span>
    </div>
  ),
};

export const InNav: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium">Home</span>
      <Separator orientation="vertical" className="h-4" />
      <span className="text-sm text-muted-foreground">Docs</span>
      <Separator orientation="vertical" className="h-4" />
      <span className="text-sm text-muted-foreground">Blog</span>
    </div>
  ),
};
