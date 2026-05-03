import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'NodeMail',
  description: '面向 NodeLoc 黄金会员以上用户的邮箱服务',
  base: '/nodemail-docs/',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#2563eb' }],
    ['meta', { property: 'og:title', content: 'NodeMail' }],
    ['meta', { property: 'og:description', content: '面向 NodeLoc 黄金会员以上用户的邮箱服务' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'NodeMail',
    nav: [
      { text: '主页', link: '/' },
      { text: '快速开始', link: '/guide/quick-start' },
      { text: '管理员指南', link: '/admin/' },
      { text: 'API', link: '/api/' },
      { text: '进入邮箱', link: 'https://to9.us/login' },
      { text: '常见问题', link: '/faq' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Aoliao-aoliao/nodemail-docs', ariaLabel: 'GitHub 文档仓库' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '使用指南',
          items: [
            { text: '快速开始', link: '/guide/quick-start' },
            { text: 'DNS 配置', link: '/guide/dns' },
            { text: '发信信誉', link: '/guide/mail-reputation' },
            { text: '第三方发信通道', link: '/guide/send-channel' }
          ]
        }
      ],
      '/admin/': [
        {
          text: '管理员指南',
          items: [
            { text: '总览', link: '/admin/' },
            { text: '域名管理', link: '/admin/domains' },
            { text: '用户与邮箱', link: '/admin/users-mailboxes' },
            { text: '安全策略', link: '/admin/security' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API 文档',
          items: [
            { text: 'API 总览', link: '/api/' },
            { text: '认证', link: '/api/auth' },
            { text: '邮箱与邮件', link: '/api/mail' }
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    footer: {
      message: 'NodeMail 文档站仅介绍产品能力，主程序源码为私有部署版本。',
      copyright: 'Copyright © 2026 NodeMail'
    }
  }
})
