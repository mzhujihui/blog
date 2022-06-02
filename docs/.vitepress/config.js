export default ({
  lang: 'en-US',
  title: '三言两语',
  description: '博客',

  lastUpdated: true,

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/js/': sidebarJs()
    },

    socialLinks: [
      { icon: 'github', link: 'https://mzhujihui.github.io' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present sanyan'
    }
  }
})

function nav() {
  return [
    { text: '掘金', link: 'https://juejin.cn/user/184373686320776' }
  ]
}

function sidebarJs() {
  return [
    {
      text: '重学Js',
      collapsible: true,
      items: [
        { text: '数据类型', link: '/js/base' },
        { text: '继承', link: '/js/inherit' },
        { text: '排序', link: '/js/sort' }
      ]
    }
  ]
}

