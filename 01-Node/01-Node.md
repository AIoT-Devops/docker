# Node 

## 进入 Docker Hub 搜索 Node

![steps-1](https://github.com/AIoT-Devops/docker/blob/main/img/01-Node/01.png)

我们可以看到，在列表第一项，右上角带有OFFICIAL IMAGE标志，这就是我们需要的Node官方镜像

## 点击进入Node 官方镜像
![steps-2](https://github.com/AIoT-Devops/docker/blob/main/img/01-Node/02.png)

## Supported tags 列出了不同Node版本的镜像
![steps-3](https://github.com/AIoT-Devops/docker/blob/main/img/01-Node/03.png)

目前（2021年1月24日）[最新的Node版本](https://nodejs.org/en/)是15.6.0 

## 进入工程文件夹APP，创建Dockerfile

```
工程文件夹APP里面存放了一个最简单的Node工程
包含 package.json 和 app.js 两个文件
```

## Dockerfile文件


```
1. 拉取node镜像
FROM node:15.6.0-alpine3.10

2. 创建镜像中的项目文件夹
WORKDIR /usr/src/app

3. 将当前文件夹中的package.json和package-lock.json复制到当前文件夹
COPY package*.json ./

4. 安装依赖
RUN npm install

5. 将工程文件复制到当前文件夹
COPY . .

6. 将端口映射到8080
EXPOSE 8080

7.执行node app.js命令
CMD ["node","app.js"]

```

## 构建Docker镜像

```
docker build -t SunHe/docker-node
```

-t 代表当前镜像的tag

## 运行容器

```
docker run -p 1234:8080 -d SunHe/docker-node
```

-p 为container的内部8080端口映射一个外部的1234端口

-d 指定容器后台运行