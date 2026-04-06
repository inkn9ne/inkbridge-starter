import type { Meta, StoryObj } from "@storybook/react";
import { XIcon } from "lucide-react";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

const meta: Meta<typeof Dialog> = {
  title: "Components/UI/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Modal dialog. Default shows the trigger button. OpenPanel shows a static dialog panel (no portal/overlay) for Figma rendering.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

/** Trigger button — the closed state (DialogContent is portal-rendered, scanner skips it). */
export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
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
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/** Static dialog panel — rendered without portal/overlay for Figma. */
export const OpenPanel: Story = {
  render: () => (
    <div className="relative w-120">
      <div className="bg-background grid w-full gap-4 rounded-lg border p-6 shadow-lg">
        {/* Close button */}
        <button className="absolute top-4 right-4 rounded-xs opacity-70 hover:opacity-100">
          <XIcon className="size-4" />
        </button>

        {/* Header */}
        <div className="flex flex-col gap-2 text-left">
          <h2 className="text-lg leading-none font-semibold">Edit profile</h2>
          <p className="text-muted-foreground text-sm">
            Make changes to your profile here. Click save when you&apos;re done.
          </p>
        </div>

        {/* Body */}
        <div className="grid gap-4 py-4">
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

        {/* Footer */}
        <div className="flex flex-row justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save changes</Button>
        </div>
      </div>
    </div>
  ),
};

/** Confirmation / destructive dialog. */
export const Confirm: Story = {
  render: () => (
    <div className="relative w-100">
      <div className="bg-background grid w-full gap-4 rounded-lg border p-6 shadow-lg">
        <button className="absolute top-4 right-4 rounded-xs opacity-70 hover:opacity-100">
          <XIcon className="size-4" />
        </button>
        <div className="flex flex-col gap-2 text-left">
          <h2 className="text-lg leading-none font-semibold">Are you sure?</h2>
          <p className="text-muted-foreground text-sm">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </p>
        </div>
        <div className="flex flex-row justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete account</Button>
        </div>
      </div>
    </div>
  ),
};
