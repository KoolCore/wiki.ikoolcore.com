# Update

## BIOS Update

> Updating the BIOS is an advanced operation that, if done incorrectly, can lead to system failure, boot issues, or other problems requiring factory repair. All resulting damages or costs will be the responsibility of the customer. By proceeding with the BIOS update, you are acknowledging and accepting these terms.

1.  Preparation:

    - Prepare a USB drive and format it to `FAT32` (you can use the [`Diskgenius`](https://www.diskgenius.cn/) software for this).

    - BIOS Files:

| Product Model  | R1/R1 Pro                                             | R2/R2 NUC                                             | R2 Max                                                |
| -------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| Download Links | [iKOOLCORE Download Center](https://dl.ikoolcore.com) | [iKOOLCORE Download Center](https://dl.ikoolcore.com) | [iKOOLCORE Download Center](https://dl.ikoolcore.com) |

        > ⚠️ Important Notice: Since the R1 and R2 models have onboard memory, be aware that different BIOS versions correspond to different memory capacities. Installing the wrong version may result in the system failing to boot.

2. Copy the extracted `EFI` folder to the**root directory**of your USB drive; ![image.png](https://s2.loli.net/2023/10/30/mdF6ePGTCq5z7ML.png)

3.  Remove all external storage devices (including hard drives, USB sticks, and external drives), plug in the USB drive, connect the monitor, and power on the device. It will automatically initiate the BIOS update;**(You must remove the hard drive before inserting the USB and powering on, as this ensures the BIOS update is applied correctly. Otherwise, the system may misidentify the disk number and fail to update the BIOS.)**4. During the update, you will see code running on the screen. Once the message `FPT Operation Successful` appears, the update is complete. ![image.png](https://s2.loli.net/2023/10/30/1moD6yeQxKXsiJE.png)

4.  Important Notes:

    1.  Do**not interrupt or power off**the device during the update. Once you see the `FPT Operation Successful` message, the update is finished. Remove the USB drive,**power off**the device, and restart it. The first boot may take longer, so please be patient.
    2.  The first startup after updating the BIOS will take longer than usual, so please be patient.
    3.  Updating the BIOS carries risks. Proceed with caution, as a failed update may require factory repair.
