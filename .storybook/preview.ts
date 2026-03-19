import type { Preview } from '@storybook/nextjs-vite'
import '../src/app/globals.css'

// Set by main.ts env() — lists every root-level brand class found in globals.css.
const brandThemes: string[] = process.env.STORYBOOK_BRAND_THEMES
  ? JSON.parse(process.env.STORYBOOK_BRAND_THEMES)
  : [];

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const preview: Preview = {
  globalTypes: {
    // Only show the Brand toolbar when globals.css defines at least one brand theme
    ...(brandThemes.length > 0 && {
      brand: {
        name: 'Brand',
        description: 'Brand theme variant',
        defaultValue: 'primary',
        toolbar: {
          icon: 'paintbrush',
          items: [
            { value: 'primary', title: 'Primary' },
            ...brandThemes.map((t) => ({ value: t, title: capitalize(t) })),
          ],
          dynamicTitle: true,
        },
      },
    }),
  },

  decorators: [
    (Story, context) => {
      const brand = (context.globals['brand'] as string) || 'primary';
      const html = document.documentElement;

      // Brand: remove all known brand classes, then apply the selected one
      for (const t of brandThemes) html.classList.remove(t);
      if (brand !== 'primary') html.classList.add(brand);

      // Font CSS variables — next/font sets these via className on <html> in
      // Next.js, but Storybook bypasses the layout so we set them manually here.
      html.style.setProperty('--font-open-sans', '"Open Sans", ui-sans-serif, system-ui, sans-serif');
      html.style.setProperty('--font-inter', '"Inter", ui-sans-serif, system-ui, sans-serif');
      html.style.setProperty('--font-playfair', '"Playfair Display", Georgia, serif');
      html.style.setProperty('--font-geist-mono', '"Geist Mono", ui-monospace, monospace');

      return Story();
    },
  ],

  parameters: {
    // globals.css drives the canvas background via bg-background
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: 'todo' },
  },
};

export default preview;
