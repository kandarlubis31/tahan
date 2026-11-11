import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { lastmodByUrl } from './scripts/lastmod.mjs';

export default defineConfig({
  site: 'https://tahan-five.vercel.app',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404/'),
      serialize: (item) => {
        const lastmod = lastmodByUrl.get(item.url);
        return lastmod ? { ...item, lastmod } : item;
      },
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
