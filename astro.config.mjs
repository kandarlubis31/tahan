import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tahan-five.vercel.app',
  output: 'static',
  build: {
    format: 'directory',
  },
  devToolbar: {
    enabled: false,
  },
});
