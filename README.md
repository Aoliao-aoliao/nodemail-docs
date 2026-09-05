# 草丛 Mail 文档

这是草丛 Mail 的公开文档站，内容对应 2026 年 9 月 5 日上线的平台版本。

- 产品官网：<https://to9.us/>
- 邮箱应用：<https://to9.us/app/>
- 在线文档：<https://aoliao-aoliao.github.io/nodemail-docs/>
- 更新日志：<https://aoliao-aoliao.github.io/nodemail-docs/changelog>

文档涵盖个人邮箱、企业邮局、标准邮件协议、账号安全、通知、套餐计费、开发者 API、平台后台以及 Docker 部署升级。

## 本地预览

```bash
npm ci
npm run docs:dev
```

## 构建

```bash
npm run docs:build
```

构建结果位于 `docs/.vitepress/dist/`。公开页面由仓库的 `gh-pages` 分支发布。
