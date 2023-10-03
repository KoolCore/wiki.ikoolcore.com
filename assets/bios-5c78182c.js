import{A as o,f as t,g as s,C as r}from"./vendor-a71afa14.js";import"./__commonjsHelpers__-725317a4.js";const a={class:"markdown-body"},i=r(`<p class="notice">Flashing BIOS is an unconventional upgrade that is prone to errors and can lead to abnormal situations such as system crashes and failure to start up. In the event of any loss or expenses resulting from self-flashing of BIOS, the customer shall bear the responsibility. Once the BIOS has been self-flashed, it is assumed that the above terms and conditions have been accepted and acknowledged.</p><h5>Steps for Flashing BIOS</h5><ol><li><p>Preparation:</p><ul><li>USB flash drive</li><li>BIOS file: <ul><li><a href="https://drive.google.com/drive/folders/1J7mZnzvrRPlAU29xqEM-I-dM0KEAHsrf?usp=share_link">SATA/NGFF protocol BIOS</a> (after the hard disk is flashed, it only supports M.2 2242 SATA/NGFF protocol)</li><li><a href="https://drive.google.com/drive/folders/1as5hQYAQ8-dW_HGReBxzNnjI6G7oOHU3?usp=share_link">NVMe protocol BIOS</a> (after the hard disk is flashed, it only supports M.2 2242 NVMe protocol)</li></ul></li></ul></li><li><p>Extract the downloaded BIOS file package to obtain two BIOS files with different memory sizes, 8GB and 16GB.</p></li><li><p>Format the USB flash drive to the <code>FAT32</code> format, create an <code>EFI</code> folder at the root directory of the USB flash drive, and then create a <code>boot</code> folder under the <code>EFI</code> folder.</p></li><li><p>Copy all the files extracted in step 2 to the <code>boot</code> folder. <strong><small>Note that the BIOS file with the corresponding memory size must be selected for the machine to flash BIOS</small></strong> <img src="https://github.com/KoolCore/wiki.ikoolcore.com/blob/main/pic/udisk.jpg?raw=true" alt="img"></p></li><li><p>Connect R1 to a <strong>wired keyboard and mouse</strong> and a <strong>display</strong>, and insert the USB flash drive. Turn on the power and press <code>F12</code> to enter the UEFI boot option to select booting from the USB flash drive.</p></li><li><p>After booting, follow the steps below to flash BIOS:</p><pre><code>shellCopy code
# If a hard disk is connected, enter FS1:
fs0:
cd EFI\\boot\\
# Note: You can use Tab to autocomplete file names to avoid input errors.
.\\Fpt.efi -f .\\JP51CB_16G_SATA.bin
</code></pre></li><li><p>Precautions:</p><ul><li>Do not perform any operations or power off during the flashing process. When the <code>FPT Operation Successful</code> interface appears, the flashing program has been successful. Remove the USB flash drive and <strong>power off</strong> the machine to restart.</li><li><strong>PS:</strong> Flashing BIOS is risky, so please be cautious when performing the operation. In case of failure, please return to after-sales service.</li></ul></li></ol>`,3),n=[i],u=[],g={__name:"bios",setup(l,{expose:e}){return e({frontmatter:{meta:[]}}),o({meta:[]}),(h,p)=>(t(),s("div",a,n))}};export{g as default,u as meta};
