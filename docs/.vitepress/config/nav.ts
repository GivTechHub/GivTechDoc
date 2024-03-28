import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '快速开始',
    items: [
      { text: '智能合约设计', link: '/categories/start/快速开始/03/29/GivTech慈善公益智能合约设计', activeMatch: '/categories/start/' },
      { text: '后端开发设计', link: '/categories/start/快速开始/03/29/GivTech慈善公益后端开发设计', activeMatch: '/categories/start/' },
      { text: '前端开发设计', link: '/categories/start/快速开始/03/29/GivTech慈善公益前端开发设计', activeMatch: '/categories/start/' },
      { text: '运维部署设计', link: '/categories/start/快速开始/03/29/GivTech慈善公益运维部署设计', activeMatch: '/categories/start/' }
    ],
    activeMatch: '/categories/'
  },
  {
    text: '团队成员',
    items: [
      { text: '成员介绍', link: '/categories/team/团队介绍/03/29/GivTech项目团队成员介绍', activeMatch: '/categories/team/' },
    ],
    activeMatch: '/categories/'
  },
  {
    text: '部署文档',
    link: '/tags',
    activeMatch: '/tags'
  },
  {
    text: '关于',
    items: [
      { text: '关于项目', link: '/about/index', activeMatch: '/about/index' },
      { text: '关于我', link: '/about/me', activeMatch: '/about/me' }
    ],
    activeMatch: '/about/' // // 当前页面处于匹配路径下时, 对应导航菜单将突出显示
  },
];