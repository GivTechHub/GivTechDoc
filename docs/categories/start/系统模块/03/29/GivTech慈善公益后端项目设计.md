---
title: GivTech慈善公益后端项目设计
author: 张宇豪
date: 2024/3/29 21:00
categories:
 - Java
tags:
 - Java
---



# 慈善公益后端项目设计



## 1. 数据库设计

### 1.1 逆向模型

![image-20240411221231984](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/image-20240411221231984.png)



### 1.2 数据库表

#### 1.2.1 用户数据表

1. 这个表用于存储用户的个人信息，包括用户ID、用户名、余额、积分、身份证ID、称号、参与投票次数、提现次数、地址、私钥和公钥等字段。这些信息可以用于对用户进行身份验证、管理用户的财务情况、记录用户的活动等操作。普通用户数据表设计如下：

```sql
CREATE TABLE `charity_user` (
  `id` int NOT NULL COMMENT '用户的ID',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '用户的名称',
  `amount` bigint DEFAULT NULL COMMENT '用户的余额',
  `credit` bigint DEFAULT NULL COMMENT '用户积分',
  `card_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '身份证ID',
  `designation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '用户称号',
  `vote_count` bigint DEFAULT NULL COMMENT '参与投票的次数',
  `withdraw_count` bigint DEFAULT NULL COMMENT '提现的次数',
  `user_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '用户的地址',
  `private_key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '用户的私钥',
  `public_key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '用户的公钥',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
