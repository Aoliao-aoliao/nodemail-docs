# 快速开始

本页说明第一次使用 NodeMail 时需要完成的基础步骤。NodeMail 当前主要面向 NodeLoc 黄金会员及以上用户开放。

## 1. 确认使用资格

使用前请确认你的 NodeLoc 账号满足开放条件：

```text
NodeLoc 黄金会员及以上
```

## 2. 使用 NodeLoc 登录

访问 NodeMail：

```text
https://to9.us/login
```

点击 NodeLoc 登录后，按页面提示完成第三方授权。NodeMail 不会要求你在本站单独注册一个密码账号。

## 3. 创建邮箱

登录后进入个人设置，创建可用邮箱地址。普通用户不能创建系统保留邮箱名前缀，例如：

```text
admin
root
postmaster
security
abuse
```

这些前缀用于系统管理和标准联系人，只能由管理员创建。

## 4. 收信与发信

邮箱创建完成后可以正常收信。发信权限会根据当前域名策略开放；如果页面提示域名暂时禁止发信，需要提交临时发信申请并等待管理员审核。

## 管理员配置参考

如果你是管理员，需要为新域名准备这些 DNS 记录：

| 类型 | 名称 | 内容 |
| --- | --- | --- |
| A | `mail` | 服务器 IP |
| MX | `@` | `mail.example.com` |
| TXT | `@` | SPF 记录 |
| TXT | `_dmarc` | DMARC 记录 |
| TXT | `default._domainkey` | DKIM 公钥 |

邮件相关记录建议保持 DNS Only，不要走 CDN 代理。

PTR/rDNS 在服务器供应商面板设置：

```text
服务器 IP -> mail.example.com
```

同时保证正向解析一致：

```text
mail.example.com -> 服务器 IP
```

## 管理后台检查

管理员进入后台后，按顺序检查：

1. 域名管理
2. DNS 健康检查
3. DKIM 状态
4. 发信权限
5. 黑名单策略
6. 发信通道

## 第一次发信

新邮箱不建议立刻大量发信。建议先小量发送正常内容，避免空标题、测试词、重复内容和大附件。
