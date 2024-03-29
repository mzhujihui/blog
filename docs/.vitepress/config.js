export default ({
  lang: 'en-US',
  title: '三言两语',
  description: '博客',

  lastUpdated: true,

  themeConfig: {
    nav: nav(),

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    },

    sidebar: {
      '/js/': sidebarJs(),
      '/website/': sidebarWebsite(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mzhujihui' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present sanyan'
    },

    search: {
      provider: 'local'
    }
  }
})

function nav() {
  return [
    { text: '首页', link: '/js/base', activeMatch: '/js/' },
    { text: '网站', link: '/website/follow', activeMatch: '/website' }
  ]
}

function sidebarJs() {
  return [
    {
      text: 'JS基础',
      collapsible: true,
      items: [
        { text: '数据类型与数据判断', link: '/js/base' },
        { text: '继承', link: '/js/inherit' },
        { text: '排序', link: '/js/sort' }
      ]
    }
  ]
}

function sidebarWebsite() {
  return [
    {
      text: '网站',
      collapsible: false,
      items: [
        { text: '关注', link: '/website/follow' },
        { text: '开发规范', link: '/website/norms' },
        { text: 'Git和Github', link: '/website/git' },
        { text: '图片', link: '/website/img' },
        { text: '其他', link: '/website/other' }
      ]
    }
  ]
}
