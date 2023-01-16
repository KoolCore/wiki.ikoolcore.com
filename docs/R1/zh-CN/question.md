---
title: 常见问题
---

[[toc]]

## 硬件配置如何？

| 参数 | 信息|
| :--- | :----------------------------------------------------------- |
| CPU  | 赛扬N5105、奔腾N6005                                         |
| 内存 | 板载设计，双LPDDR4 4200颗粒（跑在2933），双通道，使用三星/海力士颗粒 |
| 网卡 | 4 x Intel i226-v `优于i225-v`  （ `PVE` 原生支持，`ESXi` 已有社区驱动支持） |
| 硬盘 | M.2接口，2242硬盘尺寸，`NVMe协议`                            |
| 显示 | HDMI 2.0 4K60Hz视频输出                                      |
| USB  | USB 3.1 Gen1 x 2; USB-C 3.1 Gen1 x 1; TF Card x 1**支持启动** |
| 散热 | 主动散热 （均热板+主动散热风扇）                             |
| 供电 | USB-C接口供电 DC IN12V2A或12V3A <br>   **可使用PD充电头供电，协商到20V 3.25A** |
| 尺寸 | 75 x 75 x 48 mm                                              |

## 产品外观

![](https://wiki.ikoolcore.cn/images/mul_banner.png)

## 产品售价带配置的硬盘是啥牌子？啥主控？啥颗粒？

**内存**：为双颗粒双通道的板载内存，一经购买不能升级，请按自身需求酌情购买。

**硬盘**：`NVMe`协议，（SATA协议需求少，暂不生产）,[`淘宝链接`](https://item.taobao.com/item.htm?ft=t&id=686963354915)

<table>
   <tr>
      <th>CPU</th>
      <th>内存</th>
      <th>硬盘</th>
      <th>价格</th>
      <th>购买链接</th>
   </tr>
   <tr>
      <td rowspan="2">N5105</td>
      <td>8GB</td>
      <td>不带/128G</td>
      <td>￥999/￥1199</td>
      <td>
         <a href="https://item.taobao.com/item.htm?ft=t&id=682025492099" target="_blank">购买</a>
      </td>
   </tr>
   <tr>
      <td>16GB</td>
      <td>不带/512G</td>
      <td>￥1299/￥1699</td>
      <td>
         <a href="https://item.taobao.com/item.htm?ft=t&id=682025492099" target="_blank">购买</a>
      </td>
   </tr>
   <tr>
      <td rowspan="2">N6005</td>
      <td>8GB</td>
      <td>不带/128G</td>
      <td>￥1199/￥1399</td>
      <td>
         <a href="https://item.taobao.com/item.htm?ft=t&id=682025492099" target="_blank">购买</a>
      </td>
   </tr>
   <tr>
      <td>16GB</td>
      <td>不带/512G</td>
      <td>￥1399/￥1899</td>
      <td>
         <a href="https://item.taobao.com/item.htm?ft=t&id=682025492099" target="_blank">购买</a>
      </td>
   </tr>
</table>

   


## OEM定制的NVMe和SATA固态硬盘， 主控信息如下：

- NVMe主控：联芸(Maxio)科技 **MAP1202A-F1C  (以128G为例，其他容量主控可能有变化) ** ，使用此款芯片的市售产品有： [海康威视CC500](https://zhuanlan.zhihu.com/p/394138333) 、[Lexar雷克沙NM610PRO](https://diy.pconline.com.cn/1535/15359085.html) 、[致态TiPlus5000](https://www.chongdiantou.com/archives/137851.html) 
- 颗粒：长江存储
- 保修政策： **3年只换不修**
- 硬盘标签纸：

![](https://yun.swimly.cn/source/ikoolcore\SSD.jpg)

## 散热如何？

**主动散热设计，采用均热板和主动散热风扇结合的散热方式;单纯不讲负载，不说环境温度，聊发热/散热也是耍流氓。日常纯物理OpenWRT下，主动散热加持下，大部分地区（地区不同，环境气温不同）不会超过50度。作为体积极致小巧的机器，在产品品质层面，我们能做到的是高负载带来高发热的情况下，即使CPU温度超过70降频了，也不会死机，这个是产品质量底线;（注意测试样品CPU为N5100，TDP 6W， 相同条件下N5105预计温度会高一些。） ** 。  压测信息如下截图：

![](https://wiki.ikoolcore.cn/images/weather_temp.jpg)

![](https://wiki.ikoolcore.cn/images/limited.jpg)

## 产品扩展性如何？可以内置硬盘吗？

产品没有任何扩展性可言。如果您考虑扩展做存储设备，可以考虑其他产品。产品目前只有一个M.2硬盘位，无SATA位，无蓝牙位，无网卡位。只有两个外置USB3接口，一个USB C口。

## 发货时间？

目前已经在积极量产中，受9月初深圳疫情封城一周，外加之前没有把国庆假期的时间考虑进去，比原来预期的10月18日-10月28日发货的时候，推迟2-3周左右，目前最新的发货时间为：11月18日至11月28日；疫情严峻形势下，变数和不可控因素较多，烦请各位已经上车小伙伴理解 (理解万岁)！支持随时无条件中途下车的退款申请。**
