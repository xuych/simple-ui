<template>
  <div>
    <sim-button @click="open">open</sim-button>
    <sim-button @click="cutom">custom</sim-button>
  </div>
</template>
<script>
  export default {
    name: 'Dialog',
    beforeDestroy() {
      this.$Dialog.close()
    },
    methods: {
      open() {
        this.$Dialog({
          title: 'title',
          message: '确认执行此操作',
          closeOnClickModal: false,
          closeOnPressEscape: true,
          showCancelBtn: true,
          duration: 3000,
          onConfirm: () => {
            console.log('ok')
          },
          onCancel: () => {
            console.log('cancel')
          },
        })
      },
      cutom() {
        this.$Dialog({
          bareDialog: true,
          closeOnClickModal: true,
        })
      },
    },
  }
</script>
<style scoped lang="scss"></style>
