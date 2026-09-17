# Firewall

> iKOOLCORE R1, R2, and R2 Max support x86-based router systems such as pfSense, OPNsense, Panabit, OpenWRT, iKuai, and more.

## How to Physically Install a Router System

> This guide applies to all multi-port x86 devices. When installing OpenWRT or iKuai, use firmware with an `.img` file extension.

### Preparation

- Firmware: download it from the [iKOOLCORE Download Center](https://dl.ikoolcore.com).
- Hard drive adapter: a USB-to-storage enclosure is the most convenient option. An RTL9210B-based adapter is recommended because it supports both SATA and NVMe drives.
- Disk imaging software:
  - macOS: [BalenaEtcher](https://www.balena.io/etcher)
  - Windows: [BalenaEtcher](https://www.balena.io/etcher) or [Rufus](https://rufus.ie/en/)

> These tools can write the firmware image to a bootable drive.

### Write the Firmware

1. Open the disk imaging software. The following example uses BalenaEtcher on macOS. Insert the drive enclosure containing the target drive into your PC or Mac.

   ![Select the target drive](https://s2.loli.net/2023/03/18/6yqnoLZBXGewJdm.png)

2. Select the firmware image and the inserted drive, then click**Write**.

   ![Select the firmware](https://s2.loli.net/2023/03/18/nBIcqLZhgmFDe6o.png)

   ![Write the firmware](https://s2.loli.net/2023/03/18/9rRn7xF1zOZupYi.png)

3. After the write completes successfully, safely eject the drive.

Install the prepared drive into the iKOOLCORE device, connect power and a monitor, and boot into the installed system. Use the system's management address and management port to open its administration page.

## FAQ

### How do I configure networking?

> The configuration depends on your network layout and the router system you installed.

### How do I expand the Overlay partition for OpenWRT?

> Most available guides describe expanding partitions on SATA drives. For NVMe or eMMC drives, most modern firmware includes a**Disk Management**feature. You can change the partition size and format from the web interface under**System**→**Disk Management**. If the partition cannot be changed to `f2fs`, use command-line tools to format it with the required file system.
