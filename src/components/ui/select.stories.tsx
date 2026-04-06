import type { Meta, StoryObj } from "@storybook/react";
import { Check, ChevronDown } from "lucide-react";
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
  tags: ["autodocs"],
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
      <Select defaultValue="banana">
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

/** Static open dropdown panel — rendered as plain divs for Figma. */
export const OpenPanel: Story = {
  render: () => (
    <div className="w-56">
      {/* Trigger */}
      <div className="flex h-10 w-full items-center justify-between rounded-md border border-green-600 bg-white px-3 py-2 text-sm">
        <span className="text-gray-400">Select a fruit</span>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </div>
      {/* Dropdown panel */}
      <div className="mt-1 rounded-md border border-green-600/30 bg-white text-gray-900 shadow-md">
        <div className="p-1">
          <div className="px-2 py-1.5 text-sm font-semibold text-gray-700">
            Fruits
          </div>
          {[
            { value: "apple", label: "Apple", selected: false },
            { value: "banana", label: "Banana", selected: true },
            { value: "cherry", label: "Cherry", selected: false },
          ].map((item) => (
            <div
              key={item.value}
              className={`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm ${
                item.selected
                  ? "bg-green-50 text-green-900"
                  : "hover:bg-green-50"
              }`}
            >
              <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                {item.selected && <Check className="h-4 w-4 text-green-600" />}
              </span>
              {item.label}
            </div>
          ))}
          <div className="-mx-1 my-1 h-px bg-gray-200" />
          <div className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm opacity-50">
            <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center" />
            Disabled option
          </div>
        </div>
      </div>
    </div>
  ),
};

/** Select with grouped options and a separator. */
export const Grouped: Story = {
  render: () => (
    <div className="w-56">
      <Select>
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
