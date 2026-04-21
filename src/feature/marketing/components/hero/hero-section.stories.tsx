import type { Meta, StoryObj } from "@storybook/react";
import { HeroSection } from "./hero-section";

const meta: Meta<typeof HeroSection> = {
  title: "Feature/Marketing/HeroSection",
  component: HeroSection,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-7xl">
      <HeroSection />
    </div>
  ),
};
