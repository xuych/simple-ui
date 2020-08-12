<template>
  <div>
    <sim-button class="" @click="hdlClick">button</sim-button>
  </div>
</template>
<script>
  export default {
    name: 'example-button',
    data() {
      return {}
    },
    methods: {
      hdlClick(e) {
        console.log(e)
      },
    },
  }
</script>
<style scoped lang="scss">
  .sim-btn {
  }
</style>
