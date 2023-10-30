/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      screens: {
        'split': { 'max': '800px' },
        'mobile': { 'max': '1200px' }
      },
      fontFamily: {
        Yekan: "Yekan"
      },
      boxShadow: {
        'lg': '0 0.625rem 0.938rem -0.188rem rgb(0 0 0 / 0.1), 0 0.25rem 0.375rem -0.25rem rgb(0 0 0 / 0.1)',
        'md': '0 0.25rem 0.375rem -0.063rem rgb(0 0 0 / 0.1), 0 0.125rem 0.25rem -0.125rem rgb(0 0 0 / 0.1)',
        'sm': 'box-shadow: 0 0.063rem 0.125rem 0 rgb(0 0 0 / 0.05)'
      }
    },
  },
  plugins: [],
}

