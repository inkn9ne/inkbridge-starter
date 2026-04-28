import type { Meta, StoryObj } from "@storybook/react";
import { CompatibilityBar } from "./compatibility-bar";

const meta: Meta<typeof CompatibilityBar> = {
  title: "Feature/Marketing/CompatibilityBar",
  component: CompatibilityBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof CompatibilityBar>;

export const Default: Story = {
  render: () => (
    <div className="max-w-7xl w-full bg-background">
      <CompatibilityBar />
    </div>
  ),
};
