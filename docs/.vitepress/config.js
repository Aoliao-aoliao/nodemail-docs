import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '草丛 Mail 文档',
  description: '草丛 Mail 用户、企业邮局、管理员与运维文档',
  base: '/nodemail-docs/',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/nodemail-docs/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#863bff' }],
    ['meta', { property: 'og:title', content: '草丛 Mail 文档' }],
    ['meta', { property: 'og:description', content: '草丛 Mail 完整使用与管理指南' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '草丛 Mail 文档',
    nav: [
      { text: '主页', link: '/' },
      { text: '用户指南', link: '/guide/quick-start' },
      { text: '管理员', link: '/admin/overview' },
      { text: '部署运维', link: '/operations/deployment' },
      { text: '更新日志', link: '/changelog' },
      { text: '进入邮箱', link: 'https://to9.us/app/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Aoliao-aoliao/nodemail-docs', ariaLabel: 'GitHub 文档仓库' }
    ],
    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '快速开始', link: '/guide/quick-start' },
          { text: '账号与安全', link: '/guide/account-security' }
        ]
      },
      {
        text: '邮箱功能',
        items: [
          { text: '收发与整理邮件', link: '/guide/mail' },
          { text: '邮箱管理', link: '/guide/mailboxes' },
          { text: '发信与投递', link: '/guide/sending-delivery' },
          { text: '企业邮局', link: '/guide/organizations' },
          { text: '设置与通知', link: '/guide/settings' },
          { text: '套餐、钱包与订单', link: '/guide/plans-billing' },
          { text: '开发者 API', link: '/guide/developer-api' },
          { text: '反馈与工单', link: '/guide/tickets' }
        ]
      },
      {
        text: '管理员指南',
        items: [
          { text: '后台总览', link: '/admin/overview' },
          { text: '用户与邮箱', link: '/admin/users-mailboxes' },
          { text: '域名与邮件投递', link: '/admin/domains-delivery' },
          { text: '平台设置与安全', link: '/admin/platform-settings' },
          { text: '套餐、订单与兑换码', link: '/admin/plans-orders' }
        ]
      },
      {
        text: '部署与维护',
        items: [
          { text: 'Docker 部署', link: '/operations/deployment' },
          { text: '升级与数据迁移', link: '/operations/upgrade' },
          { text: '上线检查记录', link: '/operations/verification' },
          { text: '检查与故障排查', link: '/operations/troubleshooting' }
        ]
      },
      { text: '常见问题', link: '/faq' },
      { text: '更新日志', link: '/changelog' }
    ],
    search: { provider: 'local' },
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdated: {
      text: '最后更新',
      formatOptions: { dateStyle: 'medium', timeStyle: 'short' }
    },
    footer: {
      message: '草丛 Mail · 企业与个人邮箱服务',
      copyright: 'Copyright © 2026 CaoCong Mail'
    }
  }
})
