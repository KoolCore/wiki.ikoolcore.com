---
title: 产品定位
---

[[toc]]

![](https://yun.swimly.cn/source/ikoolcore/banner.png)

## 硬酷R1主要应用场景：


### 家庭防火墙（Firewall）

   随着国内互联网过去10年的高速发展，黑客攻击和广告追踪，越来越影响我们的日常冲浪体验。借助硬酷R1，用户可安装`pFsense`、`OPNsense`、`iKuai`、`OpenWRT`等主要防火墙和流控的开源路由系统，轻松实现家庭网络的安全掌控。更有极客玩家安装ROS系统、Panabit等系统。在硬酷R1和各种开源的路由系统的加持下，我们可以轻松实现家庭网络去广告、自建`DNS服务`等，使我们的私有内网更安全。

### 虚拟机（Hypervisor）

硬酷R1基于通用`x86`架构设计，你可以安装运行 XCP-ng、Citrix Hypervisor、ESXi、Proxmox 等虚拟机。

- 4 个`i226-IT` `2.5G网口`可让您将专用网络资源分配给各个虚拟机或容器；

- 使用`赛扬N5105`/`奔腾N6005`，高达16GB内存可选，可以部署更多虚拟机；

### 远程办公（Remote Office）
 
 在疫情期间，远程办公逐渐兴起。借助DDNS+端口转发，可以实现人在异地，远程通过Microsoft Remote Desktop工具登陆办公电脑，实现远程操控，体验更流畅。 

 前提：有公网IP，且拥有一个可用于DDNS服务的域名 {.notice}

### Docker宿主机： (基于虚拟机之上玩各种套娃Docker服务) 

可以物理直装Linux系统，并安装docker服务，借助docker实现各种各样的微服务。也可以基于虚拟机之下的Linux系统上安装docker跑各种个性化需求的微服务。

- Portainer——Docker图形化管理工具

- Alist —— 超好用的在线网盘挂载工具

- LibreSpeed——内外网测速工具

- OpenSpeedTest——高颜值内外网测速工具

- Squoosh——GoogleChromeLab团队出品的开源图片压缩工具

- PhotoPrism —— 优秀的相册管理工具

- TrwebOCR——OCR在线识别工具

> 具体这些Docker的使用和配置信息，请前往默认[系统配置页面](https://wiki.ikoolcore.cn/#/guidance/default_os)了解

### 下载机

可以直装Windows当各种云网盘的下载机，也可以借助docker安装各种pt下载工具（transmission/qbittorrent等），轻松玩转pt。同时也可以基于PVE/ESXi/Unraid等虚拟机下安装开源NAS系统，通过直通USB硬盘设备作为存储盘。

可行，但不推荐。R1产品定位没有为NAS场景考虑 {.notice}

### 家庭媒体服务器

   借助诸如jellyfin, Plex, alist等docker工具，轻松扮演家庭内网的媒体服务器。


![](https://yun.swimly.cn/source/ikoolcore/Banner_tw.png)