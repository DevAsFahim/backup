/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#685CF0',
      'title-color': '#1E1E1E',
      'border-color': '#EAEAEA',
      'text-color': '#929292',
      'gray': '#F4F4F6',
      'black': '#000000',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray-light': '#d3dce6',
      'white': '#ffffff',
      'orange': '#F2994A',
      'green': '#4BB543',
      'red': '#FB3838',
    },
    extend: {
      spacing: {
        '30px': '30px',
        '25px': '25px',
        '22px': '22px',
        '17px': '17px',
        '16px': '16px',
        '15px': '15px',
        '13px': '13px',
        '12px': '12px',
        '10px': '10px',
      },
      borderRadius: {
        '5px': '5px',
        '6px': '6px',
        '10px': '10px',
        '8px': '8px',
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require("@tailwindcss/forms")
  ],
}
