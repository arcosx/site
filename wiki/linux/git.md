---
title: Git
---
## Git
### 设置
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

##### 设置 `vim` 作为默认编辑器
```shell
git config --global core.editor "vim"
```
### 开发

##### 同步fork代码

指南[Syncing a fork - GitHub Docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)  
```shell
gh repo sync owner/cli-fork
```
##### 在任意分支让 master 和 remote 同步
```shell
git fetch origin master:master
```


## Github