---
title: virt-manager
---
### 常用命令
#### 列出所有的虚拟机（包括关闭的）
```
virsh list --all
```
### 常用配置
#### 固定虚拟机IP
查找虚拟机的Mac地址
```
virsh --connect qemu:///system dumpxml <虚拟机名称> | grep 'mac address'
```
编辑网络
```
virsh --connect qemu:///system net-list
EDITOR=vim virsh --connect qemu:///system net-edit default
```
```
<network>
    ......
    <dhcp>
      <range start='192.168.122.2' end='192.168.122.254'/>
      <host mac='<虚拟机 mac address>' name='<虚拟机名称>' ip='<固定虚拟机IP 如 192.168.122.4 >'/>
    </dhcp>
  </ip>
</network>
```
保存并重启网络
```
virsh --connect qemu:///system net-destroy default
virsh --connect qemu:///system net-start default 
```