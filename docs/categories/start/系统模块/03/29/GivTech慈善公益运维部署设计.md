---
title: GivTech慈善公益运维部署设计
author: 张宇豪
date: 2024/3/29 23:30
categories:
 - Docker
 - Linux
tags:
 - Docker
 - Linux
---





# Docker一键部署GivTech平台



## 一、项目目录树

如下是基于Docker-Compose一键部署的安装包以及目录说明：

::: tip 部署脚本

`docker-compose.yml`: Docker Compose 配置文件。

:::

::: tip 后端服务

`gycs-admin`: 包含一个名为 gycs-admin 的子项目。

:::

- **bin**: 存放 `gycs-admin.jar` 可执行文件的目录。
- **config**: 存放项目配置文件的目录。
- data: 存放数据文件的目录。
- **Dockerfile**: 用于构建 `gycs-admin` 的 Docker 镜像的文件。
- **jdk-8u281-linux-x64.tar.gz**: JDK 的压缩文件。
- **lib**: 存放项目依赖库的目录。
- **logs**: 存放日志文件的目录。

::: tip 后台管理项目UI

`gycs-admin-vue3`: 包含一个名为 gycs-admin-vue3 的子项目。

:::

- **cert**: 存放证书文件的目录。
- conf: 存放配置文件的目录。
- dist: 存放项目编译后的文件的目录。
- **Dockerfile**: 用于构建 `gycs-admin-vue3` 的 Docker 镜像的文件。
- logs: 存放日志文件的目录。

::: tip 前端项目UI

`gycs-charity-vue3`: 包含一个名为 gycs-charity-vue3的子项目。

:::

- **cert**: 存放证书文件的目录。
- conf: 存放配置文件的目录。
- **Dockerfile**: 用于构建 `gycs-charity-vue3` 的 Docker 镜像的文件。
- html: 存放 HTML 文件的目录。
- logs: 存放日志文件的目录。

::: tip 数据库服务

`mysql`: 包含一个名为 mysql的子项目。

:::

- **Dockerfile**: 用于构建 MySQL 的 Docker 镜像的文件。
- **gycs.sql**: 数据库初始化脚本。
- **init_mysql.sh**: MySQL 初始化脚本。

::: tip 缓存数据库服务

`redis`: 包含一个名为 redis的子项目。

:::

- conf: 存放配置文件的目录。
- data: 存放数据文件的目录。

```shell
[root@tencent GYCS-Docker]# tree -L 3 
.
├── docker-compose.yml
├── gycs-admin
│   ├── bin
│   │   └── gycs-admin.jar
│   ├── config
│   ├── data
│   │   └── file
│   ├── Dockerfile
│   ├── jdk-8u281-linux-x64.tar.gz
│   ├── lib
│   └── logs
├── gycs-admin-vue3
│   ├── cert
│   │   ├── drill.wiki_bundle.crt
│   │   ├── drill.wiki_bundle.pem
│   │   ├── drill.wiki.csr
│   │   └── drill.wiki.key
│   ├── conf
│   │   └── nginx.conf
│   ├── dist
│   │   ├── assets
│   │   ├── favicon.ico
│   │   ├── favicon.svg
│   │   ├── index.html
│   │   ├── index.html.gz
│   │   └── ruoyi.zip
│   ├── Dockerfile
│   └── logs
│       └── error.log
├── gycs-charity-vue3
│   ├── cert
│   │   ├── drill.wiki_bundle.crt
│   │   ├── drill.wiki_bundle.pem
│   │   ├── drill.wiki.csr
│   │   └── drill.wiki.key
│   ├── conf
│   │   └── charity-nginx.conf
│   ├── Dockerfile
│   ├── html
│   │   ├── assets
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── js
│   │   └── nginx.htaccess
│   └── logs
│       ├── access.log
│       └── error.log
├── mysql
│   ├── Dockerfile
│   ├── gycs.sql
│   └── init_mysql.sh
└── redis
    ├── conf
    │   └── redis.conf
    ├── data
    │   ├── appendonlydir
    │   └── README.md
    └── logs
```



