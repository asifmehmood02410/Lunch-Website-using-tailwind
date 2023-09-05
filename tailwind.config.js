/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },

      gridAutoColumns: {
        'calc((100%) / 3)': 'calc((100%) / 3)',
      }
      
    },
  },
  plugins: [],
}

