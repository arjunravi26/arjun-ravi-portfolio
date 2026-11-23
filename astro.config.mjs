import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://arjun-ravi.vercel.app',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});