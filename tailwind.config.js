module.exports = {
  purge: ['./pages/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Anonymous Pro', 'Overpass', 'Roboto', 'sans-serif'],
        overpass: ['Overpass', 'Roboto', 'sans-serif']
      },
      colors: {
        'light-shade': '#f7f9fc',
        'light-blue': '#bfcbe8',
        'dark-blue': '#344f8d'
      },
      minHeight: {
        '3': '3rem'
      }
    }
  },
  variants: {},
  plugins: []
}
