
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
//const Food = resolve => require(['../pages/food/food.vue'], resolve)
//const ShopCart = resolve => require(['../pages/shopcart/shopcart.vue'], resolve)


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
    path: '/',
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
    path: '/',
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


export default routes;
