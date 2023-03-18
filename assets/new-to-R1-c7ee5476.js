import{A as l,f as c,e as s,C as o,g as e}from"./vendor-a7b6b0c4.js";import"./__commonjsHelpers__-725317a4.js";const r={class:"markdown-body"},i=o('<h6>新手常见问题：</h6><p><strong class="block grey">1. 机器拿到手，如何进行联网设置？</strong></p><ul><li><p>拆包裹，后检查你收到的物件如下图所示：</p></li><li><p>然后将R1开机，⚠️注意⚠️电源口是查到有HDMI和网口的一侧标识有PD的C口，切勿插错到侧面的USB-C口，否则不开机。</p></li><li><p>接下来将R1正确接入你家网络；</p><ul><li><code>LAN2</code> 作为软件定义的<code>WAN</code>口，接入你的上级路由器或者光猫，通常为光猫设备的LAN口，并确认光猫是桥接还是拨号模式；</li><li><code>LAN1</code><strong>直连</strong>你的电脑，并测试是否可以直接上网。如果可以上网，则说明你家光猫是拨号模式，如果不能上网，则需要进入<code>10.0.0.1</code>的路由系统后台，确认<code>网络</code>&gt;&gt;&gt;<code>接口</code>下的<code>WAN</code>口有正确获取到IP地址。</li></ul></li><li><p>如果以上操作后，直连<code>LAN1</code>的电脑可以直接上网，则接下来将你的Wi-Fi路由器设置为<code>AP模式</code>或<code>有线中继模式</code>，并直连到<code>LAN3</code>,<code>LAN4</code>或<code>LAN1</code>。</p></li><li><p>到此为止，基础联网完毕。</p></li></ul><p><strong class="block grey">2. 我家光猫是桥接，需要使用R1进行拨号，需要如何设置？</strong></p><ul><li><p>接线设置：</p><ul><li><code>LAN2</code>接光猫（同时确认你的光猫是拨号还是桥接）</li><li><code>LAN1</code>接你的 <strong>Wi-Fi路由器</strong> 或者 <strong>交换机</strong>；</li></ul></li><li><p>上网设置：</p><ol><li>进入OP后台，在<code>网络</code>&gt;&gt;&gt;<code>接口</code>下，找到<code>WAN</code>口，点<code>修改</code>；</li><li>选择<code>PPPoE</code>拨号，<code>切换协议</code>，然后输入<code>宽带账号</code>和<code>密码</code>，并点击右下角的<code>保存&amp;应用</code></li><li>回到<code>网络</code>&gt;&gt;&gt;<code>接口</code>下，观察<code>WAN</code>口是否获取到<code>IPv4地址</code>，以此判断是否<strong>拨号成功</strong>。</li></ol></li></ul><p><strong class="block grey">3. 我不小心改错了LAN口，导致进不去路由系统的后台，怎么处理？</strong></p><blockquote><p>此种情况下，必须用电脑直接连接R1的LAN1管理口进行处理。</p></blockquote><ul><li><p>处理流程：</p><ul><li>修改本机的IPv4地址为： <ul><li>IP：10.0.0.11</li><li>子网掩码：255.255.255.0</li><li>网关：10.0.0.1浏览器输入https://10.0.0.10:8006进入PVE的后台</li></ul></li><li>在屏幕左侧，单击 「R1」下拉选中OpenWRT；</li><li>保持选中OpenWRT状态，在屏幕中间列，点击「快照」；</li><li>进入「快照」中，选择已经快照好的配置，点击「回滚」；</li><li>待回滚成功后即回复到默认到手的状态，浏览器输入10.0.0.1，重新配置路由系统。</li></ul></li></ul><p><strong class="block grey">4. 如果物理安装OpenWRT？</strong></p><p class="notice">前往阅读 <strong><a href="https://openwrt.online/#/baseKnowledge/OpenWrt_Installation">手把手教程</a></strong></p><p>强烈推荐新出新手或追求效率人士购买 <strong><a href="https://item.taobao.com/item.htm?ft=t&amp;id=700586298376">M.2双协议硬盘盒</a></strong> 进行刷机，从此玩机刷机仅需3分钟。</p><p><strong class="block grey">5. 我是物理安装的OpenWRT系统，请问需要怎么扩展Docker分区和Overlay分区？</strong></p><p class="notice">目前全网关于扩展overlay分区的教程均为<a href="https://www.techkoala.top/openwrt_resize/">SATA协议的扩展Overlay分区教程</a>，使用NVMe协议的硬盘物理装OpenWRT后如何进行扩展分区操作呢？</p><p><strong class="block grey">6.如果我购买的带硬盘的配置，里面都带有哪些系统呢？</strong></p><p class="notice">针对国内用户，详细配置在 <strong><a href="https://wiki.ikoolcore.com/#/R1/zh-CN/resource/default-system">预装系统</a></strong></p><p><strong><small>特别提醒：</small></strong></p><ul><li><p>接线设置：</p><ul><li><code>LAN2</code>接光猫或上级路由器，确认好上级路由器是否可以直接连入互联网</li><li><code>LAN1/LAN3/LAN4</code>接入下级交换机、Wi-Fi路由器、终端设备</li></ul></li><li><p>路由原理：</p><ul><li><p>路由系统：OpenWRT/iKuai/pfSense/OPNSense</p></li><li><p>LAN口：静态IP</p></li><li><p>WAN口：DCHP自动从上级路由器获取IP地址，如果上级光猫为桥接模式，则需要切换协议为PPPoE拨号并输入ISP宽带账号和密码，方可联网。</p></li><li><p>路由原理：路由系统在内网分发的网段为<code>10.0.0.x</code>，<code>PVE</code>、<code>Debian</code>、<code>Windows 10 LTSC</code> 均视为该网段下的一台设备，和我们通过无线或有线接入该内网网段中的手机、电脑等终端设备无异。</p></li></ul></li></ul><p><strong class="block grey">7. 如何将硬酷R1设置为来电自启？</strong></p><p>上电的同时，按F2进入BIOS设置，进入<code>Chipset</code>&gt;&gt;&gt;<code>PCH-IO Configuration</code>&gt;&gt;&gt;<code>State After G3</code>中，设置S State：</p><ul><li>S0 State： 来电自启</li><li>S5 State：手动启动</li></ul><p>视频教程：</p>',21),p=e("iframe",{width:"640",height:"360",src:"https://www.youtube.com/embed/vVg2Bgn-YIE",title:"#硬酷R1 在BIOS中设置来电自启",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1),a=o('<p><strong class="block grey">8. 我购买的是beta版本，如何更换新款滚珠静音风扇和外壳？</strong></p><p>首先，你需要在我们的店铺购买 <strong><a href="https://item.taobao.com/item.htm?ft=t&amp;id=701399228907">新款散热器</a></strong> 和 <strong><a href="https://item.taobao.com/item.htm?ft=t&amp;id=701399228907">新款外壳</a></strong>。</p><p class="notice">仅限本店铺客户购买，购买需要提供历史订单截图和订单编号。如果视频加载不了，请确认你网络可以正常浏览<a href="https://www.youtube.com/watch?v=vVg2Bgn-YIE">YouTube视频</a></p><p>具体如何拆机以及如何更换，可以查看我们的官方拆解视频。</p>',4),d=e("iframe",{width:"640",height:"360",src:"https://www.youtube.com/embed/QAHrQ3EGIRE",title:"iKOOLCORE R1 正式版拆解及组装演示",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1),n=o('<p class="notice">胆大心细即可。如果视频加载不了，请确认你网络可以正常浏览<a href="https://www.youtube.com/watch?v=QAHrQ3EGIRE">YouTube视频</a></p><p><strong class="block grey">9. 听说有官方售后群，请问如何加入？</strong></p><p>如果你是已经在硬酷科技店铺下单购买的客户，添加<code> ikoolcore</code> 为微信好友，请<strong>主动发送</strong> <code>历史订单编号</code>和 <code>订单截图</code>，等待审核通过后邀请进入专属售后群。<br> 如果你是在授权店铺购买的，暂时无法被官方邀请进入官方售后群，售后政策一视同仁，售后时联系所购买店铺客服即可。</p><p class="notice">授权经销店铺购买用户，售后和技术支持找所下单店铺客服，官方不提供任何技术支持和服务。</p><p class="block grey"><strong>10. 我看原装标配的电源是USB-C口的DC协议的电源，我可以使用PD电源给硬酷R1供电吗？</strong></p><p><strong>可以。需要使用两头都是C口的电源线配合有20V 3.25A输出档位的PD头。</strong> 不管是beta版本 <strong><small>(标识为DC 12V)</small></strong> 还是年后的正式版本 <strong><small>(标识为PD)</small></strong> ，均同时支持DC和PD双协议，可以使用带有<code>20V 3.25A</code> <strong><small>(请确认你的PD头有这个档位电压)</small></strong> 输出档位的PD充电头。实测PD充电头可以协商到12V或者20V，实测ANKER大部分PD头支持。多口输出的PD头部分输出口不支持协商到20V，请购买时注意。推荐购买以下PD充电头配合R1使用 <strong><small>(均实测)</small></strong> 。</p><table><thead><tr><th><a href="https://u.jd.com/i8gY7Ja"><img src="https://s2.loli.net/2023/03/18/WB2aIRi73Tg5xEv.jpg" alt=""></a></th><th><a href="https://u.jd.com/isg2k4w"><img src="https://s2.loli.net/2023/03/18/d8WhumgP2AxB7Jb.jpg" alt=""></a></th><th><a href="https://u.jd.com/iQgrooA"><img src="https://s2.loli.net/2023/03/18/a4LyjBAXbx5HrVO.jpg" alt=""></a></th><th><a href="https://u.jd.com/izgDC1m"><img src="https://s2.loli.net/2023/03/18/OigbeNVzylTCLh8.jpg" alt=""></a></th></tr></thead></table><p class="block grey"><strong>11. 我碰到USB口无法支持固态U盘的问题，请问怎么处理？</strong></p><p>倘若遇到无法使用固态U盘，是因为其要求的电压非普通USB口提供的电压 <strong><small>(5V)</small></strong> ，所以导致R1无法识别到，目前无解，请更换普通U盘吧。<br>同时，因为部分USB Hub要求的电流过高，也会导致插入多设备的时候，意外关机，可尝试更换更高功率的PD电源头。</p><p class="notice">无法识别，90%是因为电压和电流无法互相支持。</p>',10),g=[i,p,a,d,n],f=[],y={__name:"new-to-R1",setup(h,{expose:t}){return t({frontmatter:{meta:[]}}),l({meta:[]}),(b,w)=>(s(),c("div",r,g))}};export{y as default,f as meta};
