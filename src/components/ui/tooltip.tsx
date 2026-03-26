"use client"

import * as React from "react"
import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip"

import { cn } from "@/lib/utils"

function TooltipProvider({ delay = 300, ...props }: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return <TooltipPrimitive.Provider delay={delay} {...props} />
}

function Tooltip({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
}

function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

type TooltipContentProps = React.ComponentProps<typeof TooltipPrimitive.Popup> & {
  side?: React.ComponentProps<typeof TooltipPrimitive.Positioner>["side"]
  align?: React.ComponentProps<typeof TooltipPrimitive.Positioner>["align"]
  sideOffset?: React.ComponentProps<typeof TooltipPrimitive.Positioner>["sideOffset"]
}

function TooltipContent({ className, side = "top", align = "center", sideOffset = 8, ...props }: TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner side={side} align={align} sideOffset={sideOffset}>
        <TooltipPrimitive.Popup
          data-slot="tooltip-content"
          className={cn(
            "z-50 rounded-md bg-popover px-3 py-1.5 text-xs text-popover-foreground shadow-md data-[starting-style]:scale-95 data-[ending-style]:scale-95 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0",
            className
          )}
          {...props}
        >
          {props.children}
          <TooltipPrimitive.Arrow className="fill-popover" />
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
