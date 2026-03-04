import { defineConfig } from 'vite';
import vike from 'vike/plugin';

export default defineConfig({
  plugins: [vike({ prerender: true })],
  server: {
    port: 5188,
  },
});
