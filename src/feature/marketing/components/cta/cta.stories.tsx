import type { Meta, StoryObj } from "@storybook/react";
import { CtaSection } from "./cta";

const meta: Meta<typeof CtaSection> = {
  title: "Feature/Marketing/CtaSection",
  component: CtaSection,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;

type Story = StoryObj<typeof CtaSection>;

export const Default: Story = {
  render: () => (
    <div className="max-w-7xl mx-auto">
      <CtaSection />
    </div>
  ),
};
