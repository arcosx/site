---
title: Git
---

##### 设置签名
全局设置
```shell
git config --global user.email "xxxx@xxxx.com"
git config --global user.name "xxx"
```
单个项目设置
```shell
git config user.email "xxxx@xxxx.com"
git config user.name "xxx"
```

##### 在任意分支让 master 和 remote 同步
```shell
git fetch origin master:master
```

##### 设置 `vim` 作为默认编辑器
```shell
git config --global core.editor "vim"
```
