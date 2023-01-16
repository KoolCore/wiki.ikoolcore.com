import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from '@ldesign/auto-import/vite'
import Components from '@ldesign/vue-components/vite'
import { LDesignResolver } from '@ldesign/vue-components/resolvers'
import Markdown from 'vite-plugin-vue-markdown'
import MarkdownAnchor from 'markdown-it-anchor'
import MarkdownPrism from 'markdown-it-prism'
import MarkdownTableContent from 'markdown-it-table-of-contents'
import MarkdownMutiTable from 'markdown-it-multimd-table'
import MarkdownImgSize from 'markdown-it-imsize'
import MarkdownAttrs from 'markdown-it-attrs'
import uslug from 'uslug'
import string from 'string'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import viteCompression from 'vite-plugin-compression'

function legacySlugify(s: string) {
  return string(s).slugify().toString()
}

function slugify(s: string) {
  return uslug(s)
}

// https://vitejs.dev/config/
export default ({ mode }: any) => {
  const { DOC_DEV_PORT, DOC_BASE_DIR, DOC_ROUTER_MODE, DOC_TOC }: any = loadEnv(mode, process.cwd(), 'DOC')

  const isHash = DOC_ROUTER_MODE === 'hash'
  return defineConfig({
    base: isHash ? './' : DOC_BASE_DIR,
    envPrefix: 'DOC',
    server: {
      host: '0.0.0.0',
      port: DOC_DEV_PORT,
    },
    build: {
      emptyOutDir: false,
      chunkSizeWarningLimit: 500,
      outDir: './docs',
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/[name]-[hash].js',
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '~': path.resolve(__dirname, './'),
      },
    },
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
        template: {
          compilerOptions: {
            isCustomElement: tag => tag.startsWith('ldesign-') || tag.startsWith('td-') || tag.startsWith('ld-'),
          },
        },
      }),
      Markdown({
        headEnabled: true,
        markdownItOptions: {
          html: true,
          linkify: true,
          typographer: true,
        },
        markdownItUses: [
        ],
        markdownItSetup: (md) => {
          if (DOC_ROUTER_MODE === 'history' && DOC_TOC === 'true') {
            md.use(MarkdownAnchor, {
              permalinkSymbol: '#',
              slugify,
              legacySlugify,
            })
            md.use(MarkdownTableContent, {
              includeLevel: [2, 3],
            })
          }
          md.use(MarkdownMutiTable)
          md.use(MarkdownPrism)
          md.use(MarkdownImgSize)
          md.use(MarkdownAttrs)
        },
      }),
      AutoImport({
        resolvers: [
          LDesignResolver({
            library: 'desktop-next',
          }),
        ],
      }),
      Components({
        resolvers: [
          LDesignResolver({
            library: 'desktop-next',
          }),
        ],
      }),
      chunkSplitPlugin(),
      viteCompression(),
    ],
  })
}
