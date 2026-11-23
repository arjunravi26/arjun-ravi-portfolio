import { defineConfig } from 'astro/config';

// Static output only: no server adapter, database, or runtime API is needed.
// Set SITE_URL to your final public domain when you have one.
export default defineConfig({
  site: process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined),
  output: 'static',
  trailingSlash: 'always',
});
