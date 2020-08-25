<template>
  <button :disabled="disable" :class="['sim-btn', type]" @click="hdlClick">
    <slot></slot>
  </button>
</template>
<script>
  export default {
    name: 'simButton',
    props: {
      disable: {
        type: Boolean,
        default: false,
      },
      type: {
        type: String,
        default: 'primary',
        required: false,
        validator: function(value) {
          return value ? ['primary', 'plain'].indexOf(value) !== -1 : true
        },
      },
    },
    methods: {
      hdlClick(e) {
        this.$emit('click', e)
      },
    },
  }
</script>

<style scoped lang="scss">
  .sim-btn {
    appearance: none;
    border: 0;
    border-radius: 25px;
    box-sizing: border-box;
    display: block;
    font-size: 16px;
    height: 50px;
    line-height: 50px;
    margin: 0 auto;
    text-align: center;
    outline: 0;
    overflow: hidden;
    width: 310px;
    transition: filter 0.3s;
    color: #fff;
    &:active {
      filter: brightness(60%);
    }
    &.primary {
      background-color: $primary;
    }
    &.plain {
      color: #111d32;
      background: transparent;
      border: 1px solid #d1d3da;
    }
    &:disabled {
      background-color: $disabled;
      color: #fff;
    }
  }
</style>
