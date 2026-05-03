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
      text: 使用指南
      link: /guide/mail

features:
  - title: NodeLoc 登录
    details: 通过 NodeLoc 第三方账号登录，无需在 NodeMail 单独注册密码账号。
  - title: 黄金会员开放
    details: 服务主要面向 NodeLoc 黄金会员及以上用户，后续可按社区规则调整开放范围。
  - title: Web 邮箱体验
    details: 提供收件箱、写邮件、附件、标签、文件夹、草稿和搜索等常用邮件功能。
  - title: 发信权限控制
    details: 为保护域名信誉，发信权限可按域名关闭，用户需要申请后由管理员审核开放。
  - title: 个人设置
    details: 支持登录历史、通知设置、签名模板、图床、白名单、自动回复等常用设置。
  - title: 安全策略
    details: 支持保留邮箱名前缀、管理员权限隔离、登录历史、黑名单和发信频率限制。
  - title: 邮件安全提示
    details: 阅读邮件时会显示发件方 SPF、DKIM、DMARC 认证状态，帮助识别异常来信。
---

## 项目状态

NodeMail 当前是面向 NodeLoc 社区用户的邮箱服务，主要给黄金会员及以上用户使用。这里是公开说明页，用来介绍入口、使用流程和常见功能。

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

## 你可以做什么

- 使用 NodeLoc 账号登录 NodeMail
- 创建和管理自己的邮箱地址
- 收信、写信、保存草稿、查看已发送邮件
- 使用附件、签名、模板、图床和联系人
- 查看发件方 SPF、DKIM、DMARC 认证提示
- 查看登录历史和临时发信申请记录
- 通过反馈与工单页面联系管理员

## 不是什么

NodeMail 不是公共邮件营销系统，也不鼓励群发、滥发或绕过反垃圾邮件规则。为了保护服务信誉，发信权限、频率和异常行为会受到限制。

## 客户端连接

如果你只使用网页邮箱，直接访问 `https://to9.us/login` 即可。

如果后续需要在第三方邮件客户端里使用 IMAP / POP3 / SMTP，默认建议统一使用 `mail.to9.us` 作为服务器地址。新增邮箱域名不代表一定需要单独的客户端证书，只有管理员明确提供 `mail.你的域名` 这种连接地址时，才需要按该主机名配置证书。
