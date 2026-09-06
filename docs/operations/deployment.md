# Docker 部署

本文面向自行部署草丛 Mail 的维护者。本文档仓库只保存公开说明；应用代码、生产环境文件、数据库、邮件数据和私钥应按各自发布与备份策略管理。

## 服务组成

| 服务 | 用途 | 持久化 |
| --- | --- | --- |
| `db` | PostgreSQL 业务数据 | `postgres_data` |
| `redis` | 缓存、限流和一次性流程证明 | `redis_data` |
| `rspamd` | 入站反垃圾评分 | `rspamd_data` |
| `backend` | Web API、SMTP、IMAP、POP3、迁移和后台任务 | `mail_storage`、`uploads_data` |
| `frontend` | `/app/` 邮箱应用 | 镜像内静态文件 |
| `website` | 站点根路径官网 | 镜像内静态文件 |
| `nginx` | 同域路由、静态缓存和可信代理边界 | 配置挂载 |

容器可以重建，PostgreSQL、邮件存储、上传文件、环境配置和 TLS 私钥不能跟随容器删除。

## 前置条件

- 受支持的 Linux 主机。
- 从可信软件源安装的 Docker Engine、Compose 插件和 Git。
- 可设置 A/AAAA、MX、TXT 与 PTR/rDNS 的域名。
- 允许 Web、SMTP 入站、SMTP Submission、IMAPS 和 POP3S 所需端口。
- PostgreSQL 与邮件卷的持久化磁盘、监控和异机备份。

不要把网络下载内容直接通过管道交给 shell。下载脚本后先固定来源、检查内容，再以 root 执行。

## 环境配置

从应用仓库的 `.env.example` 建立 `.env`，至少设置：

~~~text
JWT_SECRET=<长随机值>
POSTGRES_PASSWORD=<独立数据库强密码>
SENDCHANNEL_KEK_HEX=<openssl rand -hex 32 生成的 64 位十六进制值>
FRONTEND_URL=https://your-domain.com
APP_BASE_PATH=/app
MAIL_SERVER_HOSTNAME=mail.your-domain.com
SMTP_DOMAIN=your-domain.com
WEB_BIND=127.0.0.1:18080
~~~

`FRONTEND_URL` 只填站点根地址，不带 `/app`。使用宿主机 Nginx、宝塔或 1Panel 时把 Docker Web 入口绑定到回环地址。生产环境应启用 Secure Cookie。

`SENDCHANNEL_KEK_HEX` 用来加密 SMTP、出站通道、对象存储、TLS、支付和图床密钥。首次生成后保持不变并单独备份；随意更换会使已保存密钥无法解密。

## 首次启动

在已经审查的代码提交上执行：

~~~bash
docker compose config --quiet
docker compose build
docker compose up -d
docker compose ps
docker compose logs --tail=200 backend nginx
~~~

后端启动时按编号执行尚未完成的迁移，当前序列到 `065`。迁移失败会停止启动；不要删除迁移记录、手工标记成功或用持续重启掩盖错误。

## 创建管理员

管理员密码通过临时环境变量传给 seed，不写在命令参数或源码中：

~~~bash
read -r -s -p "New administrator password: " ADMIN_PASSWORD; echo
export ADMIN_PASSWORD
docker compose exec -e ADMIN_PASSWORD backend /app/seed
unset ADMIN_PASSWORD
~~~

默认管理员用户名是 `admin`。密码至少 12 位，并包含小写、大写、数字和符号中的至少三类。若管理员已经存在，seed 保留原密码、权限和启用状态，不会自动重置或重新激活。

## DNS 与端口

典型 DNS：

~~~text
A      @       <服务器 IP>             可使用 Web 代理
A      www     <服务器 IP>             可使用 Web 代理
A      mail    <服务器 IP>             DNS only
MX     @       mail.example.com        优先级 10
TXT    @       v=spf1 mx ~all
TXT    _dmarc  v=DMARC1; p=none; ...
~~~

公网按实际启用功能开放：

| 端口 | 用途 |
| --- | --- |
| 25 | SMTP 入站收信 |
| 587 | SMTP Submission，推荐 STARTTLS |
| 993 | IMAPS |
| 995 | POP3S |
| 80 | ACME 验证或跳转 HTTPS |
| 443 | Web HTTPS |

PostgreSQL 5432、Redis 6379、后端 8080 和本机反代 18080 不应直接暴露公网。

## 宿主机反向代理

外层代理必须覆盖访客提交的代理头：

~~~nginx
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $remote_addr;
proxy_set_header X-Forwarded-Proto $scheme;
~~~

项目内层 Nginx 只从可信直连代理接收单个已验证 IP，再写入后端专用头。登录、注册、Turnstile、审计和限速使用这个规范地址。不要把任意 `X-Forwarded-For` 链直接交给应用。

访问日志应记录路径而不记录完整查询参数、Cookie、OAuth code 或验证码。

## Cloudflare

- Web 根域和 `www` 可使用 Cloudflare 代理。
- `mail` 必须保持 DNS only。
- 优先使用 Full (strict)，源站证书覆盖所有 Web 主机名。
- 外层 Nginx 只信任 Cloudflare 官方 IP 段提供的 `CF-Connecting-IP`。
- 防火墙或虚拟主机阻止绕过 Cloudflare 直接访问 Web 源站。
- 若使用 Flexible，需要根据 `CF-Visitor` 向内层传递真实访客协议，避免重定向循环；同时在 Cloudflare 边缘强制 HTTPS。

`www` 和邮件 Web 主机应明确重定向到规范入口，不能落入服务器上的其他默认网站。

若 Turnstile 故障导致管理员也无法登录，可临时在环境中显式设置 `TURNSTILE_ENABLED=false` 并重启后端。该救援值会覆盖数据库配置；空值不会关闭保护。修复后移除覆盖值并再次重启。

## TLS

网页与邮件协议都需要有效证书。邮件后端必须能读取证书链和私钥；续期后重新加载实际使用证书的进程。

分别验证：

~~~bash
openssl s_client -connect mail.example.com:587 -starttls smtp -servername mail.example.com
openssl s_client -connect mail.example.com:993 -servername mail.example.com
openssl s_client -connect mail.example.com:995 -servername mail.example.com
~~~

检查 SAN 主机名、签发链和到期时间。浏览器证书正确并不保证邮件端口也加载了新证书。

## 注册认证邮件

后台的“系统 SMTP”用于注册、找回密码和找回邮箱验证，独立于用户业务邮件出站通道。完成 SMTP 测试后再开启邮箱验证。配置方法见 [注册、SMTP 认证邮件与 Turnstile](/admin/registration-smtp-turnstile)。

## 上线前

在生产数据副本完成迁移和写操作测试，再检查健康端点、用户/管理员接口、前端路由、收发信、附件、客户端协议、注册、找回密码、NodeLoc、Turnstile、订单回调和审计。正式环境的测试数据和临时容器完成后及时清理。
