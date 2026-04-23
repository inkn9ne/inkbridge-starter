import type { Meta, StoryObj } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
import { MobileNav } from "./mobile-nav";

const viewports = {
  mobile: {
    name: "Mobile",
    styles: { width: "360px", height: "640px" },
    type: "mobile" as const,
  },
  ...INITIAL_VIEWPORTS,
};

const meta: Meta<typeof MobileNav> = {
  title: "Components/Navigation/MobileNav",
  component: MobileNav,
  parameters: {
    layout: "fullscreen",
    viewport: {
      options: viewports,
      defaultViewport: "mobile",
    },
  },
  globals: {
    viewport: { value: "mobile", isRotated: false },
  },
  decorators: [
    (Story) => (
      <div className="w-full bg-primary px-4 py-2">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof MobileNav>;

/** Default state — trigger (closed). Tap the menu icon to open the drawer. */
export const Default: Story = {
  render: () => <MobileNav />,
};

/** Drawer open — full-screen Sheet with links, theme switcher, and login. */
export const Open: Story = {
  parameters: { layout: "fullscreen" },
  decorators: [(Story) => <Story />],
  render: () => <MobileNav defaultOpen />,
};
