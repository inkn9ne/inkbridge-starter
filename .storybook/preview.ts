import type { Preview } from '@storybook/nextjs-vite'
import '../src/app/globals.css'

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Light or dark mode',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
    brand: {
      name: 'Brand',
      description: 'Brand theme variant',
      defaultValue: 'primary',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'primary', title: 'Primary' },
          { value: 'secondary', title: 'Secondary' },
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals['theme'] as string;
      const brand = context.globals['brand'] as string;
      const html = document.documentElement;

      // Apply theme classes
      html.classList.toggle('dark', theme === 'dark');
      html.classList.toggle('secondary', brand === 'secondary');

      // Set font CSS variables that next/font normally injects via className on <html>
      html.style.setProperty('--font-open-sans', '"Open Sans", ui-sans-serif, system-ui, sans-serif');
      html.style.setProperty('--font-inter', '"Inter", ui-sans-serif, system-ui, sans-serif');
      html.style.setProperty('--font-playfair', '"Playfair Display", Georgia, serif');
      html.style.setProperty('--font-geist-mono', '"Geist Mono", ui-monospace, monospace');

      return Story();
    },
  ],

  parameters: {
    // Let globals.css control the background via bg-background
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
