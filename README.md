# 🌍GivTech平台介绍

## 一、项目介绍

::: tip 项目介绍

GivTech慈善公益可溯源平台基于FISCO BCOS的慈善公益全链路系统,**基于区块链的慈善公益适用于需要保证捐款信息安全性和透明度的场景**，因为区块链技术具备去中心化、不可篡改、安全可靠等特点，可以确保慈善捐款信息不被篡改。同时，使用基于区块链的慈善公益系统还可以提高捐款过程中的效率和透明度，保障捐款人权益，增强慈善机构的信誉和管理能力。因此，基于区块链的慈善公益适用于各种需要捐款和资金流转的公益场景。

:::



## **二、项目背景**

**当前公益慈善组织面临突出问题**

我进行了查阅以及调查，总结了如下几点,从知乎上查阅到：https://zhuanlan.zhihu.com/p/150063012

**信息公开程度低，监管缺乏手段**传统公益慈善组织的信息公开透明度低，监管机制缺位，公信力不足。据调查，公益组织的“资金去向与使用状况”以及“善款来源”是公众关注的焦点，而传统公益机构经常信息披露不足。从本次疫情爆发的红十字会事件来看，由于物资来源不透明、去向不可知、信息公开不及时，以及政府对慈善组织的监管手段缺乏、社会监督力量薄弱，导致红十字会公信力下降，影响了公众对公益组织的信心与支持度。

“互联网+公益”无法解决信用问题“互联网+公益”创新模式已经被用到实践中，但是同样面临信用风险和监管问题。随着互联网技术的发展，网络公益众筹平台如轻松筹、水滴筹、爱心筹等快速发展，一方面有效帮助了数以万计的困难群众，缓解了政府的财政压力；另一方面也暴露出一些问题，互联网的开放性特征，使得众筹平台难以对发起者与受益者的信息进行有效筛查，个别求助者虚构病情、部分平台线上业务流程不合规、用户数据被滥用、个别平台涉嫌非法筹集资金等问题频现。这不仅对捐助者的基本权益造成了侵害，同时也削弱了群众对于网络公益众筹活动的信任，制约了公益事业的可持续发展。

因此，急需一种合适的技术手段或合理的机制来解决社会民众持续增长的公益慈善需求与当前公益慈善组织公信力不足之间的矛盾。

**区块链可以实现有效的激励，具有价值优势**公益项目的参与方是不同利益主体，需要尽可能照顾各方利益，才能激发更多参与者的积极性。如在本次疫情中，存在很多社会志愿者和慈善人士。由于公益项目的非营利性，吸引各方积极参与的不再是经济利益的分配，参与方的出发点可能是同情心、家乡情、社会声誉、个人英雄主义、企业文化、社会研究等。面对参与者的不同出发点，区块链的激励相容机制可以实现多方利益的共赢，实现社会价值最大化。

整个捐赠流程：

![img](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/asynccode)

基于区块链的慈善公益主要包括以下业务：

1. **捐款管理**：基于区块链技术，建立一个去中心化的捐款管理系统，确保捐款信息不被篡改、数据的可靠性和安全性。捐款人可以通过区块链平台进行捐款记录的查询，以保证公示的透明度和真实性。
2. **资金用途追踪**：通过区块链技术实现对慈善捐赠资金的流向追踪和监管，确保资金的合法使用。比如，将慈善机构的账户信息与区块链相结合，建立一个跨机构的资金追踪平台，对慈善基金的使用情况进行实时监控。
3. **慈善项目管理**：为慈善活动和项目建立智能合约，实现自动化执行和程序化管理，避免了人为操作引起的错误和不公平。同时，也可以通过区块链平台发布慈善项目，方便社会各界了解并参与慈善事业。
4. **公示与评估**：在区块链平台上公示捐款信息和慈善项目进展情况，方便公众对慈善机构的评估和监督。同时可以建立一个可追溯的财务系统，使得慈善机构的账目记录和审核更加标准化和规范化。



