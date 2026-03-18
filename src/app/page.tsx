import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ThemeToggles } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16 flex flex-col gap-16">

        {/* Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <Badge variant="secondary">Starter template</Badge>
            <ThemeToggles />
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">Inkhouse Starter</h1>
          <p className="text-muted-foreground max-w-md">
            Open Figma Desktop → Plugins → Inkhouse → <strong>Generate Design System Page</strong> to render these components as native Figma frames.
          </p>
          <div className="flex gap-2 pt-1">
            <Button size="sm">Get started</Button>
            <Button size="sm" variant="outline">View docs</Button>
          </div>
        </div>

        {/* Buttons */}
        <section className="flex flex-col gap-4">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Button</h2>
          <div className="flex flex-wrap gap-2">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>

        {/* Badges */}
        <section className="flex flex-col gap-4">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Badge</h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </section>

        {/* Input */}
        <section className="flex flex-col gap-4">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Input</h2>
          <div className="flex flex-col gap-3 max-w-sm">
            <Input placeholder="Default" />
            <Input placeholder="Disabled" disabled />
          </div>
        </section>

        {/* Cards */}
        <section className="flex flex-col gap-4">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Card</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Card title</CardTitle>
                <CardDescription>A short description of this card.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Card body content goes here.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pro plan</CardTitle>
                <CardDescription>Everything you need to ship faster.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">$29<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm" className="flex-1">Get started</Button>
                <Button size="sm" variant="outline">Learn more</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Alerts */}
        <section className="flex flex-col gap-4">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Alert</h2>
          <div className="flex flex-col gap-3 max-w-lg">
            <Alert>
              <AlertTitle>Heads up</AlertTitle>
              <AlertDescription>You can add components and dependencies to your app using the CLI.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>Your session has expired. Please sign in again.</AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Gradient */}
        <section className="flex flex-col gap-4">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Gradients</h2>
          <div className="flex flex-wrap gap-4">
            <div className="w-40 h-24 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600" />
            <div className="w-40 h-24 rounded-xl bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500" />
            <div className="w-40 h-24 rounded-xl bg-[radial-gradient(circle_at_30%_40%,#a855f7,#6366f1)]" />
            <div className="relative w-40 h-24 rounded-xl bg-slate-950 overflow-hidden flex items-center justify-center">
              <div
                className="absolute w-24 h-24 bg-gradient-to-br from-violet-500 to-pink-500 opacity-70 blur-xl"
                style={{ clipPath: "polygon(50% 0%, 80% 20%, 100% 50%, 80% 80%, 50% 100%, 20% 80%, 0% 50%, 20% 20%)" }}
              />
              <span className="relative text-white text-xs font-medium">Blob</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
