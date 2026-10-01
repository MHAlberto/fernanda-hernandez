import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import 'dotenv/config';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://nube-serena.com',
  integrations: [sitemap({ filter: page => !page.includes('/aviso-de-privacidad/') })],
  vite: { plugins: [tailwindcss()] },
});
