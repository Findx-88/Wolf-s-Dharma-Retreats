/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        forest: {
          DEFAULT: '#0d1a0d',
          50: '#eef3ee',
          100: '#d5e2d5',
          200: '#adc9ad',
          300: '#7eab7e',
          400: '#538b53',
          500: '#386f38',
          600: '#2b582b',
          700: '#244624',
          800: '#1e381e',
          900: '#192e19',
          950: '#0d1a0d',
        },
        parchment: {
          DEFAULT: '#f7f3e8',
          50: '#fcfbfa',
          100: '#f7f3e8',
          200: '#eee6cf',
          300: '#e3d4ae',
          400: '#d5be86',
          500: '#c7a762',
          600: '#b88d4c',
          700: '#9b713e',
          800: '#805d37',
          900: '#684d2f',
          950: '#3a2a18',
        },
        ochre: '#d49a42',
        rust: '#a8412b',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-eb-garamond)'],
      },
    },
  },
  plugins: [],
};
