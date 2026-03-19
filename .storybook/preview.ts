import type { Preview } from '@storybook/nextjs-vite'
import '../src/app/globals.css'
// Import globals.css as raw text so we can parse theme names at runtime.
// Vite's ?raw suffix is supported natively — no plugin needed.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import globalsRaw from '../src/app/globals.css?raw'

function discoverThemes(css: string): string[] {
  const seen = new Set<string>();
  for (const m of css.matchAll(/^\.([a-z][a-z0-9-]*)\s*\{/gm)) {
    const name = m[1];
    if (name && name !== 'dark') seen.add(name);
  }
  return Array.from(seen);
}

const themes = discoverThemes(globalsRaw as string);
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Active theme',
      defaultValue: 'default',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'default', title: 'Default' },
          ...themes.map((t) => ({ value: t, title: capitalize(t) })),
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme = (context.globals['theme'] as string) || 'default';
      const html = document.documentElement;

      // Remove all discovered theme classes, then apply the selected one
      for (const t of themes) html.classList.remove(t);
      if (theme !== 'default') html.classList.add(theme);

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
