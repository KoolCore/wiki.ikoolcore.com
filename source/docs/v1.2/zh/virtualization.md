# 虚拟化

## Proxmox VE 底层虚拟机的安装

> 扫盲：为什么要安装 Proxmox VE（俗称**PVE**）？因为 R2 和 R2 Max 只是一台物理机，如果按照我们常规玩转PC机的经验，我们可以在上面安装 Windows, Debian, CentOS, Ubuntu 等都没有问题，但多网口设备当然是为了将其作为家庭网络中枢控制设备。肯定不是为了安装单一物理机使用的。要在 硬酷设备上安装多个操作系统，充分榨干硬件性能，那么当然就需要借助虚拟机技术了。

![2024-09-25_16-58-11](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/2024-09-25_16-58-11.webp)

> 如果你可以想像上面一样修改你的Proxmox VE的Dashborad面板显示处理器信息和温度，那么你可以使用我们的开源脚本[点击查看脚本和使用方法](https://github.com/KoolCore/Proxmox_VE_Status)。

## VMware ESXi vs Proxmox VE ?

ESXi是商业闭源软件，其对硬件的支持度较差，Proxmox VE 基于 Debian，是开源软件；二者对 R2 Max 都兼容可用。但在 ESXi 下，AQC113C-B1-C 无法被作为管理口，但可以在虚拟机内直通给虚拟机使用。除此差别之外，R2 Max 使用 PVE 还是 ESXi，基本无其他差异。 ![vmware](https://jackeroo-org-1257348434.cos.ap-hongkong.myqcloud.com/vmware.png)

## 教程集合

- [「PVE安装教程」](https://allinone.quickso.cn/docs/install/pve-install) 、[「PVE8最新安装使用指南」](https://post.smzdm.com/p/akle62mk/)

- 推荐学习资源：[All-in-One 搞基手册](https://allinone.quickso.cn/)
