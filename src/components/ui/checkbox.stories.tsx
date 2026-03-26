import type { Meta, StoryObj } from "@storybook/react"

import { Checkbox } from "./checkbox"

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
}
export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: { defaultChecked: true },
}

export const States: Story = {
  render: () => (
    <div className="grid w-80 gap-3">
      <label className="flex items-center gap-2 text-sm">
        <Checkbox defaultChecked />
        Accept terms and conditions
      </label>
      <label className="flex items-center gap-2 text-sm">
        <Checkbox />
        Receive product updates
      </label>
      <label className="text-muted-foreground flex items-center gap-2 text-sm">
        <Checkbox disabled defaultChecked />
        Disabled option
      </label>
    </div>
  ),
}

export const Composition: Story = {
  render: () => (
    <div className="w-96 rounded-lg border border-border p-4">
      <p className="mb-3 text-sm font-medium">Deploy checklist</p>
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm"><Checkbox defaultChecked /> Run tests</label>
        <label className="flex items-center gap-2 text-sm"><Checkbox defaultChecked /> Verify tokens</label>
        <label className="flex items-center gap-2 text-sm"><Checkbox /> Update changelog</label>
        <label className="flex items-center gap-2 text-sm"><Checkbox /> Announce release</label>
      </div>
    </div>
  ),
}
