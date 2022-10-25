/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'concert-one': ['"Concert One"', 'cursive'],
      },
      boxShadow: {
        'clay': 'inset -0.6em -0.6em 1em rgba(30, 41, 59, 0.6), inset 0.4em 0.4em 0.5em rgba(226, 232, 240, 0.6)',
      }
    },
  },
  plugins: [],
}