## 二、项目配置

Docker Compose 文件定义了几个不同的服务，每个服务都有自己的配置信息。需要分别配置如下服务配置。

### 1. 配置MySQL服务 

- `MYSQL_ROOT_PASSWORD`: MySQL 的 root 用户密码。
- `MYSQL_USER`: MySQL 数据库的用户名。
- `MYSQL_PASSWORD`: MySQL 数据库用户的密码。
- `MYSQL_DATABASE`: 要创建的 MySQL 数据库的名称。

### 2. 配置Redis服务

- `command`: Redis 服务器启动命令及其参数，包括配置文件路径和需要启用的功能。
- `environment`: 定义了时区信息。

### 3. 配置RabbitMQ服务 

- `RABBITMQ_DEFAULT_USER`: RabbitMQ 默认用户。
- `RABBITMQ_DEFAULT_PASS`: RabbitMQ 默认用户密码。
- `RABBITMQ_ERLANG_COOKIE`: Erlang Cookie。

### 4. 配置后端服务

- **数据库配置:**
  - `DB_HOST`: 数据库主机名。
  - `DB_PORT`: 数据库端口。
  - `DB_USER`: 数据库用户名。
  - `DB_PWD`: 数据库用户密码。
  - `DB_NAME`: 数据库名称。
  
- **Redis 配置:**
  - `REDIS_HOST`: Redis 主机名。
  - `REDIS_PORT`: Redis 端口。
  - `REDIS_PWD`: Redis 密码。
  
- **RabbitMQ 配置:**
  - `RABBITMQ_USERNAME`: RabbitMQ 用户名。
  - `RABBITMQ_PASSWORD`: RabbitMQ 用户密码。
  - `RABBITMQ_PORT`: RabbitMQ 端口。
  - `RABBITMQ_HOST`: RabbitMQ 主机名。
  
- **邮箱配置:**
- `EMAIL_USERNAME`: 邮箱用户名。
  - `EMAIL_PASSWORD`: 邮箱密码。

- **区块链配置:**
  - `CHAIN_PEERS`: 区块链对等节点地址。
  - `CONTRACT_PRIVATE_KEY`: 合约私钥。
  - `CONTRACT_ADDRESS`: 合约地址。
  
- **COS 配置:**
  - `COS_SECRET`: COS 密钥。
  - `COS_SECRET_KEY`: COS 密钥密钥。
  - `COS_BUCKET`: COS Bucket 名称。
  - `COS_BUCKET_NAME`: COS Bucket 名称。
  - `COS_FOLDER`: COS 存储目录。
  - `COS_WEB_URL`: COS Web 地址。

### 5. 配置前端服务

- `TZ`: 时区信息。

