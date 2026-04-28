import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "components/ui/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: () => <Badge>Default</Badge>,
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="soft">Soft</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="ghost">Ghost</Badge>
    </div>
  ),
};