```



2. 这个表存储了慈善机构的信息，包括机构ID、机构名称、账户余额、活动记录列表、机构地址、私钥和公钥。机构用户数据表设计如下：

```sql
CREATE TABLE `charity_org` (
  `id` int NOT NULL COMMENT '机构ID',
  `org_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '机构的名称',
  `amount` bigint DEFAULT NULL COMMENT '机构的账户余额',
  `activities_list` json DEFAULT NULL COMMENT '灾区活动发起记录ID',
  `org_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '机构的地址',
  `private_key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '用户的私钥',
  `public_key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '用户的公钥',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
```



3. 这个表存储了慈善机构的信息，包括机构ID、机构名称、账户余额、活动记录列表、机构地址、私钥和公钥。物流商用户数据表设计如下：

```sql
CREATE TABLE `charity_org` (
  `id` int NOT NULL COMMENT '机构ID',
  `org_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '机构的名称',
  `amount` bigint DEFAULT NULL COMMENT '机构的账户余额',
  `activities_list` json DEFAULT NULL COMMENT '灾区活动发起记录ID',
  `org_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '机构的地址',
  `private_key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '用户的私钥',
  `public_key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '用户的公钥',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
```



#### 1.2.2 慈善公益活动数据表

1. 这个表存储了公益慈善活动的信息，包括活动ID、活动名称、活动描述、创建时间、活动组织者、活动状态、开始时间、结束时间、总参与人数、总需金额、已完成金额和已取出金额。公益募资活动数据表设计如下：

```sql
CREATE TABLE `charity_raise_fund` (
  `id` int NOT NULL COMMENT '公益慈善ID',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '活动名称',
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '活动描述',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `promoter_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '活动组织者',
  `status` tinyint DEFAULT NULL COMMENT '活动状态',
  `start_time` datetime DEFAULT NULL COMMENT '开始时间',
  `end_time` datetime DEFAULT NULL COMMENT '结束时间',
  `total_people` bigint DEFAULT NULL COMMENT '总参与人数',
  `total_amount` bigint DEFAULT NULL COMMENT '总需金额',
  `over_amount` bigint DEFAULT NULL COMMENT '已完成金额',
  `withdraw_amount` bigint DEFAULT NULL COMMENT '已取出金额',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
```



2. 这个表存储了募资活动的审核信息，包括主键ID、募资活动ID、审核状态、审核人、申请时间和审核时间。公益募资活动审批进度数据表设计如下：

```sql
CREATE TABLE `charity_raise_audit` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `raise_id` int DEFAULT NULL COMMENT '募资活动ID',
  `apply_status` int DEFAULT NULL COMMENT '审核状态',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '审核人',
  `apply_time` datetime DEFAULT NULL COMMENT '申请时间',
  `audit_time` datetime DEFAULT NULL COMMENT '审核时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```



3. 这个表存储了活动的信息，包括活动ID、活动名称、创建时间、开始时间、结束时间、物流方式、物流商地址、代理人地址、状态、总参与人数和总物资数量。公益灾区活动数据表设计如下：

```sql
CREATE TABLE `charity_activitie_info` (
  `id` int NOT NULL COMMENT '活动ID',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '活动名称',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `start_time` datetime DEFAULT NULL COMMENT '开始时间',
  `end_time` datetime DEFAULT NULL COMMENT '结束时间',
  `logistic_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '物流方式',
  `logistic_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '物流商地址',
  `lncome_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '代理人地址',
  `status` tinyint DEFAULT NULL COMMENT '状态',
  `total_people` bigint DEFAULT NULL COMMENT '总参与人数',
  `total_materias` bigint DEFAULT NULL COMMENT '总物资数量',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
```



4. 这个表存储了公益文章的信息，包括主键ID、发布作者、文章内容、公益活动ID、创建时间和图片链接。公益灾区活动详细信息数据表设计如下：

```sql
CREATE TABLE `charity_article` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `author` varchar(255) DEFAULT NULL COMMENT '发布作者',
  `content` longtext COMMENT '文章内容',
  `activity_id` int DEFAULT NULL COMMENT '公益活动ID',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `img` text COMMENT '图片链接',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```



#### 1.2.3 公益溯源数据表

1. 这个表存储了公益捐款的信息，包括公益慈善溯源ID、捐款人地址、捐款金额、交易时间、交易类型、交易状态、捐款来源、捐款描述、捐款接收方机构和公益集资活动ID。公益捐款溯源信息数据表设计如下：

```sql
CREATE TABLE `charity_donation` (
  `donation_id` int NOT NULL AUTO_INCREMENT COMMENT '公益慈善溯源ID',
  `donor_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '捐款人地址',
  `amount` bigint DEFAULT NULL COMMENT '捐款金额',
  `trans_time` datetime DEFAULT NULL COMMENT '交易时间',
  `trans_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '交易类型',
  `is_donation` tinyint DEFAULT NULL COMMENT '交易状态',
  `source` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '捐款来源：来源，可以是个人、组织、企业等',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '捐款描述：具体用途，例如救灾、扶贫、医疗救助等',
  `dest_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '捐款接收方机构',
  `raise_id` int DEFAULT NULL COMMENT '公益集资活动ID',
  PRIMARY KEY (`donation_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
```



2. 个表存储了公益活动的溯源信息，包括公益活动溯源ID、物资种类、物资名称、物资数量、源地址、物流商地址、目标地址、交易时间、是否签收、公益活动ID、溯源状态、溯源的地址和溯源的时间。公益物资捐赠溯源信息数据表设计如下：

```sql
CREATE TABLE `charity_activite` (
  `charity_id` int NOT NULL AUTO_INCREMENT COMMENT '公益活动溯源ID',
  `material_type` int DEFAULT NULL COMMENT '种类：记录需要派送的物资种类，例如食品、饮用水、医疗用品、衣物等。',
  `material_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '物资的名称',
  `material_count` int DEFAULT NULL COMMENT '物资的数量',
  `source_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '源地址',
  `logistic_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '物流商地址',
  `dest_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '目标地址',
  `trans_time` datetime DEFAULT NULL COMMENT '交易时间',
  `is_sign` tinyint DEFAULT NULL COMMENT '是否签收',
  `activit_id` int DEFAULT NULL COMMENT '公益活动ID',
  `status` int DEFAULT NULL COMMENT '溯源状态： 1 开始 2 运输 3 签收 ',
  `trace_address` json DEFAULT NULL COMMENT '溯源的地址',
  `trace_time` json DEFAULT NULL COMMENT '溯源的时间',
  PRIMARY KEY (`charity_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
```



3. 这个表存储了捐款交易的信息，包括主键ID、交易哈希、交易区块块高、状态和公益募资活动ID。公益捐款溯源信息交易哈希和块高记录数据表设计如下：

```sql
CREATE TABLE `charity_donation_transaction` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `transaction_hash` longtext COMMENT '交易哈希',
  `block_number` int DEFAULT NULL COMMENT '交易区块块高',
  `status` tinyint DEFAULT NULL COMMENT '状态',
  `raise_id` int DEFAULT NULL COMMENT '公益募资活动ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```



4. 这个表存储了公益活动交易的信息，包括主键ID、交易哈希、交易区块块高、状态和公益活动ID。公益物资捐赠溯源信息交易哈希和块高记录数据表设计如下：

```sql
CREATE TABLE `charity_activitie_transaction` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `transaction_hash` longtext COMMENT '交易哈希',
  `block_number` int DEFAULT NULL COMMENT '交易区块块高',
  `status` tinyint DEFAULT NULL COMMENT '状态',
  `activite_id` int DEFAULT NULL COMMENT '公益活动ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25161 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```



5. 这个表记录了银行转账的信息，包括主键ID、公益募资ID、转账金额和转账时间。公益捐款使用银行转账支付记录数据表如下：

```sql
CREATE TABLE `charity_bank_transfer_record` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `raise_id` int DEFAULT NULL COMMENT '公益募资ID',
  `amount` bigint DEFAULT NULL COMMENT '转账金额',
  `trans_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '转账时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```



#### 1.2.4 银行卡和订单数据表

1. 这个表记录了用户的银行信息，包括主键ID、开户账户、开户银行、开户姓名、身份证号、工作地址和用户ID。用户绑定银行卡数据表如下：

```sql
CREATE TABLE `charity_user_bank` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `bank_account` varchar(255) DEFAULT NULL COMMENT '开户账户',
  `bank_name` varchar(255) DEFAULT NULL COMMENT '开户银行',
  `username` varchar(255) DEFAULT NULL COMMENT '开户姓名',
  `card_id` varchar(255) DEFAULT NULL COMMENT '身份证号',
  `address` varchar(255) DEFAULT NULL COMMENT '工作地址',
  `user_id` int DEFAULT NULL COMMENT '用户ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```



2. 这个表记录了订单的信息，包括主键ID、订单编号、派送信息、签收信息、订单结束信息、物流商地址、寄件人地址、收件人地址、运费、签收状态、公益活动ID、公益捐赠物资的溯源ID、订单创建时间和物品信息。物流订单数据表如下：

```sql
CREATE TABLE `charity_order` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `order_uuid` varchar(255) DEFAULT NULL COMMENT '订单编号',
  `delivery_message` longtext COMMENT '派送信息',
  `sign_message` longtext COMMENT '签收信息',
  `end_message` longtext COMMENT '订单结束信息',
  `logistic_address` varchar(255) DEFAULT NULL COMMENT '物流商地址',
  `source_address` varchar(255) DEFAULT NULL COMMENT '寄件人地址',
  `dest_address` varchar(255) DEFAULT NULL COMMENT '收件人地址',
  `amount` bigint DEFAULT NULL COMMENT '运费',
  `is_sign` tinyint DEFAULT NULL COMMENT '签收状态',
  `activity_id` int DEFAULT NULL COMMENT '公益活动ID',
  `trace_id` int DEFAULT NULL COMMENT '公益捐赠物资的溯源ID',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '订单创建时间',
  `item_name` varchar(255) DEFAULT NULL COMMENT '物品信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```





## 2. 功能设计

### 2.1 登录注册功能

#### 2.1.1 普通用户登录注册

使用用户名密码加上验证码进行注册功能，然后整个注册流程是用户先输入表单注册，系统会根据如下流程进行功能的实现：

- 校验当前的验证码和用户是否已经存在
- 注册为系统的普通用户
- 手动绑定系统的角色权限
- 注册为区块链的用户
- 使用rabbitmq发送订阅消息指定路由key为REGISTER的交换机提供给消费者消费
- 接收到消息的消费者进行消费并将用户信息进行上链存储

#### 2.1.2 机构用户登录

- 使用管理员账户登录后端，添加用户绑定角色为机构用户，该机构具备的权限为，发布公益活动，和代理接收物资的功能。

#### 2.1.3 物流商登录

- 使用管理员账户登录后端，添加用户绑定角色为物流商用户，该物流商具备的功能为，查看当前的物流订单情况，包括添加当前的运输物流订单情况。



### 2.2 查询公益信息功能

查询公益信息功能分为两部分的功能：

公益募资的活动信息查询：

- 由于链上的信息数据和数据库中的数据是同步的，不能在区块链上做分页查询。直接分页查询数据库中的数据信息。

公益灾区活动信息查询:

- 由于链上的信息数据和数据库中的数据是同步的，不能在区块链上做分页查询。直接分页查询数据库中的数据信息。



### 2.3 查询个人信息功能

查询个人信息功能主要是使用多表联查把系统用户的信息以及区块链账户的用户信息一起查询出来，然后封装到一个Vo对象中去，这里的查询个人信息功能没有使用Redis缓存，主要是当前的个人信息功能更新过快担心Redis缓存不同步的问题。其功能的业务流程如下：

- 涉及到了连表查询需要根据当前的用户ID查询区块链账户信息和系统用户信息
- 封装Vo对象进行处理，先读取缓存数据再读取数据库数据



### 2.4 发布公益募资功能

发布公益募资功能当前需要先添加发起公益募资活动的表单信息，然后需要点进去上传当前对应的证明信息，根据上传的证明信息添加一条审核内容的信息，这里的审核主要是对证明信息进行审核，然后就可以进行票选结果，用户可以对该公益募资活动进行票选，如果票选通过之后，就可以进行公益募资。其功能的业务流程如下：

- 添加发起公益募资的基本表单信息

- 上传对应的证明信息

- 机构可以进行审核

- 进行票选结果

- 票选通过进行公益募资过程

- 募资完成之后可以进行公益反馈

- 查看完整的公益溯源

  

### 2.5 发布公益活动功能

代理机构用户通过系统界面填写公益募资活动的相关信息，包括活动名称、描述、目标金额、活动开始时间、结束时间等。将活动信息存储到数据库中然后再存储到区块链上。功能实现业务如下：

- 信息存储到数据库
- 活动信息存储到区块链
- 募资活动状态变更



### 2.6 参与公益募资活动投票功能

用户可以在系统中查看当前正在进行的公益募资活动，并选择感兴趣的活动进行投票。投票过程是匿名的，用户只需要点击相应的按钮或选项即可完成投票。投票结果将被记录并用于决定是否通过该公益募资活动。其功能的业务流程如下：

- 推送当前需要投票的公益募资活动
- 查看当前的公益募资状态
- 使用RabbitMQ异步通知投票情况



### 2.7 参与公益捐款功能

参与公益捐款的方式有两种，一种是选择微信支付或者是支付宝支付。另外一种是支持银行转账的方式，然后使用银行转账的方式需要包含开户银行以及开户账号信息，包括详细的转账金额。需要查询获取当前正在进行中的公益募资活动，用户进行捐款，需要使用区块链账户的方式交易，生成交易记录和区块链交易回执。

使用微信支付和支付宝支付：

1. 包含基本的字段
2. 交易时间
3. 交易金额

使用银行卡支付：

1. 开户银行
2. 开户账户
3. 交易金额

详细的用户参与公益捐款的业务流程如下：

- 查询当前进行中的公益募资活动： 用户进入捐款页面时，系统会查询数据库获取当前正在进行中的公益募资活动信息，以供用户选择捐款对象。
- 选择捐款方式： 用户在捐款页面可以选择捐款方式，包括微信支付、支付宝支付或银行转账。
- 微信支付或支付宝支付： 如果用户选择微信支付或支付宝支付，系统将跳转至对应支付平台的支付页面，用户完成支付后，支付平台会向系统发送支付成功的回调通知。
- 银行转账： 如果用户选择银行转账，系统会要求用户输入开户银行和开户账号等信息，并输入转账金额。用户提交信息后，系统会生成一条交易记录并记录到数据库中。
- 使用区块链账户交易： 系统将用户的捐款信息和交易记录存储到区块链上，生成交易记录和区块链交易回执。这一步是为了确保捐款信息的不可篡改性和透明性。
- 捐款完成： 用户完成支付或银行转账后，系统会向用户显示捐款成功的页面，并提供捐款成功的提示信息。
- 捐款信息记录： 系统会记录用户的捐款信息，包括捐款金额、捐款时间等，并更新公益募资活动的募资金额和捐款人数等信息。



### 2.8 参与公益物资捐赠功能

用户可以通过系统浏览当前可捐赠的物资活动，并选择感兴趣的活动进行捐赠，为有需要的人提供实际帮助。其具体的功能业务实现如下：

- 浏览可捐赠的物资活动： 用户进入公益物资捐赠页面时，系统会列出当前可参与的公益物资捐赠活动列表。
- 选择捐赠物资活动： 用户可以在列表中选择感兴趣的公益物资捐赠活动，点击进入详情页面。
- 查看捐赠物资需求： 在活动详情页面，用户可以查看该活动所需的捐赠物资种类、数量和其他相关信息。
- 确认捐赠物资： 用户确认自己可以提供所需的捐赠物资后，选择捐赠数量，并填写必要的联系信息，如姓名、电话等。
- 提交捐赠申请： 用户填写完毕后，提交捐赠申请。系统会将用户的捐赠申请信息存储到数据库中，并生成一条捐赠记录。
- 物资捐赠确认： 系统会将捐赠申请信息发送给活动组织者或相关机构进行确认。确认后，系统会更新捐赠活动的物资数量和状态信息。
- 捐赠完成： 用户收到捐赠确认后，表示捐赠完成。系统会向用户发送捐赠成功的通知，并在系统中记录捐赠信息。



### 2.9 物流商添加物品物流信息功能

物流商添加物品物流信息功能旨在提供一个便捷的平台，使物流商能够有效管理和跟踪物流信息，并及时更新物流状态，为公益活动的物资运输提供支持和服务。其功能的业务流程如下：

- 选择添加物流信息： 在物流商管理界面，物流商可以选择添加物流信息的功能。
- 填写物流信息： 物流商需要填写物流信息，包括物流单号、发货地址、收货地址、物流状态等。
- 上传物流单据： 物流商可以选择上传相应的物流单据，如运输合同、发货清单等，以便后续核实和备案。
- 确认提交： 填写完物流信息和上传物流单据后，物流商确认提交物流信息。
- 系统记录信息： 系统接收到物流信息后，会将物流信息记录到数据库中，并生成一条物流记录。
- 通知相关方： 系统会根据物流信息自动通知相关方，如收货方和公益组织等，告知物流状态和预计送达时间。
- 跟踪物流信息： 物流商可以随时登录系统查看物流信息的最新状态，以便及时跟踪物流进展并提供服务。



### 2.10 代理商签收物资功能

代理商签收物资功能是为了提供一个便捷的平台，使代理商能够及时签收物资订单，并记录相关信息，以确保物资的顺利交付和后续跟踪。其功能的业务流程如下：

- 查看待签收物资： 在代理商管理界面，代理商可以查看待签收的物资订单列表，包括物资名称、数量、发货地址等信息。
- 选择签收物资： 代理商可以选择待签收的物资订单，并点击相应的签收按钮。
- 确认签收： 代理商确认签收物资后，系统会更新物资订单的签收状态，并记录签收时间。
- 填写签收信息： 代理商可能需要填写一些签收相关信息，如签收人姓名、签收时间、签收备注等。
- 提交签收信息： 填写完签收信息后，代理商确认提交签收信息。
- 系统记录信息： 系统接收到签收信息后，会将签收信息记录到数据库中，并生成一条签收记录。
- 通知相关方： 系统会自动通知相关方，如物流商和公益组织等，告知物资已被成功签收。
- 跟踪签收状态： 代理商可以随时登录系统查看签收信息的状态，以便及时了解物资的签收情况并提供进一步服务。



### 2.11 公益活动反馈功能

公益活动反馈功能旨在提供一个平台，让用户能够就参与的公益活动进行反馈，分享他们的体验、意见和建议，以促进活动的改进和提升。其功能的业务流程如下：

- 选择活动反馈： 用户参与完公益活动后，可以选择进入活动反馈页面。
- 上传反馈图片： 用户可以选择上传相关的图片，如活动参与照片、活动场景照片等，以丰富反馈内容。
- 提交反馈信息： 用户填写完反馈内容和上传图片后，确认提交反馈信息。
- 系统记录信息： 系统接收到用户的反馈信息后，会将反馈内容和图片记录到数据库中，并生成一条反馈记录。





## 3. 业务流程设计

### 3.1 公益慈善活动业务流程

公益慈善活动的各个步骤和参与者之间的关系。代理机构发起物资捐赠活动并提供目标地址，慈善公益平台接收物资捐赠请求并确认捐赠信息，参与方通过慈善公益平台进行物资捐赠并填写运输订单，物流商添加物流信息并运输物资到代理机构，最后代理机构进行签收和管理物资。

![img](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/asynccode)

该业务流程的UML时序图：

![b8d52f7d-b9ae-42e0-912e-52a796f2f481](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/b8d52f7d-b9ae-42e0-912e-52a796f2f481.png)

### 3.2 公益募资活动业务流程

用户发起公益募资活动并上传证明信息。然后发起票选，如果票选结果大于50%，则通过，否则不通过。如果不通过，募资活动结束。如果通过，进行公益捐款的阶段。参与方可以进行票选和捐款，并且捐款和参与方都会自动添加溯源到这个公益募资活动中。公益募资活动保持公开透明。在募资活动结束后，用户需要验证身份，然后进行提现操作。

![image-20240411230055924](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/image-20240411230055924.png)

该业务的UML时序图：

![746168a6-c3d3-45ec-8a8f-8f02000ffcd9](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/746168a6-c3d3-45ec-8a8f-8f02000ffcd9.png)



### 3.3 公益活动溯源管理业务流程

用户通过慈善公益平台进行查询，可以点击当前的活动和详细或者更多来查询当前参与公益物资捐赠的溯源地址以及物品信息，包括物流信息和进度状况。成功参与的用户可以通过溯源记录查看自己的记录。当公益溯源上链成功后，用户可以获得对应的积分奖励。

![ed6bde76-62e5-4ef6-b8a4-cd2f46f9e4b2](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/ed6bde76-62e5-4ef6-b8a4-cd2f46f9e4b2.png)

该业务的UML时序图：

![b83f2067-6103-4d57-a019-1eab2cd3059c](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/b83f2067-6103-4d57-a019-1eab2cd3059c.png)



### 3.4 公益记录溯源追踪业务流程

![7cd215ff-b6c2-40cc-bdb1-e1a290a7ff7c](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/7cd215ff-b6c2-40cc-bdb1-e1a290a7ff7c.png)

该业务的UML时序图：

![29a6adc8-3346-4d9c-b7da-a594596ee8f2](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/29a6adc8-3346-4d9c-b7da-a594596ee8f2.png)
