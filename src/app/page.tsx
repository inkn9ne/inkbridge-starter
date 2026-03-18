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
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 48 48" width="36" height="36" xmlns="http://www.w3.org/2000/svg" fill="none" aria-label="Inkbridge" className="shrink-0">
              <rect width="48" height="48" rx="11" fill="var(--primary)" />
              <rect x="11" y="19" width="26" height="20" rx="1.5" fill="var(--primary-foreground)" />
              <path d="M24 8L40 22H8L24 8Z" fill="var(--primary-foreground)" />
              <path d="M24 25C24 25 19.5 28.5 19.5 32C19.5 34.5 21.5 36.5 24 36.5C26.5 36.5 28.5 34.5 28.5 32C28.5 28.5 24 25 24 25Z" fill="var(--primary)" />
            </svg>
            <h1 className="text-3xl font-semibold tracking-tight">Inkbridge Starter</h1>
          </div>
          <p className="text-muted-foreground max-w-lg">
            A pre-configured Next.js + Tailwind + Storybook project wired up with Inkbridge. Follow the steps below to generate a pixel-accurate design system in Figma from these components.
          </p>

          <ol className="mt-2 flex flex-col gap-4">
            {[
              {
                title: "Start the dev server",
                description: <>Run <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">pnpm figma:dev</code> in your terminal. This starts the Next.js server that the plugin uses to scan components and patch tokens.</>,
              },
              {
                title: "Load the plugin in Figma Desktop",
                description: <>Go to <strong>Plugins → Development → Import plugin from manifest</strong> and select <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">node_modules/inkbridge/manifest.json</code>. Only needed once per project.</>,
              },
              {
                title: "Generate your design system",
                description: <>Open any Figma file and run <strong>Plugins → Inkbridge → Generate Design System Page</strong>. The plugin scans your Storybook stories and renders every component as a native Figma frame.</>,
              },
              {
                title: "Edit tokens and push to code",
                description: <>Change colors or styles in Figma Variables, then use <strong>Push to Code</strong> to open a GitHub PR with the updated token file — no copy-pasting needed.</>,
              },
            ].map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  {i + 1}
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium">{step.title}</span>
                  <span className="text-sm text-muted-foreground">{step.description}</span>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex gap-2 pt-2">
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
                <CardTitle>Design system synced</CardTitle>
                <CardDescription>Last synced 2 minutes ago</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-6">
                  <div>
                    <p className="text-2xl font-bold">42</p>
                    <p className="text-xs text-muted-foreground">Components</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">128</p>
                    <p className="text-xs text-muted-foreground">Tokens</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">6</p>
                    <p className="text-xs text-muted-foreground">Themes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Push to Figma</CardTitle>
                <CardDescription>Render your components as native Figma frames.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Open the Inkbridge plugin in Figma Desktop and run <strong className="text-foreground">Generate Design System Page</strong> to sync.</p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm" className="flex-1">Open docs</Button>
                <Button size="sm" variant="outline">View plugin</Button>
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
