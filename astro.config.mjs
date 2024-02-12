// npm
import { defineConfig } from 'astro/config'
import markdoc from '@astrojs/markdoc'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import solid from '@astrojs/solid-js'
import node from '@astrojs/node'

const site = 'https://bus.waglo.com'
const albumUnder = 'album/under/'
const defaultLocale = "fr"
const locales = {
  fr: 'fr-CA',
  en: 'en-CA',
}

const mode = 'standalone' // 'middleware'

export default defineConfig({
  site,
  output: 'hybrid',
  adapter: node({ mode }),
  // trailingSlash: 'always', // fails if "always"
  i18n: {
    defaultLocale,
    locales: Object.keys(locales),
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
        locales,
      },
      filter: (page) => !(
        page.startsWith(`${site}/en/${albumUnder}`) ||
        page.startsWith(`${site}/${albumUnder}`)
      ),
    }),
    tailwind(),
  ],
})
