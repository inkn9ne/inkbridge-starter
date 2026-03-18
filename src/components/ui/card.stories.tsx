import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

const meta: Meta<typeof Card> = {
  component: Card,
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>A short description of this card.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">
          Card body content goes here. This is where the main information lives.
        </p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Plan: Pro</CardTitle>
        <CardDescription>Everything you need to ship faster.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">$29<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="flex-1">Get started</Button>
        <Button variant="outline">Learn more</Button>
      </CardFooter>
    </Card>
  ),
};

export const Small: Story = {
  render: () => (
    <Card size="sm" className="w-64">
      <CardHeader>
        <CardTitle>Small card</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">Compact layout.</p>
      </CardContent>
    </Card>
  ),
};
