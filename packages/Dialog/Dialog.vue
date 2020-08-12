<template>
  <div class="dialog-box">
    <transition name="mask">
      <div class="mask-transparent" v-show="value"></div>
    </transition>
    <div class="sim-dialog" v-show="value">
      <div class="header">
        <div class="title">{{ tit || title }}</div>
      </div>
      <div class="content">
        <div class="message" v-if="msg || message">
          <div style="text-align:left!important;line-height:22px;font-size:14px;">
            {{ msg || message }}
          </div>
        </div>
        <div class="input" v-if="showInput">
          <input :placeholder="inputPlaceholder" />
          <div class="errormsg" v-if="inputErrorMessage"></div>
        </div>
        <div v-if="bareDialog"></div>
      </div>
      <div class="btns" v-if="!bareDialog">
        <button class="btn cancel" v-if="showCancelBtn" @click="hdlCancel">{{ cancelButtonText }}</button>
        <button class="btn confirm" v-if="showConfirmBtn" @click="hdlConfirm">{{ confirmButtonText }}</button>
      </div>
    </div>
  </div>
</template>
<script>
  let CONFIRM_TEXT = '确定'
  let CANCEL_TEXT = '取消'
  export default {
    name: 'simDialog',
    props: {
      tit: {
        type: String,
        default: '',
      },
      msg: {
        type: String,
        default: '',
      },
      custom: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        value: true,
        title: '',
        message: '',
        type: '',
        bareDialog: false,
        showInput: false,
        inputValue: null,
        inputPlaceholder: '',
        inputPattern: null,
        inputValidator: null,
        inputErrorMessage: '',
        showConfirmBtn: true,
        showCancelBtn: false,
        confirmButtonText: CONFIRM_TEXT,
        cancelButtonText: CANCEL_TEXT,
        confirmButtonClass: '',
        confirmButtonDisabled: false,
        cancelButtonClass: '',
        editorErrorMessage: null,
        closeOnClickModal: false,
        closeOnPressEscape: false,
        onCancel: null,
        onConfirm: null,
      }
    },
    methods: {
      hdlCancel() {
        this.value = false
        this.onCancel && this.onCancel()
      },
      hdlConfirm() {
        this.value = false
        this.onConfirm && this.onConfirm()
      },
    },
  }
</script>
<style scoped lang="scss">
  .mask-leave-active,
  .mask-leave-active {
    opacity: 0;
  }
  .mask-leave-active,
  .mask-enter-active {
    transition: opacity 300ms !important;
  }
  .mask-transparent {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    padding: 0;
  }
  .dialog-box {
    .sim-dialog {
      background-color: #fff;
      transform: translate3d(-50%, -50%, 0);
      top: 50%;
      left: 50%;
      position: absolute;
      width: 85%;
      border-radius: 3px;
      max-height: 100%;
      overflow: scroll;
      .title {
        text-align: center;
        padding-top: 15px;
        padding-left: 0;
        margin-bottom: 0;
        font-size: 16px;
        line-height: 30px;
      }
      .content {
        padding: 10px 20px 26px;
        border-bottom: $gray-border;
        min-height: 36px;
        position: relative;
        font-size: 14px;
      }
      .btns {
        display: flex;
        justify-content: space-between;
        height: 50px;
        line-height: 50px;
        * {
          flex: 1;
          &:active {
            @include active-no-color;
          }
        }
        .confirm {
          color: $primary;
        }
      }
    }
  }
</style>
