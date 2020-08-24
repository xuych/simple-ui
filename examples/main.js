import './public-path'
import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import uilib from '../packages/index'
import VueRouter from 'vue-router'

/* eslint-disable */
Vue.use(uilib)
Vue.config.productionTip = false
let router = null
let instance = null

function render(parent = {}) {
  router = new VueRouter({
    routes,
    store,
  })
  instance = new Vue({
    router,
    data() {
      return {
        parentRouter: parent.router,
        parentVuex: parent.store,
      }
    },
    render: (h) => h(App),
  }).$mount('#simple-ui')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
//测试全局变量污染
window.a = 1
console.log('window.a', window.a)

export async function bootstrap() {
  console.log('vue app bootstraped')
}

export async function mount(props) {
  // 测试一下 body 的事件，不会被沙箱移除
  // document.body.addEventListener('click', (e) => console.log('document.body.addEventListener'))
  // document.body.onclick = (e) => console.log('document.body.addEventListener')
  console.log('props from main framework', props.data)
  render(props.data)
}

export async function unmount() {
  instance.$destroy()
  // instance.$el.innerHTML = ''
  instance = null
  router = null
}
