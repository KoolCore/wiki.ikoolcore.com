---
title: 默认系统
description: 默认预装的系统，仅限带硬盘设备。
---

[[toc]]

默认均安装PVE最新版(`pve-manager/7.3-3/c3928077`)底层系统，并在PVE宿主机下安装好了路由系统虚拟机、Debian11虚拟机、Windows10虚拟机。路由系统负责处理网络，Debian11下安装有Docker服务，并部署了各种了非常易用的docker服务，Windows10 LTSC系统开启远程桌面访问，方便配合DDNS实现远程内网管理和7 x 24小时下载一些必须依赖于Windows系统下的网盘资源（百度网盘、阿里云盘、迅雷下载等）。以下为宿主机和虚拟机的详情说明：

## 宿主机

| 宿主机系统 |   管理后台 |  账号  | 密码 |备注  |
| :--------: | :----------------------: | :----: | :---------: | :---------------------: |
|  PVE7.3-3  | Https://192.168.1.2:8006 | `root` | `ikoolcore` | `注意https、端口号8006` |

> 默认安装好[PVE Status Tools](https://github.com/iKoolCore/PVE_Status_Tools)（可显示PVE宿主机的各项参数信息） ，因为安装系统和测试会有少量的读写量和通电次数，属于正常。

## 虚拟机

### 路由系统

| 虚拟机系统  |   IP地址    | <div style="width:3em">用户名</div> |    密码     |   备注 |
| :----------------------------------------------------------: | :---------: | :----: | :---------: | :--------------------------------------------: |
| ~~**OpenWRT, 爱快, pfsense, OPNSense, Panabit<br>(某国内开源路由系统)**~~ | 192.168.1.1 |  root  | `ikoolcore` | 请根据自己的喜好，自行设置自己需要的路由器系统 |

- 管理口：LAN1；

- WAN口：LAN2(默认设置DHCP，请根据需要修改为PPPoE)；

- LAN口：LAN3, LAN4

Lean已经推出针对R1硬件设计的优化版本开源路由OpenWRT系统：[点击下载](https://drive.google.com/drive/folders/1p8LUQPUB49AUuJzbCT0dpLaD8_xyNwzB?usp=share_link) {.notice}

### Debian11

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


2023.01.07之前的所有默认的nginxproxymanger和portainer的密码，因为Jackeroo的粗枝大叶（大家快去扁他），搞错了密码；Jackeroo已经灰溜溜地在2023.01.07日解决并重置了默认配置的密码了。

#### 重置密码

- Portainer:  **[重置密码方法](https://omar2cloud.github.io/rasp/psswd/)**
   - 后台地址：https://192.168.1.3:9443
   - 用户名：`ikoolcore`
   - 密码：`8a2^myngJ!Ynpfc`
 - nginx proxy manager: **[重置密码方法](https://github.com/NginxProxyManager/nginx-proxy-manager/discussions/1634)**
   - 后台地址：http://192.168.1.3:81
   - 登录邮箱：`admin@ikoolcore.com`
   - 密码：`ikoolcoreisgreat`

担心你们ssh链接debian11虚拟机也会出问题，这里特别针对新手或者12K小白，强调一下：使用Windows或者Mac终端连接Debian11虚拟机ssh服务，需要使用`ssh ikoolcore@192.168.1.3`，密码也是`ikoolcore`，祝愿大家折腾的愉快，愉快地折腾！（白嫖《爱折腾的老高》频道的结束语，并不会给他钱。）