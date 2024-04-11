---
title: GivTech慈善公益智能合约设计
author: 张宇豪
date: 2024/3/29 20:00
categories:
 - Solidity
tags:
 - Solidity
---

# 慈善公益智能合约设计

## 1.合约业务架构图

- 主要合约是： **CharityController**
- 慈善公益业务合约：**CharityService**
- 用户业务合约：**UserService**
- 捐赠物资溯源上链合约：**CharityTrace**
- 捐赠资金溯源上链合约：**DonationTrace**
- 角色权限管理合约：**RoleAuth**

![image-20240330231541740](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/image-20240330231541740.png?imageSlim)

## 2.合约用例图设计

![7b3ec86c-f415-4069-92e3-5b03c9fcc10b](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/7b3ec86c-f415-4069-92e3-5b03c9fcc10b.png?imageSlim)

## 3.合约功能设计

## 4.合约数据结构设计

### 1.用户数据存储设计

#### 1.1 普通用户数据结构设计

```solidity
    // 用户结构体信息
    struct User {
        uint256 userId;              // 用户ID
        string  userName;            // 用户名称
        address userAddress;         // 用户地址
        uint256 amount;              // 用户账户
        uint256 credit;              // 用户积分
        string  cardId;              // 身份证ID
        string  designation;         // 用户称号
        uint256[] donateList;        // 捐款记录ID
        uint256[] raiseList;         // 募资记录ID
        uint256[] welfareList;       // 公益活动捐赠记录ID
        uint256   voteCount;         // 参与投票的次数
        uint8     withdrawCount;     // 提现的次数
    }
```



#### 1.2 机构用户数据结构设计

```solidity
// 机构结构体信息
struct Org {
    uint256 orgId;              // 用户ID
    string  orgName;            // 用户名称
    address orgAddress;         // 用户地址
    uint256 amount;             // 用户账户
    uint256[] activitiesList;   // 灾区活动发起记录ID

}
```



#### 1.3 物流商数据结构设计

```solidity
// 物流商结构体信息
struct Logistic {
    uint256 logisticId;              // 用户ID
    string  logisticName;            // 用户名称
    address logisticAddress;         // 用户地址
}
```



### 2.慈善公益活动存储设计

#### 2.1 募资活动数据结构设计

```solidity
    // 公益活动结构体信息
    // RaiseId => CharityRaiseFund
    struct CharityRaiseFund {
        uint256 raiseId;            // 活动ID
        string  title;              // 活动名称
        string  desc;               // 活动描述
        uint256 createTime;         // 活动创建时间
        address promoterAddress;    // 活动组织者
        uint8   status;             // 活动状态 1: 投票中 2：募资中 3：结束
        uint256 startTime;          // 开始时间
        uint256 endTime;            // 结束时间
        uint256 totalPeople;        // 总参与人数
        uint256 totalAmount;        // 总需金额
        uint256 overAmount;         // 已经完成集资金额
        uint256 withdrawAmount;     // 已经取出的金额
    }
    
    mapping(uint256 => uint256) isYesMap;           // 募资支持的票选结果
    mapping(uint256 => uint256) isNoMap;            // 募资不支持的票选结果
    mapping(uint256 => bool) isApply;               // 募资活动是否支持举行
    mapping(uint256 => string) CertificateMap;      // 募资活动上传的证明

    mapping(uint256 => uint256[]) raiseEvaluationsMap;      // 活动评估 [4,5,4,2,1]
    mapping(uint256 => address[]) raisePeoplesMap;          // 参与人的溯源地址
    mapping(uint256 => uint256[]) raiseDonationTransIdsMap; // 所有参与人的交易溯源ID
```



#### 2.4 灾区活动数据结构设计

```solidity
    // 公益捐赠灾区结构体信息
    struct CharityActivitie {
        uint256 activitId;          // 活动ID
        string  title;              // 活动名称
        uint256 createTime;         // 创建时间
        uint256 startTime;          // 开始时间
        uint256 endTime;            // 结束时间
        string  logisticType;       // 物流方式
        address logisticAddress;    // 物流商地址
        address lncomeAddress;      // 代理人地址
        uint8   status;             // 状态
        uint256 totalPeople;        // 总参与人数
        uint256 totalMaterias;      // 总物资数量
    }

    mapping(uint256 => uint256[]) activiteEvaluationsMap;      // 活动评估 [4,5,4,2,1]
    mapping(uint256 => address[]) activitePeoplesMap;          // 参与人的溯源地址
    mapping(uint256 => uint256[]) activiteCharityTransIdsMap;  // 所有参与人的交易溯源ID

    uint256 public raiseCount;
    uint256 public activiteCount;

    mapping (uint256=>CharityRaiseFund) public charityRaiseFundMap;
    mapping (uint256=>CharityActivitie) public charityActivitieMap;
```





