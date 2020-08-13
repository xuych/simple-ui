<template>
  <sim-masker v-model="value" fullscreen>
    <div class="content">content</div>
  </sim-masker>
</template>
<script>
  export default {
    name: 'masker',
    data() {
      return {
        value: true,
      }
    },
  }
</script>
<style lang="scss" scoped>
  .content {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    margin-top: 200px;
  }
</style>
