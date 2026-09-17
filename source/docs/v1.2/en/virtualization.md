# Virtualization

## Installing Virtual Machines on Proxmox VE

> Understanding the Basics: Why install Proxmox VE (commonly known as**PVE**)? The R2 and R2 Max are physical machines, and while you can easily install operating systems like Windows, Debian, CentOS, Ubuntu, etc., these multi-port devices are designed to serve as the central control unit for your home network. They’re not intended for use as single-function physical machines. To run multiple operating systems and maximize hardware performance, virtualization technology is the way to go.

![image.png](https://s2.loli.net/2024/09/26/fUSyi29gokNlG7v.png)

## Tutorial Guide

- [PVE Installation Guide](https://www.proxmox.com/en/proxmox-virtual-environment/get-started), [How to Install Proxmox VE](https://phoenixnap.com/kb/install-proxmox)

- [How to Install Windows 11 on Proxmox VE](https://www.wundertech.net/how-to-install-windows-11-on-proxmox/)

- [How to Install pfsense on Proxmox VE](https://docs.netgate.com/pfsense/en/latest/recipes/virtualize-proxmox-ve.html)

- [How to Install OPNsense on Proxmox VE](https://www.wundertech.net/how-to-install-opnsense-in-proxmox/)

- [How to Install OpenWrt on Proxmox VE](https://www.jwtechtips.top/how-to-install-openwrt-in-proxmox/)

## Proxmox VE Source

> Scripts for better Proxmox VE Machine

- [Proxmox VE Helper Scripts - Streamlining your HomeLab](https://tteck.github.io/Proxmox/)

- [Optimize Your Dashboard](https://github.com/KoolCore/Proxmox_VE_Status)

## Why VMware ESXi is Not Recommended

ESXi is commercial software and has poor hardware compatibility. The official ISO does not natively support the Realtek 8125B(G) network card on the R2, nor does it support newer hardware, such as the Marvell AQC113C-B1-C on the R2Max. Since ESXi was acquired by Broadcom, its future is also uncertain. In light of these concerns and out of respect for commercial software, we do not recommend installing ESXi on our products, nor do we offer technical support for it.
