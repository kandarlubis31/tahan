import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tahan-five.vercel.app',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404/'),
    }),
  ],
  build: {
    format: 'directory',
    inlineStylesheets: 'always',
  },
  devToolbar: {
    enabled: false,
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
