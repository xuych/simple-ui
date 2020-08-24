<template>
  <div>
    <input type="text" name="name" id="" v-focus="date" value="test" />
    <sim-button class="" @click="hdlClick">button</sim-button>
  </div>
</template>
<script>
  export default {
    name: 'example-button',
    data() {
      return {
        isQiankun: window.__POWERED_BY_QIANKUN__,
        date: 30,
      }
    },
    created() {
      console.log(this.$root.parentVuex)
    },
    directives: {
      focus: {
        // 指令的定义
        // inserted: function(el) {
        //   el.focus()
        // },
        inserted: function(el, binding, vnode) {
          // el.focus()
          el.value = binding.value
          console.log(el.value, binding, vnode)
        },
      },
    },
    methods: {
      hdlClick() {
        if (this.isQiankun) {
          this.$root.parentVuex.commit('setCommonData', { parent: 2 })
          // this.$root.parentRouter.push('/simple-ui/#/button')
        }
      },
    },
  }
</script>
<style scoped lang="scss">
  .sim-btn {
  }
</style>
