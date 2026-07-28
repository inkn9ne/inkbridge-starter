import type { Meta, StoryObj } from "@storybook/react";
import { LeverageSlider } from "./LeverageSlider";

const meta = {
  title: "Feature/Perps/LeverageSlider",
  component: LeverageSlider,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof LeverageSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

// `w-full max-w-[560px]` so the slider takes up to 560px at desktop AND
// shrinks at the Base responsive breakpoint instead of cropping out of
// the mobile preview frame. `layout: "padded"` gives the Default render
// enough parent width to actually hit the 560px cap.
const WIDTH_WRAPPER = "w-full max-w-[560px]";

// Pure args, no controlled state — slider owns its value via internal
// `useState(defaultValue)`. The Inkbridge scanner traces that
// useState seed back to the `defaultValue` arg below and renders the
// initial display in Figma. Storybook updates the displayed number as
// the user drags.
export const Default: Story = {
  args: {
    defaultValue: 5,
    min: 1.1,
    max: 100,
    className: WIDTH_WRAPPER,
  },
};

export const WithMarks: Story = {
  args: {
    defaultValue: 50,
    min: 1.1,
    max: 100,
    marks: ["1x", "25x", "50x", "75x", "100x"],
    className: WIDTH_WRAPPER,
  },
};

// defaultValue + min are aligned so the thumb starts at the visible
// left edge and the display reads "1x". An earlier draft had
// `defaultValue: 1, min: 1.1`, but the browser clamps the thumb up to
// min while React keeps `value=1` — the headline number and the
// thumb position drift apart.
export const Disabled: Story = {
  args: {
    defaultValue: 1,
    min: 1,
    max: 100,
    disabled: true,
    className: WIDTH_WRAPPER,
  },
};
