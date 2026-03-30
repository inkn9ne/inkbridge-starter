import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => (
    <div className="w-[320px] space-y-2">
      <label htmlFor="email" className="text-sm font-medium">
        Email
      </label>
      <Input id="email" type="email" placeholder="you@inkbridge.xyz" />
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="w-[320px] space-y-2">
      <label htmlFor="account-id" className="text-sm font-medium">
        Account ID
      </label>
      <Input
        id="account-id"
        placeholder="Account identifier"
        aria-invalid="true"
        defaultValue="acc_...invalid"
      />
      <p className="text-sm text-destructive">Account ID is invalid.</p>
    </div>
  ),
};
