import type { Meta, StoryObj } from "@storybook/react";
import { ComparisonTable, defaultFeatures, type Feature } from "./comparison-table";

const meta: Meta<typeof ComparisonTable> = {
  title: "Feature/Marketing/ComparisonTable",
  component: ComparisonTable,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Feature overview table — everything ships in the free plugin. Used on features pages.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ComparisonTable>;

// Minimal feature set for simpler story variant
const minimalFeatures: Feature[] = [
  {
    name: "Design System Page",
    included: true,
  },
  {
    name: "Component Scanning",
    included: true,
  },
  {
    name: "Structural Component Sync",
    included: false,
  },
];

export const Default: Story = {
  render: () => <ComparisonTable features={defaultFeatures} />,
};

export const Minimal: Story = {
  render: () => <ComparisonTable features={minimalFeatures} />,
};
