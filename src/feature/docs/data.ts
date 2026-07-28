// Editorial overlay for the component catalogue.
//
// The STRUCTURE of the catalogue — which components exist, which stories each
// exports, which group it belongs to — is derived at build time from the
// `.stories.tsx` files themselves (see ./catalog.ts). That keeps the docs in
// lock-step with the real source of truth: your Storybook stories, which are
// also what the Inkbridge plugin renders into Figma.
//
// This file holds only the things a machine can't infer: human prose, the
// plugin capability each component exercises, and related-component links.
// Categories come straight from the Storybook title path, so there is no
// per-component category list to maintain here either.
//
// Adding a component? Just add a story — it appears automatically. Drop an
// entry here when you want to enrich its detail page with prose.

export type CategoryId =
  | "ui"
  | "forms"
  | "navigation"
  | "patterns"
  | "feature"
  | "marketing"
  | "other";

export interface CategoryDef {
  label: string;
  description: string;
}

export const CATEGORIES: Record<CategoryId, CategoryDef> = {
  ui: {
    label: "UI primitives",
    description:
      "The shadcn/ui base layer — buttons, inputs, overlays, and feedback. Inkbridge classifies each into its rendering strategy (CVA matrix, compound, state-machine, or simple) automatically.",
  },
  forms: {
    label: "Forms",
    description: "Composed form surfaces assembled from the primitives.",
  },
  navigation: {
    label: "Navigation",
    description: "App navigation shells — desktop and mobile.",
  },
  patterns: {
    label: "Shells & patterns",
    description:
      "App-level building blocks — hero, footer, media cards, loading states — composed from the primitives.",
  },
  feature: {
    label: "Perps feature module",
    description:
      "A realistic feature surface ported from a perpetuals trading app. Shows how Inkbridge handles non-trivial, composed feature components — not just isolated primitives.",
  },
  marketing: {
    label: "Marketing sections",
    description:
      "Landing-page sections (hero, features, FAQ, CTA). Larger, organism-level frames for the plugin to render.",
  },
  other: {
    label: "Other",
    description: "Components not yet sorted into a category.",
  },
};

/** Display order for categories on the hub page. */
export const CATEGORY_ORDER: CategoryId[] = [
  "ui",
  "forms",
  "navigation",
  "patterns",
  "feature",
  "marketing",
  "other",
];

/**
 * Maps a normalised Storybook group key (the title path minus the component
 * name, lowercased — e.g. "components/ui") to a catalogue category. Groups not
 * listed here fall back to "other", so a new top-level Storybook section still
 * shows up instead of vanishing.
 */
export const GROUP_TO_CATEGORY: Record<string, CategoryId> = {
  "components/ui": "ui",
  components: "patterns",
  "components/navigation": "navigation",
  "components/forms": "forms",
  "feature/perps": "feature",
  "feature/marketing": "marketing",
};

export interface ComponentMeta {
  /** One-line summary; falls back to a generic line when omitted. */
  description?: string;
  /** Which Inkbridge plugin capability this component exercises. */
  pluginFeatures?: string[];
  /** Related component slugs. */
  related?: string[];
}

/**
 * Prose overlay keyed by derived slug (kebab-case of the component name, e.g.
 * "leverage-slider", "dropdown-menu", "toast"). Every key is optional — a
 * component with no entry still renders, just without the enrichment.
 */
