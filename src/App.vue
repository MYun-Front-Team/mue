<template>
  <div id="app">
    <m-button-demo></m-button-demo>
  </div>
</template>

<script>
  import MButtonDemo from './demo/MButton.vue'
  export default {
    name: 'app',
    components: {
      MButtonDemo
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
</style>
