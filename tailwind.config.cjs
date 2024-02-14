// npm
/** @type {import('tailwindcss').Config} */
const daisyui = require("daisyui")
const typography = require("@tailwindcss/typography")
const animate = require("tailwindcss-animated")

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mdoc}"],
  plugins: [
    typography,
    daisyui,
    animate,
  ],
  daisyui: {
    themes: [
      {
        retro: {
          ...require('daisyui/src/theming/themes')['[data-theme=retro]'],
          "info-content": "hsl(235 98% 98%)",
          "--bc": "",
        }
      },
      'luxury',
    ],
    darkTheme: 'luxury',
    logs: false,
  }
}
