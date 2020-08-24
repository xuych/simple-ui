<template>
  <div>
    <sim-button class="" @click="hdlClick">button</sim-button>
  </div>
</template>
<script>
  export default {
    name: 'example-button',
    data() {
      return {
        isQiankun: window.__POWERED_BY_QIANKUN__,
      }
    },
    created() {
      console.log(this.$root.parentVuex)
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
