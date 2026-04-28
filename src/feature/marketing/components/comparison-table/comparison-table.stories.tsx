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
          "Feature comparison table showing Free vs Pro tier capabilities. Used on pricing and features pages.",
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
    name: "Basic Export",
    free: true,
    pro: true,
  },
  {
    name: "Advanced Export",
    free: false,
    pro: true,
  },
  {
    name: "Team Collaboration",
    free: false,
    pro: true,
  },
];

export const Default: Story = {
  render: () => <ComparisonTable features={defaultFeatures} />,
};

export const Minimal: Story = {
  render: () => <ComparisonTable features={minimalFeatures} />,
};
