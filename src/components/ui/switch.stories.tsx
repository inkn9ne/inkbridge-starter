import type { Meta, StoryObj } from "@storybook/react"

import { Switch } from "./switch"

const meta: Meta<typeof Switch> = {
  component: Switch,
}
export default meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: { defaultChecked: true },
}

export const States: Story = {
  render: () => (
    <div className="grid w-72 gap-3">
      <label className="flex items-center justify-between gap-2 rounded-lg border border-border p-3 text-sm">
        <span>Email notifications</span>
        <Switch defaultChecked />
      </label>
      <label className="flex items-center justify-between gap-2 rounded-lg border border-border p-3 text-sm">
        <span>Compact mode</span>
        <Switch />
      </label>
      <label className="text-muted-foreground flex items-center justify-between gap-2 rounded-lg border border-border p-3 text-sm">
        <span>Disabled</span>
        <Switch disabled defaultChecked />
      </label>
    </div>
  ),
}
