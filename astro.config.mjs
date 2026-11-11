import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { lastmodByUrl } from './scripts/lastmod.mjs';
import { rehypeScopeHeadingIds } from './scripts/rehype-scope-heading-ids.mjs';

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
  markdown: {
    rehypePlugins: [rehypeScopeHeadingIds],
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
