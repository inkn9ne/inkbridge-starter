import type { Meta, StoryObj } from "@storybook/react";
import { MediaCard } from "./media-card";

const meta: Meta<typeof MediaCard> = {
  title: "Components/MediaCard",
  component: MediaCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A card with a media image, title, and description. Accepts a `className` prop for width and grid placement.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MediaCard>;

export const Default: Story = {
  render: () => <MediaCard />,
};

export const FullWidth: Story = {
  render: () => (
    <div className="mx-auto max-w-2xl">
      <MediaCard
        alt="Mountain landscape"
        title="Mountain View"
        description="A beautiful alpine scene at sunrise."
        className="w-full"
      />
    </div>
  ),
};

export const Grid: Story = {
  render: () => (
    <div className="mx-auto grid max-w-7xl w-full grid-cols-3 gap-6">
      <MediaCard alt="Image 1" title="First" description="Standard card." className="w-full" />
      <MediaCard alt="Image 2" title="Second" description="Standard card." className="w-full" />
      <MediaCard alt="Image 3" title="Third" description="Standard card." className="w-full" />
    </div>
  ),
};

export const ColSpan: Story = {
  render: () => (
    <div className="mx-auto grid max-w-7xl w-full grid-cols-3 gap-6">
      <MediaCard alt="Featured" title="Featured" description="Spans 2 columns." className="col-span-2 w-full" />
      <MediaCard alt="Side card" title="Side" description="1-column card." className="w-full" />
    </div>
  ),
};
