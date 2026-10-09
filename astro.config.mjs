// @ts-check
import { defineConfig } from 'astro/config';
import rehypeFigure from './src/plugins/rehype-figure.mjs';

export default defineConfig({
  site: 'https://xiyuanliuamy.com',
  // Old E155 project URLs, kept working after the labs moved under the course page.
  redirects: {
    '/projects/physics-engine': '/projects/microprocessor-systems/final-project/',
    '/projects/keypad-display': '/projects/microprocessor-systems/lab-3/',
    '/projects/iot-temperature': '/projects/microprocessor-systems/lab-6/',
    '/projects/digital-audio': '/projects/microprocessor-systems/lab-4/',
    '/projects/motor-encoder': '/projects/microprocessor-systems/lab-5/',
  },
  markdown: {
    rehypePlugins: [rehypeFigure],
  },
});
