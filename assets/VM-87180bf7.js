import{A as l,f as t,g as e,C as i}from"./vendor-a79c0d81.js";import"./__commonjsHelpers__-725317a4.js";const p={class:"markdown-body"},n=i(`<blockquote><p>此教程目的：傳授知識、普及虛擬機、降低非技術人員折騰成本。</p></blockquote><h3>一、如何在硬酷 R2 上安裝 Proxmox VE 底層虛擬機</h3><blockquote><p>掃盲：為什麽要安裝 Proxmox VE（俗稱 <strong>PVE</strong>）？因為 R2 只是一臺物理機，如果按照我們常規玩轉PC機的經驗，我們可以在上面安裝 Windows, Debian, CentOS, Ubuntu 等，都沒有問題，當然，R2 物理網口這麽多，購買了 R2 當然是為了將其作為家庭網絡中樞控製設備。肯定不是為了安裝單一物理機使用的。要在 R2 上安裝多個操作系統，充分榨幹硬件性能，那麽當然就需要借助虛擬機技術了。這裏我們選用 PVE。</p></blockquote><ol><li><p>準備工作：</p><ul><li><p>U盤一個，建議大於8GB；</p></li><li><p>Proxmox ISO 鏡像： <a href="https://www.proxmox.com/en/downloads/proxmox-virtual-environment/iso">官網下載</a> <br><img src="https://s2.loli.net/2023/10/22/dOnBC82SszwZlLU.png" alt="image.png" style="zoom:50%;"></p></li><li><p>寫盤工具：</p><blockquote><p><strong>以下隨便選一個</strong> ，你安裝過Windows系統的話，應該都會使用。</p></blockquote><ul><li>Ventoy: <a href="https://www.ventoy.net/en/download.html">官網下載</a><br><img src="https://s2.loli.net/2023/10/22/Sc5KZGJk31ou6UN.png" alt="image.png" style="zoom:50%;"></li><li>Rufus: <a href="https://rufus.ie/zh/">官網下載</a><br><img src="https://s2.loli.net/2023/10/22/ATyBtCszNPe7Xfq.png" alt="image.png" style="zoom:70%;"></li></ul></li></ul></li><li><p>將下載好的 Proxmox VE ISO 鏡像寫入到U盤，寫入完畢後，U 盤即是一個可啟動的介質。</p><blockquote><p>這裏以 Ventoy 為例，下載好 Ventoy 啟動盤製作工具後，將 Proxmox VE ISO 文件直接拷貝到啟動盤根目錄即可。<strong>溫馨提示：<small>只要是可啟動的ISO, img 等鏡像文件，都可以丟到根目錄，可以實現想啟動任何系統安裝都可以，只要根目錄有對應的鏡像文件。</small></strong></p></blockquote><p><img src="https://s2.loli.net/2023/10/22/34V9y5sYZRU7ogv.png" alt="image.png" style="zoom:67%;"><br></p><p><img src="https://s2.loli.net/2023/10/22/R7hBWbtJq5oLv6f.png" alt="image.png" style="zoom:50%;"><br></p></li><li><p>將製作好的 U 盤啟動盤插入 R2，並接好鍵盤、鼠標、顯示器，開始安裝系統；</p><blockquote><p>安裝過程需要5-8分鐘，請耐心註意每一個細節之處。</p></blockquote><ul><li>接通電源後，立即按下 <strong>F12</strong> 以進入 R2 的 BIOS 啟動項選擇界面；<br><img src="https://s2.loli.net/2023/10/22/dHRsi1TrYIoPAmL.png" alt="image.png" style="zoom:50%;"></li><li>選擇從你的 U盤啟動盤 啟動；</li><li>選擇Proxmox VE 鏡像以啟動安裝進程；<br><img src="https://s2.loli.net/2023/10/22/gLtpMkr27Y6FxcX.png" alt="image.png" style="zoom:40%;"></li><li>選擇 Boot in normal mode, 並按 Enter 確認鍵以繼續；</li><li>選擇Install Proxmox VE(Graphical)，並按 Enter 確認鍵以進入到圖形化安裝界面；</li><li>安裝界面進入到跑碼界面，跑碼結束後進入到圖形化安裝界面；</li></ul><blockquote><p>以下為重要安裝步驟：</p></blockquote><ol><li><p>同意 Proxmox VE 條款；</p></li><li><p>選擇目標磁盤：<br><img src="https://s2.loli.net/2023/10/22/KR7hHxTSEstZwYV.png" alt="image.png"></p></li><li><p>選擇所在國家、時區和鍵盤布局：<br><img src="https://s2.loli.net/2023/10/22/V6qi4Jf78oZGKlH.png" alt="image.png"></p></li><li><p>輸入 Proxmox VE 管理員的密碼（後續用於登錄Web管理界面，請務必記住）、管理員郵箱；<br><img src="https://s2.loli.net/2023/10/22/qrMc8kuB6lF24j3.png" alt="image.png"></p></li><li><p>最重要設置項：管理口、管理後臺地址、網關地址、DNS地址（<strong><small>請務必完全按照以下進行進行設置，否則後續備份虛擬機還原也用不了。</small></strong>）<br><img src="https://s2.loli.net/2023/10/22/3QSZB9fjIKJqUuH.png" alt="image.png"><br></p><ul><li><p>Management Interface: <strong><em>enx00e04c68000…</em>(<small>請一定選擇這個，對應的是物理管理口，對應的物理網卡是RTL8156BG</small>)</strong></p></li><li><p>Hostname: <em><strong>R2.ikoolcore.com</strong></em></p></li><li><p>IP Address(CIDR): <em><strong>10.0.0.10</strong></em></p></li><li><p>Gateway:<em><strong>10.0.0.1</strong></em></p></li><li><p>DNS Serverf:<em><strong>10.0.0.1</strong></em></p><p><strong>(以上設置，必須一模一樣)</strong></p></li></ul></li><li><p>下一步，點擊 <strong>Install</strong>, 一切順利的話，進度條跑完後，PVE即安裝成功。</p></li></ol></li><li><p>安裝完畢，進入到 Proxmox VE 的網頁管理後臺；</p><ul><li>準備一臺帶有網口的電腦，並手動配置其 IPv4 為 <code>10.0.0.x</code>同網段（此處若不會，請百度關鍵詞「如何修改本機IPv4」）,子網掩碼默認為<code>255.255.255.0</code>;</li><li>將電腦與 R2 的管理口相連，並在電腦的瀏覽器地址欄輸入 <a href="https://10.0.0.10:8006">https://10.0.0.10:8006</a>（<strong><small>註意是https</small></strong>），即可進入到Proxmox VE 的網頁管理後臺，用戶名是root，密碼是你上面安裝Proxmox VE 過程中輸入的密碼。<br><img src="https://s2.loli.net/2023/10/22/Pl2W9crDgpBvdze.png" alt="網口標記圖.png" style="zoom:67%;"></li></ul></li></ol><hr><h3>二、 如何給 Proxmox VE 開啟硬件直通</h3><blockquote><p>在 Promox VE 下，如果要將網卡分配給某個虛擬機使用，是需要開啟硬件直通的，硬件直通是最大化物理硬件性能最基礎的操作。硬件直通操作完成後，如果 Intel 平臺支持，將可以核顯直通，USB 直通，硬盤直通等。R2 默認是開啟 VT-D 虛擬機化的。以下所有命令行均在 PVE 的 Shell 命令行下完成。</p></blockquote><img src="https://s2.loli.net/2023/10/22/NMUlb2KjvCSukqt.png" alt="image.png" style="zoom:50%;"><ol><li><p>開啟 iommu;</p><pre><code>#編輯grub，請不要盲目改。根據自己的環境，選擇設置
nano /etc/default/grub
#在裏面找到：
GRUB_CMDLINE_LINUX_DEFAULT=&quot;quiet&quot;
#然後修改為：
GRUB_CMDLINE_LINUX_DEFAULT=&quot;quiet intel_iommu=on iommu=pt&quot;
#確認無誤後，按下CTRL+X，再按下Y，即可保存並退出編輯界面。
</code></pre><p>修改完成後，直接執行更新grub的命令：<code>update-grub</code></p></li><li><p>加載直通相關的內核模塊</p><pre><code>將以下代碼復製黏貼到Shell命令行
echo vfio &gt;&gt; /etc/modules
echo vfio_iommu_type1 &gt;&gt; /etc/modules
echo vfio_pci &gt;&gt; /etc/modules
echo vfio_virqfd &gt;&gt; /etc/modules
</code></pre><p>並使用代碼 <code>update-initramfs -k all -u</code> 更新內核參數。</p></li><li><p>重啟 Proxmox VE，並在 Shell 命令行中輸入 <code>dmesg | grep iommu</code> 確認直通是否成功，如果成功，將出現如下例子。</p><pre><code>[ 1.341100] pci 0000:00:00.0: Adding to iommu group 0
[ 1.341116] pci 0000:00:01.0: Adding to iommu group 1
[ 1.341126] pci 0000:00:02.0: Adding to iommu group 2
[ 1.341137] pci 0000:00:14.0: Adding to iommu group 3
[ 1.341146] pci 0000:00:17.0: Adding to iommu group 4
...
</code></pre></li><li><p>至此，Proxmox VE 的硬件直通已經開啟。</p></li></ol><h3>三、如何恢復 Proxmox VE 的備份虛擬機</h3><ol><li><p>準備工作：</p><ul><li><p>下載並在你的 Windows 電腦上安裝好 WinSCP(<a href="https://winscp.net/eng/download.php">官網下載</a>);</p></li><li><p>用 <strong><a href="https://winscp.net/eng/download.php">WinSCP</a></strong> 工具將下載好的的虛擬機備份文件（.zst格式）傳輸到 Proxmox VE 的 <code>/var/lib/vz/dump</code> 目錄下，直接拖拽即可拉取文件過去。<br><img src="https://s2.loli.net/2023/10/22/kno5EdvSyVipWJF.png" alt="image.png" style="zoom:40%;"></p></li></ul></li><li><p>回到 Proxmox VE 的網頁管理後臺，在右側選擇 <code>local(R2)-&gt;&gt;&gt; 備份（英文是：Backups）</code>，即可看到上傳過來的備份文件。<br><img src="https://s2.loli.net/2023/10/22/LXnfoxtp68vVugB.png" alt="image.png" style="zoom:67%;"></p></li><li><p>如果你想替換掉默認的 iKuai8 路由系統，你需要按照下面的操作進行：</p><p>將虛擬機 iKuai8 停止並將其刪除（選中iKuai8虛擬機，右上角<code>關機-&gt;&gt;&gt;停止</code>以停止虛擬機，<code>更多-&gt;&gt;&gt;移除</code>）；<br><img src="https://s2.loli.net/2023/10/22/Wn8mOByu5cXx9hD.png" alt="image.png" style="zoom:50%;"></p></li><li><p>如果你是全新安裝的 Proxmox VE ,則系統內不會有任何虛擬機，請無視上面第3條，直接從第2條跳到下面第5條執行；</p></li><li><p>在 Proxmox VE 管理後臺左側，選中 <code>local(R2)</code>，中間列選中 <code>備份</code>；並選擇你需要恢復的備份文件名稱<br><img src="https://s2.loli.net/2023/10/22/suYVGlWk1XQCpA6.png" alt="image.png" style="zoom:67%;"></p></li><li><p>在彈出的界面，點擊 <code>還原</code>，等待片刻進度條走完，即恢復完成，在左側虛擬機列表中將會顯示出你剛才還原的虛擬機；<br><img src="https://s2.loli.net/2023/10/22/xcFlRw9ThdoALt5.png" alt="image.png" style="zoom:67%;"></p></li><li><p>選擇剛還原的虛擬機，點擊開啟即可開始愉快的玩耍。</p></li></ol><h3>申明</h3><ol><li><p>本人不提供任何技術支持，遠程協助，鏡像，固件，備份文件等；</p></li><li><p>請自行實踐並熟悉上面教程，此教程可以解決90%的問題；</p></li></ol><p><img src="https://tool.lu/netcard/" alt="IP簽名"></p>`,14),s=[n],h=[],x={__name:"VM",setup(r,{expose:o}){return o({frontmatter:{meta:[]}}),l({meta:[]}),(c,a)=>(t(),e("div",p,s))}};export{x as default,h as meta};