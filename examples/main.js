import Vue from 'vue'
import App from './App.vue'
import router from './router'
import uilib from '../packages/index'
/* eslint-disable */
Vue.use(uilib)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
