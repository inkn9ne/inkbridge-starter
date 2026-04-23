import type { Meta, StoryObj } from "@storybook/react";
import { MediaCard } from "./media-card";

const meta: Meta<typeof MediaCard> = {
  title: "Components/MediaCard",
  component: MediaCard,
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

export const Docs: Story = {
  render: () => (
    <div className="max-w-7xl w-full bg-background space-y-8 p-6">
      <div>
        <p className="text-xs text-gray-500 mb-2">Default (w-64)</p>
        <MediaCard title="Default card" description="Fixed 256 px width." />
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-2">Full width</p>
        <MediaCard title="Full width" description="Stretches to fill its container." className="w-full" />
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-2">Grid — 3 columns</p>
        <div className="grid grid-cols-3 gap-6">
          <MediaCard title="First" description="Standard card." className="w-full" />
          <MediaCard title="Second" description="Standard card." className="w-full" />
          <MediaCard title="Third" description="Standard card." className="w-full" />
        </div>
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-2">Col span — featured + side</p>
        <div className="grid grid-cols-3 gap-6">
          <MediaCard title="Featured" description="Spans 2 columns." className="col-span-2 w-full" />
          <MediaCard title="Side" description="1-column card." className="w-full" />
        </div>
      </div>
    </div>
  ),
};

export const Default: Story = {
  render: () => (
    <MediaCard
      alt="Mountain landscape"
      title="Mountain View"
      description="A beautiful alpine scene at sunrise."
      className="w-full"
    />
  ),
};

export const Grid: Story = {
  render: () => (
    <div className="max-w-7xl w-full bg-background grid grid-cols-3 gap-6">
      <MediaCard alt="Image 1" title="First" description="Standard card." className="w-full" />
      <MediaCard alt="Image 2" title="Second" description="Standard card." className="w-full" />
      <MediaCard alt="Image 3" title="Third" description="Standard card." className="w-full" />
    </div>
  ),
};

export const ColSpan: Story = {
  render: () => (
    <div className="max-w-7xl w-full bg-background grid grid-cols-3 gap-6">
      <MediaCard alt="Featured" title="Featured" description="Spans 2 columns." className="col-span-2 w-full" />
      <MediaCard alt="Side card" title="Side" description="1-column card." className="w-full" />
    </div>
  ),
};
