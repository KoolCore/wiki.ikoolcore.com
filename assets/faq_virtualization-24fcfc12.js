import{A as o,f as s,g as a,C as e}from"./vendor-a79c0d81.js";import"./__commonjsHelpers__-725317a4.js";const n={class:"markdown-body"},r=e('<p class="block grey"><strong>Proxmox VE 底层虚拟机的安装</strong></p><p class="notice">扫盲：为什么要安装 Proxmox VE（俗称 <strong>PVE</strong>）？因为 R2 和 R2 Max 只是一台物理机，如果按照我们常规玩转PC机的经验，我们可以在上面安装 Windows, Debian, CentOS, Ubuntu 等都没有问题，但多网口设备当然是为了将其作为家庭网络中枢控制设备。肯定不是为了安装单一物理机使用的。要在 硬酷设备上安装多个操作系统，充分榨干硬件性能，那么当然就需要借助虚拟机技术了。</p><p><img src="https://cdn.shopify.com/s/files/1/0696/1555/0751/files/2024-09-25_16-58-11.webp" alt=""></p><p class="notice">如果你可以想像上面一样修改你的Proxmox VE的Dashborad面板显示处理器信息和温度，那么你可以使用我们的开源脚本<a href="https://github.com/KoolCore/Proxmox_VE_Status">点击查看脚本和使用方法</a>。</p><p class="block grey"><strong>为什么不推荐VMware ESXi</strong></p><p>ESXi是商业软件，其对硬件的支持度较差，官方ISO无法原生支持R2上的Realtek 8125B(G)网卡，也不支持较新的硬件，例如R2Max上的Marvell AQC113C-B1-C；在被博通收购后，ESXi的前景目前也不太明确。基于尊重商业软件和对硬件的兼容性角度，我们不推荐在我们的产品上安装ESXi，同时也不提供任何技术支持。</p><p class="block grey"><strong>教程集合</strong></p><ul><li><p><a href="https://allinone.quickso.cn/docs/install/pve-install">「PVE安装教程」</a> 、<a href="https://post.smzdm.com/p/akle62mk/">「PVE8最新安装使用指南」</a></p></li><li><p>推荐学习资源：<a href="https://allinone.quickso.cn/">All-in-One 搞基手册</a></p></li></ul>',8),l=[r],f=[],g={__name:"faq_virtualization",setup(c,{expose:t}){return t({frontmatter:{meta:[]}}),o({meta:[]}),(m,h)=>(s(),a("div",n,l))}};export{g as default,f as meta};
