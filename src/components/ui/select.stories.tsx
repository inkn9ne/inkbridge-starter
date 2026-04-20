import type { Meta, StoryObj } from "@storybook/react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./select";

const meta: Meta<typeof Select> = {
  title: "Components/UI/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Select dropdown. Default shows the closed trigger state. Open shows a static dropdown panel (no portal) for Figma rendering.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

/** Closed trigger — the initial state (SelectContent is portal-rendered, scanner skips it). */
export const Default: Story = {
  render: () => (
    <div className="w-56">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

/** Trigger with a pre-selected value. */
export const WithValue: Story = {
  render: () => (
    <div className="w-56">
      <Select defaultValue="banana" defaultOpen>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};



/** Select with grouped options and a separator. */
export const Grouped: Story = {
  render: () => (
    <div className="w-56">
      <Select defaultOpen>
        <SelectTrigger>
          <SelectValue placeholder="Select timezone" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>North America</SelectLabel>
            <SelectItem value="est">Eastern Time (ET)</SelectItem>
            <SelectItem value="cst">Central Time (CT)</SelectItem>
            <SelectItem value="pst">Pacific Time (PT)</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Europe</SelectLabel>
            <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
            <SelectItem value="cet">Central European Time (CET)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};
