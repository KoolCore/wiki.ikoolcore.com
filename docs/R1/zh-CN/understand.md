---
title: 产品介绍
meta:
  - name: 产品介绍
    content: 硬酷R1（iKoolCore R1）是一个迟来的硬件项目，由推特网友 **[Jackeroo](https://twitter.com/isJackeroo)** 联合深圳的硬件工厂推出的目前市场最小巧且性能强大的4网口2.5G小主机。“方寸之间 尽享乐趣” 是硬酷R1的slogon。
---

[[toc]]

## 产品介绍

硬酷R1（iKoolCore R1）是一个迟来的硬件项目，由推特网友 **[Jackeroo](https://twitter.com/isJackeroo)** 联合深圳的硬件工厂推出的目前市场最小巧且性能强大的4网口2.5G小主机。“方寸之间 尽享乐趣” 是硬酷R1的slogon。

![R1Ad1](https://yun.swimly.cn/source/ikoolcore/R1-banner-2023-01.webp)

### 设计初衷

方寸之间 尽享乐趣！{.block .gray}

极致小巧 颜值在线 {.block .gray}

性能强大 {.block .gray}

多网口2.5G {.block .gray}

拒绝傻大黑粗 {.block .gray}

拒绝减/简配！拒绝电子垃圾 {.block .gray}

聚集一群有共同兴趣爱好的小伙伴


### 硬件设计

> 从零到一，独家开发。

#### 硬件选型：

- CPU：赛扬N5105、奔腾N6005

- 内存：LPDDR4 双通道，单颗粒8GB （`16GB内存双通道双颗粒`）

- 网卡：Intel i226-V  **（优于Intel i225-V）** 

- 硬盘： **M.2 NVME 2242 （x2速率）NVME/SATA双协议支持，但默认BIOS仅支持NVME协议硬盘。如有需要，后续放出支持SATA协议的BIOS。** 

- 显示：HDMI 2.0 4K 60Hz视频输出

- USB： USB 3.1 Gen1 x 2；USB-C 3.1 Gen1 x 2；

- TF：TF Card Slot x 1 **（支持启动）已测试：Linux下可启动，Windows不可启动** 

- 散热：主动散热 **后续会有升级版本散热器单独销售。散热是我们一直会努力优化的点。**

- 电源：标配 12V 2.5A 30W DC电源 **（定制Type C接口电源） 

特殊定制DC电源，请使用标配电源给R1供电！请勿使用其他C口PD电源供电，以免烧坏主板。因乱用电源烧坏主板，需要自行承担！{.notice}

- 尺寸：7.5 x 7.5 x 4.8cm **(方寸之间，尽享乐趣)**

#### 工程设计

![测试](https://wiki.ikoolcore.cn/images/DesignFile_2.png)

![](https://wiki.ikoolcore.cn/images/DesignFile_3.png)

![](https://wiki.ikoolcore.cn/images/DesignFile_4.png)

![](https://wiki.ikoolcore.cn/images/DesignFile_1.png)

## 应用场景

### 家庭防火墙（Firewall）

随着国内互联网过去10年的高速发展，黑客攻击和广告追踪，越来越影响我们的日常冲浪体验。借助硬酷R1，用户可安装pFsense、OPNsense、iKuai、OpenWRT等主要防火墙和流控的开源路由系统，轻松实现家庭网络的安全掌控。更有极客玩家安装ROS系统、Panabit等系统。在硬酷R1和各种开源的路由系统的加持下，我们可以轻松实现家庭网络去广告、自建DNS服务等，使我们的私有内网更安全。

### 虚拟机（Hypervisor）

随着国内互联网过去10年的高速发展，黑客攻击和广告追踪，越来越影响我们的日常冲浪体验。借助硬酷R1，用户可安装pFsense、OPNsense、iKuai、OpenWRT等主要防火墙和流控的开源路由系统，轻松实现家庭网络的安全掌控。更有极客玩家安装ROS系统、Panabit等系统。在硬酷R1和各种开源的路由系统的加持下，我们可以轻松实现家庭网络去广告、自建DNS服务等，使我们的私有内网更安全。

### 远程办公（Remote Office）

随着国内互联网过去10年的高速发展，黑客攻击和广告追踪，越来越影响我们的日常冲浪体验。借助硬酷R1，用户可安装pFsense、OPNsense、iKuai、OpenWRT等主要防火墙和流控的开源路由系统，轻松实现家庭网络的安全掌控。更有极客玩家安装ROS系统、Panabit等系统。在硬酷R1和各种开源的路由系统的加持下，我们可以轻松实现家庭网络去广告、自建DNS服务等，使我们的私有内网更安全。

### Docker宿主机：(基于虚拟机之上玩各种套娃Docker服务)

可以物理直装Linux系统，并安装docker服务，借助docker实现各种各样的微服务。也可以基于虚拟机之下的Linux系统上安装docker跑各种个性化需求的微服务。

  - Portainer——Docker图形化管理工具

  - Alist —— 超好用的在线网盘挂载工具

  - LibreSpeed——内外网测速工具

  - OpenSpeedTest——高颜值内外网测速工具

  - Squoosh——GoogleChromeLab团队出品的开源图片压缩工具

  - PhotoPrism —— 优秀的相册管理工具

  - TrwebOCR——OCR在线识别工具

> 具体以默认系统部分信息为准

### 下载机

可以直装Windows当各种云网盘的下载机，也可以借助docker安装各种pt下载工具（transmission/qbittorrent等），轻松玩转pt。同时也可以基于PVE/ESXi/Unraid等虚拟机下安装开源NAS系统，通过直通USB硬盘设备作为存储盘 。

> 可行，但不推荐。R1产品定位没有为NAS场景考虑

### 家庭媒体服务器

借助诸如`jellyfin`, `Plex`, `alist`等docker工具，轻松扮演家庭内网的媒体服务器。

## 默认系统

默认均安装PVE最新版(`pve-manager/7.3-3/c3928077`)底层系统，并在PVE宿主机下安装好了路由系统虚拟机、Debian11虚拟机、Windows10虚拟机。路由系统负责处理网络，Debian11下安装有Docker服务，并部署了各种了非常易用的docker服务，Windows10 LTSC系统开启远程桌面访问，方便配合DDNS实现远程内网管理和7 x 24小时下载一些必须依赖于Windows系统下的网盘资源（百度网盘、阿里云盘、迅雷下载等）。以下为宿主机和虚拟机的详情说明：

### 宿主机

| 宿主机系统 |  管理后台  |  账号  |  密码 |  备注|
| :--------: | :----------- | :----: | :---------: | :--------------------- |
|  PVE7.3-3  | Https://192.168.1.2:8006 | `root` | `ikoolcore` | 注意`https`、端口号:`8006` |

### 虚拟机

#### 路由系统

|    虚拟机系统   |   IP地址    | <div style="width: 3em;">用户名</div> |    密码     |    备注   |
| :------------------: | :---------: | :----: | :---------: | :-------- |
| ~~OpenWRT, 爱快, pfsense, OPNSense, Panabit<br>(某国内开源路由系统)~~ | 192.168.1.1 |  root  | `ikoolcore` | 请根据自己的喜好，自行设置自己需要的路由器系统 |

- 管理员：`LAN1`

- WAN口：`LAN2`(默认设置DHCP，请根据需要修改为PPPoE)；

- LAN口：`LAN3`, `LAN4`

> Lean已经推出针对R1硬件设计的优化版本开源路由OpenWRT系统：[点击下载](https://github.com/KoolCore/ikoolcore/blob/main/docs/files/openwrt-x64-iKoolCore-R1-squashfs-combined-efi.img.gz)

#### Debian11

| 虚拟机系统 |   IP地址 |  用户名|  密码 | 备注|
| :-------- | :--------: | :-------: | :---------: | :--------- |
|  Debian11  | 192.168.1.3 `固定IP` | `root`  `ikoolcore` | `ikoolcore` | 管理员root和用户密码相同 |

基于Debian11，已经安装`docker`服务，并基于docker容器，部署有以下微服务：

|  容器服务 |  后台地址   |用户名    |   密码 | 用途|
| :----------------- | :----------------------: | :---------: | :----------------: | :------------------ |
|      Portainer      | https://192.168.1.3:9443 | `ikoolcore` | `8a2^myngJ!Ynpfc`  | 可视化docker管理服务 |
|        Alist        | http://192.168.1.3:5244  | `ikoolcore` | `ikoolcoreisgreat` |     网盘挂载服务     |
|    OpenSpeedTest    | http://192.168.1.3:3000  |      -      |         -          |     网络测速服务     |
|       Squoosh       | http://192.168.1.3:7701  |      -      |         -          |     图片压缩服务     |
|      Qinglong       | http://192.168.1.3:5700  | `未初始化设置` | `未初始化设置`    |     青龙脚本面板     |
| Nginx Proxy Manager |  http://192.168.1.3:81   | `ikoolcore` | `ikoolcoreisgreat` |     反向代理服务     |

#### Windows10 LTSC：

|   虚拟机系统    |                   IP地址                    |  用户名   |    密码     | 备注 |
| :------------- | :-----------------------------------------: | :-------: | :---------: | :-- |
| Windows 10 LTSC | 192.168.1.4 | iKoolCore | `ikoolcore` |   `3389`远程桌面管理端口：已打开   |

> 以上仅限已经选购带硬盘配置的订单。

## 产品与服务

方寸之间 尽享乐趣！颜值在线性能强劲

### 产品购买

购买之前，请知悉！

**内存**：为双颗粒双通道的板载内存，一经购买不能升级，请按自身需求酌情购买。

**硬盘**：`NVMe`协议，（SATA协议需求少，暂不生产）,[`淘宝链接`](https://item.taobao.com/item.htm?ft=t&id=686963354915)

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
      <td>￥999/￥1199</td>
      <td>
         <a href="https://item.taobao.com/item.htm?ft=t&id=682025492099" target="_blank">购买</a>
      </td>
   </tr>
   <tr>
      <td>16GB</td>
      <td>不带/512G</td>
      <td>￥1299/￥1699</td>
      <td>
         <a href="https://item.taobao.com/item.htm?ft=t&id=682025492099" target="_blank">购买</a>
      </td>
   </tr>
   <tr>
      <td rowspan="2">N6005</td>
      <td>8GB</td>
      <td>不带/128G</td>
      <td>￥1199/￥1399</td>
      <td>
         <a href="https://item.taobao.com/item.htm?ft=t&id=682025492099" target="_blank">购买</a>
      </td>
   </tr>
   <tr>
      <td>16GB</td>
      <td>不带/512G</td>
      <td>￥1399/￥1899</td>
      <td>
         <a href="https://item.taobao.com/item.htm?ft=t&id=682025492099" target="_blank">购买</a>
      </td>
   </tr>
</table>


### 选购建议

- 如果是计划物理机安装开源操作系统，选择 `N5105 + 8GB + 128GB` 足够折腾；
- 如果是计划玩虚拟机，那么建议内存优先考虑`16GB`，如果仅是PVE下双软路由，`8GB`内存也是足够的；
- 关于带硬盘配置的硬盘品牌问题：

硬酷科技找OEM合作厂商专属定制 **低温盘** ，质保3年，放心使用。{.notice}

- **[硬盘](https://item.taobao.com/item.htm?ft=t&id=686963354915)** 芯片信息：
   - NVMe主控：联芸(Maxio)科技 **MAP1202A-F1C** 
   
   使用此款芯片的市售产品有： [海康威视CC500](https://zhuanlan.zhihu.com/p/394138333) 、[Lexar雷克沙NM610PRO](https://diy.pconline.com.cn/1535/15359085.html) 、[致态TiPlus5000](https://www.chongdiantou.com/archives/137851.html) {.notice}
   - 颗粒：长江存储
   - 保修政策： **3年只换不修**

### 退换货政策

- `不支持7天无理由`退换货： 定制产品，烦请谨慎思考后做购买决策；质量问题，随时联系客服处理，无忧售后；

- ⚠️**特别注意**：拆封后非质量问题不退不货，质量问题，请拍摄长视频且不能压缩画质发送给客服确认问题点；如无法接受前面4点，请不要拆封产品，一经拆封，默认接受定制产品概念和实物的细微调整。

> 未尽事宜，以咨询客服为准。感谢各位等待`硬酷R1`的各位消费者。

## 产品支持

### 售后服务

因为行业内卷化严重，以及行业内有各种牛鬼蛇神，特做如下说明：

- 产品未发货前，支持任意理由的退款申请；产品一经拆封，无法支持任何非硬件质量问题的退换货服务；

   - **质量问题不包括**：有噪音、有震动、有发热（或发热基于个人原因无法接受）、塞不进弱电箱、机器有灯光、机器上盖非金属材质等

   - **质量问题特指**（非人为的）：无法开机、网口故障、其他IO口故障等

任何售后疑问，以客服沟通为准。 {.notice}
 
- 产品发货后，未拆封包裹之前，无条件支持退货退款申请；

- 产品拆封后，一律不支持非硬件质量问题的退换货服务（包括人为损坏、人为故障）等，客服有最终解释权。

- 产品整机质保一年，`硬盘质保3年`（只换不修）

- 整机售后服务周期`2年`，期间超过1年不到2年之内的所有硬件问题，均成本芯片级维修，支持多次售后申请，直到问题解决 

> (**CPU**不挂的前提下，一切硬件问题都不是问题，实力工厂，拥有专门售后部门，可实现芯片级维修！)；

### 产品固件与驱动下载

固件推荐：[谷歌云盘](https://drive.google.com/drive/folders/1p8LUQPUB49AUuJzbCT0dpLaD8_xyNwzB?usp=share_link)

#### 驱动与BIOS

- Intel i226-V驱动：[点此跳转到Github下载](https://github.com/KoolCore/ikoolcore/blob/main/docs/files/Intel%20i226-v%20Driver%20Wired_driver_27.6_x64.zip)

- BIOS下载：
   - 出厂默认BIOS：[点此前往下载（未放出）]()
   - NVME协议BIOS：[点此前往下载（未放出）]())
   - SATA协议BIOS：[点此前往下载（未放出）]())

### 出厂默认配置

- R1整机 x 1 **CPU型号和板载内存大小因消费者选购不同而有差异**
- VESA支架 x 1 **支持7 x 7cm 和 10 x 10cm两种尺寸**
- 12V 2.5A DC转C专用电源 x 1 **专用电源，请勿用于其他设备，其他设备电源也请勿用于R1，烧坏需付费维修**
- 说明书 x 1 **纸质，中英双语。阅读在线[电子版](https://wiki.ikoolcore.cn/#/)说明书**
- M.2 2242 NVMe 硬盘 x 1 **仅限选购带硬盘配置订单，未选购硬盘配置不包含**

### 发货说明

- 订单会使用 `顺丰快递` 发出；
- 包裹和包裹内的机器均会使用防拆封标签， **机器一经拆封，不支持非质量问题的7天无理由退换货申请(这点需要额外注意)** ，介意此条者可于发货前、快递收到但机器未拆封前，申请 **仅退款** 和**退货退款申请** 。感谢理解！