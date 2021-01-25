## 一个Node案例

## 工程结构
```
Dockerfile

package.json

app.js

- views
  - index.html
  - about.html
  - css
    - styles.css 

```


## Dockerfile

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
docker build -t SunHe/docker-node-fullstack .
```

-t 代表当前镜像的tag
. 代表基于当前目录构建

* 查看构建好的镜像
```
docker images
```
![docker-images](https://github.com/AIoT-Devops/docker/blob/main/img/02-Node-Frontend-Backend/docker-image.png)

## 运行容器

```
docker run -p 2345:8080 -d SunHe/docker-node-fullstack
```

-p 为container的内部8080端口映射一个外部的2345端口

-d 指定容器后台运行

* 查看运行中的容器

```
docker ps
```
![docker-ps](https://github.com/AIoT-Devops/docker/blob/main/img/02-Node-Frontend-Backend/docker-ps.png)


## Node工程

* package.json
  
```
本项目只依赖express

```


* app.js
  
```
1. 指定视图文件的路径
const path = __dirname + '/views/';

2. 定义路由规则
router.get('/', function(req,res){
  res.sendFile(path + 'index.html');
});

router.get('/about', function(req,res){
  res.sendFile(path + 'about.html');
});

3. css等其他静态文件服务
app.use(express.static(path));

```


* view跳转

```
<a href="/" class="nav-link">Home</a>

<a href="/about" class="nav-link">About</a>
```

