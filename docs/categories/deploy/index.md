---
showArticleMetadata: false
editLink: false
lastUpdated: false
showComment: false
---

# 使用Docker快速部署GivTech



> 环境说明

| 操作系统 | 基础环境                          | 说明                                               |
| -------- | --------------------------------- | -------------------------------------------------- |
| Ubuntu   | Docker 20.10/Docker-Compose V2.2+ | 需要保证当前的基础环境有Docker和Docker-Compose环境 |
| CentOS   | Docker 20.10/Docker-Compose V2.2+ | 需要保证当前的基础环境有Docker和Docker-Compose环境 |



## 一、基础环境

::: tip CentOS

1. 如果你是CentOS操作系统，请使用如下命令：

:::

```bash
    # 安装基础的工具
    $ yum install -y yum-utils device-mapper-persistent-data lvm2
    
    # 拉取Docker的镜像仓库
    $ yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
    
    # 更新当前的软件包
    $ yum makecache fast
    
    # 安装Docker-ce
    $ yum -y install docker-ce
    
    # 启动Docker服务
    $ systemctl start docker && systemctl enable docker
```



::: tip Ubuntu

2. 如果你是Ubuntu操作系统，请使用如下命令：

:::

```bash
 	# 安装依赖包
    $ sudo apt-get install  -y \
            apt-transport-https \
            ca-certificates \
            curl \
            gnupg-agent \
            software-properties-common

    # 添加Docker官方GPG key
    $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

    # 添加docker仓库
    $ sudo add-apt-repository -y \
    "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
    $(lsb_release -cs) \
    stable"

    # 更新包索引
    $ sudo apt-get update

    # 安装Docker
    $ sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose
```

配置阿里云镜像加速，阿里云镜像加速地址： https://ably8t50.mirror.aliyuncs.com：

```bash
$ vim  /etc/docker/daemon.json
{
  "registry-mirrors": ["https://ably8t50.mirror.aliyuncs.com"]
}

加载配置重启服务
$ systemctl daemon-reload
$ systemctl restart docker

卸载
$ systemctl stop docker
$ yum -y remove docker-ce
$ rm -rf /var/lib/docker
```



## 二、部署FISCO BCOS

拉取官网的FISCO BCOS2.9.0或者是3.6.0，这里使用的是FISCO BCOS2.9.0版本的区块链，所以直接拉取安装包：

```bash
[root@centos:~/work]# curl -#LO https://github.com/FISCO-BCOS/FISCO-BCOS/releases/download/v2.9.1/build_chain.sh && chmod u+x build_chain.sh
```

使用建链脚本部署区块链网络：

```bash
[root@centos:~/work]#  bash build_chain.sh -l 127.0.0.1:4 -p 30300,20200,8545
[root@centos:~/work]#  bash nodes/127.0.0.1/start_all.sh 
try to start node0
try to start node1
try to start node2
try to start node3
 node2 start successfully pid=2238732
 node0 start successfully pid=2238728
 node1 start successfully pid=2238735
 node3 start successfully pid=2238738

[root@centos:~/work]#   curl -#LO https://gitee.com/FISCO-BCOS/console/raw/master/tools/download_console.sh && bash download_console.sh
[root@centos:~/work]#  cp console/conf/config-example.toml console/conf/config.toml 
[root@centos:~/work]#  cp nodes/127.0.0.1/sdk/* console/conf/
[root@centos:~/work]#  bash console/start.sh 
=============================================================================================
Welcome to FISCO BCOS console(2.9.1)!
Type 'help' or 'h' for help. Type 'quit' or 'q' to quit console.
 ________ ______  ______   ______   ______       _______   ______   ______   ______  
|        |      \/      \ /      \ /      \     |       \ /      \ /      \ /      \ 
| $$$$$$$$\$$$$$|  $$$$$$|  $$$$$$|  $$$$$$\    | $$$$$$$|  $$$$$$|  $$$$$$|  $$$$$$\
| $$__     | $$ | $$___\$| $$   \$| $$  | $$    | $$__/ $| $$   \$| $$  | $| $$___\$$
| $$  \    | $$  \$$    \| $$     | $$  | $$    | $$    $| $$     | $$  | $$\$$    \ 
| $$$$$    | $$  _\$$$$$$| $$   __| $$  | $$    | $$$$$$$| $$   __| $$  | $$_\$$$$$$\
| $$      _| $$_|  \__| $| $$__/  | $$__/ $$    | $$__/ $| $$__/  | $$__/ $|  \__| $$
| $$     |   $$ \\$$    $$\$$    $$\$$    $$    | $$    $$\$$    $$\$$    $$\$$    $$
 \$$      \$$$$$$ \$$$$$$  \$$$$$$  \$$$$$$      \$$$$$$$  \$$$$$$  \$$$$$$  \$$$$$$

=============================================================================================
[group0]: /apps> 
[group0]: /apps> getGroupInfo
{
    "chainID":"chain0",
    "groupID":"group0",
    ······
}
```



## 三、部署智能合约

拉取WeBASE-Front前置平台并部署，拷贝当前的区块链网络的节点证书信息，然后部署智能合约。

```bash
[root@centos:~/work]# wget https://osp-1257653870.cos.ap-guangzhou.myqcloud.com/WeBASE/releases/download/v1.5.5/webase-front.zip
[root@centos:~/work]# unzip webase-front.zip
[root@centos:~/work]# cp /work/nodes/127.0.0.1/sdk/* webase-font/conf/
[root@centos:~/work]# cd webase-front && bash start.sh 
```

访问当前的http://localhost:5002/WeBASE-Front平台。

![image-20240414182805386](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/image-20240414182805386.png)

打开合约管理的测试用户，创建合约管理员Admin。

![image-20240414183048922](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/image-20240414183048922.png)

打开合约管理的合约IDE，上传智能合约，然后点击CharityController进行编译部署。这里选择刚刚创建的admin账户部署智能合约。然后生成如下的合约地址以及合约的ABI和合约的BIN文件。

![image-20240414183016214](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/image-20240414183016214.png)



## 四、项目配置

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





## 五、访问项目

访问http://localhost访问前端是否正常。

![image-20240414164925785](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/image-20240414164925785.png)

访问http://localhost:8089查看后端管理平台是否运行正常。

![image-20240414172129858](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/image-20240414172129858.png)