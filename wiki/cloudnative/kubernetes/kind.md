---
title: Kind
---

### 资源

官网 https://kind.sigs.k8s.io/

### 创建集群

指定名称创建

```shell
kind create cluster --name cluster1
kind create cluster --name cluster2
```

指定配置文件

```
kind create cluster --name cluster1 --config kind-config.yaml
```

多节点集群配置

```yaml title="kind-config.yaml"
# three node (two workers) cluster config
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
- role: worker
```

网络映射本地网络  
在基于 NodePort 暴露时有较大用处，需要注意和下文 Ingress 的使用搭配方法

```yaml title="kind-config.yaml"
# three node (two workers) cluster config
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
  extraPortMappings:
  - containerPort: 80
    hostPort: 80
    listenAddress: "0.0.0.0" # Optional, defaults to "0.0.0.0"
    protocol: udp # Optional, defaults to tcp
```

选择 kubernetes 版本

官方Github项目Release上维护一个[镜像列表](https://github.com/kubernetes-sigs/kind/releases)


```yaml title="kind-config.yaml"
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
- role: worker
  image: kindest/node:v1.16.15@sha256:64bac16b83b6adfd04ea3fbcf6c9b5b893277120f2b2cbf9f5fa3e5d4c2260cc
```

### Ingress 设置

参考 https://kind.sigs.k8s.io/docs/user/ingress/#ingress-nginx

```yaml title="kind-config.yaml"
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
  kubeadmConfigPatches:
  - |
    kind: InitConfiguration
    nodeRegistration:
      kubeletExtraArgs:
        node-labels: "ingress-ready=true"
  extraPortMappings:
  - containerPort: 80
    hostPort: 80
    protocol: TCP
  - containerPort: 443
    hostPort: 443
    protocol: TCP
```

使用 ingress-nginx
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
```

### 删除集群

```shell
kind delete cluster --name cluster1
kind delete cluster --name cluster2
```

### 日常开发 Operator 使用配置

```shell

```