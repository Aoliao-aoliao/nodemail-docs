# 第三方发信通道

第三方发信通道用于替代服务器直连收件方 MX。

## 工作方式

直发：

```text
NodeMail -> Gmail / Outlook / QQ
```

第三方中继：

```text
NodeMail -> 第三方 SMTP -> Gmail / Outlook / QQ
```

## 什么时候需要

- VPS IP 信誉较差
- PTR 还未稳定
- Outlook 拒收
- Gmail 经常进垃圾箱
- 需要退信、投诉、黑名单监控

## 后台配置项

一般需要填写：

```text
SMTP Host
端口
用户名
密码
发信域名
优先级
每小时上限
是否启用
```

## 注意事项

第三方发信通道不是免死金牌。如果用户发送垃圾内容，服务商仍可能限流或封禁账号。
