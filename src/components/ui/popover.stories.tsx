import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "./button"
import { Input } from "./input"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"

const meta: Meta<typeof Popover> = {
  component: Popover,
}
export default meta

type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline">Open popover</Button>} />
      <PopoverContent>
        <p className="text-sm font-medium">Quick create</p>
        <p className="text-muted-foreground mt-1 text-sm">Start a new draft from this panel.</p>
      </PopoverContent>
    </Popover>
  ),
}

export const OpenPanel: Story = {
  render: () => (
    <Popover defaultOpen>
      <PopoverTrigger render={<Button>Default open</Button>} />
      <PopoverContent>
        <p className="text-sm font-medium">Scanner-visible content</p>
        <p className="text-muted-foreground mt-1 text-sm">Used to validate portal and popup rendering.</p>
      </PopoverContent>
    </Popover>
  ),
}

export const Composition: Story = {
  render: () => (
    <Popover defaultOpen>
      <PopoverTrigger render={<Button variant="outline">Edit profile</Button>} />
      <PopoverContent className="space-y-3">
        <div>
          <p className="text-sm font-medium">Profile</p>
          <p className="text-muted-foreground text-sm">Update public details</p>
        </div>
        <div className="space-y-2">
          <label className="text-muted-foreground text-xs">Display name</label>
          <Input defaultValue="Inkbridge Team" />
        </div>
        <div className="flex gap-2">
          <Button size="sm">Save</Button>
          <Button size="sm" variant="outline">Cancel</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
}
