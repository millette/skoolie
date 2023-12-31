// npm
import { defineConfig } from 'astro/config'
import markdoc from '@astrojs/markdoc'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import solid from '@astrojs/solid-js'
import node from '@astrojs/node'

const site = 'https://bus.waglo.com'

export default defineConfig({
  site,
  output: 'hybrid',
  adapter: node({ mode: 'standalone' }),
  compressHTML: true,
  trailingSlash: 'always',
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    markdoc(),
    solid({ include: ['**/solid/*'] }),
    sitemap({
      filter: (page) => !page.startsWith(`${site}/en/album/under/`) && !page.startsWith(`${site}/album/under/`)
    }),
    tailwind(),
  ],
})
