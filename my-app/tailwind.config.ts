import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        navy: '#1A2B4A',
        cream: '#F5F3F0',
        charcoal: '#2C3E50',
        lightgray: '#E8E6E3'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config;