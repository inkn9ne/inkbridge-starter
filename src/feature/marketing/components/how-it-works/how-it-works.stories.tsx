import type { Meta, StoryObj } from "@storybook/react";
import { HowItWorksSection } from "./how-it-works";

const meta: Meta<typeof HowItWorksSection> = {
  title: "Feature/Marketing/HowItWorksSection",
  component: HowItWorksSection,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Two-flow how-it-works section: Storybook→Figma and Figma→GitHub PR, each with 3 numbered steps.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof HowItWorksSection>;

export const Default: Story = {
  render: () => (
    <div className="max-w-7xl w-full bg-background">
      <HowItWorksSection />
    </div>
  ),
};
