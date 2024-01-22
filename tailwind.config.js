/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
        sm: '375px',
        md: '760px',
        lg: '982px',
        xl: '1024',
        },
      },
      fontFamily: {
        opensans: "Eveleth W03 Clean Regular"
      }
    },
  },
  plugins: [],
}