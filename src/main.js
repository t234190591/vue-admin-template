import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'

import 'normalize.css/normalize.css'
import '@assets/style/index.scss'
import 'element-ui/lib/theme-chalk/index.css'

import '@utils/request'

if (process.env.NODE_ENV === 'development') {
  require('./_mock')
}


Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
