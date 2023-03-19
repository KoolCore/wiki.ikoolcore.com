import{A as e,f as a,e as o,C as l}from"./vendor-a7b6b0c4.js";import"./__commonjsHelpers__-725317a4.js";const i={class:"markdown-body"},r=l('<p class="block grey"><strong>1. 如何物理安装OpenWRT/iKuai等路由系统</strong></p><p class="notice">本教程适用于所有X86架构的多网口小主机。</p><ul><li><p>刷系统前准备：</p><ul><li><p>固件：</p><table><thead><tr><th style="text-align:center;">系统</th><th style="text-align:center;">OpenWRT</th><th style="text-align:center;">iKuai</th><th style="text-align:center;">pfSense</th></tr></thead><tbody><tr><td style="text-align:center;">特色</td><td style="text-align:center;">丰富的开源插件生态</td><td style="text-align:center;">优秀的流控功能</td><td style="text-align:center;">出自netgate，国际著名路由防火墙产品</td></tr><tr><td style="text-align:center;">镜像下载</td><td style="text-align:center;"><a href="https://openwrt.club/dl">eSir playground</a><br><a href="https://github.com/SuLingGG/OpenWrt-Buildbot">SuLingGG</a><br><a href="https://fw.koolcenter.com/iStoreOS/">iStoreOS</a><br><a href="https://github.com/xiaoqingfengATGH/HomeLede">HomeLede</a><br><strong><a href="https://drive.google.com/drive/folders/1viFp9ETluHRILpnXPcpsWsiSAEsJJt-9?usp=share_link">iKOOLCORE R1专属固件</a></strong></td><td style="text-align:center;"><a href="https://www.ikuai8.com/component/download">官网下载</a></td><td style="text-align:center;"><a href="https://www.pfsense.org/download/">官方下载</a></td></tr></tbody></table></li></ul><p class="notice">英特尔11代以后处理器仅支持UEFI启动，建议下载带有UEFI支持的镜像文件，镜像文件需要解压为<code>img</code>格式结尾的文件。</p><ul><li>硬盘转接卡：</li></ul><p class="notice">不管你的多网口小主机上的硬盘是SATA、mSATA、M.2固态，均可以通过购买硬盘转接卡/盒的方式单独拆下，进行快速刷机。</p><table><thead><tr><th style="text-align:center;">转接卡</th><th style="text-align:center;">SATA硬盘盒</th><th style="text-align:center;">mSATA转接卡</th><th style="text-align:center;">M.2 NVMe/SATA协议硬盘盒</th></tr></thead><tbody><tr><td style="text-align:center;">推荐</td><td style="text-align:center;"><img src="https://github.com/KoolCore/wiki.ikoolcore.com/blob/main/pic/SATA-Case.jpeg?raw=true" alt=""></td><td style="text-align:center;"><img src="https://github.com/KoolCore/wiki.ikoolcore.com/blob/main/pic/mSATA.png?raw=true" alt=""></td><td style="text-align:center;"><img src="https://github.com/KoolCore/wiki.ikoolcore.com/blob/main/pic/NVMe-case.png?raw=true" alt=""></td></tr><tr><td style="text-align:center;">购买链接</td><td style="text-align:center;"><a href="https://u.jd.com/iQ3mNrt">京东购买</a></td><td style="text-align:center;"><a href="https://item.taobao.com/item.htm?spm=a230r.1.14.16.37277c0fP6BhAd&amp;id=45775612919&amp;ns=1&amp;abbucket=9#detail">淘宝店铺</a></td><td style="text-align:center;"><a href="https://item.taobao.com/item.htm?ft=t&amp;id=700586298376">硬酷科技官方店铺</a></td></tr></tbody></table><ul><li>写盘软件： <ul><li>Mac: <a href="https://www.balena.io/etcher">BalenaEtcher</a></li><li>Windows: <a href="https://www.balena.io/etcher">BalenaEtcher</a> ｜ <a href="https://rufus.ie/en/">Rufus</a> | 其他</li></ul></li></ul></li></ul><p class="notice">以上软件均可以实现将可引导启动的img格式镜像写入到启动盘。</p><ul><li><code>打开</code>写盘软件（<code>这里以Mac使用BalenaEtcher写盘为例</code>），<code>插入</code>装好mSATA硬盘的转接卡到你的PC或者Mac上； <img src="https://github.com/KoolCore/wiki.ikoolcore.com/blob/main/pic/BalenaEtcher-1.png?raw=true" alt=""></li><li><code>选择</code>需要写入的固件并<code>选中</code>你插入的这块mSATA硬盘，点击<code>写入</code>； <img src="https://github.com/KoolCore/wiki.ikoolcore.com/blob/main/pic/BalenaEtcher-2.png?raw=true" alt=""><img src="https://github.com/KoolCore/wiki.ikoolcore.com/blob/main/pic/BalenaEtcher-3.png?raw=true" alt=""></li><li>刷写成功，安全弹出；</li></ul><p class="notice">将刷写好的硬盘装入你的多网口小主机，插电即可启动刷入的软路由系统。</p>',6),c=[r],u=[],b={__name:"installations",setup(n,{expose:t}){return t({frontmatter:{meta:[]}}),e({meta:[]}),(h,p)=>(o(),a("div",i,c))}};export{b as default,u as meta};