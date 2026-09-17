# iKOOLCORE Wiki source

这是 iKOOLCORE Wiki 的可维护源码工程。界面层已经从旧的 LDesign 页面容器中独立出来，由 Vue 源码直接控制，避免重新构建后样式和交互丢失。

## 技术栈

- Vue 3
- TypeScript
- Vite 4
- Vue Router
- Markdown / PrismJS
- Less

## 界面能力

- 官方知识库品牌页头
- 产品、BIOS、支持文档分组导航
- 文档搜索，支持 Ctrl / Cmd + K
- 当前页章节目录与滚动高亮
- 阅读进度和预计阅读时间
- 中英文切换
- 深色模式
- 移动端目录与响应式布局
- 官方维护、版本、技术支持等信任信息

## 目录

- \`src/layout/Index.vue\`：站点布局、搜索、目录、主题与路由交互
- \`src/styles/index.less\`：完整视觉系统与响应式样式
- \`src/router/index.ts\`：路由生成
- \`env.config.ts\`：菜单和路由配置
- \`docs/v1.2/en/\`：英文文档
- \`docs/v1.2/zh/\`：中文文档
- \`tools/normalize-markdown.mjs\`：Markdown 标准化脚本

## 开发

\`\`\`powershell
npm install
npm run dev
\`\`\`

开发地址为：

\`\`\`text
http://127.0.0.1:12000/
\`\`\`

## 检查与构建

\`\`\`powershell
npm run typecheck
npx markdownlint-cli2 "docs/**/*.md"
npm run build
\`\`\`

构建结果位于：

\`\`\`text
source/dist/
\`\`\`

## 编辑文档

文档位于：

\`\`\`text
source/docs/v1.2/zh/
source/docs/v1.2/en/
\`\`\`

标准 Markdown 修改完成后，可以运行：

\`\`\`powershell
node tools/normalize-markdown.mjs
npm run build
\`\`\`
