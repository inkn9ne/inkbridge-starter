import type { Meta, StoryObj } from "@storybook/react";
import { XIcon } from "lucide-react";
import { Button } from "./button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

const meta: Meta<typeof Sheet> = {
  title: "Components/UI/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Slide-in panel (drawer from edge). Trigger shows the closed state; Right/Left/Bottom show static open panels without portal for Figma rendering.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sheet>;

/** Trigger button — closed state (SheetContent is portal-rendered, scanner skips it). */
export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 px-4">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-right text-sm font-medium">Name</label>
              <input
                defaultValue="Alice Johnson"
                className="col-span-3 h-9 rounded-md border border-input px-3 text-sm"
              />
            </div>
          </div>
        </div>
        <SheetFooter>
          <Button>Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

/** Static right-side panel — no portal for Figma. */
export const RightPanel: Story = {
  render: () => (
    <div className="relative h-125 w-90 overflow-hidden rounded-lg border bg-background shadow-lg flex flex-col">
      {/* Close button */}
      <button className="absolute top-4 right-4 rounded-xs opacity-70 hover:opacity-100 z-10">
        <XIcon className="size-4" />
      </button>

      {/* Header */}
      <div className="flex flex-col gap-1.5 p-4 border-b">
        <h3 className="text-foreground font-semibold">Edit profile</h3>
        <p className="text-muted-foreground text-sm">
          Make changes to your profile here.
        </p>
      </div>

      {/* Body */}
      <div className="p-4 flex-1">
        <div className="grid gap-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right text-sm font-medium">Name</label>
            <input
              defaultValue="Alice Johnson"
              className="col-span-3 h-9 rounded-md border border-input px-3 text-sm"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right text-sm font-medium">Email</label>
            <input
              defaultValue="alice@example.com"
              className="col-span-3 h-9 rounded-md border border-input px-3 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto flex flex-col gap-2 p-4 border-t">
        <Button className="w-full">Save changes</Button>
        <Button variant="outline" className="w-full">
          Cancel
        </Button>
      </div>
    </div>
  ),
};

/** Static bottom panel — no portal for Figma. */
export const BottomPanel: Story = {
  render: () => (
    <div className="w-120 rounded-t-lg border border-b-0 bg-background shadow-lg">
      <div className="flex flex-col gap-1.5 p-4 border-b">
        <div className="flex items-center justify-between">
          <h3 className="text-foreground font-semibold">Quick actions</h3>
          <button className="rounded-xs opacity-70 hover:opacity-100">
            <XIcon className="size-4" />
          </button>
        </div>
        <p className="text-muted-foreground text-sm">
          Choose an action to perform.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 p-4">
        {["Export", "Duplicate", "Archive", "Share", "Settings", "Delete"].map(
          (action) => (
            <button
              key={action}
              className="flex items-center justify-center rounded-md border border-input bg-background py-3 text-sm font-medium hover:bg-muted"
            >
              {action}
            </button>
          )
        )}
      </div>
      <div className="flex gap-2 p-4 border-t">
        <Button variant="outline" className="flex-1">
          Cancel
        </Button>
        <Button className="flex-1">Confirm</Button>
      </div>
    </div>
  ),
};
