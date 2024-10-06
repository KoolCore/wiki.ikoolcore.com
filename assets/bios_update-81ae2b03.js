import{A as l,f as e,g as s,C as a}from"./vendor-a79c0d81.js";import"./__commonjsHelpers__-725317a4.js";const o={class:"markdown-body"},n=a('<p><strong class="block grey">BIOS更新</strong></p><p class="notice"><small>刷写BIOS属于非常规升级，操作失误，易造成死机、不开机等异常情况，需返厂维修，造成的一切损失和费用，由客户自行承担。一经执行BIOS操作，默认接受并认可以上条款</small>。</p><ol><li><p>准备工作：</p><ul><li><p>准备一个U盘，并格式化为 <code>FAT32</code>格式（使用<a href="https://www.diskgenius.cn/"><code>Diskgenius</code></a>软件）；</p></li><li><p>BIOS文件：</p><table><thead><tr><th style="text-align:center;"><small>产品型号</small></th><th style="text-align:center;"><small>R1/R1Pro</small></th><th style="text-align:center;"><small>R2/R2 NUC</small></th><th style="text-align:center;"><small>R2 Max</small></th></tr></thead><tbody><tr><td style="text-align:center;"><small>下载链接</small></td><td style="text-align:center;"><small><a href="https://pan.quark.cn/s/854642ff1bf3">夸克网盘</a></small></td><td style="text-align:center;"><small><a href="">Shopify CDN</a>, <a href="https://pan.quark.cn/s/f2dadf3abb89">夸克网盘</a></small></td><td style="text-align:center;"><small><a href="https://cdn.shopify.com/s/files/1/0696/1555/0751/files/R2Max_BIOS_v1.0.zip">Shopify CDN</a>, <a href="https://pan.quark.cn/s/f6b38246be98">夸克网盘</a></small></td></tr></tbody></table><blockquote><p><small>风险提示⚠️：由于 R1、R2是板载内存设计，请注意其不同内存大小的BIOS文件不同，刷错版本将导致不开机。</small></p></blockquote></li></ul></li><li><p>将解压后的<code>EFI</code>文件夹完整地复制到U盘的 <strong>根目录</strong> 下；<br><img src="https://s2.loli.net/2023/10/30/mdF6ePGTCq5z7ML.png" alt="image.png" style="zoom:50%;"></p></li><li><p>拆掉所有外接存储设备（包括硬盘、优盘、外接硬盘等），插入U盘，接好显示器，通电之后，设备将会自动执行刷写BIOS的程序；<br><strong><small>（一定需要拆除硬盘后再插优盘通电，才会实现自动刷写新的BIOS文件，否则自动刷写程序识别的磁盘序号会错误，无法自动刷写BIOS）</small></strong><br></p></li><li><p>刷写过程中，屏幕将会自动跑代码，待出现<code>FPT Operation Successful</code>界面后，即表示刷写成功。<br><img src="https://s2.loli.net/2023/10/30/1moD6yeQxKXsiJE.png" alt="image.png" style="zoom:50%;"></p></li><li><p>注意事项：</p><ol><li><small>刷写过程中 <strong>不要有任何操作，不能断电</strong>，出现<code>FPT Operation Successful</code>界面后，就说明刷写程序成功了，然后拔出 U 盘，把机器 <strong>断电</strong> 重启，首次重启较慢，请耐心等待即可。</small></li><li><small>刷写BIOS后的首次启动较慢，请耐心等待。</small></li><li><small>刷 BIOS 有风险，谨慎操作，刷崩了得售后返厂。</small></li></ol></li></ol>',3),i=[n],f=[],u={__name:"bios_update",setup(r,{expose:t}){return t({frontmatter:{meta:[]}}),l({meta:[]}),(p,d)=>(e(),s("div",o,i))}};export{u as default,f as meta};