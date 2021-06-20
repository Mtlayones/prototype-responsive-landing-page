module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '20rem',
      md: '42rem',
      lg: '66rem',
      xl: '82rem',
      max: '99rem',
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
