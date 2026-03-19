import type { StorybookConfig } from '@storybook/nextjs-vite';
import { readFileSync } from 'fs';
import { resolve } from 'path';

/**
 * Scan globals.css for root-level single-class selectors that represent brand
 * themes — e.g. `.secondary { ... }` or `.blue { ... }`.
 * Excludes `.dark` (handled separately as light/dark toggle).
 * Compound selectors like `.dark.secondary` are ignored automatically because
 * they don't match the "single class followed immediately by {" pattern.
 */
function discoverBrandThemes(): string[] {
  try {
    const css = readFileSync(resolve(process.cwd(), 'src/app/globals.css'), 'utf-8');
    const seen = new Set<string>();
    for (const m of css.matchAll(/^\.([a-z][a-z0-9-]*)\s*\{/gm)) {
      const name = m[1];
      if (name && name !== 'dark') seen.add(name);
    }
    return seen.size > 0 ? Array.from(seen) : [];
  } catch {
    return [];
  }
}

const brandThemes = discoverBrandThemes();

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
  ],
  framework: '@storybook/nextjs-vite',
  staticDirs: ['../public'],
  viteFinal: (viteConfig) => {
    viteConfig.define = Object.assign({}, viteConfig.define, {
      __STORYBOOK_BRAND_THEMES__: JSON.stringify(brandThemes),
    });
    return viteConfig;
  },
};

export default config;
