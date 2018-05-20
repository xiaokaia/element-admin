// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
//import routes from './router'
//import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import './styles/index.scss'; // 全局自定义的css样式
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import './mock'  // 该项目所有请求使用mockjs模拟
import store from './store'
import * as filters from './filters' // 全局filter
import $ from 'jquery'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import Distpicker from 'v-distpicker'
import axiosPlugin from 'common/js/https'
import './permission'
//import { constantRouterMap,asyncRouterMap } from './router' 
Vue.config.productionTip = false

Vue.use(axiosPlugin);
Vue.use(ElementUI)
//Vue.use(VueRouter);
Vue.component('v-distpicker', Distpicker)


Vue.prototype.foodMap = new Map();//全局购物车商品

/*const router = new VueRouter({
  routes: constantRouterMap
})*/



/*router.beforeEach((to, from, next) => {
  NProgress.start() //开启Progress
  if (to.path === '/login') {
    next();
  }else{
    if(!store.getters.getToken){
      if(sessionStorage.getItem('menus')){
        let menus = JSON.parse(sessionStorage.getItem('menus'));
        router.options.routes = menus;
        router.addRoutes(menus) // 动态添加可访问路由表
        next()
      }
      else{
        next();
      }
    }else{
      next();
    }
}
  
})

router.afterEach(transition => {
    NProgress.done();
});*/

/* eslint-disable no-new */
new Vue({
  //el: '#app',
  store,
  router,
  /*template: '<App/>',
  components: { App }*/
  render: h => h(App)
}).$mount('#app');
