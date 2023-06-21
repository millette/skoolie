// npm
import { defineConfig, sharpImageService } from 'astro/config'
// import markdoc from '@astrojs/markdoc'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

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
    sitemap(),
    tailwind(),
  ],
})
