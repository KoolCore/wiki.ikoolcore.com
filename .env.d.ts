/// <reference types="vite/client" />

export interface ImportMetaEnv {
  readonly DOC_BASE_DIR: string
  readonly DOC_ROUTER_MODE: string
  readonly DOC_DEV_PORT: number
  readonly DOC_TITLE: string
  readonly DOC_LOGO: string
  readonly DOC_LANGUAGE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}