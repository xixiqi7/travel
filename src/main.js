import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'assets/css/reset.css'
import 'assets/css/border.css'
import 'assets/css/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

//解决移动端三百秒延迟
FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
