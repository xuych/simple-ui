import Vue from 'vue'
import simTitle from '@/jsx/title.js'
const install = (Vue) => {
  Vue.prototype.$Title = simTitle
}
Vue.use(install)
