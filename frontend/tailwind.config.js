/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'container': '1370px',
      },
      fontFamily: {
        'roboto': ['Roboto'],
        'pop': ['Poppins']
      },
      colors: {
        'primary': '#081621',
      },
    },
  },
  plugins: [],
}

