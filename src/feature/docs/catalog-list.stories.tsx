import type { Meta, StoryObj } from "@storybook/react";

import { CatalogList } from "./catalog-list";
import type { CatalogComponent } from "./catalog";

// The docs feature's catalogue list — a compact, left-aligned linked list
// used by the /docs hub. Stories pass representative CatalogComponent rows
// inline (not a const) so the Inkbridge scanner can trace the array through
// `CatalogList`'s `.map()` and render each row as a Figma frame.

const meta = {
  title: "Feature/Docs/CatalogList",
  component: CatalogList,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof CatalogList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        slug: "button",
        name: "Button",
        storyTitle: "UI/Button",
        group: "ui",
        category: "ui",
        stories: ["Default", "Variants"],
        importPath: "@/components/ui/button",
        source: "src/components/ui/button.tsx",
        description: "CVA variant matrix — variants and sizes in one component.",
        pluginFeatures: [],
        related: [],
      },
      {
        slug: "leverage-slider",
        name: "LeverageSlider",
        storyTitle: "Feature/Perps/LeverageSlider",
        group: "feature/perps",
        category: "feature",
        stories: ["Default", "WithMarks", "Disabled"],
        importPath: "@/feature/perps/components/LeverageSlider",
        source: "src/feature/perps/components/LeverageSlider.tsx",
        description: "Dual-mode range control with a synced number input.",
        pluginFeatures: [],
        related: [],
      },
      {
        slug: "increase-position-modal",
        name: "IncreasePositionModal",
        storyTitle: "Feature/Perps/IncreasePositionModal",
        group: "feature/perps",
        category: "feature",
        stories: ["OpenLong", "OpenShort", "Disconnected"],
        importPath: "@/feature/perps/components/IncreasePositionModal",
        source: "src/feature/perps/components/IncreasePositionModal.tsx",
        description: "Multi-state preview pane with an embedded leverage slider.",
        pluginFeatures: [],
        related: [],
      },
    ] satisfies CatalogComponent[],
  },
};
