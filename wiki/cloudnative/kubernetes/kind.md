---
title: Kind
---

### 资源

官网 https://kind.sigs.k8s.io/

### 创建集群

##### 指定名称创建

```shell
kind create cluster --name cluster1
kind create cluster --name cluster2
```

##### 指定配置文件

```
kind create cluster --name cluster1 --config kind-config.yaml
```

##### 多节点集群配置

```yaml title="kind-config.yaml"
# three node (two workers) cluster config
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
- role: worker
```

##### 网络映射本地网络  
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

##### 选择 kubernetes 版本

官方 Github 项目 Release 上维护一个 [镜像列表](https://github.com/kubernetes-sigs/kind/releases)

```yaml title="kind-config.yaml"
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
  image: kindest/node:v1.16.4@sha256:b91a2c2317a000f3a783489dfb755064177dbc3a0b2f4147d50f04825d016f55
- role: worker
  image: kindest/node:v1.16.15@sha256:64bac16b83b6adfd04ea3fbcf6c9b5b893277120f2b2cbf9f5fa3e5d4c2260cc
```

##### Ingress 设置

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

### 使用 Kind 开发 Kubernetes 应用

集群一 双节点 主力开发调试使用 最新版本 Kubernetes 开启 ingress 
需要多节点。可部署供外部访问的持久化程序。

```yaml title="kind-config-cluster1.yaml"
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
    hostPort: 8848
    protocol: TCP
  - containerPort: 443
    hostPort: 8849
    protocol: TCP
- role: worker
- role: worker
```

```shell
kind create cluster --name cluster1 --config kind-config-cluster1.yaml
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
```

集群二 单节点 搭配集群一在开发多集群类程序使用，同样暴露网络端口，区别于集群一。
```yaml title="kind-config-cluster2.yaml"
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
    hostPort: 8850
    protocol: TCP
  - containerPort: 443
    hostPort: 8851
    protocol: TCP
```

```shell
kind create cluster --name cluster2 --config kind-config-cluster2.yaml
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
```

集群三 单节点（可选） 较低版本 (如v1.16) Kubernetes  仅用作适配情况验证
```yaml title="kind-config-cluster3.yaml"
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
  image: kindest/node:v1.16.15@sha256:64bac16b83b6adfd04ea3fbcf6c9b5b893277120f2b2cbf9f5fa3e5d4c2260cc
```

```shell
kind create cluster --name cluster3 --config kind-config-cluster3.yaml
```
