/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['node_modules/preline/dist/*.js',
  './pages/**/*.{html,js}',
'./components/**/*.{html,js}',,
"./src/**/*.{html,js}",
"'*.{html,js}'"],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    'node_modules/preline/dist/*.js',
    './pages/**/*.{html,js}',
  './components/**/*.{html,js}',,
  "./src/**/*.{html,js}",
  "'*.{html,js}'"],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

