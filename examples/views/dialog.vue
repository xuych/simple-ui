<template>
  <!-- <sim-dialog custom @cancel="cancel">
    666
  </sim-dialog> -->
  <div>
    <sim-button @click="open">open</sim-button>
    <sim-button @click="cutom">custom</sim-button>
  </div>
</template>
<script>
  export default {
    name: 'Dialog',
    methods: {
      open() {
        this.$Dialog({
          title: 'title',
          message: '确认执行此操作',
          closeOnClickModal: false,
          closeOnPressEscape: true,
          showCancelBtn: true,
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
        })
        // TODO: 弹窗默认展示n秒后自动关闭的实现
        this.$nextTick(
          setTimeout(() => {
            this.$Dialog.close()
          }, 3000),
        )
      },
    },
  }
</script>
<style scoped lang="scss"></style>
