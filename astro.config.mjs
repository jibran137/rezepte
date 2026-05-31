import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jibran137.github.io',
  base: '/rezepte',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
