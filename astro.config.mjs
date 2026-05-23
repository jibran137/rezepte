import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rezepte.example',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
