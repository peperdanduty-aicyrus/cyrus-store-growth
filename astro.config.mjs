import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://81366776.xyz',
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ],
  output: 'static'
});
