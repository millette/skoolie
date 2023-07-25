// npm
import { defineConfig, sharpImageService } from 'astro/config'
import markdoc from '@astrojs/markdoc'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import prefetch from '@astrojs/prefetch'

const site = 'https://bus.waglo.com'

export default defineConfig({
  site,
  compressHTML: true,
  trailingSlash: 'always',
  experimental: {
    assets: true,
    viewTransitions: true,
  },
  image: {
    service: sharpImageService(),
  },  
  integrations: [
    markdoc(),
    prefetch({ selector: "a" }),
    sitemap({
      filter: (page) => !page.startsWith(`${site}/en/album/under/`) && !page.startsWith(`${site}/album/under/`)
    }),
    tailwind(),
  ],
})
