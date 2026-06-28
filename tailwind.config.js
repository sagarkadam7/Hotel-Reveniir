/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        magenta: { DEFAULT: '#E0157A', light: '#F0309A', dark: '#A50D58' },
        navy: { DEFAULT: '#1A2B6D', light: '#2A3F9D' },
        gold: { DEFAULT: '#B8923A', light: '#D4A84B' },
        cream: { DEFAULT: '#FAF7F2', dark: '#F0EBE3' },
        resort: { dark: '#12100E', mid: '#2A2420', muted: '#7A6E65', black: '#0A0806' },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Jost', 'system-ui', 'sans-serif'],
      },
      screens: { xs: '480px' },
    },
  },
  plugins: [],
}
