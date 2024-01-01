import{A as t,f as l,g as e,C as n}from"./vendor-a79c0d81.js";import"./__commonjsHelpers__-725317a4.js";const s={class:"markdown-body"},p=n(`<blockquote><p>此教程目的：传授知识、普及虚拟机、降低非技术人员折腾成本。</p></blockquote><h3>一、如何在硬酷 R2 上安装 Proxmox VE 底层虚拟机</h3><blockquote><p>扫盲：为什么要安装 Proxmox VE（俗称 <strong>PVE</strong>）？因为 R2 只是一台物理机，如果按照我们常规玩转PC机的经验，我们可以在上面安装 Windows, Debian, CentOS, Ubuntu 等，都没有问题，当然，R2 物理网口这么多，购买了 R2 当然是为了将其作为家庭网络中枢控制设备。肯定不是为了安装单一物理机使用的。要在 R2 上安装多个操作系统，充分榨干硬件性能，那么当然就需要借助虚拟机技术了。这里我们选用 PVE。</p></blockquote><ol><li><p>准备工作：</p><ul><li><p>U盘一个，建议大于8GB；</p></li><li><p>Proxmox ISO 镜像： <a href="https://www.proxmox.com/en/downloads/proxmox-virtual-environment/iso">官网下载</a> <br><img src="https://s2.loli.net/2023/10/22/dOnBC82SszwZlLU.png" alt="image.png" style="zoom:50%;"></p></li><li><p>写盘工具：</p><blockquote><p><strong>以下随便选一个</strong> ，你安装过Windows系统的话，应该都会使用。</p></blockquote><ul><li>Ventoy: <a href="https://www.ventoy.net/en/download.html">官网下载</a><br><img src="https://s2.loli.net/2023/10/22/Sc5KZGJk31ou6UN.png" alt="image.png" style="zoom:60%;"></li><li>Rufus: <a href="https://rufus.ie/zh/">官网下载</a><br><img src="https://s2.loli.net/2023/10/22/ATyBtCszNPe7Xfq.png" alt="image.png" style="zoom:72%;"></li></ul></li></ul></li><li><p>将下载好的 Proxmox VE ISO 镜像写入到U盘，写入完毕后，U 盘即是一个可启动的介质。</p><blockquote><p>这里以 Ventoy 为例，下载好 Ventoy 启动盘制作工具后，将 Proxmox VE ISO 文件直接拷贝到启动盘根目录即可。<strong>温馨提示：<small>只要是可启动的ISO, img 等镜像文件，都可以丢到根目录，可以实现想启动任何系统安装都可以，只要根目录有对应的镜像文件。</small></strong></p></blockquote><p><img src="https://s2.loli.net/2023/10/22/34V9y5sYZRU7ogv.png" alt="image.png" style="zoom:67%;"><br></p><p><img src="https://s2.loli.net/2023/10/22/R7hBWbtJq5oLv6f.png" alt="image.png" style="zoom:50%;"><br></p></li><li><p>将制作好的 U 盘启动盘插入 R2，并接好键盘、鼠标、显示器，开始安装系统；</p><blockquote><p>安装过程需要5-8分钟，请耐心注意每一个细节之处。</p></blockquote><ul><li>接通电源后，立即按下 <strong>F12</strong> 以进入 R2 的 BIOS 启动项选择界面；<br><img src="https://s2.loli.net/2023/10/22/dHRsi1TrYIoPAmL.png" alt="image.png" style="zoom:67%;"></li><li>选择从你的 U盘启动盘 启动；</li><li>选择Proxmox VE 镜像以启动安装进程；<br><img src="https://s2.loli.net/2023/10/22/gLtpMkr27Y6FxcX.png" alt="image.png" style="zoom:50%;"></li><li>选择 Boot in normal mode, 并按 Enter 确认键以继续；</li><li>选择Install Proxmox VE(Graphical)，并按 Enter 确认键以进入到图形化安装界面；</li><li>安装界面进入到跑码界面，跑码结束后进入到图形化安装界面；</li></ul><blockquote><p>以下为重要安装步骤：</p></blockquote><ol><li><p>同意 Proxmox VE 条款；</p></li><li><p>选择目标磁盘：<br><img src="https://s2.loli.net/2023/10/22/KR7hHxTSEstZwYV.png" alt="image.png"></p></li><li><p>选择所在国家、时区和键盘布局：<br><img src="https://s2.loli.net/2023/10/22/V6qi4Jf78oZGKlH.png" alt="image.png"></p></li><li><p>输入 Proxmox VE 管理员的密码（后续用于登录Web管理界面，请务必记住）、管理员邮箱；<br><img src="https://s2.loli.net/2023/10/22/qrMc8kuB6lF24j3.png" alt="image.png"></p></li><li><p>最重要设置项：管理口、管理后台地址、网关地址、DNS地址（<strong><small>请务必完全按照以下进行进行设置，否则后续备份虚拟机还原也用不了。</small></strong>）<br><img src="https://s2.loli.net/2023/10/22/3QSZB9fjIKJqUuH.png" alt="image.png"><br></p><ul><li><p>Management Interface: <strong><em>enx00e04c68000…</em>(<small>请一定选择这个，对应的是物理管理口，对应的物理网卡是RTL8156BG</small>)</strong></p></li><li><p>Hostname: <em><strong>R2.ikoolcore.com</strong></em></p></li><li><p>IP Address(CIDR): <em><strong>10.0.0.10</strong></em></p></li><li><p>Gateway:<em><strong>10.0.0.1</strong></em></p></li><li><p>DNS Serverf:<em><strong>10.0.0.1</strong></em></p><p><strong>(以上设置，必须一模一样)</strong></p></li></ul></li><li><p>下一步，点击 <strong>Install</strong>, 一切顺利的话，进度条跑完后，PVE即安装成功。</p></li></ol></li><li><p>安装完毕，进入到 Proxmox VE 的网页管理后台；</p><ul><li><p>准备一台带有网口的电脑，并手动配置其 IPv4 为 <code>10.0.0.x</code>同网段（此处若不会，请百度关键词“如何修改本机IPv4”）,子网掩码默认为<code>255.255.255.0</code>;</p></li><li><p>将电脑与 R2 的管理口相连，并在电脑的浏览器地址栏输入 <a href="https://10.0.0.10:8006">https://10.0.0.10:8006</a>（<strong><small>注意是https</small></strong>），即可进入到Proxmox VE 的网页管理后台，用户名是root，密码是你上面安装Proxmox VE 过程中输入的密码。<br></p></li><li><p>网口顺序为：</p><ul><li>上层：eth1 | eth2 | eth3(RTL8156BG)</li><li>下层：Power | HDMI | eth0</li></ul><p>其中eth0, eth1, eth2 均为Intel i226-V网卡。</p></li></ul></li></ol><hr><h3>二、 如何给 Proxmox VE 开启硬件直通</h3><blockquote><p>在 Promox VE 下，如果要将网卡分配给某个虚拟机使用，是需要开启硬件直通的，硬件直通是最大化物理硬件性能最基础的操作。硬件直通操作完成后，如果 Intel 平台支持，将可以核显直通，USB 直通，硬盘直通等。R2 默认是开启 VT-D 虚拟机化的。以下所有命令行均在 PVE 的 Shell 命令行下完成。</p></blockquote><img src="https://s2.loli.net/2023/10/22/NMUlb2KjvCSukqt.png" alt="image.png" style="zoom:50%;"><ol><li><p>开启 iommu;</p><pre><code>#编辑grub，请不要盲目改。根据自己的环境，选择设置
nano /etc/default/grub
#在里面找到：
GRUB_CMDLINE_LINUX_DEFAULT=&quot;quiet&quot;
#然后修改为：
GRUB_CMDLINE_LINUX_DEFAULT=&quot;quiet intel_iommu=on iommu=pt&quot;
#确认无误后，按下CTRL+X，再按下Y，即可保存并退出编辑界面。
</code></pre></li></ol><p class="notice">修改完成后，直接执行更新grub的命令：<code>update-grub</code></p><ol start="2"><li>加载直通相关的内核模块</li></ol><p class="notice">将以下代码复制黏贴到Shell命令行。</p><pre><code>echo vfio &gt;&gt; /etc/modules
echo vfio_iommu_type1 &gt;&gt; /etc/modules
echo vfio_pci &gt;&gt; /etc/modules
echo vfio_virqfd &gt;&gt; /etc/modules
</code></pre><p class="notice">并使用代码 <code>update-initramfs -k all -u</code> 更新内核参数。</p><ol start="3"><li><p>重启 Proxmox VE，并在 Shell 命令行中输入 <code>dmesg | grep iommu</code> 确认直通是否成功，如果成功，将出现如下例子。</p><pre><code>[ 1.341100] pci 0000:00:00.0: Adding to iommu group 0
[ 1.341116] pci 0000:00:01.0: Adding to iommu group 1
[ 1.341126] pci 0000:00:02.0: Adding to iommu group 2
[ 1.341137] pci 0000:00:14.0: Adding to iommu group 3
[ 1.341146] pci 0000:00:17.0: Adding to iommu group 4
...
</code></pre></li><li><p>至此，Proxmox VE 的硬件直通已经开启。</p></li></ol><h3>三、如何恢复 Proxmox VE 的备份虚拟机</h3><ol><li><p>准备工作：</p><ul><li><p>下载并在你的 Windows 电脑上安装好 WinSCP(<a href="https://winscp.net/eng/download.php">官网下载</a>);</p></li><li><p>用 <strong><a href="https://winscp.net/eng/download.php">WinSCP</a></strong> 工具将下载好的的虚拟机备份文件（.zst格式）传输到 Proxmox VE 的 <code>/var/lib/vz/dump</code> 目录下，直接拖拽即可拉取文件过去。<br><strong><small>虚拟机备份文件请前往：<a href="https://www.iswott.com:5288/">这里下载</a></small></strong> <br><img src="https://s2.loli.net/2023/10/22/kno5EdvSyVipWJF.png" alt="image.png" style="zoom:50%;"></p></li></ul></li><li><p>回到 Proxmox VE 的网页管理后台，在右侧选择 <code>local(R2)-&gt;&gt;&gt; 备份（英文是：Backups）</code>，即可看到上传过来的备份文件。<br><img src="https://s2.loli.net/2023/10/22/LXnfoxtp68vVugB.png" alt="image.png" style="zoom:67%;"></p></li><li><p>上传对应的<code>ISO文件</code>到 <code>local(R2)-&gt;&gt;&gt; ISO镜像中</code>；</p></li><li><p>如果你想替换掉默认的 iKuai8 路由系统，你需要按照下面的操作进行：</p><p>将虚拟机 iKuai8 停止并将其删除（选中iKuai8虚拟机，右上角<code>关机-&gt;&gt;&gt;停止</code>以停止虚拟机，<code>更多-&gt;&gt;&gt;移除</code>）；<br><img src="https://s2.loli.net/2023/10/22/Wn8mOByu5cXx9hD.png" alt="image.png" style="zoom:80%;"></p></li><li><p>如果你是全新安装的 Proxmox VE ,则系统内不会有任何虚拟机，请无视上面第3条，直接从第2条跳到下面第5条执行；</p></li><li><p>在 Proxmox VE 管理后台左侧，选中 <code>local(R2)</code>，中间列选中 <code>备份</code>；并选择你需要恢复的备份文件名称<br><img src="https://s2.loli.net/2023/10/22/suYVGlWk1XQCpA6.png" alt="image.png" style="zoom:80%;"></p></li><li><p>在弹出的界面，点击 <code>还原</code>，等待片刻进度条走完，即恢复完成，在左侧虚拟机列表中将会显示出你刚才还原的虚拟机；<br><img src="https://s2.loli.net/2023/10/22/xcFlRw9ThdoALt5.png" alt="image.png" style="zoom:67%;"></p></li><li><p>选择刚还原的虚拟机，点击开启即可开始愉快的玩耍。</p></li></ol><p class="block grey"><strong>我自己重装的PVE底层系统，如何调出温度啥的显示？</strong></p><img src="https://github.com/KoolCore/Proxmox_VE_Status/raw/main/Proxmox_VE_Status.png" alt="image-20230328112119378" style="zoom:50%;"><p>这个 <strong><a href="https://github.com/KoolCore/Proxmox_VE_Status">PVE状态工具</a></strong> 安装方法只需要在PVE下的Shell命令行输入以下几行代码即可：<br>（温馨提醒：一行一行复制黏贴执行，防止出错哈）：</p><pre class="language-shell"><code class="language-shell"><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LC_ALL</span></span><span class="token operator">=</span>en_US.UTF-8
<span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt</span> upgrade <span class="token parameter variable">-y</span>
<span class="token function">apt</span> <span class="token function">install</span> <span class="token function">git</span> <span class="token function">wget</span> 
<span class="token function">git</span> clone https://github.com/KoolCore/Proxmox_VE_Status.git
<span class="token function">bash</span> ./Proxmox_VE_Status_zh.sh
</code></pre><p>大概1-3分钟后，按下<code>CTRL+F5</code>强制刷新本页面即可。如果发现 <code>curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused</code> 这种错误，年轻人，你的网络运营商屏蔽了 GitHub。请自行处理网络环境问题。</p><h3>说在结尾</h3><ol><li><p>本人不提供任何技术支持，远程协助，镜像，固件等，</p></li><li><p>请勿用本产品用于非法用途，否则后果自负；</p></li></ol>`,24),i=[p],h=[],x={__name:"VM",setup(a,{expose:o}){return o({frontmatter:{meta:[]}}),t({meta:[]}),(g,m)=>(l(),e("div",s,i))}};export{x as default,h as meta};