```yaml
version: '3'
services:
  # MySQL 服务
  mysql:
    image: gycs-mysql
    build:
      context: ./mysql
    ports:
      - "13306:3306"
    volumes:
      - /usr/local/docker/mysql/conf:/etc/mysql/conf.d
      - /usr/local/docker/mysql/data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD:      # 配置数据库ROOT用户密码
      MYSQL_USER:               # 配置数据库用户
      MYSQL_PASSWORD:           # 配置数据库用户登录密码
      MYSQL_DATABASE:           # 配置数据库信息
    container_name: mysql
  # Redis 服务
  redis:
    image: redis:7.2.3
    restart: always
    container_name: redis
    ports:
      - '6379:6379'
    environment:
      TZ: Asia/Shanghai
    volumes:
      - /GYCS-Docker/redis/conf/redis.conf:/usr/local/redis/config/redis.conf
      - /GYCS-Docker/redis/data/:/data/
      - /GYCS-Docker/redis/logs/:/logs/
    command: 'redis-server /usr/local/redis/config/redis.conf --appendonly yes --requirepass Wsczkmucdis251'
    depends_on:
      - mysql
  # Rabbitmq 服务
  rabbitmq:   
    container_name: rabbitmq     
    image: rabbitmq:3.8.3-management     
    restart: always     
    ports:       
      - "4369:4369"       
      - "5672:5672"       
      - "25672:25672"       
      - "15672:15672"     
    environment:       
      RABBITMQ_DEFAULT_USER:          # 配置RabbitMQ服务管理员用户       
      RABBITMQ_DEFAULT_PASS:          # 配置RabbitMQ服务的管理用户密码       
      RABBITMQ_ERLANG_COOKIE:         # 配置RabbitMq服务的COOKIE  
    depends_on:
      - redis
      - mysql
  # 后端服务
  gycs-admin:
    image: gycs-server
    build: ./gycs-admin
    restart: always
    container_name: gycs-admin
    ports:
      - '18080:18080'
    environment:
      TZ: Asia/Shanghai
      # 数据库配置
      DB_HOST: mysql       
      DB_PORT: 13306
      DB_USER:              # 配置数据库用户
      DB_PWD:               # 配置数据库用户密码
      DB_NAME:              # 配置数据库名称
      # Redis配置
      REDIS_HOST: redis
      REDIS_PORT: 6379
      REDIS_PWD:            # 配置Redis的密码
      # RabbitMQ配置
      RABBITMQ_USERNAME:    # 配置RabbitMQ的用户
      RABBITMQ_PASSWORD:    # 配置RabbitMQ的用户密码
      RABBITMQ_PORT: 5672
      RABBITMQ_HOST: rabbitmq
      # 邮箱的配置
      EMAIL_USERNAME:       # 配置邮箱用户信息
      EMAIL_PASSWORD:       # 配置邮箱的授权码
      # 区块链的配置
      CHAIN_PEERS:          # 配置区块链节点
      CONTRACT_PRIVATE_KEY: # 配置合约的管理员私钥
      CONTRACT_ADDRESS:     # 配置合约地址
      # COS配置
      COS_SECRET:           # 配置COS的Secret
      COS_SECRET_KEY:       # 配置COS的Secret Key
      COS_BUCKET:           # 配置COS的地区
      COS_BUCKET_NAME:      # 配置COS的桶名称
      COS_FOLDER:           # 配置COS的目录
      COS_WEB_URL:          # 配置COS的访问URL路径
    volumes:
      - /GYCS-Docker/gycs-admin/config/:/app/config/
      - /GYCS-Docker/gycs-admin/data/file/:/app/data/file/
      - /GYCS-Docker/gycs-admin/logs/:/app/logs/
      - /GYCS-Docker/gycs-admin/lib/:/app/lib/
    depends_on:
      - redis
      - mysql
      - rabbitmq
  gycs-admin-vue3:
    image: gycs-admin-ui
    build: ./gycs-admin-vue3
    restart: always
    container_name: gycs-admin-vue3
    ports:
      - '8089:8089'
      - '1443:443'
    environment:
      TZ: Asia/Shanghai
  gycs-charity-vue3:
    image: gycs-charity-ui
    build: ./gycs-charity-vue3
    restart: always
    container_name: gycs-charity-vue3
    ports:
      - '80:80'
      - '443:443'
    environment:
      TZ: Asia/Shanghai
```



使用docker-compose命令一键部署：

```bash
[root@tencent-cm GYCS-Docker]# docker-compose up -d
[+] Running 7/7
 ⠿ Network gycs-docker_default  Created  0.0s
 ⠿ Container rabbitmq           Started  1.1s
 ⠿ Container gycs-admin-vue3    Started  1.0s
 ⠿ Container mysql              Started  0.8s
 ⠿ Container redis              Started  1.3s
 ⠿ Container gycs-charity-vue3  Started  1.0s
 ⠿ Container gycs-admin         Started  2.4s
```

可以查看当前的服务运行状态和当前的服务运行端口是否正常。

![image-20240414162315860](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/image-20240414162315860.png)

如下是生成的镜像：

<img src="https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/image-20240414162633888.png" alt="image-20240414162633888" style="zoom:200%;" />





## 四、访问项目

访问http://localhost访问前端是否正常。

![image-20240414164925785](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/image-20240414164925785.png)

访问http://localhost:8089查看后端管理平台是否运行正常。

![image-20240414172129858](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/image-20240414172129858.png)
