// import simDialog from './Dialog.vue'
// simDialog.install = function(Vue) {
//   Vue.component(simDialog.name, simDialog)
// }

import Vue from 'vue'
import simDialog from './Dialog.vue'

const content = Vue.extend(simDialog)
let instance
let constructor = (options = {}) => {
  if (!instance) {
    // instance = new content({
    //   el: document.createElement('div'),
    // })
    instance = new content().$mount()
  }
  for (const key in options) {
    instance[key] = options[key]
  }
  instance.value = true
  document.body.appendChild(instance.$el)
  if (instance.closeOnClickModal) {
    setTimeout(function() {
      instance.$el.children[0].addEventListener(
        'click',
        function() {
          instance.value = false
        },
        0,
      )
    })
  }
  if (instance.closeOnPressEscape && window !== undefined) {
    setTimeout(function() {
      window.addEventListener('keydown', function(event) {
        if (event.keyCode === 27) {
          instance.value = false
        }
      })
    }, 0)
  }
}

constructor.close = () => {
  if (instance) {
    document.body.removeChild(instance.$el)
    instance = null
  }
}
// export default simDialog

export default constructor