## 三、项目技术栈

**前端技术栈**：

- HTML5+CSS3+Javascript
- Vue3 + 自定义UI框架 + Axios
- H5 + Uniapp端 (任选其一)

**后端技术栈**：

- 开源管理系统：Ruoyi-tdesign RuoYi-Vue-Plus UI / TypeScript + SpringBoot
- Java + SpringBoot + FISCO BCOS SDK 
- MySQL + Redis + Rabbitmq 
- Mybatis plus + RedisTemplate + RabbitmqTemplate 

**合约技术栈**：

- Solidity + Truffle + Caplier
- 智能合约解决方案完整实例代码
- 智能合约的测试报告，性能测试用例

**运维技术栈**：

- 全服务使用Docker部署：Mysql + Redis + Rabbitmq + FISCO BCOS  + Nginx + Java
- 监控方案使用Granfana + Prometheus 进行数据监控

**项目产品页面：**

![image-20240411215133466](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/image-20240411215133466.png)

![image-20240411215216369](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/image-20240411215216369.png)

![image-20240411215251477](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/image-20240411215251477.png)

![image-20240411215305759](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/image-20240411215305759.png)

![image-20240411215335594](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/image-20240411215335594.png)



![image-20240411215421021](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/image-20240411215421021.png)

![image-20240411215444215](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/image-20240411215444215.png)

![image-20240411215507078](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/image-20240411215507078.png)







![image-20240411215541349](https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/image-20240411215541349.png)



## 四、项目说明

### 1. 项目地址

| 项目名称         | 项目描述                    | 版本 | 项目地址                                |
| ---------------- | --------------------------- | ---- | --------------------------------------- |
| GYCS-Admin       | GivTech后台管理（后端）     | V1.0 | https://github.com/CN-ZHANGYH/GYCS-SZGY |
| GYCS-Admin-Vue   | GivTech后台前端（前端）     | V1.0 | https://github.com/CN-ZHANGYH/GYCS-SZGY |
| GYCS-Charity-Vue | GivTech慈善公益平台（前端） | V1.0 | https://github.com/CN-ZHANGYH/GYCS-SZGY |
| CYCS-Contract    | GivTech慈善公益智能合约     | V1.0 | https://github.com/CN-ZHANGYH/GYCS-SZGY |



### 2. 项目框架说明

- Java 后端：`master` 分支为 JDK 8 + Spring Boot 2.7.18
- Vue前端：前端采用的是Vue3 + Vuesax + Vite + Pinia
- Solidity合约：智能合约使用的是Solidity6.10
- 后端采用 Spring Boot 多模块架构、MySQL + MyBatis Plus、Redis + Redisson
- 数据库可使用 MySQL、Oracle、PostgreSQL、SQL Server、MariaDB、国产达梦 DM、TiDB 等
- 消息队列可使用 Event、Redis、RabbitMQ、Kafka、RocketMQ 等
- 权限认证使用 Spring Security & Token & Redis，支持多终端、多种用户的认证系统，支持 SSO 单点登录
- 支持加载动态权限菜单，按钮级别权限控制，Redis 缓存提升性能
- 高效率开发，使用代码生成器可以一键生成 Java、Vue 前后端代码、SQL 脚本、接口文档，支持单表、树表、主子表
- 集成阿里云、腾讯云等短信渠道，集成 MinIO、阿里云、腾讯云、七牛云等云存储服务



### 3. 系统内置功能

- 系统功能
- 角色权限
- 用户管理
- 基础设施
- 公益活动管理
- 发布和审批



### 4. 平台页面

