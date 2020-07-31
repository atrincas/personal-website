module.exports = {
  purge: ['./pages/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Anonymous Pro', 'Ubuntu', 'Roboto', 'sans-serif'],
        ubuntu: ['Ubuntu', 'Roboto', 'sans-serif']
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
