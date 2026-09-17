# BIOS 常见设置

## 基础操作

| 项目             | R2                                 | R2 Max                             |
| ---------------- | ---------------------------------- | ---------------------------------- |
| 进入 BIOS 快捷键 | `F2`                               | `Esc` 或 `F2`                      |
| 启动顺序快捷键   | `F12`                              | `F11`                              |
| 恢复默认出厂设置 | `Save & Exit` → `Restore Defaults` | `Save & Exit` → `Restore Defaults` |

## 电源与唤醒设置

| 设置项         | R2                                                                                                        | R2 Max                                                                 |
| -------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 来电启动       | `Chipset` → `PCH-IO Configuration` → `State After G3`；来电自启选择 `S0 State`，手动开关机选择 `S5 State` | `Advanced` → `IT8613 Super IO Configuration` → `Restore AC Power Loss` |
| USB 口带电     | `Chipset` → `USB 5V Configuration` → `USB 5V ALWAY`                                                       | `Advanced` → `IT8613 Super IO Configuration` → `USB Power CTL`         |
| 网口带电与 WOL | `Chipset` → `PCIE LAN Configuration` → `Wake on LAN Enable`                                               | `Advanced` → `ACPI Settings` → `Wake by onboard LAN`                   |

## 风扇设置

| 设置项   | R2                                                                                                                                  | R2 Max                                                                            |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| PWM 风扇 | `Advanced` → `Hardware Monitor` → `Smart Fan Function` → `CPU Fan Configuration`；可选 `Normal Mode`、`Manual Mode`、`Full on Mode` | `Advanced` → `Hardware Monitor`；支持 `PWM Mode`、`Full on Speed`、`Fan Off Mode` |
