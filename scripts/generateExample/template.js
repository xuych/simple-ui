module.exports = {
  vueTemplate: (compoenntName) => {
    return `<template>
   <div class="${compoenntName}">
   ${compoenntName}组件
   </div>
  </template>
  <script>
  export default {
   name: '${compoenntName}'
  };
  </script>
  <style lang="stylus" scoped>
  .${compoenntName} {
  };
  </style>`
  },
}
