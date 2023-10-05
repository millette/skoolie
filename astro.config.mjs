// npm
// import { defineConfig, sharpImageService } from 'astro/config'
import { defineConfig } from 'astro/config'
import markdoc from '@astrojs/markdoc'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import prefetch from '@astrojs/prefetch'
import solid from '@astrojs/solid-js'

const site = 'https://bus.waglo.com'

export default defineConfig({
  site,
  compressHTML: true,
  trailingSlash: 'always',
  integrations: [
    markdoc(),
    solid(),
    prefetch({
      selector: "a[href$='/']", // only prefetch href ending with /
      throttle: 4,
    }),
    sitemap({
      filter: (page) => !page.startsWith(`${site}/en/album/under/`) && !page.startsWith(`${site}/album/under/`)
    }),
    tailwind(),
  ],
})
