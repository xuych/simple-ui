<template>
  <transition name="sim-msaker-bounce">
    <div class="sim-masker-box">
      <div class="sim-masker" :class="{ 'sim-masker-fullscreen': fullscreen }" :style="style">
        <slot></slot>
      </div>
    </div>
  </transition>
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
  .sim-masker-box {
    position: relative;
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
      z-index: 10001;
    }
  }
</style>
