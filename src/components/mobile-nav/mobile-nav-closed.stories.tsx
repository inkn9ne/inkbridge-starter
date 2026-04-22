import type { Meta, StoryObj } from "@storybook/react";
import { MobileNavClosedGuestView } from "./mobile-nav-closed";

const meta: Meta<typeof MobileNavClosedGuestView> = {
  title: "Components/Navigation/MobileNavClosed",
  component: MobileNavClosedGuestView,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-93.75">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof MobileNavClosedGuestView>;

/** Default state - unauthenticated */
export const Default: Story = {
  render: () => <MobileNavClosedGuestView />,
};
