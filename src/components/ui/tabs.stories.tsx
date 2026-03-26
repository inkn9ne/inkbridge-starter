import type { Meta, StoryObj } from "@storybook/react"
import { Bell, Settings, ShieldCheck } from "lucide-react"

import { Button } from "./button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs"

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  args: {
    defaultValue: "overview",
  },
}
export default meta

type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="max-w-xl">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>

      <TabsContent value="overview">
        <h3 className="mb-1 text-base font-semibold">Overview</h3>
        <p className="text-muted-foreground text-sm">Ship faster with reusable components and shared styles.</p>
      </TabsContent>
      <TabsContent value="activity">
        <h3 className="mb-1 text-base font-semibold">Recent activity</h3>
        <p className="text-muted-foreground text-sm">4 commits, 2 merged pull requests, 1 pending review.</p>
      </TabsContent>
      <TabsContent value="settings">
        <h3 className="mb-1 text-base font-semibold">Project settings</h3>
        <p className="text-muted-foreground text-sm">Manage access, environments, and deployment targets.</p>
      </TabsContent>
    </Tabs>
  ),
}

export const Variants: Story = {
  render: () => (
    <Tabs defaultValue="security" className="max-w-xl">
      <TabsList className="w-full justify-start">
        <TabsTrigger value="notifications" className="gap-1.5">
          <Bell className="size-3.5" />
          Notifications
        </TabsTrigger>
        <TabsTrigger value="security" className="gap-1.5">
          <ShieldCheck className="size-3.5" />
          Security
        </TabsTrigger>
        <TabsTrigger value="preferences" className="gap-1.5" disabled>
          <Settings className="size-3.5" />
          Disabled
        </TabsTrigger>
      </TabsList>
      <TabsContent value="notifications">Email and in-app update rules.</TabsContent>
      <TabsContent value="security">Two-factor auth and team access controls.</TabsContent>
      <TabsContent value="preferences">This tab is disabled.</TabsContent>
    </Tabs>
  ),
}

export const Responsive: Story = {
  render: () => (
    <div className="grid max-w-4xl gap-4 md:grid-cols-2">
      <Tabs defaultValue="small" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="small" className="flex-1">Small</TabsTrigger>
          <TabsTrigger value="medium" className="flex-1">Medium</TabsTrigger>
        </TabsList>
        <TabsContent value="small" className="text-sm">Compact tab layout.</TabsContent>
        <TabsContent value="medium" className="text-sm">Alternative compact layout.</TabsContent>
      </Tabs>

      <Tabs defaultValue="desktop" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="desktop">Desktop</TabsTrigger>
          <TabsTrigger value="tablet">Tablet</TabsTrigger>
          <TabsTrigger value="mobile">Mobile</TabsTrigger>
        </TabsList>
        <TabsContent value="desktop">3-column layout with side panel.</TabsContent>
        <TabsContent value="tablet">2-column layout with stacked controls.</TabsContent>
        <TabsContent value="mobile">Single-column flow with condensed actions.</TabsContent>
      </Tabs>
    </div>
  ),
}

export const Composition: Story = {
  render: () => (
    <Tabs defaultValue="billing" className="max-w-xl">
      <TabsList>
        <TabsTrigger value="billing">Billing</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="billing" className="space-y-3">
        <div>
          <p className="text-sm font-medium">Current plan</p>
          <p className="text-muted-foreground text-sm">Pro · $29/month</p>
        </div>
        <div className="flex gap-2">
          <Button size="sm">Upgrade</Button>
          <Button size="sm" variant="outline">View invoices</Button>
        </div>
      </TabsContent>
      <TabsContent value="team" className="space-y-2">
        <p className="text-sm font-medium">Contributors</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-4 text-sm">
          <li>3 admins</li>
          <li>6 editors</li>
          <li>2 viewers</li>
        </ul>
      </TabsContent>
    </Tabs>
  ),
}
