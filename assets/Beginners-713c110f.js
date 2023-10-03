import{A as t,f as s,g as e,C as c}from"./vendor-a71afa14.js";import"./__commonjsHelpers__-725317a4.js";const r={class:"markdown-body"},n=c('<p class="notice"><strong>硬酷科技从2023年4月1日起，不提供任何除硬件质量外的技术服务。</strong> <br>请根据wiki自行探索。硬酷科技，专注开发硬件。 <br><strong>系统与软件，不在服务范围之内。</strong> <br> 善用搜索，善于动手，善于学习。(<strong>强烈推荐使用谷歌搜索</strong>)。</p><p><strong class="block grey">1. 如何进入R1的BIOS后台？</strong></p><p class="notice"><strong>通电开机后，0.5秒内按下<code>F2</code>即可进入BIOS后台，0.5秒内按下<code>F12</code>即可进入启动项选择界面。</strong>.</p><p><strong class="block grey">2. 如何设置来电自启和手动开关机？</strong></p><p class="notice"><strong>通电开机的0.5秒内按下F2进入BIOS后台，然后在路径<code>Chipset</code>&gt;&gt;&gt;<code>PCH-IO Configuration</code>&gt;&gt;&gt;<code>State After G3</code>下设置：<code>S0 State</code>为来电自启 ；<code>S5 State</code> 为手动开关机</strong> 。</p><p><strong class="block grey">2. 如何解锁温度墙？</strong></p><p class="notice"><strong>通电开机的0.5秒内按下F2进入BIOS后台，然后在路径<code>Advanced</code>&gt;&gt;&gt;<code>Thermal configuration</code>&gt;&gt;&gt;<code>CPU Thermal configuration</code>&gt;&gt;&gt;<code>Tcc of activation offset</code>下调整数值：默认是30，表示温度墙是105-30=75度；用户可以调整该数值。设置为0代表温度墙为105度，即没有温度墙；建议设置数值为15，即表示温度墙为105-15=90度，如果自行调整的温度墙上限较高，导致整机温度较高，烦请理解原因。<br><br>硬酷科技在此反馈高温烤机压力测试表现：硬酷R1在环境温度为65度的高温压力测试环境中，处理器温度高大90+，但是依然没有死机，最终降频通过测试。</strong></p><p><strong class="block grey">3. 硬酷R1的硬盘支持NVMe和SATA自适应吗？</strong></p><p class="notice"><strong>目前，只能二选一，默认为NVMe协议，如果用户需要使用速度稍低且发热较低的SATA协议的M.2 2242硬盘的话，用户需要参考 <a href="https://wiki.ikoolcore.com/#/R1/zh-CN/resource/bios">升级BIOS</a> ，进行刷写SATA协议的BIOS，反之，如果用户需要从SATA协议的BIOS中回到NVMe协议的 BIOS，也需要进行BIOS刷写。<br><br>⚠️温馨提示：刷写BIOS为高阶风险操作，用户需要自行承担风险。</strong></p><p><strong class="block grey">4. 如何给硬酷R1刷写BIOS？</strong></p><p class="notice"><strong>参考 <a href="https://wiki.ikoolcore.com/#/R1/zh-CN/resource/bios">升级BIOS</a>。</strong></p><p><strong class="block grey">5. 硬酷R1支持传统的引导方式吗？</strong></p><p class="notice"><strong>目前，Intel 10代以后的处理器，均只支持UEFI引导，所有不支持UEFI引导的固件，均无法物理直装的方式安装在硬酷R1上。解决办法也是有的：借助PVE虚拟机或者ESXi虚拟机。此类系统有：Panabit等。</strong></p><p><strong class="block grey">6. 硬酷R1上的TF卡支持引导启动吗？</strong></p><p><strong class="notice">支持。注意：Linux及其分支均(<code>OpenWRT, pfsense, OPNSense</code>)可启动，Windows往TF卡写启动盘时，需用<a href="https://rufus.ie/downloads/">rufus</a>软件写入<code>WinToGo</code>启动盘。</strong></p><p><strong class="block grey">7. 硬酷R1电源规格是？</strong></p><p class="notice"><strong>在 <a href="https://wiki.ikoolcore.com/#/R1/zh-CN/design/hardware">硬件设计</a> 中，明确表示：硬酷R1上带有PD标识的Type-C口，同时支持DC 12/20和PD双协议（优先协商到20V，后协商到12V），正因为使用了双供电协议，所以无法采用DC圆头形态的电源接口。但硬酷科技为所有订单标配了DC母头转C口公头的转接线，用户依然可以使用其已有的DC 12V圆头电源为R1提供电力。</strong></p>',17),g=[n],f=[],b={__name:"Beginners",setup(a,{expose:o}){return o({frontmatter:{meta:[]}}),t({meta:[]}),(d,l)=>(s(),e("div",r,g))}};export{b as default,f as meta};