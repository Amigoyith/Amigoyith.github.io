// @ts-check
import { defineConfig } from 'astro/config';
import rehypeFigure from './src/plugins/rehype-figure.mjs';

export default defineConfig({
  site: 'https://amigoyith.github.io',
  markdown: {
    rehypePlugins: [rehypeFigure],
  },
});
