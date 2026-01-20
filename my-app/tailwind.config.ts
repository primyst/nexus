import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        navy: '#1A2B4A',
        teal: '#0D9488',
        cream: '#F5F3F0',
      },
    },
  },
  plugins: [],
};

export default config;
