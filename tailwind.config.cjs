/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'concert-one': ['"Concert One"', 'cursive'],
      },
    },
  },
  plugins: [],
}
