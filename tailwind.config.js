/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:{
        950:"#101720",
        951:"rgb(16 21 43)"
        },
        secondry:{
          950:"#FDFDFD"
        },
        thirdy:{
          50:"#c69"
        }
      }
    },
  },
  plugins: [],
}

