import title from './title.jsx'
import Vue from 'vue'
const content = Vue.extend(title)
let instance
const settings = {
  level: 1,
  text: '',
}
let constructor = (opts) => {
  console.log(opts)
  if (!instance) {
    instance = new content().$mount()
  }
  let options = Object.assign({}, settings, opts)
  for (const key in options) {
    instance[key] = options[key]
  }
  document.body.appendChild(instance.$el)
}
constructor.close = () => {
  setTimeout(() => {
    document.body.removeChild(instance.$el)
  }, 0)
}
export default constructor
