import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://studiotonn.com.br', // mantenha igual a site.url em src/content/site.ts
  build: {
    // CSS embutido no HTML: um pedido a menos no carregamento
    inlineStylesheets: 'always',
  },
});
