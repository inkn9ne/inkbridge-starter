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

// Args-only (no render) so the scanner wires args directly as propsContext.
// `className` puts the slider in a responsive desktop-sized frame that still
// shrinks at mobile breakpoints.
export const Default: Story = {
  args: {
    display: "5.0x",
    sliderValue: 5,
    min: 1.1,
    max: 100,
    showInput: false,
    className: WIDTH_WRAPPER,
  },
};

export const WithMarks: Story = {
  args: {
    display: "50.0x",
    sliderValue: 50,
    min: 1.1,
    max: 100,
    marks: ["1x", "25x", "50x", "75x", "100x"],
    showInput: false,
    className: WIDTH_WRAPPER,
  },
};

export const Disabled: Story = {
  args: {
    display: "1.0x",
    sliderValue: 1,
    min: 1.1,
    max: 100,
    disabled: true,
    showInput: false,
    className: WIDTH_WRAPPER,
  },
};
