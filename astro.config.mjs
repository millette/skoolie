// npm
import { defineConfig, sharpImageService } from 'astro/config'
import markdoc from '@astrojs/markdoc'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import prefetch from '@astrojs/prefetch'

export default defineConfig({
  site: 'https://bus.waglo.com',
  compressHTML: true,
  trailingSlash: 'always',
  experimental: {
    assets: true
  },
  image: {
    service: sharpImageService(),
  },  
  integrations: [
    markdoc(),
    prefetch({ selector: "a" }),
    sitemap(),
    tailwind(),
  ],
})
