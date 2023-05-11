/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fit, minmax(262px, 1fr))',
        'fluid-xl': 'repeat(auto-fill, minmax(262px, 1fr))',
        'fluid-borders': 'repeat(auto-fill, minmax(62px, 1fr))'
      },
      colors: {
        darkBlue: 'hsl(209, 23%, 22%)',
        darkModeBg: 'hsl(207, 26%, 17%)',
        lightModeText: 'hsl(200, 15%, 8%)',
        lightModeInput: 'hsl(0, 0%, 52%)',
        lightModeBg: 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}

