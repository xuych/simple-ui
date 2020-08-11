import simButton from './src/index.vue'
simButton.install = function(Vue) {
  Vue.component(simButton.name, simButton)
}
export default simButton
