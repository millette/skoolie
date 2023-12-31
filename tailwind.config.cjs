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
          ...require("daisyui/src/theming/themes")["retro"],
          "info-content": "#EBF2FF",
        },
      },

      // 'retro',
      'luxury',
    ],
    darkTheme: 'luxury',
    logs: false,
  }
}

/*
fg: #EBF2FF (change this!)
bg: #2563EB
*/
