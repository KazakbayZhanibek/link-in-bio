import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { Resvg } from '@resvg/resvg-js'
import { fileURLToPath } from 'node:url'
import App from './src/App'
import { page } from './src/config'
import { publicLink } from './src/links'

const escape = (text: string) => text.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]!)
const publishedUrl = publicLink(process.env.SITE_URL ?? page.meta.publishedUrl)
const siteUrl = publishedUrl?.startsWith('https:') ? publishedUrl.replace(/\/?$/, '/') : undefined
const imageUrl = siteUrl ? new URL('social-preview.png', siteUrl).href : './social-preview.png'

export default defineConfig({
  base: './',
  plugins: [
    react(),
    {
      name: 'personal-page-static-content',
      transformIndexHtml: {
        order: 'pre',
        handler(html) {
          return html.replace('<!--page-content-->', renderToStaticMarkup(createElement(App))).replace('<!--page-meta-->', `
    <title>${escape(page.meta.title)}</title>
    <meta name="description" content="${escape(page.meta.description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="ru_RU" />
    <meta property="og:title" content="${escape(page.meta.title)}" />
    <meta property="og:description" content="${escape(page.meta.description)}" />
    <meta property="og:image" content="${escape(imageUrl)}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escape(page.meta.imageAlt)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escape(page.meta.title)}" />
    <meta name="twitter:description" content="${escape(page.meta.description)}" />
    <meta name="twitter:image" content="${escape(imageUrl)}" />
    <meta name="twitter:image:alt" content="${escape(page.meta.imageAlt)}" />
    ${siteUrl ? `<link rel="canonical" href="${escape(siteUrl)}" /><meta property="og:url" content="${escape(siteUrl)}" />` : ''}`)
        },
      },
      configureServer(server) {
        server.middlewares.use('/social-preview.png', (_request, response) => {
          response.setHeader('Content-Type', 'image/png')
          response.end(sharingImage())
        })
      },
      generateBundle() {
        this.emitFile({ type: 'asset', fileName: 'social-preview.png', source: sharingImage() })
      },
    },
  ],
})

function sharingImage() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#f3e6d2"/>
    <rect x="20" y="20" width="1160" height="590" fill="#7a0f19"/>
    <text x="76" y="208" font-family="Unbounded" font-size="105" font-weight="800" letter-spacing="-4" fill="#f3e6d2">${escape(page.name.toUpperCase())}</text>
    ${page.meta.previewLines.map((line, index) => `<text x="80" y="${302 + index * 53}" font-family="Unbounded" font-size="30" font-weight="800" fill="#f3e6d2">${escape(line)}</text>`).join('')}
    <rect x="20" y="451" width="1160" height="159" fill="#edb92f"/>
    <text x="80" y="546" font-family="Unbounded" font-size="38" font-weight="800" fill="#7a0f19">${escape(page.navigationLabel)}</text>
    <path d="M1030 555 1100 485M1030 485h70v70" fill="none" stroke="#7a0f19" stroke-width="8"/>
  </svg>`
  return new Resvg(svg, { font: { fontFiles: [fileURLToPath(new URL('./tools/unbounded-800.ttf', import.meta.url))], loadSystemFonts: false } }).render().asPng()
}
