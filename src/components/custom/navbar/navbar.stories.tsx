import type { Meta, StoryObj } from "@storybook/react";
import { NavBarGuestView } from "./navbar";

/**
 * NavBar - Desktop navigation header
 */

const meta: Meta<typeof NavBarGuestView> = {
  title: "Components/Navigation/NavBar",
  component: NavBarGuestView,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <header className="bg-primary w-full px-4 h-14 flex items-center">
        <Story />
      </header>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof NavBarGuestView>;

/** Default state - unauthenticated user */
export const Default: Story = {
  render: () => <NavBarGuestView />,
};
