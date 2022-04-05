---
title: Dotfiles
---

### 教程
**重要参考** [GitHub does dotfiles - dotfiles.github.io](http://dotfiles.github.io/)

值得借鉴的 [thoughtbot/dotfiles: A set of vim, zsh, git, and tmux configuration files.](https://github.com/thoughtbot/dotfiles)
### 使用方法
> 如果 dot file 包含公司脚本，密码等敏感信息，不建议在未加密的情况下托管到任何外网。

我的 dotfiles 托管在 Github: https://github.com/arcosx/dotfiles 

以 [wezterm](https://github.com/wez/wezterm) 配置为例
#### 开始
```shell
cd ~
git clone https://github.com/arcosx/dotfiles.git
```
#### 同步本地到远端

将本地文件移入 git 仓库中，创建文件链接
```shell
cd ~/dotfiles/wezterm/
mkdir -p 
mv .wezterm.lua ~/dotfiles/wezterm/.wezterm.lua
```
变动结束后推送至仓库
#### 同步远端到本地
清理本地配置（可选项）
```shell
cd ~
rm .wezterm.lua
ln -s ~/dotfiles/wezterm/.wezterm.lua .wezterm.lua
```