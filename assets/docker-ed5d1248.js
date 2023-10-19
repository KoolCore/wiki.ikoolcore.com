import{A as s,e as t,f as d,g as c,i as e,j as r,C as l,h as i}from"./vendor-a79c0d81.js";import"./__commonjsHelpers__-725317a4.js";const h={class:"markdown-body"},g=l('<p class="block gray">Docker 是一个开源的容器化平台，它允许开发者将应用程序及其依赖项打包成一个可移植的镜像，然后在任何地方运行。Docker 容器是轻量级的，可以快速启动和停止，这使它们非常适合用于开发、测试和部署应用程序。</p><p><strong class="notice">Docker 的主要优势包括：</strong></p><ul><li>可移植性：Docker 容器可以运行在任何支持 Docker 的平台上，这使开发者可以轻松地将应用程序部署到不同的环境中。</li><li>可重复性：Docker 容器可以使用相同的镜像进行创建，这确保了应用程序在不同环境中运行的一致性。</li><li>可缩放性：Docker 容器可以轻松地扩展或缩减，这使开发者可以根据需要调整应用程序的资源使用。</li></ul><p><strong class="notice">Docker 的常见用途包括：</strong></p><ul><li>开发：Docker 可以用于开发和测试应用程序，因为它可以快速启动和停止容器。</li><li>部署：Docker 可以用于部署应用程序，因为它可以轻松地将应用程序部署到不同的环境中。</li><li>运维：Docker 可以用于运维应用程序，因为它可以帮助开发者和运维人员更好地管理应用程序。</li></ul><p class="notice">Docker 是一个强大的工具，可以帮助开发者和运维人员更有效地开发、测试和部署应用程序。</p><hr>',7),p=i("strong",null,"推荐的docker服务",-1),u=l('<br><table><thead><tr><th style="text-align:center;">Docker</th><th style="text-align:center;">用途</th><th style="text-align:center;">在线体验</th><th style="text-align:center;">GitHub/官网</th><th>Docker Pull Cammand</th></tr></thead><tbody><tr><td style="text-align:center;">alist</td><td style="text-align:center;">网盘挂载</td><td style="text-align:center;">-</td><td style="text-align:center;"><a href="https://github.com/alist-org/alist">GitHub</a> | <a href="https://alist.nn.ci/">官网</a></td><td><code>docker pull xhofe/alist</code></td></tr><tr><td style="text-align:center;">Vaultwarden</td><td style="text-align:center;">自托管密码管理</td><td style="text-align:center;">-</td><td style="text-align:center;"><a href="https://github.com/dani-garcia/vaultwarden">View</a></td><td><code>docker pull vaultwarden/server</code></td></tr><tr><td style="text-align:center;">OpenSpeedTest</td><td style="text-align:center;">内网测速</td><td style="text-align:center;">-</td><td style="text-align:center;"><a href="https://github.com/openspeedtest/Docker-Image">View</a></td><td><code>docker pull openspeedtest/latest</code></td></tr><tr><td style="text-align:center;">memos</td><td style="text-align:center;">自托管知识库</td><td style="text-align:center;">-</td><td style="text-align:center;"><a href="https://github.com/usememos/memos">GitHub</a> | <a href="https://usememos.com/">官网</a></td><td><code>docker pull neosmemo/memos</code></td></tr><tr><td style="text-align:center;">squoosh</td><td style="text-align:center;">图片压缩</td><td style="text-align:center;">-</td><td style="text-align:center;"><a href="https://github.com/GoogleChromeLabs/squoosh">View</a></td><td><code>docker pull dko0/squoosh</code></td></tr><tr><td style="text-align:center;">heimdall</td><td style="text-align:center;">导航页</td><td style="text-align:center;">-</td><td style="text-align:center;"><a href="https://github.com/linuxserver/Heimdall">View</a></td><td><code>docker pull linuxserver/heimdall</code></td></tr><tr><td style="text-align:center;">portainer</td><td style="text-align:center;">docker管理</td><td style="text-align:center;">-</td><td style="text-align:center;"><a href="https://github.com/portainer/portainer">GitHub</a> |<a href="https://www.portainer.io/">官网</a></td><td><a href="https://docs.portainer.io/start/install-ce/server/docker/linux">CE Installation</a></td></tr></tbody></table><p class="notice">以上docker程序均可以无忧部署在PVE下的Debian虚拟机上，俗称“套娃”。可用Portainer进行管理，也可以用 <strong>CasaOS</strong> 进行管理。</p>',3),D=[],w={__name:"docker",setup(m,{expose:a}){return a({frontmatter:{meta:[]}}),s({meta:[]}),(k,b)=>{const n=t("big"),o=t("center");return d(),c("div",h,[g,e(o,null,{default:r(()=>[e(n,null,{default:r(()=>[p]),_:1})]),_:1}),u])}}};export{w as default,D as meta};
