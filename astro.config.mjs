// npm
import { defineConfig } from 'astro/config'
import markdoc from '@astrojs/markdoc'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import solid from '@astrojs/solid-js'

const site = 'https://bus.waglo.com'

export default defineConfig({
  site,
  compressHTML: true,
  trailingSlash: 'always',
  integrations: [
    markdoc(),
    solid(),
    sitemap({
      filter: (page) => !page.startsWith(`${site}/en/album/under/`) && !page.startsWith(`${site}/album/under/`)
    }),
    tailwind(),
  ],
})
