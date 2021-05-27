module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        120: '30rem',
        160: '40rem',
      },
      colors: {
        brand: {
          light: '#76b3e8',
          DEFAULT: '#64a6d4',
          dark: '#4c91ba',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
