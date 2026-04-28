import type { Meta, StoryObj } from "@storybook/react";
import { FeaturesSection } from "./features";

const meta: Meta<typeof FeaturesSection> = {
  title: "Feature/Marketing/FeaturesSection",
  component: FeaturesSection,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Marketing features grid for the Figma plugin. Highlights the 6 core capabilities in a 3-column layout. Use this story to test Figma component generation from Storybook.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof FeaturesSection>;

// Fixed width wrapper so the Figma plugin generates the correct desktop layout.
// The scanner reads the wrapper className for Figma frame sizing.
export const Default: Story = {
  render: () => (
    <div className="max-w-7xl w-full bg-background">
      <FeaturesSection />
    </div>
  ),
};
