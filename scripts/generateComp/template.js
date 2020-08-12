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
    return `import sim${compoenntName} from './${compoenntName}.vue'
    sim${compoenntName}.install = function(Vue) {
      Vue.component(sim${compoenntName}.name, sim${compoenntName})
    }
    export default sim${compoenntName}`
  },
}
