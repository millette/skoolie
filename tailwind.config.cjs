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
      {
        retro: {
          ...require('daisyui/src/theming/themes')['[data-theme=retro]'],
          "info-content": "hsl(235 98% 98%)",
          "success-content": "hsl(235 100% 100%)",
          "--su": "120 75% 27%",
          "--bc": "",
        }
      },
      'luxury',
    ],
    darkTheme: 'luxury',
    logs: false,
  }
}
