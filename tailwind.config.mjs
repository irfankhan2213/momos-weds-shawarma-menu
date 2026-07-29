/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0A0A0C',
        cardBg: '#141418',
        cardHover: '#1C1C22',
        fireRed: '#C1121F',
        fireRedLight: '#E63946',
        vegGreen: '#22C55E',
        nonvegRed: '#EF4444',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', '-apple-system', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
