module.exports = {
  vueTemplate: (compoenntName) => {
    return `<template>
 <div class="sim-${compoenntName}">
 ${compoenntName}组件
 </div>
</template>
<script>
export default {
 name: 'sim${compoenntName}'
};
</script>
<style lang="scss" scoped>
.sim-${compoenntName} {
};
</style>`
  },
  entryTemplate: (compoenntName) => {
    return `import ${compoenntName} from './${compoenntName}.vue'
    import Vue from 'vue'
    const content = Vue.extend(${compoenntName})
    let instance
    const settings = {}
    let constructor = (opts) => {
      console.log(opts)
      if (!instance) {
        instance = new content().$mount()
      }
      let options = Object.assign({}, settings, opts)
      for (const key in options) {
        instance[key] = options[key]
      }
    }
    export default constructor`
  },
}
