# API 总览

NodeMail 提供 Web 前端使用的 HTTP API。

默认前缀：

```text
/api/v1
```

## 认证方式

浏览器端使用 HttpOnly Cookie 保存登录态。

开发者 API 可使用 API Key，具体权限以后台配置为准。

## 常见资源

- Auth
- Mailboxes
- Mails
- Attachments
- Contacts
- Rules
- Tickets
- Admin

::: tip
本文档只描述公开使用方式，不包含生产密钥、内部部署脚本或私有源码。
:::
