/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  daisyui: {
    themes: ["lofi", "black"],
  },
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}

