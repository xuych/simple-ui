<template>
  <anchored-heading :level="level" :text="text" />
</template>

<script>
  export default {
    name: 'simTitle',
    data() {
      return {
        level: 2,
        text: 'Hello world!',
      }
    },
    created() {
      this.$Title({
        level: 1,
        text: 'success',
      })
    },
  }
</script>

<style></style>
