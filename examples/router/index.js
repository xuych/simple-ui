/* Automatically generated by './build/bin/build-routers.js' */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/button',
    component: (resolve) => require(['../views/button.vue'], resolve),
  },
  {
    path: '/dialog',
    component: (resolve) => require(['../views/dialog.vue'], resolve),
  },
  {
    path: '/masker',
    component: (resolve) => require(['../views/masker.vue'], resolve),
  },
  {
    path: '/indicator',
    component: (resolve) => require(['../views/indicator.vue'], resolve),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})
export default router
