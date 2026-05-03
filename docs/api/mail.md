# 邮箱与邮件 API

## 邮箱列表

```http
GET /api/v1/mailboxes
```

## 创建邮箱

```http
POST /api/v1/mailboxes
```

请求：

```json
{
  "local_part": "hello",
  "domain_id": "domain-id"
}
```

普通用户不能创建系统保留前缀，管理员可以。

## 邮件列表

```http
GET /api/v1/mailboxes/{mailboxId}/mails
```

## 发送邮件

```http
POST /api/v1/mails/send
```

发信是否允许，取决于域名发信状态、用户发信额度和临时发信权限。
