import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton, SkeletonText } from "./skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Skeleton loaders provide animated placeholders during content loading. Support multiple variants and customizable dimensions.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["rect", "circle", "text"],
      description: "Shape variant",
    },
    className: {
      control: { type: "text" },
      description: "Custom Tailwind classes for size and styling",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Shapes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-8 w-56" />
      </div>
      <Skeleton className="h-4 w-48" />
      <Skeleton className="h-6 w-64" />
      <div className="flex items-center gap-4">
        <Skeleton variant="circle" className="h-12 w-12" />
        <Skeleton className="h-4 w-40" />
      </div>
      <Skeleton className="h-24 w-full rounded-lg" />
    </div>
  ),
};

export const TextLines: Story = {
  render: () => (
    <div className="space-y-6">
      <SkeletonText lines={3} />
      <SkeletonText
        lines={5}
        widths={["full", "twoThirds", "half"]}
      />
      <SkeletonText
        lines={4}
        widths={["full", "twoThirds", "half", "third"]}
        lineClassName="h-3"
      />
    </div>
  ),
};

function PlaceCardSkeleton() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4">
      <div className="flex gap-4">
        <Skeleton className="h-16 w-16 rounded-lg" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-3 w-28" />
        </div>
      </div>
    </div>
  );
}

export const CardExample: Story = {
  render: () => <PlaceCardSkeleton />,
};

export const CardGrid: Story = {
  render: () => (
    <div className="grid gap-6 md:grid-cols-3">
      <PlaceCardSkeleton />
      <PlaceCardSkeleton />
      <PlaceCardSkeleton />
    </div>
  ),
};

export const DetailLayout: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-3">
            <Skeleton className="h-6 w-64" />
            <Skeleton className="h-4 w-40" />
            <div className="flex gap-2">
              <Skeleton className="h-5 w-16 rounded-full" />
              <Skeleton className="h-5 w-20 rounded-full" />
              <Skeleton className="h-5 w-14 rounded-full" />
            </div>
          </div>
          <div className="space-y-2 text-right">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-32 rounded-lg" />
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <Skeleton className="h-5 w-32" />
          <SkeletonText
            className="mt-4"
            lines={4}
            widths={["full", "twoThirds", "half", "third"]}
          />
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <Skeleton className="h-5 w-28" />
          <Skeleton className="mt-4 h-24 w-full" />
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <Skeleton className="h-5 w-24" />
          <SkeletonText
            className="mt-4"
            lines={5}
            widths={["full", "twoThirds", "half", "third", "twoThirds"]}
          />
        </div>
      </div>
    </div>
  ),
};
