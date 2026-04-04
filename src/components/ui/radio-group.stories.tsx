import type { Meta, StoryObj } from "@storybook/react"

import { RadioGroup, RadioGroupItem } from "./radio-group"

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  args: { defaultValue: "starter" },
}
export default meta

type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="starter" className="w-80 gap-3">
      <label className="flex items-center gap-2 text-sm">
        <RadioGroupItem value="starter" />
        Starter
      </label>
      <label className="flex items-center gap-2 text-sm">
        <RadioGroupItem value="pro" />
        Pro
      </label>
      <label className="flex items-center gap-2 text-sm">
        <RadioGroupItem value="enterprise" />
        Enterprise
      </label>
    </RadioGroup>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="monthly" className="flex items-center gap-4">
      <label className="flex items-center gap-2 text-sm">
        <RadioGroupItem value="monthly" />
        Monthly
      </label>
      <label className="flex items-center gap-2 text-sm">
        <RadioGroupItem value="yearly" />
        Yearly
      </label>
      <label className="text-muted-foreground flex items-center gap-2 text-sm">
        <RadioGroupItem value="lifetime" disabled />
        Disabled
      </label>
    </RadioGroup>
  ),
}
