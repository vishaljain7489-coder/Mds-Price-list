/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        crimson: '#C8102E',
        greySoft: '#CCC5C4',
        cardDark: '#171919',
        theme: {
          dark: '#0A0A0A',
          card: '#171919',
          accent: '#C8102E',
          soft: '#CCC5C4',
          surface: '#FFFFFF',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        body: ['"Space Grotesk"', '"Inter"', 'system-ui', 'sans-serif'],
        sans: ['"Space Grotesk"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'crimson-glow': '0 0 35px rgba(200, 16, 46, 0.45)',
        'crimson-edge': '0 0 0 1px rgba(200, 16, 46, 0.4)',
        'card-dark': '0 20px 40px -10px rgba(0, 0, 0, 0.7)',
      }
    },
  },
  plugins: [],
}