### 3.公益溯源存储设计

#### 3.1 公益捐款数据结构设计

```solidity
    uint256 donationTraceId;    // 公益慈善溯源ID
    address donorAddress;       // 捐款人地址
    uint256 amount;             // 捐款金额
    uint256 transTime;          // 交易时间
    string  transType;          // 交易类型
    uint256 raiseId;            // 公益集资活动ID
    bool    isDonation;         // 交易状态
    string  source;             // 捐款来源：来源，可以是个人、组织、企业等。
    string  desc;               // 捐款描述：具体用途，例如救灾、扶贫、医疗救助等。
    address destAddress;        // 捐款接收方机构
```

#### 3.2 公益物资捐赠数据结构设计

```solidity
    uint256 charityTraceId;     // 公益活动溯源ID
    uint8   materialType;       // 种类：记录需要派送的物资种类，例如食品、饮用水、医疗用品、衣物等。
    string  materialName;       // 物资的名称  
    uint256 materialCount;      // 物资的数量  
    address sourceAddress;      // 源地址
    address logisticAddress;    // 物流商地址   
    address destAddress;        // 目标地址 
    uint256 transTime;          // 交易时间  
    bool    isSign;             // 是否签收 
    uint256 activitId;          // 公益活动ID
    uint8   status;             // 溯源状态： 1 开始 2 运输 3 签收 
```



## 5.功能模块规划

### 1.用户模块管理

- **用户注册和查询功能**：用户注册链条初始化信息，并添加链条的用户为用户角色，对异常进行返回状态码处理，并添加用户的查询信息功能。
- **机构注册和查询功能**：机构注册链条初始化信息，并添加链条的用户为机构角色，对异常进行返回状态码处理，并添加机构的查询信息功能。
- **物流商注册和查询功能**：物流商注册链条初始化信息，并添加链条的用户为物流商角色，对异常进行返回状态码处理，并添加物流商的查询信息功能。

### 2.公益活动模块

- **普通用户发起公益募资功能：** 用户在当前的平台上发起公益募资的活动，初始化新的募资活动详细的信息，该募资的活动需要统计当前活动的投票数量，如果当前的投票数量大于50%，则该公益活动会进行上链初始化。用户可以进行参加该公益募资的活动。
- **代理机构发起公益物资功能：** 代理机构在当前的平台中，根据判断当前的角色用户是否为机构，如果是代理机构可以进行发起向灾区捐赠物资的公益活动，需要初始化当前的公益物资需求信息，然后不需要进行投票，所有的数据初始化上链之后，会对所有的用户参与进行溯源追踪。

### 3.慈善公益模块

- **普通用户进行公益捐赠物资功能：** 普通用户进行慈善公益的查询，然后分别对当前开放的公益捐赠物资活动进行选择，然后可以填写需要捐赠的物资信息，以及填写对应的物流商，即可进行捐赠物资，可以查看当前的物资是什么状态，是否被签收，是否退回。
- **普通用户进行公益捐款功能：** 普通用户可以进行开放的公益捐款活动中，分别查询需要进行捐款的活动信息，或者是一些认证信息。

### 4.溯源追踪模块

> 如下的这两个合约中，业务的溯源追踪进行透明公开。

- **公益活动的溯源追踪：** 一个公益活动对应着多个用户的物资捐赠的交易信息合约上链，再完成这比交易之后，用户的交易信息上链，保存当前用户的合约地址作为查询的索引，该交易的溯源信息可以进行状态的管理，以及对整个生命周期的追溯。
- **公益募资的溯源追踪：** 一个公益募资的活动对应着多个用户的捐款订单，也是对每一个用户的捐款交易订单信息进行上链，保存当前用户的合于地址作为查询的索引，该交交易溯源信息可以进行状态的管理，包括个人捐款记录的溯源追踪。

### 5.投票功能模块

- **对募资的公益活动进行票选：** 由于公益募资和集资都是个人的行为，需要上传证明以及需要保证当前的公益募资是通过票选的，在规定的时间内完成票选，并且需要大于50才能够进行公益募资。
- **票选通过判断：** 到达该时间的结束的时候，可以调用当前的函数进行判断是否票选通过，然后进行是否可以公开当前票选结果，并且允许进行公益捐款的参与。

## 6.合约状态码

| **状态码** | **描述**                   |
| ---------- | -------------------------- |
| 50000      | 参数无效                   |
| 50001      | 订单状态异常               |
| 50002      | 公益活动不存在             |
| 50003      | 公益募资活动不存在         |
| 70001      | 当前的物流商地址不符合     |
| 70002      | 当前的签收人地址不符合     |
| 70003      | 当前的提现人地址不符合     |
| 70004      | 当前的金额大于已完成的金额 |
| 60001      | 用户已经存在               |
| 60001      | 用户不存在                 |