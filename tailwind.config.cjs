// npm
/** @type {import('tailwindcss').Config} */
const daisyui = require("daisyui")
const typography = require("@tailwindcss/typography")

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mdoc}"],
  plugins: [
    typography,
    daisyui,
  ],
  daisyui: {
    themes: [
      'retro',
      'luxury',
    ],
    darkTheme: 'luxury',
    logs: false,
  }
}
