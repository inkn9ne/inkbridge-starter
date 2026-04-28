import type { Meta, StoryObj } from "@storybook/react";
import { SignupForm } from "./signup-form";

const meta: Meta<typeof SignupForm> = {
  title: "Components/Forms/SignupForm",
  component: SignupForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof SignupForm>;

export const Default: Story = {
  render: () => (
    <div className="w-100">
      <SignupForm />
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="w-100">
      <SignupForm
        errors={{
          email: "Please enter a valid email address",
          password: "Password must be at least 6 characters long",
        }}
      />
    </div>
  ),
};
