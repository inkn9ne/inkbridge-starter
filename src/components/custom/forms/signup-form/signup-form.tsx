"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface SignupFormData {
  email: string;
  password: string;
}

interface SignupFormErrors {
  email?: string;
  password?: string;
}

interface SignupFormProps {
  errors?: SignupFormErrors;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function SignupForm({ errors }: SignupFormProps = {}) {
  const form = useForm<SignupFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (data: SignupFormData) => {
    console.log("Signup form submitted", data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-full max-w-sm space-y-6"
      >
        <FormField
          control={form.control}
          name="email"
          rules={{
            required: "Email address is required",
            pattern: {
              value: EMAIL_PATTERN,
              message: "Please enter a valid email address",
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              {errors?.email && (
                <p className="text-destructive text-sm">{errors.email}</p>
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Your password"
                  {...field}
                />
              </FormControl>
              {errors?.password && (
                <p className="text-destructive text-sm">{errors.password}</p>
              )}
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Sign up
        </Button>
      </form>
    </Form>
  );
}
