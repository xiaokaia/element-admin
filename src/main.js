// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import routes from './router'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import './styles/index.scss'; // 全局自定义的css样式
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import './mock'  // 该项目所有请求使用mockjs模拟
import store from './store'
import * as filtres from './filtres' // 全局filter
import $ from 'jquery'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueRouter);


Vue.prototype.foodMap = new Map();//全局购物车商品

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
	NProgress.start() //开启Progress
	next();
})

router.afterEach(transition => {
    NProgress.done();
});

/* eslint-disable no-new */
new Vue({
  //el: '#app',
  store,
  router,
  /*template: '<App/>',
  components: { App }*/
  render: h => h(App)
}).$mount('#app');
