import{A as t,f as o,e as n,C as a}from"./vendor-a7b6b0c4.js";import"./__commonjsHelpers__-725317a4.js";const e={class:"markdown-body"},p=a(`<p><strong class="block grey">硬酷声明。</strong></p><p class="notice">考虑到产品使用的敏感问题，硬酷R2不预装任何系统，不提供任何固件和镜像；<br>但考虑到用户体验，我们的社区建设已经在计划中。</p><p><strong class="block grey">硬酷 R2 为什么没有 N100/N200/N305 的处理器型号？</strong></p><p class="notice">硬酷无暇与同行在相同产品上做无必要的竞争；只会将精力投入在产品的卓越表现和创新上。</p><hr><h6>新手常见问题：</h6><p><strong class="block grey">1. 机器拿到手，如何进行联网设置？</strong></p><p class="notice">不预装任何系统，不提供任何固件、镜像、教程等，硬件质量之外的服务。<br>请自行安装需要的操作系统后使用！</p><p><strong class="block grey">2. 如果物理安装OpenWRT？</strong></p><p class="notice">前往阅读 <strong><a href="https://openwrt.online/#/baseKnowledge/OpenWrt_Installation">手把手教程</a></strong></p><p>强烈推荐新出新手或追求效率人士购买 <strong><a href="https://item.taobao.com/item.htm?ft=t&amp;id=700586298376">M.2双协议硬盘盒</a></strong> 进行刷机，从此玩机刷机仅需3分钟。</p><p><strong class="block grey">3. 我是物理安装的OpenWRT系统，请问需要怎么扩展Docker分区和Overlay分区？</strong></p><p class="notice">目前全网关于扩展overlay分区的教程均为<a href="https://www.techkoala.top/openwrt_resize/">SATA协议的扩展Overlay分区教程</a>，使用NVMe协议的硬盘物理装OpenWRT后如何进行扩展分区操作呢？</p><p><strong class="block grey">4.如果我购买的带硬盘的配置，里面都带有哪些系统呢？</strong></p><p class="notice">不预装任何系统，不提供任何固件、镜像、教程等，硬件质量之外的服务。关于预装系统，请前往这个 <strong><a href="https://wiki.ikoolcore.com/#/R2/zh-CN/resource/default-system">页面</a></strong> 了解</p><p><strong class="block grey">5. 如何将硬酷R2设置为来电自启？</strong></p><p>上电的同时，按F2进入BIOS设置，进入<code>Chipset</code>&gt;&gt;&gt;<code>PCH-IO Configuration</code>&gt;&gt;&gt;<code>State After G3</code>中，设置S State：</p><ul><li>S0 State： 来电自启</li><li>S5 State：手动启动</li></ul><p><strong class="block grey">6. 听说有官方售后群，请问如何加入？</strong></p><p>如果你是已经在硬酷科技店铺下单购买的客户，添加 <code>ikOOLCORE_SH</code> 为微信好友，请<strong>主动发送</strong> <code>历史订单编号</code>和 <code>订单截图</code>，等待审核通过后邀请进入专属售后群。<br></p><p>如果你是在授权店铺购买的，暂时无法被官方邀请进入官方售后群，售后政策一视同仁，售后时联系所购买店铺客服即可。</p><p class="notice">授权经销店铺购买用户，售后和技术支持找所下单店铺客服，官方不提供任何技术支持和服务。</p><p class="block grey"><strong>7. 我看原装标配的电源是 USB-C 口的 DC 协议的电源，我可以使用PD电源给硬酷R1供电吗？</strong></p><p><strong>可以。需要使用两头都是 C 口的电源线配合有20V 3.25A 65W 输出档位的 PD 头。</strong> 不管是beta版本 <strong><small>(标识为DC 12V)</small></strong> 还是年后的正式版本 <strong><small>(标识为 PD )</small></strong> ，均同时支持DC和PD双协议，可以使用带有<code>20V 3.25A</code> <strong><small>(请确认你的PD头有这个档位电压)</small></strong> 输出档位的PD充电头。实测PD充电头可以协商到12V或者20V，实测ANKER大部分PD头支持。多口输出的PD头部分输出口不支持协商到20V，请购买时注意。</p><p class="block grey"><strong>8. 我碰到USB口无法支持固态U盘的问题，请问怎么处理？</strong></p><p>倘若遇到无法使用固态U盘，是因为其要求的电压非普通USB口提供的电压 <strong><small>(5V)</small></strong> ，所以导致R1无法识别到，目前无解，请更换普通U盘吧。<br>同时，因为部分USB Hub要求的电流过高，也会导致插入多设备的时候，意外关机，可尝试更换更高功率的PD电源头。</p><p class="notice">无法识别，90%是因为电压和电流无法互相支持。</p><p class="block grey"><strong>9. 我该购买8GB内存还是16GB内存版本呢？<br>8GB内存版本的带配置机器，可以在PVE后台同时开启路由系统、Debian 系统和 HA 系统吗？</strong></p><p><strong><small>开启是可以的，就是开启之后关心内存是否爆掉，是否已卡死。如是，则需要物理重启R2而已。</small></strong> 所以这里需要各位想清楚，自个的实际使用情况下内存多大才够用，8GB是标配，不管你折腾物理路由系统，还是基于PVE或ESXi虚拟机，8GB都是入门级别内存大小。如果你预算充足，那么强烈建议选购16GB内存，如果断定自己后续没有折腾虚拟机等需求，那么8GB足够啦。</p><p class="block grey"><strong>10. 我自己重装的PVE底层系统，如何调出温度啥的显示？</strong></p><img src="https://s2.loli.net/2023/03/28/oz3gIpXY6tjxadW.png" alt="image-20230328112119378" style="zoom:50%;"><p>这个 <strong><a href="https://github.com/iKoolCore/PVE_Status_Tools">PVE状态工具</a></strong> 是虎佬在未加密之前，微信分享给我的，感谢虎佬。后续完善了硬盘寿命的逻辑bug，加入了删除企业源。安装方法只需要在PVE下的Shell命令行输入以下几行代码即可：</p><pre class="language-shell"><code class="language-shell"><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LC_ALL</span></span><span class="token operator">=</span>en_US.UTF-8
<span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">git</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> clone https://github.com/iKoolCore/PVE_Status_Tools.git
<span class="token builtin class-name">cd</span> PVE_Status_Tools
<span class="token function">bash</span> ./PVE_Status_Tools.sh
</code></pre><p>大概1-3分钟后，按下<code>CTRL+F5</code>强制刷新本页面即可，请注意前提，<strong>网络一定要上得去GitHub</strong>，否则等3个小时都没用。</p><p class="block grey"><strong>11. 最新版本的OpenWRT固件没有我喜欢的argon主题，怎么加？</strong></p><p>相信部分小伙伴跟我一样喜欢 <strong><a href="https://github.com/jerrykuku/luci-theme-argon">Argon for OpenWRT</a></strong>，那么可以根据其作者在GitHub上的引导进行安装，即在OpenWRT的ttyd命令行输入以下代码：</p><pre class="language-shell"><code class="language-shell"><span class="token function">wget</span> --no-check-certificate https://github.com/jerrykuku/luci-theme-argon/releases/download/v1.7.0/luci-theme-argon_1.7.0-20200909_all.ipk
opkg <span class="token function">install</span> luci-theme-argon*.ipk
</code></pre><p class="notice">雕哥的固件基本都是首选此主题。</p>`,38),l=[p],h=[],d={__name:"new-to-R1",setup(r,{expose:s}){return s({frontmatter:{meta:[]}}),t({meta:[]}),(i,m)=>(n(),o("div",e,l))}};export{d as default,h as meta};
