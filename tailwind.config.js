/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        boxShadow: {
          myShadow1: "4.1px -5px 0 0 rgb(17,24,39)",
          myShadow2: "-4.1px -5px 0 0 rgb(17,24,39)",
        },
      },
    },
  plugins: [],
}