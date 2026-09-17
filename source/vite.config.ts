import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-vue-markdown'
import MarkdownPrism from 'markdown-it-prism'
import MarkdownMutiTable from 'markdown-it-multimd-table'
import MarkdownImgSize from 'markdown-it-imsize'
import MarkdownAttrs from 'markdown-it-attrs'
import viteCompression from 'vite-plugin-compression'

export default ({ mode }: any) => {
  const { DOC_DEV_PORT, DOC_BASE_DIR, DOC_ROUTER_MODE }: any = loadEnv(mode, process.cwd(), 'DOC')
  const isHash = DOC_ROUTER_MODE === 'hash'

  return defineConfig({
    base: isHash ? './' : DOC_BASE_DIR,
    envPrefix: 'DOC',
    server: {
      host: '0.0.0.0',
      port: Number(DOC_DEV_PORT || 12000),
    },
    build: {
      emptyOutDir: true,
      chunkSizeWarningLimit: 700,
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/[name]-[hash].js',
          manualChunks(id) {
            if (id.includes('node_modules/vue') || id.includes('node_modules/@vue'))
              return 'vue-vendor'
            if (id.includes('markdown-it') || id.includes('prismjs') || id.includes('uslug'))
              return 'markdown-vendor'
          },
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
      }),
      Markdown({
        headEnabled: false,
        markdownItOptions: {
          html: true,
          linkify: true,
          typographer: true,
        },
        markdownItSetup: (md) => {
          md.use(MarkdownMutiTable)
          md.use(MarkdownPrism)
          md.use(MarkdownImgSize)
          md.use(MarkdownAttrs)
        },
      }),
      viteCompression(),
    ],
  })
}
