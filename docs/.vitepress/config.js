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
      { text: '使用指南', link: '/guide/mail' },
      { text: '更新记录', link: '/changelog' },
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
            { text: '收发邮件', link: '/guide/mail' },
            { text: '邮箱管理', link: '/guide/mailboxes' },
            { text: '个人设置', link: '/guide/settings' },
            { text: '反馈与工单', link: '/guide/tickets' }
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
      message: 'NodeMail 面向 NodeLoc 黄金会员及以上用户开放。',
      copyright: 'Copyright © 2026 NodeMail'
    }
  }
})
