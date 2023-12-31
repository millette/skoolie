// npm
import { defineConfig } from 'astro/config'
import markdoc from '@astrojs/markdoc'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import solid from '@astrojs/solid-js'
import node from '@astrojs/node'

const site = 'https://bus.waglo.com'
const defaultLocale = "fr"
const albumUnder = 'album/under/'

export default defineConfig({
  site,
  output: 'hybrid',
  adapter: node({ mode: 'standalone' }),
  compressHTML: true,
  trailingSlash: 'always',
  i18n: {
    defaultLocale,
    locales: [defaultLocale, "en"],
      routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    markdoc(),
    solid({ include: ['**/solid/*'] }),
    sitemap({
      i18n: {
        defaultLocale,
        locales: {
          fr: 'fr-CA', // The `defaultLocale` value must present in `locales` keys
          en: 'en-CA',
        },
      },
      filter: (page) => !(
        page.startsWith(`${site}/en/${albumUnder}`) ||
        page.startsWith(`${site}/${albumUnder}`)
      ),
    }),
    tailwind(),
  ],
})
