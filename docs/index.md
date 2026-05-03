---
layout: home

hero:
  name: NodeMail
  text: 为 NodeLoc 高级用户准备的邮箱服务
  tagline: 面向 NodeLoc 黄金会员及以上用户开放，使用 NodeLoc 第三方登录，提供简洁、可控的 Web 邮箱体验。
  image:
    src: /logo.svg
    alt: NodeMail
  actions:
    - theme: brand
      text: 进入邮箱
      link: https://to9.us/login
    - theme: alt
      text: 快速开始
      link: /guide/quick-start
    - theme: alt
      text: 管理员指南
      link: /admin/
    - theme: alt
      text: API 文档
      link: /api/

features:
  - title: NodeLoc 登录
    details: 通过 NodeLoc 第三方账号登录，无需在 NodeMail 单独注册密码账号。
  - title: 黄金会员开放
    details: 服务主要面向 NodeLoc 黄金会员及以上用户，后续可按社区规则调整开放范围。
  - title: Web 邮箱体验
    details: 提供收件箱、写邮件、附件、标签、文件夹、草稿和搜索等常用邮件功能。
  - title: 发信权限控制
    details: 为保护域名信誉，发信权限可按域名关闭，用户需要申请后由管理员审核开放。
  - title: 私有维护
    details: 文档公开用于介绍服务能力，主程序源码、部署配置和密钥不公开。
  - title: 安全策略
    details: 支持保留邮箱名前缀、管理员权限隔离、登录历史、黑名单和发信频率限制。
---

## 项目状态

NodeMail 当前是面向 NodeLoc 社区用户的私有邮箱服务。这个文档站只公开产品介绍、使用方式和配置说明，不包含后端源码、部署密钥或生产配置。

当前服务入口：

```text
https://to9.us/login
```

登录方式：

```text
NodeLoc 第三方登录
```

开放对象：

```text
NodeLoc 黄金会员及以上用户
```

## 适合谁

- NodeLoc 黄金会员及以上用户
- 希望拥有一个轻量 Web 邮箱的社区用户
- 需要临时或长期使用社区邮箱地址的用户

## 不是什么

NodeMail 不是公共邮件营销系统，也不鼓励群发、滥发或绕过反垃圾邮件规则。为了保护服务信誉，发信权限、频率和异常行为会受到限制。
