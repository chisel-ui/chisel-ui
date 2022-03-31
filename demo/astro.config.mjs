import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  buildOptions: {
    site: 'https://chisel-ui.dev'
  },
  integrations: [],
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});