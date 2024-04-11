---
showArticleMetadata: false
editLink: false
lastUpdated: false
showComment: false
---

# 🌍GivTech平台介绍

::: tip 项目介绍
GivTech慈善公益可溯源平台融合了最新的区块链技术，采用了基于 FISCO BCOS 的高性能联盟链作为底层支撑，平台使用Vue3 + SpringBoot2 + Solidity等主流开发框架。平台不仅提供了良好的性能表现，更为公益事业注入了新的活力，确保了慈善行为的透明度和可信度，交易数据和公益溯源记录通过区块链技术进行加密存储到区块链中，通过分布式的去中心化特新，让每一次公益记录都是不可篡改的。
:::



## 项目地址

| 项目名称         | 项目描述                    | 版本 | 项目地址                                |
| ---------------- | --------------------------- | ---- | --------------------------------------- |
| GYCS-Admin       | GivTech后台管理（后端）     | V1.0 | https://github.com/CN-ZHANGYH/GYCS-SZGY |
| GYCS-Admin-Vue   | GivTech后台前端（前端）     | V1.0 | https://github.com/CN-ZHANGYH/GYCS-SZGY |
| GYCS-Charity-Vue | GivTech慈善公益平台（前端） | V1.0 | https://github.com/CN-ZHANGYH/GYCS-SZGY |
| CYCS-Contract    | GivTech慈善公益智能合约     | V1.0 | https://github.com/CN-ZHANGYH/GYCS-SZGY |



## 项目框架说明

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



## 系统内置功能

- 系统功能
- 角色权限
- 用户管理
- 基础设施
- 公益活动管理
- 发布和审批



## 平台页面

### 用户端
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