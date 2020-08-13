<template>
  <div class="indicator"></div>
</template>
<script>
  export default {
    name: 'indicator',
    created() {
      // this.$Indicator({
      //   message: 'test',
      //   //   showSnake: true,
      //   duration: 3000,
      // })
      // this.$Indicator('test', -1)
      this.$Indicator(null, 3000)
    },
    beforeDestroy() {
      this.$Indicator.close()
    },
  }
</script>
<style lang="scss" scoped>
  .indicator {
  }
</style>
