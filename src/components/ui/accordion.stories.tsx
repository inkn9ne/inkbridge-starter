import type { Meta, StoryObj } from "@storybook/react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion"

const meta: Meta<typeof Accordion> = {
  title: "Components/UI/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Accordion primitives. Default shows collapsed rows. ItemOpen shows expanded content for scanner/Figma coverage.",
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-xl">
      <AccordionItem value="item-1">
        <AccordionTrigger>What Figma plan do I need?</AccordionTrigger>
        <AccordionContent>
          Inkbridge works with any Figma plan, including free tier projects.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Do I need Storybook?</AccordionTrigger>
        <AccordionContent>
          Storybook is used for component scanning and variant/state extraction.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Will it overwrite existing pages?</AccordionTrigger>
        <AccordionContent>
          No. Generation is scoped to a dedicated Design System page.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const ItemOpen: Story = {
  render: () => (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="w-full max-w-xl"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>What Figma plan do I need?</AccordionTrigger>
        <AccordionContent>
          Inkbridge works with any Figma plan, including free tier projects.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Do I need Storybook?</AccordionTrigger>
        <AccordionContent>
          Storybook is used for component scanning and variant/state extraction.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Will it overwrite existing pages?</AccordionTrigger>
        <AccordionContent>
          No. Generation is scoped to a dedicated Design System page.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
