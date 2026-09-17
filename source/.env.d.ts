/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly DOC_BASE_DIR: string
  readonly DOC_ROUTER_MODE: 'hash' | 'history'
  readonly DOC_DEV_PORT: string
  readonly DOC_TITLE: string
  readonly DOC_LOGO: string
  readonly DOC_GITALK: string
  readonly DOC_GITHUB_CLIENTID: string
  readonly DOC_GIHUB_CLIENT_SECRET: string
  readonly DOC_GITHUB_REPO: string
  readonly DOC_GITHUB_OWNER: string
  readonly DOC_GITHUB_ADMIN: string
  readonly DOC_LANGUAGE: string
  readonly DOC_NAVIGATIONS: string
  readonly DOC_TOC: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
