import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui'
import Loading from './loading'
import Cookie from 'js-cookie'


const Service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
});


Service.interceptors.request.use(
  config => {
    if (config.loading) {
      Loading.start()
    }

    if (Cookie.get('expiresSeted')) {
      return config
    }
    Cookie.set('expiresSeted', true, { expires: 2 / 24 })
  },
  error => {
    Message.error(error)
  }
)

Service.interceptors.response.use(
  response => {
    Loading.close()
    const res = response.data || {}
    if (res.code == -2) {
      Message.error({
        message: '网站维护中...',
      });
      return false
    } else if (res.code == -1) {
      Message.error({
        message: '您的登录状态已过期，请重新登录！',
        duration: 1500,
        onClose() {}
      });
      Cookie.remove('hasLogin');
      Cookie.remove('token');
      return false
    } else if (res.code !== 0) {
      Message({
        message: res.msg || '未知错误',
        type: 'error',
        duration: 2000
      })
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    Loading.close()
    return Message({
      message: error.message || error,
      type: 'error',
      duration: 2 * 1000
    })
  }
)

Vue.prototype.$axios = Service.request