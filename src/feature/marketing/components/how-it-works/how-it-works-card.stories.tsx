import type { Meta, StoryObj } from "@storybook/react";
import { HowItWorksCard } from "./how-it-works-card";

const meta: Meta<typeof HowItWorksCard> = {
  title: "Feature/Marketing/HowItWorksCard",
  component: HowItWorksCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof HowItWorksCard>;

export const Default: Story = {
  render: () => (
    <div className="max-w-lg w-full">
      <HowItWorksCard
        eyebrow="Storybook → Figma"
        title="Generate Figma frames from your components"
        description="Scan your Tailwind React components and render them as native Figma frames — automatically."
        steps={[
          {
            n: "1",
            title: "Install the Figma plugin",
            description: "Add Inkbridge to your Figma workspace in one click.",
          },
          {
            n: "2",
            title: "Connect your repository",
            description: "Link your GitHub repo so the plugin knows where your components live.",
          },
          {
            n: "3",
            title: "Scan your Storybook stories",
            description:
              "The plugin reads your stories and generates pixel-perfect Figma frames from your Tailwind classes.",
          },
        ]}
      />
    </div>
  ),
};
