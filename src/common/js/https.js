/**
 * axios基础封装类
 * author by kairry 2017年11月20日
 */

import axios from 'axios'
import Qs from 'qs'
import Vue from 'vue'

const Axios = axios.create({
  timeout: 10000, //请求超时时间
  responseType: "json",
  withCredentials: true, //是否允许携带cookie
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
})

/**
 * POST传参序列化(添加请求拦截器)
 */
Axios.interceptors.request.use(
  config => {
    // 在发送请求之前做某件事
    if (config.method === "post" || config.method === "put" || config.method === "delete") {
      // 序列化
      config.data = Qs.stringify(config.data);
    }
    config.headers.common['lz-system'] = 'client' //设置header信息
    return config;
  },
  error => {
    console.log(error.data.message);
    return Promise.reject(error.data.message);
  }
);

/**
 * 返回状态判断(添加响应拦截器)
 */
Axios.interceptors.response.use((res) => {
  if (res.data && res.data.code != 1) {
    return Promise.reject(res);
  }
  return res;
},(error) => {
  // 下面是接口回调的code,因为我做了一些错误页面,所以都会指向对应的报错页面
  if (error.data.bizCode === '401') { //
    //进行一些跳转
  } else if (error.data.bizCode === '9999') { //登录过期
  }
  return Promise.reject(error); //返回response的错误信息
})

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
export default {
  install: function (value, Option) {
    Object.defineProperty(Vue.prototype, "$http", {
      value: Axios
    });
  }
}
