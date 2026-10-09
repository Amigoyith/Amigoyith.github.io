// @ts-check
import { defineConfig } from 'astro/config';
import rehypeFigure from './src/plugins/rehype-figure.mjs';

export default defineConfig({
  site: 'https://xiyuanliuamy.com',
  // Old per-lab E155 pages were merged into one page; keep their links working.
  redirects: {
    '/projects/physics-engine': '/projects/microprocessor-systems/#final-project-interactive-2d-physics-engine',
    '/projects/keypad-display': '/projects/microprocessor-systems/#keypad-scanner-and-multiplexed-display',
    '/projects/iot-temperature': '/projects/microprocessor-systems/#iot-temperature-sensor-and-web-server',
    '/projects/digital-audio': '/projects/microprocessor-systems/#digital-audio-player',
    '/projects/motor-encoder': '/projects/microprocessor-systems/#motor-speed-measurement-with-interrupts',
  },
  markdown: {
    rehypePlugins: [rehypeFigure],
  },
});
