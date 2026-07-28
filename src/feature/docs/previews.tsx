"use client";

// Live preview registry for the component catalogue. Each entry renders a
// small, representative demo of a component for its /docs/[slug] detail page.
// Components without an entry fall back to a "view in Storybook / source"
// note on the detail page — coverage is intentionally partial.

import * as React from "react";

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
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Toaster } from "@/components/ui/sonner";
import { toast as notify } from "sonner";
import { Skeleton, SkeletonText } from "@/components/custom/skeleton";
import { MediaCard } from "@/components/custom/media-card";
import { SignupForm } from "@/components/custom/forms/signup-form";
import { LeverageSlider } from "@/feature/perps/components/LeverageSlider";
import { DecreaseModalDemo, IncreaseModalDemo } from "./perps-preview";

type PreviewFn = () => React.ReactNode;

const previews: Record<string, PreviewFn> = {
  button: () => (
    <div className="flex flex-wrap gap-2">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
  badge: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  ),
  input: () => (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Input placeholder="Default" />
      <Input placeholder="Disabled" disabled />
      <Input placeholder="Error" aria-invalid />
    </div>
  ),
  label: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="lbl-demo" />
      <Label htmlFor="lbl-demo">Accept terms and conditions</Label>
    </div>
  ),
  checkbox: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="cb-1" defaultChecked />
        <Label htmlFor="cb-1">Checked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="cb-2" />
        <Label htmlFor="cb-2">Unchecked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="cb-3" disabled />
        <Label htmlFor="cb-3">Disabled</Label>
      </div>
    </div>
  ),
  "radio-group": () => (
    <RadioGroup defaultValue="comfortable" className="flex flex-col gap-2">
      {["default", "comfortable", "compact"].map((v) => (
        <div key={v} className="flex items-center gap-2">
          <RadioGroupItem value={v} id={`rg-${v}`} />
          <Label htmlFor={`rg-${v}`} className="capitalize">
            {v}
          </Label>
        </div>
      ))}
    </RadioGroup>
  ),
  switch: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Switch id="sw-1" defaultChecked />
        <Label htmlFor="sw-1">On</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="sw-2" />
        <Label htmlFor="sw-2">Off</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="sw-3" disabled />
        <Label htmlFor="sw-3">Disabled</Label>
      </div>
    </div>
  ),
  select: () => (
    <Select>
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Pick a framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="next">Next.js</SelectItem>
        <SelectItem value="remix">Remix</SelectItem>
        <SelectItem value="astro">Astro</SelectItem>
      </SelectContent>
    </Select>
  ),
  card: () => (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Design system synced</CardTitle>
        <CardDescription>Last synced 2 minutes ago</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Composable surface with header, content, and footer slots.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm">Open</Button>
        <Button size="sm" variant="outline">
          Dismiss
        </Button>
      </CardFooter>
    </Card>
  ),
  separator: () => (
    <div className="flex flex-col gap-4">
      <p className="text-sm">Above</p>
      <Separator />
      <p className="text-sm">Below</p>
      <div className="flex h-6 items-center gap-3 text-sm">
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Pricing</span>
        <Separator orientation="vertical" />
        <span>GitHub</span>
      </div>
    </div>
  ),
  alert: () => (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <Alert>
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>
          You can add components to your app using the CLI.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Your session has expired. Sign in again.</AlertDescription>
      </Alert>
    </div>
  ),
  tabs: () => (
    <Tabs defaultValue="overview" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="stories">Stories</TabsTrigger>
        <TabsTrigger value="tokens">Tokens</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="text-sm text-muted-foreground">
        A tabbed view switches content without leaving the page.
      </TabsContent>
      <TabsContent value="stories" className="text-sm text-muted-foreground">
        Each Storybook story becomes a Figma frame.
      </TabsContent>
      <TabsContent value="tokens" className="text-sm text-muted-foreground">
        Tokens round-trip from Figma back to code.
      </TabsContent>
    </Tabs>
  ),
  accordion: () => (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="a">
        <AccordionTrigger>What does the plugin scan?</AccordionTrigger>
        <AccordionContent className="text-sm text-muted-foreground">
          Your Storybook stories and the Tailwind classes in your components.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="b">
        <AccordionTrigger>Does it need my dev server?</AccordionTrigger>
        <AccordionContent className="text-sm text-muted-foreground">
          Yes — run pnpm dev so the plugin can fetch component data on demand.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  popover: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline">Open popover</Button>} />
      <PopoverContent className="text-sm text-muted-foreground">
        Anchored floating panel — handy for filters and quick forms.
      </PopoverContent>
    </Popover>
  ),
  tooltip: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
        <TooltipContent>A short hint</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  skeleton: () => (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex items-center gap-3">
        <Skeleton className="size-10 rounded-full" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>
      <SkeletonText lines={3} />
    </div>
  ),
  "leverage-slider": () => (
    <div className="w-full max-w-sm">
      <LeverageSlider defaultValue={10} min={1} max={50} marks={["1x", "10x", "25x", "50x"]} />
    </div>
  ),
  dialog: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here, then save.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
  sheet: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open sheet</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes here, then save.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
  "dropdown-menu": () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>My account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  toast: () => (
    <div className="flex flex-col items-center gap-3">
      <Button variant="outline" onClick={() => notify.success("Changes saved")}>
        Show toast
      </Button>
      <Toaster />
    </div>
  ),
  table: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV-001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV-002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  breadcrumb: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Docs</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  pagination: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
  "media-card": () => <MediaCard />,
  "signup-form": () => (
    <div className="w-full max-w-sm">
      <SignupForm />
    </div>
  ),
  "decrease-position-modal": () => <DecreaseModalDemo />,
  "increase-position-modal": () => <IncreaseModalDemo />,
};

// Renders the whole "Preview" section — heading + framed box + live demo —
// but only when this component has a registered demo. When it doesn't, the
// section is omitted entirely (no stub), so the detail page can drop in this
// component unconditionally and the registry stays the single source of truth.
export function ComponentPreviewSection({ slug }: { slug: string }) {
  const render = previews[slug];
  if (!render) return null;
  return (
    <section className="mb-10">
      <h2 className="mb-3 text-xl font-semibold text-foreground">Preview</h2>
      <div className="flex min-h-40 items-center justify-center rounded-xl border bg-card p-8">
        {render()}
      </div>
    </section>
  );
}
