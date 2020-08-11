<template>
  <div class="sim-button">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'simButton',
    props: {
      type: String,
    },
  }
</script>

<style scoped>
  .sim-button {
    display: inline-block;
    padding: 3px 6px;
    background: #000;
    color: #fff;
  }
</style>