#### 4.1 用户端
<div style="display: flex;justify-content: center;align-content: center;margin-left: 80px;">
    <div style="box-shadow: 2px 1px 5px 2px rgba(0, 0, 0, 0.1);border-radius: 10px;height: auto;margin-top: 30px;width: 100%;">
        <div style="display: flex;justify-content: space-between;padding: 10px 10px;margin-bottom: 30px;">
            <div>
                <img style="border-radius: 10px;" src="https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/%E5%8F%82%E4%B8%8E%E6%8A%95%E7%A5%A8%E9%A1%B5%E9%9D%A2.png?imageSlim" alt="" >
            </div>
            <div >
                <img style="border-radius: 10px;" src="https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/%E5%88%86%E9%A1%B5%E6%9F%A5%E8%AF%A2%E6%89%80%E6%9C%89%E6%BA%AF%E6%BA%90%E4%BF%A1%E6%81%AF.png?imageSlim" alt="">
            </div>
        </div>
        <div style="display: flex;justify-content: space-between;padding: 10px 10px;margin-bottom: 30px;">
            <div>
                <img style="border-radius: 10px;" src="https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/%25E5%2585%25AC%25E7%259B%258A%25E6%258D%2590%25E6%25AC%25BE%25E4%25BA%25A4%25E6%2598%2593%25E6%25BA%25AF%25E6%25BA%2590%25E8%25AE%25B0%25E5%25BD%2595%25E5%259B%25BE.png?imageSlim      " alt="">
            </div>
            <div>
                <img style="border-radius: 10px;" src="https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/%E5%85%AC%E7%9B%8A%E7%89%A9%E8%B5%84%E6%8D%90%E8%B5%A0%E6%BA%AF%E6%BA%90%E8%AE%B0%E5%BD%95%E5%9B%BE.png?imageSlim" alt="">
            </div>
        </div>
        <div style="display: flex;justify-content: space-between;padding: 10px 10px;margin-bottom: 30px;">
            <div>
                <img style="border-radius: 10px;" src="https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/%E5%85%AC%E7%9B%8A%E7%89%A9%E8%B5%84%E6%8D%90%E8%B5%A0%E6%BA%AF%E6%BA%90%E8%AF%A6%E7%BB%86%E4%BF%A1%E6%81%AF.png?imageSlim" alt="">
            </div>
            <div>
                <img style="border-radius: 10px;" src="https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/%E9%93%B6%E8%A1%8C%E5%8D%A1%E8%BD%AC%E8%B4%A6%E8%AF%A6%E7%BB%86%E6%BA%AF%E6%BA%90%E4%BF%A1%E6%81%AF.png?imageSlim" alt="">
            </div>
        </div>
        <div style="display: flex;justify-content: space-between;padding: 10px 10px;margin-bottom: 30px;">
            <div>
                <img style="border-radius: 10px;" src="https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/%E7%89%A9%E8%B5%84%E6%8D%90%E8%B5%A0%E9%A1%B5%E9%9D%A2.png?imageSlim" alt="">
            </div>
            <div>
                <img style="border-radius: 10px;" src="https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/%E5%85%AC%E7%9B%8A%E6%8D%90%E6%AC%BE%E6%BA%AF%E6%BA%90%E8%AF%A6%E7%BB%86.png?imageSlim" alt="">
            </div>
        </div>
        <div style="display: flex;justify-content: space-between;padding: 10px 10px;margin-bottom: 30px;">
            <div>
                <img style="border-radius: 10px;" src="https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/%E5%85%AC%E7%9B%8A%E6%8D%90%E6%AC%BE%E6%BA%AF%E6%BA%90%E8%AF%A6%E7%BB%86%E4%BA%A4%E6%98%93%E5%9B%9E%E6%89%A7.png?imageSlim" alt="">
            </div>
            <div>
                <img style="border-radius: 10px;" src="https://blog-1304715799.cos.ap-nanjing.myqcloud.com/imgs/%E9%93%B6%E8%A1%8C%E5%8D%A1%E8%BD%AC%E8%B4%A6%E6%BA%AF%E6%BA%90%E6%9F%A5%E8%AF%A2.png?imageSlim" alt="">
            </div>
        </div>
    </div>
    </div>