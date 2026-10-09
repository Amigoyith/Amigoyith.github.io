// @ts-check
import { defineConfig } from 'astro/config';
import rehypeFigure from './src/plugins/rehype-figure.mjs';

export default defineConfig({
  site: 'https://xiyuanliuamy.com',
  // Old project URLs, kept working after pages moved under course pages.
  redirects: {
    '/projects/physics-engine': '/projects/microprocessor-systems/final-project/',
    '/projects/keypad-display': '/projects/microprocessor-systems/lab-3/',
    '/projects/iot-temperature': '/projects/microprocessor-systems/lab-6/',
    '/projects/digital-audio': '/projects/microprocessor-systems/lab-4/',
    '/projects/motor-encoder': '/projects/microprocessor-systems/lab-5/',
    '/projects/multicycle-cpu': '/projects/circuit-design/multicycle-cpu/',
    '/projects/multicycle-cpu/lab-10': '/projects/circuit-design/multicycle-cpu/lab-10/',
    '/projects/multicycle-cpu/lab-11': '/projects/circuit-design/multicycle-cpu/lab-11/',
  },
  markdown: {
    rehypePlugins: [rehypeFigure],
  },
});
