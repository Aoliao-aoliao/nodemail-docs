# 认证 API

## 登录

```http
POST /api/v1/auth/login
```

请求：

```json
{
  "username": "admin",
  "password": "password",
  "totp_code": ""
}
```

成功后服务端会写入 HttpOnly Cookie。

## 刷新会话

```http
POST /api/v1/auth/refresh
```

前端遇到登录态过期时会自动刷新。

## 当前用户

```http
GET /api/v1/auth/me
```

返回当前登录用户信息。

## 退出登录

```http
POST /api/v1/auth/logout
```
