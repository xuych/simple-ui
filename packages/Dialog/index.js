// import simDialog from './Dialog.vue'
// simDialog.install = function(Vue) {
//   Vue.component(simDialog.name, simDialog)
// }

import Vue from 'vue'
import simDialog from './Dialog.vue'
import { CANCEL_TEXT, CONFIRM_TEXT } from '@/data/data'
const settings = {
  value: true,
  title: '',
  message: '',
  type: '',
  bareDialog: false,
  showInput: false,
  inputValue: null,
  inputPlaceholder: '',
  inputPattern: null,
  inputValidator: null,
  inputErrorMessage: '',
  showConfirmBtn: true,
  showCancelBtn: false,
  confirmButtonText: CONFIRM_TEXT,
  cancelButtonText: CANCEL_TEXT,
  confirmButtonClass: '',
  confirmButtonDisabled: false,
  cancelButtonClass: '',
  editorErrorMessage: null,
  closeOnClickModal: false,
  closeOnPressEscape: false,
  onCancel: null,
  onConfirm: null,
  duration: null,
}
console.log(CANCEL_TEXT, CONFIRM_TEXT, settings)
const content = Vue.extend(simDialog)
let instance
let constructor = (opts = {}) => {
  if (!instance) {
    // instance = new content({
    //   el: document.createElement('div'),
    // })
    instance = new content().$mount()
  }
  let options = Object.assign({}, settings, opts)
  for (const key in options) {
    instance[key] = options[key]
  }
  instance.value = true
  document.body.appendChild(instance.$el)
  if (instance.duration && instance.duration > 0) {
    setTimeout(() => {
      instance.value = false
    }, instance.duration)
  }
  if (instance.closeOnClickModal) {
    setTimeout(() => {
      instance.$el.children[0].addEventListener(
        'click',
        () => {
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
