import{A as t,f as p,g as i,C as o}from"./vendor-a71afa14.js";import"./__commonjsHelpers__-725317a4.js";const e={class:"markdown-body"},c=o('<p class="notice"><strong>硬酷科技从2023年4月1日起，不提供任何除硬件质量外的技术服务。</strong> <br>请根据wiki自行探索。硬酷科技，专注开发硬件。 <br><strong>系统与软件，不在服务范围之内。</strong> <br> 善用搜索，善于动手，善于学习。(<strong>强烈推荐使用谷歌搜索</strong>)。</p><p class="block grey">如何在PVE下进行更换和升级OpenWRT虚拟机？</p><p class="notice">请充分认识到以下操作失误的可能导致的问题：</p><p class="notice">全屋断网，等待被全家疯狂DISS，请做好心理准备</p><p class="notice">恢复备份无望，因为本升级过程需要将旧的虚拟的OpenWRT删除，无法恢复备份或者快照。</p><p class="notice">整套系统丢失，因为你搞失败了，就意味着你要么寄回硬盘 <strong>免费</strong> 重新拷贝系统，要么自己研究并且折腾成功。</p><p class="notice">请重复认识到上面动作的危险性和后果，后果请自己承担和负责。</p><p class="notice">老鸟，一笑而过。</p><p class="notice">生活在于折腾，燥/造起来！不折腾，永远闲鱼一条，折腾两下，GET新知识和新技能，甚至新认知！！！</p><blockquote><p>以下所有操作，必须为电脑直接连接R1的LAN1口，中间不能经过任何交换机和路由器，电脑的Wi-Fi也必须关闭，仅保留有线连接到R1的LAN1。</p></blockquote><ol><li><p>首先固定本机的IPv4，保证本机和R1的底层PVE同属<code>10.0.0.1</code>网段，设置细节如下(以Mac电脑为例)：</p><ul><li><p>IPv4:10.0.0.100</p></li><li><p>Subnet Mask/子网掩码：255.255.255.0</p></li><li><p>Router/网关：10.0.0.1</p></li><li><p>DNS：10.0.0.1（非必需）</p><p><img src="https://s2.loli.net/2023/03/27/gDRuV4HzfZPKXiy.png" alt="1"></p></li></ul></li><li><p>进入PVE后台，停止并删除OpenWRT虚拟机； <img src="https://s2.loli.net/2023/03/27/COz1NHuqWcQR93B.png" alt="2"><img src="https://s2.loli.net/2023/03/27/6uRmGnlZ7YXoO8e.png" alt="3"></p></li><li><p>解压下载的镜像为.img结尾的文件，并上传到<code>local(R1)</code>&gt;&gt;&gt;<code>IOS镜像</code>处；</p><p><img src="https://s2.loli.net/2023/03/27/59BQrO2LFv8syuI.png" alt="5"></p></li><li><p>复制上传后的文件路径：<code>/var/lib/vz/template/iso/openwrt-x64-R22.3.9-iKoolCore-R1-squashfs-combined-efi.img</code></p><p><img src="https://s2.loli.net/2023/03/27/GbZ1K3WcTUYdjNt.png" alt="6"></p></li><li><p>新建新的虚拟机：</p><p><img src="https://s2.loli.net/2023/03/27/8FV17MyqX6Ugupn.png" alt="7"></p><ul><li><p>VM ID:100 (保持默认)</p></li><li><p>名称：OpenWRT</p></li><li><p>操作系统：不使用任何介质，其他默认</p></li><li><p>系统：默认</p></li><li><p>磁盘：磁盘大小调整为5GB</p></li><li><p>CPU：核心调整为4</p></li><li><p>内存：内存调整为1024</p></li><li><p>网络：默认</p></li><li><p>确认：完成</p></li></ul></li><li><p>修改完善新建好的虚拟OpenWRT：</p><ul><li><p>分离硬盘： <img src="https://s2.loli.net/2023/03/27/mhcfaSdqlkTpysJ.png" alt="8"></p></li><li><p>删除分离后的未使用磁盘： <img src="https://s2.loli.net/2023/03/27/TnYOqF4ZUrtHgLP.png" alt="9"></p></li><li><p>添加直通（你手头的设备未重装PVE底层系统的话，均已替你们做好了硬件直通）好的PCIe网卡： 操作路径：<code>OpenWRT</code>&gt;&gt;&gt;<code>硬件</code>&gt;&gt;&gt;<code>添加</code>&gt;&gt;&gt;<code>PCI设备</code>: <img src="https://s2.loli.net/2023/03/27/Ad3R8CLGVrDXt4l.png" alt="10"></p></li><li><p>用命令行导入刚上传的img镜像： 操作路径：<code>R1</code>&gt;&gt;&gt;<code>Shell</code></p><p>导入命令：<code>qm importdisk 100 /var/lib/vz/template/iso/openwrt-x64-R22.3.9-iKoolCore-R1-squashfs-combined-efi.img local-lvm</code>，复制这段命令到shell命令窗，并按回车即可导入成功； <img src="https://s2.loli.net/2023/03/27/vJpB7jVydKFtxA6.png" alt="11"> 修改导入的磁盘：在<code>OpenWRT</code>&gt;&gt;&gt;<code>硬件</code>下，选中<code>未使用的磁盘</code>，点击编辑，把总线设备修改成<code>SATA</code>，并确认： <img src="https://s2.loli.net/2023/03/27/YreMkqPU2icgh3y.png" alt="12"></p></li><li><p>添加一块新的2GB硬盘作为Overlay分区使用： <img src="https://s2.loli.net/2023/03/27/b7U95d13hExDiTK.png" alt="13"></p></li></ul></li><li><p>修改选项下的引导顺序和修改开机自启动为是： <img src="https://s2.loli.net/2023/03/27/fZ9nHw3lraxgJiE.png" alt="14"></p></li><li><p>启动虚拟机，并用vim命令行修改其默认网络配置： <img src="https://s2.loli.net/2023/03/27/VDUgTndsuK4Ljk9.png" alt="image-20230323110214215"></p><ul><li><p>VIM命令修改默认配置： 输入<code>vim /etc/config/network</code>会进入到网络代码配置界面，这里新手尤其容易懵逼之处，请严格按照下面步骤执行。</p><ol><li><p>输入<code>vim /etc/config/network</code>后，按字母键<code>i</code>进入代码编辑模式（屏幕左下角会有insert字样）；</p></li><li><p>方向键移动光标，删除键删除，按照下面截图编辑并完善好；</p><ul><li>lan下面的option ifname后面加上<code>eth2, eth3</code>，即新增<code>LAN3, LAN4</code>为LAN口</li><li>lan下面的 ipaddr修改成<code>10.0.0.1</code>，即修改路由系统的后台管理地址</li></ul><p><img src="https://s2.loli.net/2023/03/27/BSLZpYiwzU2Wuh3.png" alt="15"></p></li><li><p>检查并确认修改好后，按写<code>ESC</code>（键盘最左上角的ESC键）退出 <strong>编辑模式</strong> ，再确认 <strong>输入法处于英文状态</strong> 下，输入<code>:wq</code>，最后按下确认Enter键，表示保存并退出上面的配置</p></li><li><p>最后，命令行下，输入<code>reboot</code>重启虚拟的路由系统，最后等待跑码结束，可再次进入命令行输入 <code>cat /etc/config/network</code>看屏幕打印出来的信息，是否正确。</p></li></ol></li></ul></li><li><p>进入OpenWRT第一步，请直接跳过引导配置，因为前面我们用命令行配置好了。</p></li></ol><p>os_tutorial</p>',12),s=[c],u=[],R={__name:"os_tutorial",setup(n,{expose:l}){return l({frontmatter:{meta:[]}}),t({meta:[]}),(r,a)=>(p(),i("div",e,s))}};export{R as default,u as meta};
