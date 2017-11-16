
/**
 * 路由异步加载
 * @param resolve
 * @constructor
 */

const Login = resolve => require(['../pages/login/login.vue'], resolve)
//const Food = resolve => require(['../pages/food/food.vue'], resolve)
//const ShopCart = resolve => require(['../pages/shopcart/shopcart.vue'], resolve)


let routes = [
  { path: '/login', component: Login , name:'登陆',hidden:true},
  { path: '*', redirect: '/login' },
]


export default routes;