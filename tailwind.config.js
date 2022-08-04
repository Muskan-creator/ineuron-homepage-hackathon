/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screeens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'

    },
    extend: {
      colors: {
        'regal-blue': '#340654',
      },
    },
  },
  plugins: [],
}
