import type { Meta, StoryObj } from "@storybook/react";
import { MobileNavOpenGuestView } from "./mobile-nav-open";

const meta: Meta<typeof MobileNavOpenGuestView> = {
  title: "Components/Navigation/MobileNavOpen",
  component: MobileNavOpenGuestView,
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

type Story = StoryObj<typeof MobileNavOpenGuestView>;

/** Default state - unauthenticated */
export const Default: Story = {
  render: () => <MobileNavOpenGuestView />,
};
