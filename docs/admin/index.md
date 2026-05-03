# 管理员指南

管理员后台用于配置系统核心能力。

## 常用模块

- 用户管理
- 邮箱管理
- 域名管理
- DNS 健康检查
- 出站发信通道
- 临时发信申请
- 全局黑名单
- 工单管理
- 系统设置

## 推荐顺序

首次部署后建议按顺序检查：

1. 添加域名
2. 生成 DKIM
3. 设置 DNS
4. 检查 PTR/rDNS
5. 设置默认域名
6. 配置发信限制
7. 开放用户注册或第三方登录

## 管理员邮箱

普通用户不能创建系统保留邮箱名前缀。管理员可以创建：

```text
admin@example.com
postmaster@example.com
abuse@example.com
security@example.com
```

这些邮箱建议由管理员持有。
