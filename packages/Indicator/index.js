import simIndicator from './Indicator.vue'
import Vue from 'vue'
const content = Vue.extend(simIndicator)
let instance
const settings = {
  value: undefined,
  message: '',
  showSnake: true,
  duration: undefined,
}
let constructor = (opts, duration) => {
  if (!instance) {
    instance = new content().$mount()
  }
  if (opts && typeof opts === 'string') {
    instance.message = opts
    instance.showSnake = false
    instance.duration = duration || 2000
  }
  let options = Object.assign({}, settings, opts)
  for (const key in options) {
    instance[key] = options[key]
  }
  instance.duration = duration
  instance.value = true
  document.body.appendChild(instance.$el)
  if (instance.duration && instance.duration > 0) {
    setTimeout(() => {
      instance.value = false
    }, instance.duration)
  }
}
constructor.close = () => {
  instance.value = false
  setTimeout(() => {
    document.body.removeChild(instance.$el)
  }, 0)
}
export default constructor
