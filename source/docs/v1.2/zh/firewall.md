# 路由系统

> 硬酷 R1、R2 均支持兼容 x86 架构的路由器系统，比如pFsense、OPNsense、Panabit、OpenWRT、爱快等。

## 如何物理安装路由系统

> 本教程适用于所有 x86 架构的多网口设备，刷入 OpenWRT 或爱快系统，需要**使用 `img`后缀格式固件**。

- 刷系统前准备：

  - 固件：从[**资源下载**](https://dl.ikoolcore.com)获取。

  - 硬盘转接盒：

  > 使用硬盘盒进行刷机是最方便的方式。（推荐 RTL9210B 方案，SATA/NVMe双协议兼容）。
  - 写盘软件：
    - Mac: [BalenaEtcher](https://www.balena.io/etcher)
    - Windows: [BalenaEtcher](https://www.balena.io/etcher) 、 [Rufus](https://rufus.ie/en/)

> 以上软件均可以实现将固件写入到启动盘。

- `打开`写盘软件（`这里以Mac使用BalenaEtcher写盘为例`），`插入`装好硬盘的转接盒插到你的PC或者Mac上； ![6yqnoLZBXGewJdm](https://s2.loli.net/2023/03/18/6yqnoLZBXGewJdm.png)
- `选择`需要写入的固件并`选中`你插入的这块硬盘，点击`写入`； ![nBIcqLZhgmFDe6o](https://s2.loli.net/2023/03/18/nBIcqLZhgmFDe6o.png) ![9rRn7xF1zOZupYi](https://s2.loli.net/2023/03/18/9rRn7xF1zOZupYi.png)
- 刷写成功，安全弹出；

> 将刷写好的硬盘安装到硬酷设备上，插电接上显示器即可进入你刷入的系统的代码界面。根据你的固件的后台地址和管理口即可连接进入管理后台。

## FAQ

问：如何设置联网？

> 答：具体需要看你的网络布局和刷入的路由系统。

问：如何给 OpenWRT 进行 Overlay 分区扩容操作？

> 网上能查到的资料都是基于SATA盘下的扩容操作教程。如果我是NVMe/eMMC硬盘呢？现在基本所有固件都标配 `磁盘管理` 了。可以直接在 Web 页面 `系统`\>>>`磁盘管理`后台点击修改，改成你需要的大小和格式。如果无法修改成你需要的 `f2fs` 格式的话，则还是需要使用代码的方式将你的分区格式化为自己需要的格式。
