---
layout: home

hero:
  name: 草丛 Mail
  text: 企业与个人邮箱完整指南
  tagline: 网页邮箱、标准邮件协议、企业自有域名、组织协作、通知、套餐与开放 API 都集中在一个平台。
  image:
    src: /logo.svg
    alt: 草丛 Mail
  actions:
    - theme: brand
      text: 进入邮箱
      link: https://to9.us/app/
    - theme: alt
      text: 用户快速开始
      link: /guide/quick-start
    - theme: alt
      text: 管理员指南
      link: /admin/overview

features:
  - title: 完整 Web 邮箱
    details: 多邮箱统一收件箱、会话阅读、富文本写信、草稿、附件、搜索、文件夹、标签、规则和联系人。
  - title: 企业邮局
    details: 创建组织、接入自有域名、邀请成员、分配角色与邮箱，并按组织配置品牌和发信通道。
  - title: 标准邮件协议
    details: 通过应用专用密码连接 IMAPS、POP3S 和 SMTP Submission，继续使用常见桌面与移动客户端。
  - title: 安全与可达性
    details: SPF、DKIM、DMARC 状态提示，rspamd 反垃圾与隔离区，登录限流、TOTP 两步验证和审计日志。
  - title: 套餐与计费
    details: 个人 Pro、企业套餐、订单、钱包、在线支付、兑换码以及取消和恢复订阅流程。
  - title: 通知与开放能力
    details: 站内通知、浏览器通知、Telegram 通知、系统公告、个人 API 密钥和 OpenAPI 参考。
---

## 当前正式版本

本文档对应 2026 年 9 月 5 日上线的草丛 Mail 平台升级。正式入口如下：

- 产品官网：<https://to9.us/>
- 邮箱应用：<https://to9.us/app/>
- 登录页面：<https://to9.us/app/login>
- 注册页面：<https://to9.us/app/register>
- 开发者说明：<https://to9.us/app/manage/developer/docs>

旧地址 `/login`、`/admin`、`/manage`、`/inbox` 等仍会自动跳转到 `/app` 下对应页面，已有书签可以继续使用。

## 按身份阅读

| 身份 | 建议入口 | 主要内容 |
| --- | --- | --- |
| 普通用户 | [快速开始](/guide/quick-start) | 注册登录、创建邮箱、收发邮件、安全和通知 |
| 企业所有者或管理员 | [企业邮局](/guide/organizations) | 组织、成员、自有域名、企业邮箱、品牌和套餐 |
| 平台管理员 | [后台总览](/admin/overview) | 用户、域名、邮件流、发信策略、订单与平台设置 |
| 自托管维护者 | [Docker 部署](/operations/deployment) | 服务结构、环境变量、迁移、升级和排障 |
| API 使用者 | [开发者 API](/guide/developer-api) | API 密钥、认证方式、接口范围与安全建议 |

## 系统边界

草丛 Mail 是正常通信和企业邮箱平台，不是群发营销工具。系统会按用户、域名、套餐和管理员策略限制发信权限与频率，并可能拦截高风险收件人或异常内容。

邮件在传输过程中使用 TLS，并支持 DKIM 签名、SPF/DMARC 检查和反垃圾处理。平台没有宣称端到端加密或服务端不可读，请不要把普通邮箱当作端到端加密通信工具。
