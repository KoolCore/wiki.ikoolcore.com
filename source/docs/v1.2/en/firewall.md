# Firewall

> **iKOOLCORE R1, R2,R2 Max etc.**support x86-based router systems such as pFsense, OPNsense, Panabit, OpenWRT, iKuai, and more.

---**How to Physically Install a Router System**This guide is applicable to all multi-port devices with x86 architecture. When installing OpenWRT or iKuai, you must use**firmware with an `.img` file extension**.

-**Preparation Before Installation**:

-**Firmware**:[**iKOOLCORE Download Center**](https://dl.ikoolcore.com).

-**Hard Drive Adapter**: Using a hard drive enclosure is the most convenient way to install the system. (Recommended: RTL9210B solution, compatible with both SATA and NVMe protocols).

-**Disk Imaging Software**:

    -**Mac**: [BalenaEtcher](https://www.balena.io/etcher)
    -**Windows**: [BalenaEtcher](https://www.balena.io/etcher), [Rufus](https://rufus.ie/en/)

These programs can be used to write the firmware to a bootable drive.

-**Steps**:

-**Open**the disk imaging software (using BalenaEtcher on Mac as an example),**insert**the hard drive enclosure with the drive into your PC or Mac. ![6yqnoLZBXGewJdm](https://s2.loli.net/2023/03/18/6yqnoLZBXGewJdm.png) -**Select**the firmware you want to install,**choose**the inserted hard drive, and click**Write**. ![nBIcqLZhgmFDe6o](https://s2.loli.net/2023/03/18/nBIcqLZhgmFDe6o.png) ![9rRn7xF1zOZupYi](https://s2.loli.net/2023/03/18/9rRn7xF1zOZupYi.png)

- Once the writing process is successful, safely eject the drive.

Install the written hard drive into your HardCool device, plug it in, and connect a monitor to enter the system’s command interface. Use the firmware’s backend address and management port to access the management interface.

---**FAQ****Q: How do I configure the network?****A:**It depends on your network layout and the router system you’ve installed.

---**Q: How do I expand the Overlay partition for OpenWRT?**Most of the available guides focus on expanding partitions on SATA drives. What if I’m using NVMe or eMMC drives? Nowadays, most firmware includes a**Disk Management**feature. You can modify the size and format through the Web UI under**System**>**Disk Management**. If you can’t change it to the `f2fs` format, you’ll need to use command-line tools to format the partition to the desired format.
