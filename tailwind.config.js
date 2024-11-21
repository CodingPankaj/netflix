/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': 'rgb(229, 9, 20)',
        'hover-red': 'rgb(193,17,25)',
        'color-grey': 'rgb(45, 45, 45)',
        'hover-grey': 'rgb(63, 63, 63)',
        'semi-white': 'RGBA(255, 255, 255, 0.7)',
      },
      screens: {
        '2xl': '1920px',
        'xl': '1280px',
        'lg': '960px',
        'md': '600px',
        'sm': '310px',
      },
      padding: {
        'sm': '24px',
        'md': '32px',
        'lg': '80px',
        'xl': '148px',
        '2xl': '354px',
      },
    },
  },
  plugins: [],
}
