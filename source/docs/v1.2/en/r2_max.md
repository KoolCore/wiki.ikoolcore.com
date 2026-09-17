# R2 Max Documentation

![R2 Max banner](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/R2_wiki_banner.webp)

## Motivation

The hardware design is primarily based on the product's role as both a firewall and a router. Considering that 2.5G has already become mainstream, the R2 Max is designed to offer users a longer product lifecycle. With an eye on both cost and future-proofing, we designed it with two 10GbE ports and two 2.5GbE ports.

The 10GbE ports use the [**Marvell**](https://cn.marvell.com/) **AQC113C-B1-C** chip, supporting **six-speed auto-negotiation** for 10M/100M/1G/2.5G/5G/10G. It is compatible with the Realtek RTL8126-CG single-port 5Gbps NIC. This design fully uses the processor's performance while maintaining excellent thermal management. The R2 Max is a consumer-grade, home open-source firewall and mini server product that excels in thermal performance and NIC compatibility.

## 1. Hardware Design

![R2 Max front and back](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/wiki_main_front_back.webp)

- **CPU:** Alder Lake-N N100, i3-N305; Twin Lake-N N150, i3-N355, 8-core 8-thread processor
- **Memory:** SO-DIMM DDR5 4800MHz, single memory slot, supports up to 32/48GB in a single module `Tested`
- **Network Adapter:** 2 x AQC113C-B1-C 10Gbps, 2 x Intel i226-V 2.5Gbps
- **Storage:** 2 x M.2 2280 NVMe slots, PCIe 3.0 x1 for each, 1 x TF card slot, supports system booting
- **USB:** 2 x USB-A 3.2 5Gbps, 1 x USB-C 3.2 Gen2 10Gbps
- **Display:** 1 x HDMI 2.0/2.1 supporting 4K@60Hz, 1 x USB-C eDP 1.4 supporting 4K@60Hz
- **Cooling:** Passive cooling for the processor and active cooling for the casing, with two built-in 4010 custom ball-bearing fans; PWM intelligent speed control from 2000 to 6000 RPM
- **System Support:** Windows, Linux, CentOS, OpenWRT, pfSense, OPNsense, Proxmox VE, VMware ESXi, Untangle, iKuai, and other mainstream x86 systems
- **Power Design:** 1 x DC IN 12-19V
- **Dimensions:** 157(L) x 118(W) x 40(H) mm
- **Weight:** Approximately 970g for the unit; over 1500g packaged

![R2 Max structure](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/structure.webp?v=1748364020)

![R2 Max passive and active cooling](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/passive_active.webp?v=1748364020)

## 2. PCIe Resource Allocation

The R2 Max further optimizes processor resource allocation. The black motherboard (v1.1) upgrades the two drive slots to **PCIe 3.0 x1**, with each drive reaching approximately **985MB/s**. PCIe resources are allocated to make the fullest possible use of the available bandwidth.

![R2 Max PCIe resource allocation](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/PCIeResourceAllocationEN.webp?v=1748419129)

## 3. Chassis Design

Continuing the design language of the R1 and R2, the chassis focuses on a compact enclosure while maximizing processor performance and cooling efficiency. The dimensions are 15.7 x 11.8 x 4cm. The metal enclosure uses a unibody CNC design. The processor and network chips transfer heat directly to dedicated CNC contact surfaces on the enclosure.

![R2 Max chassis](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/whole_6_i.webp?v=1748364020)

| CNC chassis                                                                                  | Rear panel                                                                                     | DDR and SSD installation                                                                         |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| ![CNC chassis](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/cnc.webp?v=1748364020) | ![Rear panel](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/back-1.webp?v=1748364020) | ![DDR and SSD](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/DDR-SSD.webp?v=1748364020) |

## 4. PCB Design

The R2 Max continues the dual-layer motherboard design used by the R1 and R2. At the physical level, two boards are integrated to extract the full processing capability of Alder Lake-N, with `9 PCIe Lines` allocated around the functional interfaces for an extremely compact component layout.

![R2 Max PCB design](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/pcb.webp?v=1748364020)

> **Size** represents the minimum layout dimensions required to place and arrange all components properly.

## 5. System Compatibility

The R2 Max is compatible with Windows, Debian, Ubuntu, CentOS, Proxmox VE, VMware ESXi, OpenWRT, iKuai, and other mainstream systems.

### Windows

![Windows compatibility](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/windows.webp?v=1748364020)

![Windows CPU stress test](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/Windows_stress_CPU.webp?v=1748364020)

### VMware ESXi

The AQC113C-B1-C network card cannot be used as a management interface under ESXi and will not be recognized for that purpose after installation. It is recognized correctly within ESXi and can be passed through directly to virtual machines.

![VMware ESXi dashboard](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/vmware-dashborad-en.webp?v=1748364020)

![VMware PCI passthrough](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/vmware-pci-device.webp?v=1748364020)

### Proxmox VE

Proxmox VE, commonly called PVE, is based on Debian and is fully compatible with the R2 Max. All hardware is recognized and can be used directly.

![Proxmox VE on R2 Max](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/PVE-1.webp?v=1748364900)

### OpenWRT

OpenWRT can be installed directly on the physical machine or under VMware ESXi or Proxmox VE. Passthrough both 10GbE ports to OpenWRT for full functionality.

![OpenWRT on R2 Max](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/OpenWRT-EN.webp?v=1748364020)

## 6. Memory Compatibility

Memory modules from SK Hynix, Crucial, Samsung, Lenovo, and other well-known brands have been tested. Both 8GB and 16GB modules run stably.

Other brands and capacities that were not tested are not necessarily incompatible. Customers are encouraged to test them and rely on their own results.

> **Note:** Extensive testing indicates that compatibility issues may occur with modules larger than 16GB. When using a 32GB module, Samsung 4800MHz or 5600MHz modules are recommended.

- Crucial 32GB and 48GB modules can boot and operate normally, although long-term stability may be affected under Windows. No issue was found under Linux.
- Samsung 32GB modules remained stable under Windows during extended AIDA64 testing for more than 105 hours.

![R2 Max memory test](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/ddr_test.webp?v=1748365544)

If you would like to help improve this compatibility chart, send your test results to [service@ikoolcore.com](mailto:service@ikoolcore.com).

## 7. Stability Testing

For the first shipment, one passively cooled N305/N355 unit and one passively cooled N100 unit were randomly selected for constant-temperature and constant-humidity stress testing. The tests were conducted at 55°C and 60% humidity using AIDA64 under Windows.

![Temperature stress test](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/temp_stress_test.webp?v=1748365486)

![Temperature stress result](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/temp_stress.webp?v=1748365414)

### Testing Performance

- **N305:** ![N305 stress test](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/N305_Stress.webp?v=1748365343)
- **N100:** ![N100 stress test](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/N100_Stress.webp?v=1748365229)

Both devices passed the AIDA64 stability test under Windows after running continuously for two hours. Neither device restarted. Both reached the thermal threshold of 95°C. After the system and motherboard temperatures stabilized to ambient conditions, the N305/N355 unit maintained an all-core turbo frequency above 2.30GHz, ranging from 2.99GHz to 3.00GHz at room temperature. The N100 unit performed even better and maintained a full-core turbo frequency of 2.90GHz with almost no throttling.

## 8. Cooling Design

TDP, or Thermal Design Power, is the maximum amount of heat generated under maximum theoretical load. TDP is commonly used as a reference for designing cooling systems and reducing power consumption. A higher TDP means that more heat is generated per unit of time. For a cooling system, TDP is the minimum cooling capacity required to dissipate that heat. — From [Wikipedia](https://en.wikipedia.org/wiki/Thermal_design_power).

> **Important:** TDP is not a measure of power consumption. It is a reference for cooling design.

We are committed to solving cooling challenges, even when it means **doubling costs**, to ensure 100% processor performance. Custom dual copper pipes transfer processor heat evenly to the external heat sinks. Custom dual 4010 ball-bearing silent fans then exhaust the heat from one side for efficient heat exchange with the surrounding air.

![R2 Max cooling structure](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/structure.webp?v=1748364020)

## 9. FAQs

### Q: Cannot power on the device, no HDMI signal, or cannot enter BIOS

When booting the R2 Max for the first time, especially when installing your own memory and storage, make sure the memory is firmly seated. Modules not listed in our compatibility tests at [wiki.ikoolcore.com](http://wiki.ikoolcore.com) cannot be guaranteed to work. You can share the module model with us so that BIOS compatibility can be improved in future updates.

If the device does not power on or enter BIOS on the first boot, follow these troubleshooting steps:

1. **Check memory compatibility** and make sure the memory module is securely installed.
2. Inserting or reseating memory and storage triggers a self-check and may increase startup time. Please be patient.
3. On the first boot with memory properly installed, the fan may run at full speed. Before the self-check starts, a single beep may be heard. The process usually takes 10-20 seconds, but can take longer depending on the memory. When complete, the device briefly powers off, then restarts and beeps again. BIOS should appear approximately 5-8 seconds later.
4. If the device completes these steps but still does not output video, check the monitor and cable. Try another monitor or cable. You can also use the USB-C port with a monitor that supports USB-C video output.

**These startup issues are common for first-time R2 Max users.**

### Q: Can the system be pre-installed?

We do not offer system pre-installation for any orders, because each customer has different setup plans and preferences.

### Q: How long is the warranty period?

All orders include a one-year warranty from the date of receipt. Repair support is also available after the first year. For hardware issues, contact [service@ikoolcore.com](mailto:service@ikoolcore.com).

### Q: Can we purchase from Amazon?

No. We no longer sell our products on Amazon. See [this page](https://www.ikoolcore.com/en-hk/pages/why-we-are-no-longer-selling-on-amazon) for more details.

### Q: Is the included power supply compatible with the plug type used in my country?

![Power adapter](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/power_adpater.webp?v=1748365104)

Yes. The package includes a power adapter with the appropriate plug type for the destination country or region. US, EU, AU, and UK adapter types are available, and all are certified for their respective regions.

### Q: How do I request after-sales service?

Visit [this page](https://www.ikoolcore.com/pages/after-sales-service-support) to submit your issue description, order number, and other details. It connects directly with our customer support team, and a dedicated representative will follow up.

### Q: Will BIOS updates continue to be provided?

If confirmed customer bug reports are verified by our engineers, or if AMI releases a new BIOS security update, we will provide the latest BIOS version for users to upgrade. Download BIOS files from [this page](https://dl.ikoolcore.com) and follow the upgrade instructions.
