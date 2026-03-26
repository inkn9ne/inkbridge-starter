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

export const Responsive: Story = {
  render: () => (
    <div className="grid max-w-3xl gap-4 md:grid-cols-2">
      <div className="space-y-2 rounded-lg border border-border p-4">
        <p className="text-sm font-medium">Mobile navigation</p>
        <RadioGroup defaultValue="bottom" className="gap-2">
          <label className="flex items-center gap-2 text-sm"><RadioGroupItem value="bottom" /> Bottom bar</label>
          <label className="flex items-center gap-2 text-sm"><RadioGroupItem value="drawer" /> Drawer</label>
        </RadioGroup>
      </div>
      <div className="space-y-2 rounded-lg border border-border p-4">
        <p className="text-sm font-medium">Desktop navigation</p>
        <RadioGroup defaultValue="sidebar" className="gap-2">
          <label className="flex items-center gap-2 text-sm"><RadioGroupItem value="sidebar" /> Sidebar</label>
          <label className="flex items-center gap-2 text-sm"><RadioGroupItem value="top" /> Top bar</label>
        </RadioGroup>
      </div>
    </div>
  ),
}