export const META: Record<string, ComponentMeta> = {
  // UI primitives
  button: {
    description: "CVA-driven button with variant and size axes.",
    pluginFeatures: ["CVA variant matrix", "State previews (hover/focus/disabled)", "Symbol + instances"],
    related: ["badge", "input"],
  },
  badge: {
    description: "Small inline-flex CVA label with a variant set.",
    pluginFeatures: ["CVA variant matrix", "Inline-flex sizing"],
    related: ["button"],
  },
  input: {
    description: "Text input with focus ring, disabled, and error states.",
    pluginFeatures: ["State previews", "aria-invalid error styling"],
    related: ["label", "signup-form", "button"],
  },
  checkbox: {
    description: "Radix checkbox with checked / disabled states and label composition.",
    pluginFeatures: ["State previews", "Slot composition with Label"],
    related: ["radio-group", "switch"],
  },
  "radio-group": {
    description: "Single-select radio group, vertical or horizontal.",
    pluginFeatures: ["Flex direction (col / row)", "Repeated children via .map()"],
    related: ["checkbox", "switch"],
  },
  switch: {
    description: "On/off toggle with checked and disabled states.",
    pluginFeatures: ["State previews", "Compound track + thumb geometry"],
    related: ["checkbox"],
  },
  select: {
    description: "Radix select with grouped items and a pre-selected value.",
    pluginFeatures: ["Overlay / portal rendering", "Dynamic items via .map()"],
    related: ["dropdown-menu", "popover"],
  },
  card: {
    description: "Composable surface — header, content, and footer slots.",
    pluginFeatures: ["Compound component symbol", "Slot-aware text overrides", "Shadow + radius"],
    related: ["media-card"],
  },
  separator: {
    description: "Horizontal or vertical divider, including in-nav usage.",
    pluginFeatures: ["Thin fixed-size frames", "Vertical orientation"],
    related: ["card"],
  },
  table: {
    description: "Semantic table with header, rows, and a simple variant.",
    pluginFeatures: ["Table tag layout chain", "Repeated rows via .map()"],
    related: ["pagination"],
  },
  alert: {
    description: "Inline alert with icon, title, and description — default and destructive.",
    pluginFeatures: ["Icon + text layout", "Destructive variant colouring"],
    related: ["toast", "badge"],
  },
  toast: {
    description: "Transient toast notifications via the Sonner toaster.",
    pluginFeatures: ["Portal-rendered toast panel"],
    related: ["alert"],
  },
  dialog: {
    description: "Modal dialog — panel, confirm, and trigger stories.",
    pluginFeatures: ["Portal / overlay rendering", "Open-state story capture"],
    related: ["sheet", "popover"],
  },
  sheet: {
    description: "Edge-anchored panel — right and bottom side stories.",
    pluginFeatures: ["Side-anchored overlay", "Full-bleed width chain"],
    related: ["dialog", "mobile-nav"],
  },
  popover: {
    description: "Anchored floating panel with a composition story.",
    pluginFeatures: ["Anchored overlay", "Open-state capture"],
    related: ["dropdown-menu", "tooltip", "select"],
  },
  tooltip: {
    description: "Hover/focus tooltip, with an opened-state story.",
    pluginFeatures: ["Open-state capture"],
    related: ["popover"],
  },
  "dropdown-menu": {
    description: "Menu with icons and checkbox items.",
    pluginFeatures: ["Icon registry", "Menu item composition"],
    related: ["popover", "select"],
  },
  breadcrumb: {
    description: "Path trail with collapse and custom-separator stories.",
    pluginFeatures: ["Icon registry (separators)", "Inline flex row"],
    related: ["pagination", "tabs"],
  },
  pagination: {
    description: "Page navigation — default, compact, and many-pages.",
    pluginFeatures: ["Repeated items via .map()", "Active-state styling"],
    related: ["breadcrumb", "table"],
  },
  tabs: {
    description: "Tabbed views — default, variants, and composition.",
    pluginFeatures: ["Active-state styling", "Slot composition"],
    related: ["accordion"],
  },
  accordion: {
    description: "Collapsible sections, with an opened-item story.",
    pluginFeatures: ["Open-state capture", "Icon rotation"],
    related: ["tabs"],
  },

  // Perps feature module
  "leverage-slider": {
    description:
      "Dual-mode leverage control — native range input plus −/+ buttons and a synced number input.",
    pluginFeatures: [
      "Native <input type=range> rewrite",
      "useState value tracing for static render",
      "react-icons inside an args-only story",
    ],
    related: ["increase-position-modal", "input"],
  },
  "decrease-position-modal": {
    description: "Dialog for reducing a position — Select with dynamic items and a conditional sub-tree.",
    pluginFeatures: [
      "Dialog portal",
      "Select with dynamic items via .map()",
      "Conditional sub-tree",
      "Sibling-button flex row constraints",
    ],
    related: ["increase-position-modal", "dialog", "select"],
  },
  "increase-position-modal": {
    description:
      "Dialog for opening / increasing a position — embeds the slider, gradient submit, multi-state preview.",
    pluginFeatures: [
      "Embedded LeverageSlider",
      "Inline SVG icons",
      "Gradient submit button",
      "Multi-state preview pane",
      "<form> width chain",
    ],
    related: ["decrease-position-modal", "leverage-slider", "dialog"],
  },

  // Shells & patterns
  hero: {
    description: "Gradient-blob hero wrapper with clip-path background shapes.",
    pluginFeatures: ["Gradient rendering", "clip-path blob → Figma vector", "Absolute positioning", "Layer blur"],
  },
  "media-card": {
    description: "Image-led card — full-width, grid, and column-span layouts.",
    pluginFeatures: ["Image rendering (next/image fills)", "Grid + col-span layout"],
    related: ["card"],
  },
  "nav-bar": {
    description: "Desktop navigation shell with logo, links, and theme switcher.",
    pluginFeatures: ["Image rendering (logo)", "Responsive hide (md:flex)"],
    related: ["mobile-nav", "footer"],
  },
  footer: {
    description: "Global footer with product, resources, and legal columns.",
    pluginFeatures: ["Multi-column flex layout"],
    related: ["nav-bar"],
  },
  "mobile-nav": {
    description: "Sheet-based mobile navigation drawer, with an opened story.",
    pluginFeatures: ["Sheet overlay", "Open-state capture", "Full-bleed width chain"],
    related: ["nav-bar", "sheet"],
  },
  skeleton: {
    description: "Loading placeholders — shapes, text lines, card, and detail layouts.",
    pluginFeatures: ["Pulse animation surfaces", "Grid layouts"],
    related: ["card"],
  },

  // Marketing sections
  "hero-section": {
    description: "Landing hero — gradient backdrop, headline, and primary CTAs.",
    pluginFeatures: ["Gradient blob background", "Responsive padding scale"],
    related: ["features-section", "cta-section"],
  },
  "features-section": {
    description: "Three-column feature grid with icon tiles.",
    pluginFeatures: ["Icon registry", "Responsive grid (1 → 2 → 3 cols)"],
    related: ["hero-section", "how-it-works-section"],
  },
  "how-it-works-section": {
    description: "Two-column 'how it works' walkthrough built from step cards.",
    pluginFeatures: ["Nested card composition", "Numbered step rows"],
    related: ["how-it-works-card", "features-section"],
  },
  "how-it-works-card": {
    description: "A single eyebrow + title + numbered-steps card.",
    related: ["how-it-works-section"],
  },
  "faq-section": {
    description: "Accordion-based FAQ with an opened-item story.",
    pluginFeatures: ["Accordion open-state capture"],
    related: ["cta-section"],
  },
  "cta-section": {
    description: "Full-width primary-background call to action.",
    pluginFeatures: ["Inverse colour surface (bg-primary)"],
    related: ["hero-section"],
  },
  "comparison-table": {
    description: "Feature overview table with included-state icons.",
    pluginFeatures: ["Table layout chain", "Icon registry (check / cross)"],
    related: ["features-section"],
  },
  "compatibility-bar": {
    description: "Logo strip of compatible tools and frameworks.",
    pluginFeatures: ["Inline logo row"],
    related: ["hero-section"],
  },

  // Forms
  "signup-form": {
    description: "Composed auth form — inputs, labels, and a validation error state.",
    pluginFeatures: ["Form composition", "Error-state capture"],
    related: ["input"],
  },
};
