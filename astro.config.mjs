// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jonkappa.netlify.app',
  integrations: [vue()],
  // Projects and Contact are now sections of the home page.
  redirects: {
    '/projects': '/#projects',
    '/contact': '/#contact',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
