---
title: 产品介绍 (product introduction)
meta:
  - name: 产品介绍
    content: 硬酷R1（iKoolCore R1）是一个迟来的硬件项目，由推特网友 **[Jackeroo](https://twitter.com/isJackeroo)** 联合深圳的硬件工厂推出的目前市场最小巧且性能强大的4网口2.5G小主机。“方寸之间 尽享乐趣” 是硬酷R1的slogon。
---



## 产品介绍

“方寸之间 尽享乐趣” 是硬酷R1的Slogon。{.notice}

硬酷R1（iKOOLCORE R1）是一个迟来的硬件项目，由推特网友 **[Jackeroo](https://twitter.com/isJackeroo)**  联合深圳的硬件工厂推出的目前市场最小巧且性能强大的多达4个2.5G网口的迷你小主机。

![](https://github.com/KoolCore/wiki.ikoolcore.com/blob/main/pic/R1-banner-2023.jpg?raw=true)

banner图中网卡型号修正为 Intel i226-V{.notice}

### 设计初衷

方寸之间 尽享乐趣！{.block .gray}

极致小巧 颜值在线 {.block .gray}

性能强大 {.block .gray}

多网口2.5G {.block .gray}

拒绝傻大黑粗 {.block .gray}

拒绝减/简配！拒绝电子垃圾 {.block .gray}

聚集一群有共同兴趣爱好的小伙伴{.notice}

![R1Ad1](https://github.com/KoolCore/wiki.ikoolcore.com/blob/main/pic/Slideshow-05.jpg?raw=true)


### 硬件设计

从零到一，独家开发。<br>因商务合作关系，部分消费者可能会看到其他冠名的产品。<br>其他渠道购买无法享受硬酷科技的店铺与品牌保障{.notice}

#### 硬件选型：

- CPU：赛扬N5105、奔腾银牌N6005

- 内存：LPDDR4 双通道，单颗粒8GB (**`16GB为双通道`**)

- 网卡：Intel i226-V  **（优于Intel i225-V）** 

- 硬盘： **M.2 2242 NVMe （PCIe3.0x2速率）。**
  
- 显示：HDMI 2.0 4K 60Hz视频输出

- USB： 2 x USB 3.1 Gen1；1 x USB-C 3.1 Gen1；

- TF：TF Card Slot x 1 **（支持启动）已测试：Linux及其分支均(`OpenWRT, pfsense, OPNSense`)可启动，Windows需以`WinToGo方式`启动** 

- 散热：主动散热 **2023年后已全面升级到`铜管散热器+滚静音风扇`，已无噪音困扰！放心选购！**

- 电源：标配 12V 2.5A 30W DC电源 （`标配DC圆头转USB-C口直通线`）

特殊定制C口 12V DC电源，请勿使用此标配DC电源给其他设备供电，以免烧坏其他电子设备！否则后果自负！{.notice}

- 尺寸：7.5 x 7.5 x 4.8cm **(方寸之间，尽享乐趣)**

  ![](https://github.com/KoolCore/wiki.ikoolcore.com/blob/main/pic/banner02_1000x.jpg?raw=true)

#### 工程设计

![测试](https://github.com/KoolCore/iKOOLCORE/blob/main/docs/images/DesignFile_2.png?raw=true)

![](https://github.com/KoolCore/iKOOLCORE/blob/main/docs/images/DesignFile_3.png?raw=true)

![](https://github.com/KoolCore/iKOOLCORE/blob/main/docs/images/DesignFile_4.png?raw=true)

![](https://github.com/KoolCore/iKOOLCORE/blob/main/docs/images/DesignFile_1.png?raw=true)

![](https://github.com/KoolCore/wiki.ikoolcore.com/blob/main/pic/breakdown%20chart.jpg?raw=true)

## 应用场景

### 1⃣️开源家庭路由/防火墙（Open-source Router/Firewall）

随着过去10来年国内互联网的高速发展，黑客攻击和广告追踪，越来越影响我们的日常冲浪体验。借助硬酷R1，用户可安装pfsense、OPNsense、iKuai、OpenWRT等主要防火墙和流控的开源路由系统，轻松实现家庭网络的安全掌控。更有极客玩家安装ROS系统、Panabit（`不支持UEFI启动，需借助虚拟机`）等系统。在硬酷R1和各种开源的路由系统的加持下，我们可以轻松实现：

- 家庭网络去广告；
- 自建DNS服务；
- 动态公网解析（`需有动态公网IP`）；
- 搭建私人内网VPN——方便远程管理家庭内网设备
- 搭建BT/PT下载服务器——借助Transmission, Qbtorrent等
- 搭建多媒体娱乐服务器——借助Alist, 阿里云盘WebDAV等

方便我们的日常数码生活，大大完善我们的网络体验。



### 2⃣️虚拟机（Hpervisor）

硬酷R1基于通用x86架构设计，你可以安装运行 VMware ESXi、Proxmox 、XCP-ng、Citrix Hypervisor等虚拟机。前两种是中国大陆消费者较为常用的两种底层虚拟机。{.notice}

对于奋斗在互联网一线的码农和网工群体来说，拥有一台完全属于自己的多网口服务器是一件非常棒的事情，那么借助硬酷R1，这些小伙伴们就可以在家折腾上虚拟机，一种可以基于底层虚拟环境，可以部署多种操作系统且互不干扰的系统。一台物理机可以部署多种操作系统，以解决自己的不同需求，是多么的奈斯的一件事：

- **路由系统：** 用户可以根据自己的喜好，安装任何开源的路由器系统(`OpenWRT, pfsense, OPNSense, iKuai, Panabit, ROS等`)负责家里的网络出口，不同的开源路有系统有其不同的特点，需要用户根据其实际使用需求和喜好进行选择；
  - `OpenWRT`：中国大陆消费者因其可以托管各种私有的跨网协议而备受用户青睐
  - `iKuai爱快`：因其属于中国内地公司开发和拥有，具有强大的流控功能而备受部分用户喜爱
  - `pfsense/OPNSense`：国际上使用较为广泛的由Netgate开源的路由系统。OPNSense为从pfsense分出去的不同分支。
- **Linux系统：** 建议根据用户自己熟悉的系统进行选择。
  - [Debian](https://www.debian.org/distrib/): 推荐使用这个 **[镜像](https://cdimage.debian.org/cdimage/unofficial/non-free/cd-including-firmware/current/amd64/iso-dvd/)** 文件，可长期作为内网服务器运行docker，宝塔，青龙🐉等服务。
  - [Ubuntu](https://ubuntu.com/): 最多入门用户选择的Linux系统。
  - [CentOS](https://www.centos.org/)：Community Enterprise Operating System）是Linux发行版之一，它是来自于Red Hat Enterprise Linux（RHEL）依照开放原始码规定释出的原始码所编译而成。
  - 其他Linux分支：Fedora, PopOS, Manjora, Kali, openSUSE等。

基于我个人喜好，推荐使用 **[Debian最新版本系统](https://cdimage.debian.org/cdimage/unofficial/non-free/cd-including-firmware/current/amd64/iso-dvd/)**。{.notice}

- **Windows系统：** 可以作为一台内网下载服务器，接受7 x 24 小时日常挂各种云盘和迅雷种子下载，低功耗而无需为电费担心。如果有动态公网IP，还可以配合DDNS加端口号实现在公司即可远程使用微软远程桌面程序连接位于家里的这台电脑，抛弃各种商业的远程操控软件。

### 3⃣️远程办公（Remote Office）

前提：有公网IP，且拥有一个可用于解析DDNS服务的域名。{.notice}

在疫情期间，远程办公逐渐兴起。借助DDNS+端口转发，可以实现人在异地，远程通过Microsoft Remote Desktop工具登陆办公电脑，实现远程操控，体验比免费的商业试用远控系统更流畅，响应更丝滑。

### 4⃣️Docker宿主机：(基于虚拟机之上玩各种套娃Docker服务)

可以物理直装Linux系统，并安装docker服务，借助docker实现各种各样的微服务。也可以基于虚拟机之下的Linux系统上安装docker跑各种个性化需求的微服务。

  - `Portainer`——Docker图形化管理工具

  - `Alist` —— 超好用的在线网盘挂载工具

  - `LibreSpeed`——内外网测速工具

  - `OpenSpeedTest`——高颜值内外网测速工具

  - `Squoosh`——GoogleChromeLab团队出品的开源图片压缩工具

  - `PhotoPrism `—— 优秀的相册管理工具

  - `TrwebOCR`——OCR在线识别工具

具体以默认系统部分信息为准。{.notice}

### 5⃣️下载机

可以直装Windows当各种云网盘的下载机，也可以借助docker安装各种pt下载工具（transmission/qbittorrent等），轻松玩转PT/BT。同时也可以基于PVE/ESXi/Unraid等虚拟机下安装开源NAS系统，通过直通USB硬盘设备作为存储盘 。

可行，但不推荐。R1产品定位没有为NAS场景考虑。{.notice}

### 6⃣️家庭媒体服务器

借助诸如`jellyfin`, `Plex`, `alist`等docker工具，轻松扮演家庭内网的媒体服务器。如果你家里有Apple TV，配合Infuse即可享受各种云盘内的高清数字资源。





## 默认系统

默认均安装PVE最新版(`pve-manager/7.3-3/c3928077`)底层系统，并在PVE宿主机下安装好了路由系统虚拟机、Debian11虚拟机、Windows10虚拟机。路由系统负责处理网络，Debian11下安装有Docker服务，并部署了各种了非常易用的docker服务，Windows10 LTSC系统开启远程桌面访问，方便配合DDNS实现远程内网管理和7 x 24小时下载一些必须依赖于Windows系统下的网盘资源（百度网盘、阿里云盘、迅雷下载等）。以下为宿主机和虚拟机的详情说明：

因原网段`192.168.1.1`容易和家里的光猫（拨号）默认网段冲突，现已修改网段为`10.0.0.1`网段。{.notice}

### 宿主机

| 宿主机系统 |  管理后台  |  账号  |  密码 |  备注|
| :--------: | :----------: | :----: | :---------: | :--------------------- |
|  PVE7.3-3  | Https://10.0.0.10:8006 | `root` | `ikoolcore` | 注意`https`、端口号:`8006` |

以上配置仅适用于选购了带硬盘的订单。{.notice}

### 虚拟机

#### 路由系统

|    虚拟机系统   |   IP地址    | <div style="width: 3em;">用户名</div> |    密码     |    备注   |
| :------------------: | :---------: | :----: | :---------: | :-------- |
| iKuai爱快 | 10.0.0.1 |  root  | `ikoolcore` | 请根据自己的喜好，自行设置自己需要的路由器系统 |

- 管理员：`LAN1`

- WAN口：`LAN2`(默认设置DHCP，请根据需要修改为PPPoE)；

- LAN口：`LAN3`, `LAN4`

Lean已经推出针对R1硬件设计的独家优化版OpenWRT系统：[前往下载 ](https://github.com/KoolCore/ikoolcore/blob/main/docs/files/openwrt-x64-iKoolCore-R1-squashfs-combined-efi.img.gz) {.notice}

以上配置仅适用于选购了带硬盘的订单。{.notice}

#### Debian11

| 虚拟机系统 |   IP地址 |  用户名|  密码 | 备注|
| :-------: | :--------: | :-------: | :---------: | :--------: |
|  Debian11  | 10.0.0.2 `固定IP` | `root`  `ikoolcore` | `ikoolcore` | 管理员root和用户密码相同 |

基于Debian11，已经安装`docker`服务，并基于docker容器，部署有以下微服务：

|  容器服务 |  后台地址   |用户名    |   密码 | 用途|
| :----------------: | :----------------------: | :---------: | :----------------: | :------------------ |
| heimdall | http://10.0.0.2 |- | - | 导航服务 |
|      Portainer      | https://10.0.0.2:9443 | `ikoolcore` | `8a2^myngJ!Ynpfc`  | docker管理服务 |
|        Alist        | http://10.0.0.2:5244 | `ikoolcore` | `ikoolcoreisgreat` |     网盘挂载服务     |
|    OpenSpeedTest    | http://10.0.0.2:3000 |      -      |         -          |     网络测速服务     |
|       Squoosh       | http://10.0.0.2:7701 |      -      |         -          |     图片压缩服务     |
|      Qinglong       | http://10.0.0.2:5700 | `未初始化设置` | `未初始化设置`    |     青龙脚本面板     |

以上配置仅适用于选购了带硬盘的订单。{.notice}

#### Windows10 LTSC：

|   虚拟机系统    |                   IP地址                    |  用户名   |    密码     | 备注 |
| :------------- | :-----------------------------------------: | :-------: | :---------: | :-- |
| Windows 10 LTSC | 10.0.0.3 | iKOOLCORE | `ikoolcore` |   `3389`远程桌面管理端口：已打开   |

以上配置仅适用于选购了带硬盘的订单。{.notice}

## 产品与服务

方寸之间 尽享乐趣！颜值在线性能强劲。{.notice}

### 产品购买

购买之前，请知悉！

**内存**：为双颗粒双通道的板载内存（`8GB为单颗粒单通道，16GB为双颗粒双通道`），一经购买不能升级，请按自身需求酌情购买。

[**硬盘**](https://item.taobao.com/item.htm?ft=t&id=686963354915)：`M.2 2242 NVMe协议`，PCIe 3.0 x 2速率。

强烈建议购买带硬盘配置，到手即用，，省去繁琐的系统配置过程。{.notice}

<table>
   <tr>
      <th>CPU</th>
      <th>内存</th>
      <th>硬盘</th>
      <th>价格</th>
      <th>购买链接</th>
   </tr>
   <tr>
      <td rowspan="2">N5105</td>
      <td>8GB</td>
      <td>不带/128G</td>
      <td>￥1069/￥1269</td>
      <td>
         <a href="https://item.taobao.com/item.htm?ft=t&id=682025492099" target="_blank">购买</a>
      </td>
   </tr>
   <tr>
      <td>16GB</td>
      <td>不带/512G</td>
      <td>￥1369/￥1769</td>
      <td>
         <a href="https://item.taobao.com/item.htm?ft=t&id=682025492099" target="_blank">购买</a>
      </td>
   </tr>
   <tr>
      <td rowspan="2">N6005</td>
      <td>8GB</td>
      <td>不带/128G</td>
      <td>￥1269/￥1469</td>
      <td>
         <a href="https://item.taobao.com/item.htm?ft=t&id=682025492099" target="_blank">购买</a>
      </td>
   </tr>
   <tr>
      <td>16GB</td>
      <td>不带/512G</td>
      <td>￥1469/￥1969</td>
      <td>
         <a href="https://item.taobao.com/item.htm?ft=t&id=682025492099" target="_blank">购买</a>
      </td>
   </tr>
</table>

农历新年后的正式版本，大幅升级了默认配置，提价70。{.notice}

<big>**具体升级了：**</big>

1. 散热风扇——已升级为铜管散热+滚珠静音风扇，散热能力增强的同时，十分安静；
2. 美学优化：
   - 底部盖板由原来的`菊花孔`设计改为`蜂窝状`设计
   - 电源按钮已优化为微椭圆形，更加融合整体美学设计
   - 金属固定件工艺优化，保证整块固定件的完整性
3. 优化散热通道设计——由原来的一侧开孔散热增加为两次对称开孔设计，风道为底部进风，两侧出风
4. 增加全金属CNC上盖，可作为硬盘散热器（此为选购项目）
5. 硬盘全面升级使用三星(`PM9B1`)、西数(`SN735`)、海力士(`BC711`)、长江存储(`PC210`)、镁光(`2450`)、忆联(`AM521` `AM620` `AM611`)的等`全新0通电`的OEM硬盘。**不同容量，品牌随机，不可指定。**

### 选购建议

> 目前国内市场因为和工厂一些商务条款没有协商好，导致有部分商家蹭硬酷R1，请认准 **硬酷R1** ，切勿购买所谓的R1魔方盒子。{.notice}

- 如果是计划物理机安装开源路由系统，选择 `N5105 + 8GB + 128GB` 足够折腾；
- 如果是计划玩虚拟机，那么建议内存优先考虑`16GB`，如果仅是PVE下双软路由，`8GB`内存也是足够的；
- 所有11代处理器虚拟机下暂时无法直通核显，所以N5105和N6005基本无差别。
- 是否选购硬盘？`新手或者基础较初级的消费者建议选购，省去安装系统的时间和折腾，极客和熟手可不选配` 未选配硬盘默认仅处理硬件质量问题，使用问题一律不支持。

### 退换货政策

- `不支持7天无理由`退换货： 定制产品，烦请谨慎思考后做购买决策；质量问题，随时联系客服处理，无忧售后；

- ⚠️**特别注意**：拆封后非质量问题不退不货，质量问题，请拍摄长视频且不能压缩画质发送给客服确认问题点；如无法接受前面4点，请不要拆封产品，一经拆封，默认接受定制产品概念和实物的细微调整。

未尽事宜，以咨询客服为准。感谢各位等待`硬酷R1`的各位消费者。{.notice}

## 产品支持

### 售后服务

因为行业内卷化严重，以及行业内有各种牛鬼蛇神，特做如下说明：{.notice}

- 产品未发货前，支持任意理由的退款申请；产品一经拆封，无法支持任何非硬件质量问题的退换货服务。<br>（`强制退款客户会被视为不友好客户，后续会限制店铺下单，一切以友好沟通为前提`）；

   - **质量问题不包括**：有噪音、有震动、有发热（或发热基于个人原因无法接受）、塞不进弱电箱、机器有灯光、机器上盖非金属材质等

   - **质量问题特指**（非人为的）：无法开机、网口故障、其他IO口故障等

任何售后疑问，以客服沟通为准。 {.notice}

- 产品发货后，未拆封包裹之前，无条件支持退货退款申请；

- 产品拆封后，一律不支持非硬件质量问题的退换货服务（包括人为损坏、人为故障）等，客服有最终解释权。

- 产品整机质保一年，`硬盘质保3年`（只换不修）

- 整机售后服务周期`2年`，期间超过1年不到2年之内的所有硬件问题，均成本芯片级维修，支持多次售后申请，直到问题解决 

**CPU**不挂的前提下，一切硬件问题都不是问题，实力工厂，拥有专门售后部门，可实现芯片级维修！{.notice}

### 产品固件与驱动下载

硬酷网盘：[谷歌云盘](https://drive.google.com/drive/folders/1p8LUQPUB49AUuJzbCT0dpLaD8_xyNwzB?usp=share_link) （`若无法打开，请确保你网络可以正常登录Google相关服务`）

内有独家OpenWRT系统、PVE镜像、ESXi7（`已打包好网卡驱动`）和ESXi8镜像，以及i226-V的Windows系统下的网卡驱动{.notice}

### 出厂默认配置

- R1整机 x 1 **CPU型号和板载内存大小因消费者选购不同而有差异**
- VESA支架 x 1 **支持7 x 7cm 和 10 x 10cm两种尺寸**
- 12V 2.5A DC转C专用电源 x 1 **专用电源，请勿用于其他设备，后果自负。**
- 说明书 x 1 **纸质，中英双语。阅读在线[电子版](https://wiki.ikoolcore.cn/#/)说明书**
- M.2 2242 NVMe 硬盘 x 1 **仅限选购带硬盘配置订单，未选购硬盘配置不包含**

### 发货说明

- 订单会使用 `顺丰快递` 发出；
- 包裹和包裹内的机器均会使用防拆封标签， **机器一经拆封，不支持非质量问题的7天无理由退换货申请(`这点需要额外注意`)** ，介意此条者可于发货前、快递收到但机器未拆封前，申请 **仅退款** 和**退货退款申请** 。感谢理解！

请下单之前确认接受并认可这一点，感谢！<br>有非消费者人为硬件问题可支持随时退换货申请，人为拆机并导致的损坏仅接受售后维修申请。<br>**非出厂质量问题不接受七天无理由退换货**。 {.notice}