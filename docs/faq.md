# 常见问题

## 这个文档站会公开源码吗？

不会。文档站只公开介绍、使用指南和 API 说明，不包含 NodeMail 主程序源码。

## 谁可以使用 NodeMail？

NodeMail 当前主要面向 NodeLoc 黄金会员及以上用户开放。实际开放范围以服务端规则和管理员审核为准。

## 怎么登录？

访问 `https://to9.us/login`，使用 NodeLoc 第三方登录完成授权。

## Cloudflare 可以当发信通道吗？

Cloudflare Email Routing 主要用于收信转发，不是标准 SMTP 发信中继。发信通道建议使用专业 SMTP 服务。

## 为什么 Gmail 会进垃圾箱？

常见原因包括 PTR 未生效、IP 信誉不足、域名过新、内容过短、SPF/DKIM/DMARC 不完整。

## PTR 在哪里设置？

PTR/rDNS 在服务器供应商面板设置，不在 Cloudflare DNS 里设置。

## 管理员可以创建 admin 邮箱吗？

可以。普通用户不能创建系统保留前缀，管理员可以创建。
