export default ({
  lang: 'en-US',
  title: '三言两语',
  description: '博客',

  lastUpdated: true,

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/js/': sidebarJs(),
      '/repository/': sidebarRepository(),
      '/website/': sidebarWebsite(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mzhujihui' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present sanyan'
    }
  }
})

function nav() {
  return [
    { text: '首页', link: '/js/base', activeMatch: '/js/' },
    { text: '前端库', link: '/repository/component', activeMatch: '/repository/' },
    { text: '网站', link: '/website/common', activeMatch: '/website/' },
    { text: '掘金', link: 'https://juejin.cn/user/184373686320776' }
  ]
}

function sidebarJs() {
  return [
    {
      text: 'JS',
      collapsible: true,
      items: [
        { text: '数据类型', link: '/js/base' },
        { text: '继承', link: '/js/inherit' },
        { text: '排序', link: '/js/sort' }
      ]
    }
  ]
}

function sidebarRepository() {
  return [
    {
      text: '前端库',
      collapsible: true,
      items: [
        { text: '组件库', link: '/repository/component' },
        { text: '常用库', link: '/repository/common' }
      ]
    }
  ]
}

function sidebarWebsite() {
  return [
    {
      text: '网站',
      collapsible: true,
      items: [
        { text: '常看网站', link: '/website/common' },
        { text: '图片', link: '/website/img' },
        { text: '其他', link: '/website/other' }
      ]
    }
  ]
}
