import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'

import 'assets/css/reset.css'
import 'assets/css/border.css'

Vue.config.productionTip = false

//解决移动端三百秒延迟
FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
