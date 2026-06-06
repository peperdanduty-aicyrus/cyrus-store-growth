import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#10243F',
        pine: '#145A4A',
        moss: '#2F7D67',
        cloud: '#F4F7F6',
        line: '#DDE6E2'
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif'
        ]
      },
      boxShadow: {
        soft: '0 18px 45px rgba(16, 36, 63, 0.09)'
      }
    }
  },
  plugins: [typography]
};
