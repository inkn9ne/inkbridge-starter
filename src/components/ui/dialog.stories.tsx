import type { Meta, StoryObj } from "@storybook/react";
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
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Modal dialog. Default shows the trigger button only (closed state). OpenPanel and Confirm use defaultOpen so the plugin extracts and renders the dialog panel from the portal.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

/** Trigger button — closed state. The plugin filters portal content for stories without defaultOpen. */
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

/** Open dialog panel — defaultOpen so the plugin extracts the portal content and renders the full panel. */
export const OpenPanel: Story = {
  render: () => (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
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
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/** Confirmation / destructive dialog — defaultOpen so the plugin renders the panel. */
export const Confirm: Story = {
  render: () => (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete account</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
