## 我们制作好自己的镜像，可以把镜像导出，并在另一台安装Docker的设备上导入

## 对于离线安装场景，这两个命令非常有用


```

# 导出我的镜像
docker save <IMAGE NAME>:<IMAGE TAG>  > myImage.tar

# 导入我的镜像
docker load < myImage.tar

```