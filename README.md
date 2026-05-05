# NodeMail Docs

NodeMail 是面向 NodeLoc 黄金会员及以上用户开放的 Web 邮箱服务。

- 服务入口：<https://to9.us/login>
- 在线文档：<https://aoliao-aoliao.github.io/nodemail-docs/>
- 项目介绍仓库：<https://github.com/Aoliao-aoliao/nodemail-docs>
- 登录方式：NodeLoc 第三方登录

这个仓库用于发布 NodeMail 的公开说明页，内容只介绍用户能直接看到和使用的功能，包括登录、创建邮箱、收发邮件、个人设置、临时发信申请、反馈工单和邮件安全提示。

## 快速入口

- 使用邮箱：<https://to9.us/login>
- 查看文档：<https://aoliao-aoliao.github.io/nodemail-docs/>
- 更新记录：<https://aoliao-aoliao.github.io/nodemail-docs/changelog>
- 适用用户：NodeLoc 黄金会员及以上用户

## 主要能力

- 使用 NodeLoc 第三方登录进入邮箱
- 创建和管理自己的邮箱地址
- 使用收件箱、全部邮箱视图、写邮件、草稿、已发送、附件、标签和搜索
- 查看发件方 SPF / DKIM / DMARC 认证提示
- 查看原始邮件，排查邮件头和认证结果
- 在发信受限时提交临时发信申请
- 查看登录历史、通知、签名、模板、图床、白名单和工单记录

## 说明

NodeMail 不是群发邮件或营销邮件工具。为了保护域名和服务信誉，发信权限、频率和异常行为会受到限制。

## 更新记录

后续每次功能调整、体验修复、安全检查、文档更新都会写入更新记录：

<https://aoliao-aoliao.github.io/nodemail-docs/changelog>

如果发现 BUG，可以先查看最近更新是否已经处理；未处理的问题请在 NodeMail 里的反馈或工单页面提交，并尽量带上页面、操作步骤、截图、时间和设备类型。

## 本地预览

```bash
npm install
npm run docs:dev
```

## 构建

```bash
npm run docs:build
```
