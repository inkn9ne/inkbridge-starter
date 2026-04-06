import type { Meta, StoryObj } from "@storybook/react";
import {
  CheckIcon,
  ChevronRightIcon,
  CopyIcon,
  LogOutIcon,
  PencilIcon,
  Settings2Icon,
  TrashIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/UI/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Dropdown menu. Default shows the trigger; OpenPanel shows a static menu panel without portal for Figma rendering.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

/** Trigger button — closed state (DropdownMenuContent is portal-rendered, scanner skips it). */
export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserIcon />
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings2Icon />
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOutIcon />
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/** Static open menu panel — no portal for Figma. */
export const OpenPanel: Story = {
  render: () => (
    <div className="w-56 rounded-md border bg-popover text-popover-foreground p-1 shadow-md">
      <div className="px-2 py-1.5 text-sm font-medium">My Account</div>
      <div className="-mx-1 my-1 h-px bg-border" />
      {[
        { icon: UserIcon, label: "Profile", shortcut: "⇧⌘P" },
        { icon: Settings2Icon, label: "Settings", shortcut: "⌘S" },
        { icon: CopyIcon, label: "Billing", shortcut: "⌘B" },
      ].map(({ icon: Icon, label, shortcut }) => (
        <div
          key={label}
          className="relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none hover:bg-accent"
        >
          <Icon className="size-4 text-muted-foreground" />
          {label}
          <span className="ml-auto text-xs tracking-widest text-muted-foreground">
            {shortcut}
          </span>
        </div>
      ))}
      <div className="-mx-1 my-1 h-px bg-border" />
      <div className="relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none text-destructive hover:bg-destructive/10">
        <LogOutIcon className="size-4" />
        Log out
        <span className="ml-auto text-xs tracking-widest text-muted-foreground">
          ⇧⌘Q
        </span>
      </div>
    </div>
  ),
};

/** Menu with icons and a sub-menu indicator. */
export const WithIcons: Story = {
  render: () => (
    <div className="w-56 rounded-md border bg-popover text-popover-foreground p-1 shadow-md">
      {[
        { icon: PencilIcon, label: "Edit" },
        { icon: CopyIcon, label: "Duplicate" },
      ].map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none hover:bg-accent"
        >
          <Icon className="size-4 text-muted-foreground" />
          {label}
        </div>
      ))}
      <div className="-mx-1 my-1 h-px bg-border" />
      <div className="relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none hover:bg-accent">
        <Settings2Icon className="size-4 text-muted-foreground" />
        More options
        <ChevronRightIcon className="ml-auto size-4" />
      </div>
      <div className="-mx-1 my-1 h-px bg-border" />
      <div className="relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-destructive outline-hidden select-none hover:bg-destructive/10">
        <TrashIcon className="size-4" />
        Delete
      </div>
    </div>
  ),
};

/** Checkbox-style menu items. */
export const WithCheckboxes: Story = {
  render: () => (
    <div className="w-48 rounded-md border bg-popover text-popover-foreground p-1 shadow-md">
      <div className="px-2 py-1.5 text-sm font-medium">Appearance</div>
      <div className="-mx-1 my-1 h-px bg-border" />
      {[
        { label: "Show toolbar", checked: true },
        { label: "Show sidebar", checked: true },
        { label: "Show statusbar", checked: false },
      ].map(({ label, checked }) => (
        <div
          key={label}
          className="relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none hover:bg-accent"
        >
          <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center rounded-sm border border-input">
            {checked && <CheckIcon className="size-3" />}
          </span>
          {label}
        </div>
      ))}
    </div>
  ),
};
