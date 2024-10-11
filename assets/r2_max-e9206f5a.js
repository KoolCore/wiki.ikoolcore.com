import{A as i,e as c,f as d,g,C as s,i as a,j as r,h as t,l as e}from"./vendor-65d029c8.js";import"./__commonjsHelpers__-725317a4.js";const p={class:"markdown-body"},m={class:"notice"},P=[],B={__name:"r2_max",setup(x,{expose:o}){return o({frontmatter:{meta:[]}}),i({meta:[]}),(y,l)=>{const n=c("center");return d(),g("div",p,[l[9]||(l[9]=s('<p class="block grey"><strong>立项出发点<small>（ 当下不将就，亦可战未来！</small></strong>)</p><p><img src="https://s2.loli.net/2024/09/25/BLVWieJ89lpbDo2.webp" alt="Banner_20240904.webp"></p><p class="notice">硬件设计主要基于产品本身防火墙和路由器的定位进行展开，基于目前市场上全面 2.5G 已经成为主流，硬酷 R2 Max 希望给与用户更长的产品使用周期，我们基于成本和前瞻性设计了 2 个万兆电口和 2 个 2.5G 电口，万兆电口使用 <strong><a href="https://cn.marvell.com/">Marvell</a></strong> 的 <strong>AQC113C-B1-C</strong>，支持 10M/100M/1G/2.5G/5G/10G <strong>六速自动协商</strong> <small>（兼容瑞昱刚上市的 RTL8126-CG 单口 5Gbps 网卡）</small>，100%榨干处理器性能的同时，散热表现优异。R2 Max是一款 ”<strong>当下不将就，亦可战未来！</strong>“的消费级家用开源防火墙和迷你服务器产品，拥有良好的散热表现和优秀的网口兼容性表现。</p><p><strong class="block grey">硬件设计</strong></p><ul><li>CPU：Alder Lake-N i3-N305 8核心8线程处理器</li><li>内存：SO-DIMM，DDR5 4800MHz，单内存插槽设计，最大支持单条 48GB 内存<small><code>实测</code></small></li><li>网卡<small><code>亮点</code></small>：2 x AQC113C-B1-C 10Gbps<small><code>单独散热</code></small>, 2 x Intel i226-V 2.5Gbps</li><li>存储：2 x M.2 2242/2280 NVMe 硬盘，1 x TF 卡，支持系统引导启动。</li><li>USB：2 x USB-A 3.2 5Gbps, 1 x USB-C 3.2 Gen2 10Gbps</li><li>显示：1 x HDMI 2.0 支持 4K@60 帧输出，1 x USB-C(eDP 1.4) 支持 4K@60 帧输出</li></ul><p class="notice"><small>该 Type-C(USB-C) 口支持显示输出（eDP 1.4a）、数据传输（USB 3.2 Gen2x1 10Gbps）和PD协议电源输入（需单口支持20V 3.25A，即65W以上GaN充电头，以实测为准）和对外输出（最大 5V 3A，即 15W），支持点亮便携显示器。功能层面 <strong>类似于</strong> USB4，但受限于处理器 PCIe 资源不足，带宽不足，并非 USB4</small>。</p><ul><li>散热<small><code>重点</code></small>：处理器被动散热，外壳为主动散热，内嵌 2 个 4010 定制滚珠轴承风扇，支持 PWM 智能调整转速，转速范围 2000-6000 。</li><li>系统支持：兼容主流 X86 架构操作系统，包括不限于 Windows、Linux、CentOS、OpenWRT、pfSense、OPNsense、Proxmox VE、VMware ESXi、Untangle 等</li><li>供电设计<small><code>双供电</code></small>：1 x DC IN 12-19V, 1 x USB-C PD 20V，双供电设计，供电更可靠，标配定制 DC 48W电源</li><li>尺寸：157(L) x 118(W) x 40(H) mm</li><li>重量：单主机1030克，包装后约1300克</li></ul><p><img src="https://s2.loli.net/2024/10/11/ZvBqPsJw2UObcgE.png" alt=".png"></p><p><strong class="block grey">外壳外观设计</strong></p><p class="notice">继续 R1、R2 的设计元素，在解决处理器性能释放最大化和散热性能最优的前提下，以最紧凑的外壳结构呈现。</p><br>',11)),a(n,null,{default:r(()=>l[0]||(l[0]=[t("img",{src:"https://s2.loli.net/2024/09/25/eBNTt6OIibV3QFC.webp",style:{zoom:"50%"}},null,-1)])),_:1}),l[10]||(l[10]=t("p",null,[t("strong",{class:"block grey"},"PCB设计")],-1)),l[11]||(l[11]=t("p",{class:"notice"},[e("继续 R1、R2 的双层主板设计，物理层面 "),t("strong",null,"“缝合”"),e(" 两块主板， "),t("strong",null,"“榨干”"),e(" Alder Lake-N 的所有处理器资源"),t("small",null,[t("code",null,"9 条 PCIe Lines")]),e("。以功能接口为基础，最极限的器件布局设计。")],-1)),l[12]||(l[12]=t("br",null,null,-1)),a(n,null,{default:r(()=>l[1]||(l[1]=[t("img",{src:"https://s2.loli.net/2024/09/27/HJqnBamuf7IL36O.webp",alt:"R2Max.webp",style:{zoom:"20%"}},null,-1)])),_:1}),l[13]||(l[13]=s('<p class="notice"><strong>尺寸</strong>为所有元器件能摆放下且合理的情况下的最小尺寸 Layout 板型。</p><p><strong class="block grey">PCIe资源分配</strong></p><table><thead><tr><th style="text-align:center;">HSIO Lane #</th><th style="text-align:center;">0</th><th style="text-align:center;">1</th><th style="text-align:center;">2</th><th style="text-align:center;">3</th><th style="text-align:center;">6</th><th style="text-align:center;">8</th><th style="text-align:center;">9</th><th style="text-align:center;">10</th><th style="text-align:center;">11</th></tr></thead><tbody><tr><td style="text-align:center;">PCIe资源</td><td style="text-align:center;">PCIe x 1</td><td style="text-align:center;">PCIe x 1</td><td style="text-align:center;">PCIe x 1</td><td style="text-align:center;">PCIe x 1</td><td style="text-align:center;">PCIe x 1</td><td style="text-align:center;">PCIe x 1</td><td style="text-align:center;">PCIe x 1</td><td style="text-align:center;">PCIe x 1</td><td style="text-align:center;">PCIe x 1</td></tr><tr><td style="text-align:center;">资源划分</td><td style="text-align:center;">USB x 1</td><td style="text-align:center;">USB x 1</td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">TSN x 1 <td colspan="2" style="text-align:center;">PCIe 3.0 x 2<br><small><code>1970MB/s</code></small></td><td colspan="2" style="text-align:center;">PCIe 3.0 x 2<br><small><code>1970MB/s</code></small></td></td></tr><tr><td style="text-align:center;">实际用途</td><td style="text-align:center;">USB 3.0</td><td style="text-align:center;">USB 3.0</td><td style="text-align:center;">I226-V</td><td style="text-align:center;">I226-V</td><td style="text-align:center;" class="notice">M.2 NVMe<br><small><code>985MB/s</code></small> <td colspan="2" style="text-align:center;">AQC113-B1-C 网卡<br><small><a href="https://www.marvell.com/content/dam/marvell/en/public-collateral/ethernet-adaptersandcontrollers/marvell-fastLinq-edge-aqc113-aqc113c-aqc113cs-aqc114cs-aqc115c-aqc116c-product-brief.pdf"><code>10Gbps网卡</code></a></small></td><td colspan="2" style="text-align:center;">AQC113-B1-C 网卡<br><small><code>六速协商</code></small></td></td></tr></tbody></table><p class="notice">两条 SSD 为PCIe 3.0 x1 通过 <strong><a href="https://www.asmedia.com.tw/product/213yQcasx8gNAzS4/b7FyQBCxz2URbzg0"><code>ASMedia ASM1182e</code></a></strong> 转接而来，为PCIe 2.0 x 1速率；因R2 Max定位为智能网关和路由设备，非存储设备，如果当你从硬盘通过FTP或SMB获取文件时，最大理论单盘时传输速度为400-500Mb/s。<br>⚠️注意：路由跑满万兆和硬盘无法跑满万兆，不是一回事；<br>- 简单科普：路由器跑满万兆意味着什么？表示路由器的网络接口能够承载最高10Gbps的数据传输速率，这意味着，通过这个路由器连接的设备之间可以达到最高10Gbps的网络传输速度（不是从硬盘拷贝文件的速度达到10Gbps）。</p><blockquote><p><small>Note：The 9 Flexible HSIO Lanes [11:8,6,3:0] supports the following configurations</small>:</p><ul><li><small>Up to 9 PCIe * Lanes</small><ul><li><small>A maximum of 5 PCIe* Root Ports (or devices) can be enabled</small></li><li><small>PCIe* Lanes 1-4(PCIe Controller #1), 7(PCIe Controller #2), and 9-12(PCIe Controller #3) must be individually configured</small></li></ul></li><li><small>Up to 4 USB 3.2 Gen 1x1/2x1 Lanes</small><ul><li><small>A maximum of 4 USB 3.2 Gen 1x1/2x1 Ports (or devices) can be enabled</small></li><li><small>USB 3.2 Gen 1x1 = 5GT/s</small></li><li><small>USB 3.2 Gen 2x1 = 10 GT/s</small></li></ul></li></ul></blockquote><p><strong class="block grey">🔋供电设计</strong></p><p class="notice">DC供电，PD供电，双DC供电，DC+PD混合供电均支持</p><p><strong class="block grey">🖥️反向供电显示器（<small>一线连</small>）</strong></p><blockquote><p><small>以下为我们测试过的支持与 R2 Max 一线连的支持反向供电的显示器型号，仅供参考。<br><strong>请注意</strong>，与显示器一线连的具体是指支持显示器为 R2 Max 传输供电，同时R2 Max 启动成功后将显示信号（eDP）通过同一根C2C线缆传输给显示器。</small></p></blockquote><table><thead><tr><th style="text-align:center;">显示器型号</th><th style="text-align:center;">反向供电能力</th><th style="text-align:center;">是否支持一线连</th><th style="text-align:center;">备注</th></tr></thead><tbody><tr><td style="text-align:center;"><a href="/#/R2_Max/zh/power"><small>DELL U2720QM</small></a></td><td style="text-align:center;"><small><code>60W</code></small></td><td style="text-align:center;"><small>是</small></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"><a href="https://u.jd.com/Uq0gJtp"><small>DELL U2723QE</small></a></td><td style="text-align:center;"><small><code>90W</code></small></td><td style="text-align:center;"><small>是</small></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"><a href="https://u.jd.com/Uq0gJtp"><small>DELL U2723QM</small></a></td><td style="text-align:center;"><small><code>90W</code></small></td><td style="text-align:center;"><small>是</small></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"><a href="https://u.jd.com/U8P0F9X"><small>联合创新27C1U-D</small></a></td><td style="text-align:center;"><small><code>90W</code></small></td><td style="text-align:center;"><small>是</small></td><td style="text-align:center;"><small>客户实测</small></td></tr><tr><td style="text-align:center;"><a href="https://u.jd.com/Uu0EuBA"><small>LG UP850-W</small></a></td><td style="text-align:center;"><small><code>90W</code></small></td><td style="text-align:center;"><small>是</small></td><td style="text-align:center;"></td></tr></tbody></table><p><strong class="block grey">内存兼容性测试</strong></p><p class="notice">为了方便用户，我们测试了主流的 DDR5 SODIMM 内存条，以下为整理后的兼容性列表：</p>',12)),l[14]||(l[14]=t("table",{border:"1",cellspacing:"0",cellpadding:"5"},[t("tr",null,[t("th",null,"品牌"),t("th",null,"型号"),t("th",null,"容量"),t("th",null,"是否点亮"),t("th",null,[e("实物图"),t("small",null,"(图片可点击)")])]),t("tr",null,[t("td",{rowspan:"4",align:"center"},"英睿达（镁光）"),t("td",{align:"center"},[t("small",null,"CT8G48C40S5.M4A1")]),t("td",{align:"center"},"8GB"),t("td",{align:"center"}),t("td",{align:"center"})]),t("tr",null,[t("td",{align:"center"}),t("td",{align:"center"},"16GB"),t("td",{align:"center"}),t("td",{align:"center"})]),t("tr",null,[t("td",{align:"center"}),t("td",{align:"center"},"32GB"),t("td",{align:"center"}),t("td",{align:"center"})]),t("tr",null,[t("td",{align:"center"},[t("small",null,"CT48G56C46S5.M16B1")]),t("td",{align:"center"},"48GB"),t("td",{align:"center"},"是"),t("td",{align:"center"},[t("a",{href:"https://u.jd.com/UQ0ySFk",target:"_blank"},[t("img",{src:"https://cdn.shopify.com/s/files/1/0696/1555/0751/files/crucial_ssd.png?v=1716172560",alt:"英睿达48G DDR5"})])])]),t("tr",null,[t("td",{rowspan:"4",align:"center"},"海力士"),t("td",{align:"center"},[t("small",null,"1Rx16 PC5-5600B-SC0-1010-XT")]),t("td",{align:"center"},"8GB"),t("td",{align:"center"}),t("td",{align:"center"})]),t("tr",null,[t("td",{align:"center"}),t("td",{align:"center"},"16GB"),t("td",{align:"center"}),t("td",{align:"center"})]),t("tr",null,[t("td",{align:"center"}),t("td",{align:"center"},"32GB"),t("td",{align:"center"}),t("td",{align:"center"})]),t("tr",null,[t("td",{align:"center"}),t("td",{align:"center"},"48GB"),t("td",{align:"center"}),t("td",{align:"center"})]),t("tr",null,[t("td",{rowspan:"4",align:"center"},"三星"),t("td",{align:"center"},[t("small",null,"1Rx16 PC5-4800B-SC0-1010-XT")]),t("td",{align:"center"},"8GB"),t("td",{align:"center"},"是"),t("td",{align:"center"},[t("a",{href:"https://u.jd.com/Ui0WmbS",target:"_blank"},[t("img",{src:"https://cdn.shopify.com/s/files/1/0696/1555/0751/files/samsung_8g.png?v=1716173049",alt:"三星8GB DDR5"})])])]),t("tr",null,[t("td",{align:"center"}),t("td",{align:"center"},"16GB"),t("td",{align:"center"}),t("td",{align:"center"})]),t("tr",null,[t("td",{align:"center"},[t("small",null,"32GB2Rx8 PC5-4800B-S80-1010-XT")]),t("td",{align:"center"},"32GB"),t("td",{align:"center"},"是"),t("td",{align:"center"},[t("a",{href:"https://u.jd.com/UQMl7M8",target:"_blank"},[t("img",{src:"https://cdn.shopify.com/s/files/1/0696/1555/0751/files/samsung_ddr5.jpg?v=1715667188",alt:"三星32GB DDR5"})])])]),t("tr",null,[t("td",{align:"center"}),t("td",{align:"center"},"48GB"),t("td",{align:"center"}),t("td",{align:"center"})])],-1)),l[15]||(l[15]=t("p",{class:"notice"},[e("我们没有进行测试的其他品牌不同容量的内存条，不代表无法兼容，请客户自行测试，以实测为准。"),t("br"),t("small",null,[e("(如果你愿意协助我们完善上述兼容性表格，欢迎将实测结果反馈至 "),t("a",{href:"mailto:service@ikoolcore.com"},"service@ikoolcore.com"),e(")")]),e(".")],-1)),l[16]||(l[16]=t("p",null,[t("strong",{class:"block grey"},"散热解决方案")],-1)),t("p",m,[l[3]||(l[3]=e("TDP（Thermal Design Power））热设计功耗，又名散热设计功率（瓦特），是指最大的理论负载下的产生的最大热量功耗。TDP通常作为散热系统设计/降耗设计的重要参考指标。TDP越大代表工作时会产生单位时间内热量越大。对于散热系统来说，需要将TDP作为散热能力设计的最低标准，也就是散热系统至少要能散出TDP数值所表示的单位热量。")),l[4]||(l[4]=t("br",null,null,-1)),l[5]||(l[5]=e(" ——来自")),l[6]||(l[6]=t("a",{href:"https://zh.wikipedia.org/wiki/%E7%83%AD%E8%AE%BE%E8%AE%A1%E5%8A%9F%E8%80%97"},"维基百科",-1)),l[7]||(l[7]=e(" 。")),l[8]||(l[8]=t("br",null,null,-1)),a(n,null,{default:r(()=>l[2]||(l[2]=[e("⚠TDP不是耗电衡量指标，是散热设计参考指标。⚠")])),_:1})]),l[17]||(l[17]=s(`<p class="notice">我们致力于不惜 <strong>成本翻倍</strong> 地去解决散热，做到了处理器100%性能释放。用 <strong>定制双铜块</strong> <small><code>接触面为信越7921硅脂填充</code></small>的方式将处理器和网卡芯片的热量均匀传导至外壳散热鳍片，然后再通过定制的双4010尺寸滚珠静音风扇将鳍片的热量，从一侧吹出，实现与空气的热传导和热交换。</p><p><strong class="block grey">万兆网卡实测</strong></p><p>测试设备：</p><ul><li><p>服务端：Synology DS1821+, X540-T2万兆电口；</p></li><li><p>客户端：Proxmox VE下虚拟出来的OpenWrt，万兆网卡直通，且网线直连DS1821+；</p></li><li><p>测试结果和截图：</p><p><img src="https://s2.loli.net/2024/09/27/kDd4ENoZ8CrI7t3.png" alt="f19b132bd8f2cc680aad955d747a180.png" style="zoom:50%;"><br></p><img src="https://s2.loli.net/2024/09/27/UdJVYciZe7fPon5.png" alt="image.png" style="zoom:50%;"></li></ul><p>截图解读：</p><p class="notice">iperf3 打流600秒，在测试过程中，上下行均跑满理论带宽；且PVE在已有4个虚拟机的情况下，打流过程中的<code>i3-N305</code>处理器占用不到10%，处理器的温度增长不明显，均维持在60度以下。</p><hr><p><strong class="block grey">FAQ</strong></p><p>问：为什么没有N95和N300处理器？</p><p class="notice">答：因为 R2 是这两个处理器型号，在成本几乎相差甚小且不被供应链限制的前提下，使用性能强5%的N100和N305。</p><p>问：为什么两条硬盘要共享 x1 带宽，是否会存在网卡跑不满的情况？</p><p class="notice">答：从 PCIe 资源分配的限制层面，因为 Alder Lake-N 只有 9 条 PCIe Lines，且仅支持 5 个 Root PCIe 设备。网口有四个就占用了 4 个 PCIe 设备，那么 SSD 存储只能有 1 个 PCIe 资源。因为 R2 Max 是纯网关设备的产品定位，网卡带宽要有限保障。网卡在实际使用过程中，其是通过 PCIe 直接和 CPU 直接通信的，没有经过 SSD，所以不存在 SSD 的 x1 带宽限制网卡跑不满的情况。当然，如果是要从 SSD 拉取文件，这个时候是无法跑满 10Gbps 带宽的，这个时候 SSD 的带宽会成为瓶颈，影响拉取文件的传输速度，当然 985MB/s的理论传输带宽同时跑满 2 个 2.5G 也是绰绰有余的。和 RTL8126-CG 网卡跑 5Gbps 的数据传输都不存在瓶颈。可以点击<a href="https://www.v2ex.com/t/1049965">链接</a>前往查看我们万兆电口网卡<strong>持续23小时</strong>的<a href="https://github.com/isJackeroo/aqc113c-b1-c_test/blob/main/sensors-temp.sh">测试脚本</a>、<a href="https://www.v2ex.com/t/1049965">结果</a>和<a href="https://github.com/isJackeroo/aqc113c-b1-c_test/blob/main/logs_macmini.txt">日志</a>。</p><p>问：这个设备的最佳应用场景是什么？</p><p class="notice">答：家庭 HomeLab、小型办公场景、内网低功耗虚拟化服务器等。你可以直接物理直接安装 OpenWRT、iKuai，pfsense 等路由系统，也可以在 Proxmox VE 虚拟机化环境中做到 “一机多用”，共同完成你的多重需求。我们最推荐的玩法是从自身的需求出发选择合适的方案，适合自己的，都是最佳实践。也许你当前的网络知识储备不够，但是入手这么一台在当下硬件配置毫不过时甚至略为超前，10Gbps网络接口又可以战未来的产品。对于学习网络知识，探索计算机世界，解决家庭网络需求等，将会是一个非常具有性价比且可靠的选择。</p><p>问：是否可以预装系统？</p><p class="notice">答：从 R2 系列产品开始，我们均不提供系统预装服务。原因主要有潜在的大家众所周知的风险，同时每个用户的需求不尽相同，如果我们提供系统预装意味着后续客户遇到了系统软件层面的疑问或者问题，我们还需要负责解答，为了让更多小伙伴的理论得到实践，也应该由用户自己亲自安装其需要的系统和软件。即使有部分小伙伴愿意付费让我们预装系统，我们都不会提供系统预装服务，我们已经“一刀切”了该服务。如果你确实需要该产品且不想自己安装系统，请在下单时额外加购<code>技术服务（仅限首次搭建，后续无技术维护）</code>，同时告知我们的在线客服，你的需求和细节设置<br>（<strong><small>不沟通即使你选购了该服务也不会提供任何系统预装和技术服务，一切以实际沟通为准</small></strong>）。</p><p>问：如何查看万兆AQC网卡的温度表现？</p><p class="notice">答：Marvell的网卡是支持查看温度表现的。在任何Linux系统下，安装sensors相关命令行即可查看到该网卡的温度表现(⚠️<small>注意：如果是直通给虚拟机，则需要在虚拟机VM下运行sensors查看其温度</small>)。由于英特尔网卡其无法支持查看网卡温度表现，故无法查看Intel i226-v的网卡温度。如下示例：</p><pre class="language-shel"><code class="language-shel">Second: 78 (2024-09-15 16:28:24)
Processor Temperatures:
coretemp-isa-0000   
Core 0: +43.0°C (high)
Core 1: +43.0°C (high)
Core 2: +43.0°C (high)
Core 3: +42.0°C (high)

Network Card Temperatures:
PHY Temperature: +42.0°C 
MAC Temperature: +42.0°C 
temp1: +27.8°C  
PHY Temperature: +45.0°C 
MAC Temperature: +45.0°C 

</code></pre><p>问：售后和质保政策如何？</p><p class="notice">答：作为一家致力于超细分市场的小团队，我们争取每个产品均是精品，提供物超所值的产品和服务给到用户，但是我们也希望客户是友善的。但在中国境内的商业环境中，为了尽量规避自己的风险。我们的所有产品的政策均是：<strong><br>发货前随时仅退款；签收后不拆封包裹承担双程快递费，随时退货退款；拆封后<small>（有塑封包装）</small>，不支持七天无理由退换货；质量问题，一年质保期负责到底，质保期外<small>（两年内）</small>，成本售后。软件和系统问题，一律不负责</strong>。</p><p>问：是否有售后群或客户群？</p><p class="notice">答：有。但为了防止低质量的账号，我们的售后群微信需要<strong>严格筛选</strong>，确认订单和用户，提供虚假订单编号或重复编号的永久拉黑处理，进入方式请通过扫描包裹中的小卡片上的二维码。</p>`,23))])}}};export{B as default,P as meta};
