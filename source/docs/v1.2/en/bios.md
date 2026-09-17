# BIOS Settings

## Basic Operations

| Item                     | R2                                 | R2 Max                             |
| ------------------------ | ---------------------------------- | ---------------------------------- |
| BIOS menu                | `F2`                               | `Esc` or `F2`                      |
| Boot order               | `F12`                              | `F11`                              |
| Restore factory defaults | `Save & Exit` → `Restore Defaults` | `Save & Exit` → `Restore Defaults` |

## Power and Wake Settings

| Setting                   | R2                                                                                                                            | R2 Max                                                                 |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Auto power on             | `Chipset` → `PCH-IO Configuration` → `State After G3`; select `S0 State` for power-on and `S5 State` for manual power control | `Advanced` → `IT8613 Super IO Configuration` → `Restore AC Power Loss` |
| USB power                 | `Chipset` → `USB 5V Configuration` → `USB 5V ALWAY`                                                                           | `Advanced` → `IT8613 Super IO Configuration` → `USB Power CTL`         |
| WOL and onboard LAN power | `Chipset` → `PCIE LAN Configuration` → `Wake on LAN Enable`                                                                   | `Advanced` → `ACPI Settings` → `Wake by onboard LAN`                   |

## Fan Settings

| Setting | R2                                                                                                                                              | R2 Max                                                                                        |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| PWM fan | `Advanced` → `Hardware Monitor` → `Smart Fan Function` → `CPU Fan Configuration`; available modes: `Normal Mode`, `Manual Mode`, `Full on Mode` | `Advanced` → `Hardware Monitor`; supported modes: `PWM Mode`, `Full on Speed`, `Fan Off Mode` |
