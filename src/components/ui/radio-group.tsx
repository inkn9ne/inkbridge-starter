"use client"

import * as React from "react"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"
import { Radio as RadioPrimitive } from "@base-ui/react/radio"

import { cn } from "@/lib/utils"

function RadioGroup({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive>) {
  return <RadioGroupPrimitive data-slot="radio-group" className={cn("grid gap-2", className)} {...props} />
}

function RadioGroupItem({ className, ...props }: React.ComponentProps<typeof RadioPrimitive.Root>) {
  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      className={cn(
        "peer inline-flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-full border border-input bg-background text-primary transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50 data-[checked]:border-primary data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator data-slot="radio-group-indicator" className="flex items-center justify-center">
        <span className="size-2 rounded-full bg-primary" />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  )
}

export { RadioGroup, RadioGroupItem }
