import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
/**
 * 路由异步加载
 * @param resolve
 * @constructor
 */


const Login = resolve => require(['../pages/login/login.vue'], resolve)
const Main = resolve => require(['../pages/main/index.vue'], resolve)
const About = resolve => require(['../pages/about/index.vue'], resolve)
const Echart = resolve => require(['../pages/echart/index.vue'], resolve)
const Avatar = resolve => require(['../pages/example/Avatar.vue'], resolve)
const Map = resolve => require(['../pages/example/Map.vue'], resolve)
const Err404 = resolve => require(['../pages/error/404.vue'], resolve)
//const Food = resolve => require(['../pages/food/food.vue'], resolve)
//const ShopCart = resolve => require(['../pages/shopcart/shopcart.vue'], resolve)


export const constantRouterMap = [
  { path: '/', redirect: '/login',hidden:true},
  { path: '/login', component: Login , name:'登陆页面',hidden:true},
  { path: '/404', component: Err404, hidden: true },
  {
    path: '/about',
    // name: 'Readmehome',
    meta: {
      title: '关于项目',
      icon: 'el-icon-menu'
    },
    component: Main,
    children: [
      {
        name: '关于项目',
        path: '/about',
        meta: { title: '关于项目', icon: 'el-icon-menu' },
        component:About
      }
    ]
  }
]


export default new Router({
  routes: constantRouterMap
})


// 异步挂载的路由
// 动态需要根据权限加载的路由表
export const asyncRouterMap = [
  {
    path: '/main',
    component: Main,
    name: '图表功能',
    iconCls: 'fa fa-bar-chart',
    meta: {
      title: '图表列表',
      roles: ['admin']
    },
    children: [
      {
        path: '/echart',
        component: Echart,
        name: '图表列表',
        meta: {
          title: '图表列表',
          roles: ['admin']
        },
      },
    ]
  },
  {
    path: '/main',
    component: Main,
    name: '一些插件',
    iconCls: 'fa fa-lightbulb-o',
    meta: {
      title: '一些插件',
      roles: ['admin']
    },
    children: [
      {
        path: '/avatar',
        component: Avatar,
        name: '裁切上传',
        meta: {
          title: '裁切上传',
          roles: ['admin']
        },
      },
      {
        path: '/map',
        component: Map,
        name: '百度地图',
        meta: {
          title: '百度地图',
          roles: ['admin']
        },
      },
    ]
  },
  {
    path:'*',
    component:Err404,
    hidden:true
  }
]

let routes = [
  { path: '/login', component: Login , name:'登陆',hidden:true},
  { path: '/home', component: Main , name:'首页',hidden:true},
  { path: '*', redirect: '/login',hidden:true },
  {
    path: '/about',
    component: Main ,
    name:'关于项目',
    iconCls: 'el-icon-menu',
    leaf: true,
    children: [
      {
       path: '/about',
       component: About,
       name: '关于项目'
      }
    ]
  },
  {
    path: '/main',
    component: Main,
    name: '图表功能',
    iconCls: 'fa fa-bar-chart',
    children: [
      {
        path: '/echart',
        component: Echart,
        name: '图表列表'
      },
    ]
  },
  {
    path: '/main',
    component: Main,
    name: '一些插件',
    iconCls: 'fa fa-lightbulb-o',
    children: [
      {
        path: '/avatar',
        component: Avatar,
        name: '裁切上传'
      },
      {
        path: '/map',
        component: Map,
        name: '百度地图'
      },
    ]
  }
]


//export default routes;
