<template>
  <div id="app">
    <transition :name="'mue-pop-' + (direction === 'forward' ? 'in' : 'out')">
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  
  export default {
    name: 'app',
    computed: {
      ...mapState({
        demoTop: state => state.demoScrollTop,
        isLoading: state => state.isLoading,
        direction: state => state.direction
      })
    },
    components: {
    },
    methods: {
    }
  }
</script>

<style lang="less">
  @import './styles/reset.less';

  body {
    background-color: #efeff4;
  }

  /**
* vue-router transition
*/
  .router-view {
    width: 100%;
    animation-duration: 0.5s;
    animation-fill-mode: both;
    backface-visibility: hidden;
  }
  .mue-pop-out-enter-active,
  .mue-pop-out-leave-active,
  .mue-pop-in-enter-active,
  .mue-pop-in-leave-active {
    will-change: transform;
    height: 100%;
    position: absolute;
    left: 0;
  }
  .mue-pop-out-enter-active {
    animation-name: popInLeft;
  }
  .mue-pop-out-leave-active {
    animation-name: popOutRight;
  }
  .mue-pop-in-enter-active {
    perspective: 1000;
    animation-name: popInRight;
  }
  .mue-pop-in-leave-active {
    animation-name: popOutLeft;
  }
  @keyframes popInLeft {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes popOutLeft {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
  }
  @keyframes popInRight {
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes popOutRight {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
  }
</style>
