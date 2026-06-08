import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "./hero";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof Hero> = {
  title: "Components/Hero",
  component: Hero,

  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },

  decorators: [
    (Story) => (
      <div className="w-full max-w-5xl">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Hero>;

// Inline content for scanner to extract
const HeroContent = () => (
  <div className="mx-auto w-full py-32">
    <div className="text-center gap-2 flex flex-col">
      <h1 className="text-2xl text-primary">Greenhouse Bot</h1>
      <p className="text-3xl leading-tight! mx-auto max-w-xl text-center">
        The fastest way to get rich with{" "}
        <span className="font-bold text-primary">Green</span>
        <span className="font-bold">House</span> and{" "}
        <span className="font-bold">Solana</span>
      </p>

      <div className="mt-6 flex items-center justify-center gap-x-6">
        <Button>Sign Up</Button>
        <a href="about" className="text-sm font-semibold text-gray-900">
          Learn more →
        </a>
      </div>
    </div>
  </div>
);

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-7xl">
      <Hero>
        <HeroContent />
      </Hero>
    </div>
  ),
};
