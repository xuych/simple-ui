<template>
  <transition name="container-fade">
    <div class="indicator" v-show="value">
      <div class="wrapper">
        <span class="spin" v-show="showSnake">
          <div class="snake"></div>
        </span>
        <span class="text">{{ message }}</span>
      </div>
      <div class="mask"></div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'simIndicator',
    data() {
      return {
        value: false,
        message: '',
        showSnake: true,
        duration: undefined,
      }
    },
  }
</script>
<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    color: white;
    box-sizing: border-box;
    text-align: center;
    z-index: 3000;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 10px;
    min-width: 60px;
  }
  .spin {
    display: inline-block;
    text-align: center;
    width: 100%;
    height: 20px;
    margin-top: 20px;
  }
  @keyframes spinner {
    0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
  }
  .snake::before {
    animation: 1s linear infinite spinner;
    animation-play-state: inherit;
    border: solid 5px #cfd0d1;
    border-bottom-color: transparent;
    border-radius: 50%;
    content: '';
    height: 20px;
    width: 20px;
    position: absolute;
    transform: translate3d(-50%, -50%, 0);
    will-change: transform;
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: transparent;
    z-index: 3000;
  }
</style>
