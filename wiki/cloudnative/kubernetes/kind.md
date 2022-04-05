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
kind create cluster --config kind-config.yaml
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
在基于 NodePort 暴露时有较大用处


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

### 删除集群

```shell
kind delete cluster --name cluster1
kind delete cluster --name cluster2
```
### Ingress 设置

参考 https://kind.sigs.k8s.io/docs/user/ingress/#ingress-nginx

```shell
cat <<EOF | kind create cluster --name cluster1 --config=-
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
EOF

```
使用 ingress-nginx
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
```