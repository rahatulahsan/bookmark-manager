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
    "./node_modules/flowbite/**/*.js",
    'node_modules/preline/dist/*.js',
    './pages/**/*.{html,js}',
  './components/**/*.{html,js}',,
  "./src/**/*.{html,js}",
  "'*.{html,js}'"],
  theme: {
    extend: {
      colors:{
        bkblue: '#5368df',
        bkdarkblue : '#252b46',
        bkred : '#fa5757'
      },
      fontFamily :{
        serif : ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [
    require('preline/plugin'),
    require('flowbite/plugin')
  ],
}

