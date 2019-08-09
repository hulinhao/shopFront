const sell = r => require.ensure([], () => r(require('../components/sell')), 'sell');
const shopper = r => require.ensure([], () => r(require('../components/shopper')), 'shopper');
const home = r => require.ensure([], () => r(require('../components/home')), 'home');
const sellList = r => require.ensure([], () => r(require('../components/sell/list')), 'sellList');
const mescrollTest = r => require.ensure([], () => r(require('../components/mescrollTest/mescroll')), 'mescrollTest');
// 路由  只能使用routes 这个名字
const routes = [
// 首页
  {
    path: '/',
    // 跳转到商城
    redirect : '/sell'
  },
  // 商城
  {
    path: '/sell',
    component: sell,
    redirect : '/sell/sellList',
    children : [
      // 商品展示列表
        {
            path: 'sellList',
            component: sellList
        }
    ]
  },
  // 购物袋
  {
    path: '/shopper',
    component: shopper
  },
  // 我的
  {
    path: '/home',
    component: home
  },
  // 测试mescroll.js 页面
  {
    path:'/mescrollTest',
    component:mescrollTest
  }
  ];

export default routes;
