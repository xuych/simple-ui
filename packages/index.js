/* Automatically generated by './build/bin/build-entry.js' */

import simButton from './Button'
import simDialog from './Dialog'
import simMasker from './Masker'
const components = [simButton, simMasker]

const install = function(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component)
    if (component.Item) {
      Vue.component(component.Item.name, component.Item)
    }
  })
  Vue.$Dialog = Vue.prototype.$Dialog = simDialog
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  simButton,
  simMasker,
}
