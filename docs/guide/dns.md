# DNS 配置

正确的 DNS 是收发信稳定的基础。

## 推荐记录

假设域名是 `example.com`，服务器 IP 是 `203.0.113.10`。

### A 记录

```text
mail.example.com -> 203.0.113.10
```

### MX 记录

```text
example.com MX 10 mail.example.com
```

### SPF

自建服务器直发时：

```text
v=spf1 mx ip4:203.0.113.10 -all
```

如果使用第三方 SMTP，需要按服务商要求加入 `include`。

### DKIM

后台生成 DKIM 后，把公钥添加到：

```text
default._domainkey.example.com
```

记录值类似：

```text
v=DKIM1; k=rsa; p=...
```

### DMARC

新域名建议先观察：

```text
v=DMARC1; p=none
```

稳定后再改成：

```text
v=DMARC1; p=quarantine
```

更严格时：

```text
v=DMARC1; p=reject
```

## PTR/rDNS

PTR 不能在 Cloudflare 设置，需要在服务器供应商面板设置。

```text
203.0.113.10 -> mail.example.com
```

PTR 和 HELO 主机名不匹配会明显影响 Outlook、Gmail 等邮箱的信任度。

## Cloudflare 代理状态

邮件相关记录建议关闭代理：

```text
mail.example.com  DNS Only
MX                DNS Only
TXT               DNS Only
```

网站记录如 `www` 可以继续使用代理。
