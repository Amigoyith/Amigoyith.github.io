// @ts-check
import { defineConfig } from 'astro/config';
import rehypeFigure from './src/plugins/rehype-figure.mjs';

export default defineConfig({
  site: 'https://xiyuanliuamy.com',
  markdown: {
    rehypePlugins: [rehypeFigure],
  },
});
