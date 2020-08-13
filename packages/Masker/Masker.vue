<template>
  <div class="container">
    <transition name="sim-msaker-bounce">
      <div class="sim-masker-box" v-show="visiable">
        <div class="sim-masker" @click="close" :class="{ 'sim-masker-fullscreen': fullscreen }" :style="style"></div>
      </div>
    </transition>
    <div v-show="visiable" class="slot">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import { toRGB } from '@/utils/util'
  export default {
    name: 'simMasker',
    props: {
      color: {
        type: String,
        default: '0, 0, 0',
      },
      opacity: {
        type: Number,
        default: 0.5,
      },
      fullscreen: {
        type: Boolean,
        default: false,
      },
      closeOnClickModal: {
        type: Boolean,
        default: true,
      },
      value: {
        type: Boolean,
        default: undefined,
      },
    },
    data() {
      return {
        visiable: this.value,
      }
    },
    watch: {
      visiable(val) {
        this.$emit('input', val)
      },
      value(val) {
        this.visiable = val
      },
    },
    methods: {
      close() {
        if (this.closeOnClickModal) {
          this.$emit('input', false)
        }
      },
    },
    computed: {
      style() {
        let color = /,/.test(this.color) ? this.color : toRGB(this.color.replace('#', '')).join(',')
        return {
          backgroundColor: `rgba(${color},${this.opacity})`,
        }
      },
    },
  }
</script>
<style lang="scss" scoped>
  .sim-msaker-bounce {
    transition: 0.3s;
  }
  .sim-msaker-bounce-enter {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.7);
  }
  .sim-msaker-bounce-leave-active {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.9);
  }
  .container {
    position: relative;
    z-index: 1001;
  }
  .sim-masker-box {
    .sim-masker {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: inherit;
    }
    .sim-masker-fullscreen {
      position: fixed;
    }
  }
  .slot {
    transform: translate3d(-50%, -50%, 0);
    top: 50%;
    left: 50%;
    position: absolute;
  }
</style>
