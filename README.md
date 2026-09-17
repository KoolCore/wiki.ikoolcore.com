# iKOOLCORE Wiki

本仓库包含两个部分：

## 1. 发布目录

仓库根目录是直接部署到 GitHub Pages 的静态发布产物：

- \`index.html\`
- \`assets/\`
- \`manifest.webmanifest\`
- \`robots.txt\`
- \`sitemap.xml\`

本地预览：

\`\`\`powershell
python -m http.server 8088 --bind 127.0.0.1
\`\`\`

访问：

\`\`\`text
http://127.0.0.1:8088/
\`\`\`

## 2. 可编译源码

\`source/\` 是从 Git 历史和当前发布产物恢复出的 Vue 3 + Vite 源码工程。

进入源码目录：

\`\`\`powershell
cd source
npm install
npm run dev
\`\`\`

开发地址：

\`\`\`text
http://127.0.0.1:12000/
\`\`\`

重新构建：

\`\`\`powershell
npm run build
\`\`\`

生成结果位于 \`source/dist/\`。

## 修改文档

当前 v1.2 文档位于：

\`\`\`text
source/docs/v1.2/zh/
source/docs/v1.2/en/
\`\`\`

修改文档后重新执行：

\`\`\`powershell
cd source
npm run build
\`\`\`

如果需要替换仓库根目录的线上版本，应将 \`source/dist/\` 中的构建结果同步到仓库根目录，而不是直接长期修改已编译的 \`assets/\` 文件。
