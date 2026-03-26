import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "./button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip"

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
}
export default meta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
        <TooltipContent>Quick action details</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}

export const OpenPanel: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip defaultOpen>
        <TooltipTrigger render={<Button>Open tooltip</Button>} />
        <TooltipContent side="bottom">Visible by default for scanner snapshots.</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}

export const Variants: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex flex-wrap items-center gap-3">
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline">Top</Button>} />
          <TooltipContent side="top">Top placement</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline">Right</Button>} />
          <TooltipContent side="right">Right placement</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline">Bottom</Button>} />
          <TooltipContent side="bottom">Bottom placement</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
}
