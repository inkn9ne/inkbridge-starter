import type { Meta, StoryObj } from "@storybook/react";
import { FaqSection } from "./faq-section";

const meta: Meta<typeof FaqSection> = {
  title: "Feature/Marketing/FaqSection",
  component: FaqSection,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "FAQ accordion section for the marketing page. Use the Default story for the collapsed state and ItemOpen for the expanded state — both are generated as separate Figma frames by the plugin.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof FaqSection>;

/** All items collapsed — the initial state visitors see on the page. */
export const Default: Story = {
  render: () => (
    <div className="max-w-3xl w-full bg-background">
      <FaqSection />
    </div>
  ),
};

/** First FAQ item expanded — shows the open/content state in Figma. */
export const ItemOpen: Story = {
  render: () => (
    <div className="max-w-3xl w-full bg-background">
      <FaqSection defaultValue="item-0" />
    </div>
  ),
};
