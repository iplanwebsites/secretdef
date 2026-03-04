import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  external: ['secretdef'],
  banner: {
    js: `try { require.resolve('secretdef'); } catch (_) { if (typeof require !== 'undefined') { throw new Error('"secretdef" is required as a peer dependency. Run: npm install secretdef@latest'); } }`,
  },
});
