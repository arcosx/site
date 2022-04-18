---
title: Dev 
---
# 开发环境

## IDEA
### JVM 设置优化
使用 ZGC
```
-Xms128m
-Xmx4096m
-XX:ReservedCodeCacheSize=512m
-XX:CICompilerCount=2
-XX:+UnlockExperimentalVMOptions
-XX:+UseZGC
```