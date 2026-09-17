# R2 Max Documentation

![Banner\_20240904.webp](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/R2_wiki_banner.webp)

## Motivation

> The hardware design is primarily based on the product’s role as both a firewall and a router. Considering that 2.5G has already become mainstream in the current market, the R2 Max aims to offer users a longer product lifecycle. With an eye on both cost and future-proofing, we’ve designed it with two 10GbE ports and two 2.5GbE ports. The 10GbE ports use[**Marvell**](https://cn.marvell.com/)’s**AQC113C-B1-C**chip, supporting**six-speed auto-negotiation**for 10M/100M/1G/2.5G/5G/10G (compatible with the newly released Realtek RTL8126-CG single-port 5Gbps NIC). This design fully harnesses the processor’s performance while maintaining excellent thermal management. The R2 Max is a consumer-grade, home open-source firewall and mini server product that excels in thermal performance and NIC compatibility.

## 1\. Hardware Design

![wiki_main_front_back](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/wiki_main_front_back.webp)

-**CPU**: Alder Lake-N N100, i3-N305; Twin Lake-N N150, i3-N355, 8-core 8-thread processor

-**Memory**: SO-DIMM, DDR5 4800MHz, single memory slot design, supports up to 32/48GB memory in a single module `Tested`

-**Network Adapter**: 2 x AQC113C-B1-C 10Gbps , 2 x Intel i226-V 2.5Gbps

-**Storage**: 2 x M.2 2280 NVMe slots, PCIe 3.0 x 1 for each, 1 x TF card slot, supports system booting

-**USB**: 2 x USB-A 3.2 5Gbps, 1 x USB-C 3.2 Gen2 10Gbps

-**Display**: 1 x HDMI 2.0/2.1 supports 4K@60Hz output, 1 x USB-C (eDP 1.4) supports 4K@60Hz output

-**Cooling**: Passive cooling for the processor, active cooling for the casing with two built-in 4010 custom ball-bearing fans, supporting PWM intelligent speed control, speed range 2000-6000 rpm.

-**System Support**: Compatible with mainstream X86 architecture operating systems, including but not limited to Windows, Linux, CentOS, OpenWRT, pfSense, OPNsense, Proxmox VE, VMware ESXi, Untangle, etc.

-**Power Design**: 1 x DC IN 12-19V.

-**Dimensions**: 157(L) x 118(W) x 40(H) mm

-**Weight**: 970g for unit, packaged over 1500g

![structure.webp?v=1748364020](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/structure.webp?v=1748364020)

![passive_active.webp?v=1748364020](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/passive_active.webp?v=1748364020)

## 2\. PCIe Resource Allocation

For the**R2 Max**, we’ve pushed things further! We’ve refined the processor resource distribution, and for the**black motherboard (v1.1)**, we’ve upgraded the drive slots to**PCIe 3.0 x1**. This means you’ll see speeds of approximately**985MB/s per drive**—we’ve truly optimized the PCIe bandwidth to its fullest!

![PCIeResourceAllocationEN.webp?v=1748419129](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/PCIeResourceAllocationEN.webp?v=1748419129)

## 3\. Chassis Design

> Continuing with the design elements from R1 and R2, the focus is on presenting the most compact enclosure structure while maximizing processor performance and optimizing cooling efficiency.

![whole_6_i.webp?v=1748364020](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/whole_6_i.webp?v=1748364020)

| ![cnc.webp?v=1748364020](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/cnc.webp?v=1748364020) | ![back-1.webp?v=1748364020](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/back-1.webp?v=1748364020) | ![DDR-SSD.webp?v=1748364020](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/DDR-SSD.webp?v=1748364020) |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |

## 4\. PCB Design

> Continuing with the dual-layer motherboard design from R1 and R2, the physical design**“marries”**two motherboards together to**“squeeze out”**all the processing resources of Alder Lake-N `9 PCIe Lines`. The design is based on functional interfaces and features an extreme component layout.

![pcb.webp?v=1748364020](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/pcb.webp?v=1748364020)

> **Size**represents the minimum layout dimensions that allow for all components to be placed and arranged reasonably.

## 5\. System Compatibility

The**R2 Max**is designed for broad compatibility, working seamlessly with major operating systems like:

- Windows

  ![windows.webp?v=1748364020](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/windows.webp?v=1748364020)![Windows_stress_CPU.webp?v=1748364020](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/Windows_stress_CPU.webp?v=1748364020)

- VMware ESXi

  > With VMware ESXi, the**AQC113C-B1-C network card cannot be used as a management interface**(it won’t be recognized after installation for that purpose). However, this card is perfectly recognized within ESXi and can be**passed through directly to virtual machines**for their use.

  ![vmware-dashborad-en.webp?v=1748364020](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/vmware-dashborad-en.webp?v=1748364020)![vmware-pci-device.webp?v=1748364020](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/vmware-pci-device.webp?v=1748364020)

- Proxmox VE

  ![PVE-1.webp?v=1748364900](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/PVE-1.webp?v=1748364900)

- OpenWRT

  ![OpenWRT-EN.webp?v=1748364020](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/OpenWRT-EN.webp?v=1748364020)

## 6\. Memory Compatibility

We have tested memory modules from well-known brands like SK Hynix, Crucial, Samsung, and Lenovo, confirming stable performance with both 8GB and 16GB modules.

For other brands or capacities not explicitly tested, this does not imply incompatibility. We encourage customers to test these modules and rely on their own findings.

⚠️**Note:**Initial testing by some Chinese customers suggests that modules over 16GB may have potential stability issues. For instance:

- Using _Crucial_ 32GB or 48GB modules enables normal boot-up and functionality; however, long-term stability might be impacted under Windows, not found under Linux.
- _Samsung_ 32GB modules have shown stability on Windows, even during extended testing with AIDA64 for over 105 hours.![.png](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/ddr_test.webp?v=1748365544)**If you’d like to help us improve this compatibility chart, feel free to share your test results with us at [service@ikoolcore.com](mailto:service@ikoolcore.com).**## 7\. Stability Testing

For the first batch of shipped devices, we randomly selected one**passively cooled N305/N355 unit and one passively cooled N100 unit, totaling two devices**, for constant temperature and humidity stress testing (in an extreme environment with a temperature of 55°C and humidity of 60%, running AIDA64 stability tests on Windows)：

![IMG\_0349.jpg](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/temp_stress_test.webp?v=1748365486) ![IMG\_0332.jpeg](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/temp_stress.webp?v=1748365414)**Testing Performance**：

-**N305:**![\-305.PNG](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/N305_Stress.webp?v=1748365343) -**N100:**![\-N100.PNG](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/N100_Stress.webp?v=1748365229)

> Both devices passed the AIDA64 stability stress test under Windows, running continuously for 2 hours in controlled conditions of 55°C (131°F) and 60% humidity. Neither device experienced any restarts. During the test, both devices hit the thermal threshold (95°C/203°F). For the N305/N355 model, once the system and motherboard temperatures stabilized to the ambient conditions, the all-core turbo frequency held steady above 2.30 GHz (ranging between 2.99 GHz and 3.00 GHz at room temperature). The N100 model demonstrated even better stability, with almost no throttling throughout the test, maintaining a full-core turbo frequency of 2.90 GHz.

## 8\. Cooling Design

> TDP (Thermal Design Power), also known as thermal design power (watts), refers to the maximum amount of heat generated under maximum theoretical load. TDP is commonly used as a key reference for designing cooling systems or reducing power consumption. A higher TDP indicates that more heat is generated per unit of time during operation. For a cooling system, TDP serves as the minimum standard for cooling capacity, meaning the system must be able to dissipate at least the amount of heat indicated by the TDP value. — From [Wikipedia](https://en.wikipedia.org/wiki/Thermal_design_power).

⚠ TDP is not a measure of power consumption; it is a reference for cooling design. ⚠

---

We are committed to solving cooling challenges, even if it means**doubling costs**, to ensure 100% performance from the processor. By using**custom dual copper pipes**, we evenly transfer the processor’s heat to the exterior heat sinks. This heat is then expelled by custom dual 4010-sized ball-bearing silent fans, which blow the heat away from one side, achieving efficient heat transfer and exchange with the air.

![structure.webp?v=1748364020](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/structure.webp?v=1748364020)

---

## 9\. FAQs

Q:**Cannot power on the device, No HDMI signal, Cannot enter to BIOS menu, etc.**> A: When booting up the R2 Max for the first time—especially if you’ve installed your own memory

> and storage—please ensure that the memory is firmly seated. If you’re using memory modules not listed on our compatibility tests at [wiki.ikoolcore.com](http://wiki.ikoolcore.com), we cannot guarantee compatibility. However, you can share your memory model with us, and we’ll work on optimizing BIOS compatibility in future updates. If you’re having trouble getting the device to power on and enter the BIOS on the first boot, follow these troubleshooting steps: 1.**Check memory compatibility**and make sure the memory module is securely installed. 2.After inserting or reseating the memory and other hardware, the device may take longer to start up as it runs a self-check process. Please be patient. 3.On the first boot with the memory properly installed, the device’s fan will run at full speed. Before the self-check begins, you’ll hear a single “beep” sound. The self-check usually takes 10-20 seconds, but it may take longer depending on the memory used. Once complete, the device will power off briefly (the power LED will turn off, and the fan will stop). It will then restart automatically and beep again. Around 5-8 seconds later, you should enter the BIOS. 4. If the device completes the above steps but still doesn’t output any display to your monitor, check the monitor and cables. Try swapping both the monitor and the cable to see if the issue persists. Alternatively, you can use the USB-C port to connect to a monitor that supports video output via USB-C port.**These startup issues are common for first-time users of the R2 Max**.

Q: Can the system be pre-installed?

> A: We do not offer system pre-installation service for any orders. For each user has their own unique setup plans and preferences.

Q: How long is the warranty period?

> A: All orders come with a one-year warranty starting from the date of receipt. After the one-year period, we also offer repair support. If your device experiences any hardware issues, feel free to contact our customer service at [service@ikoolcore.com](mailto:service@ikoolcore.com).

Q: Can we purchase from Amazon?

> A: No, we have stopped selling our products on Amazon. You can [check our website](https://www.ikoolcore.com/en-hk/pages/why-we-are-no-longer-selling-on-amazon) for more details on the reasons behind this decision.

Q: Will the power supply that comes with the R2 Max be compatible with the standard type used in my country?

![power_adpater.webp?v=1748365104](https://cdn.shopify.com/s/files/1/0696/1555/0751/files/power_adpater.webp?v=1748365104)

> A: Yes, the package will include a power adapter with the appropriate plug type based on the country or region the order is from. We offer four types of power adapters: US, EU, AU, and UK standards. All of them are fully certified for their respective regions.

Q: How to Request Aftersales Service?

> A: You can visit [this page](https://www.ikoolcore.com/pages/after-sales-service-support) to submit your issue description, order number, and other details. This page directly connects with our customer support team, and a dedicated representative will be assigned to address any problems you encounter.

Q: Will you continue to provide BIOS updates?

> A: If we receive confirmed bug reports from customers and our engineers verify them, or if AMI releases a new BIOS security update, we will promptly provide the latest BIOS version for users to upgrade. You can download the BIOS from [this page](https://dl.ikoolcore.com) and follow the upgrade instructions for guidance.
