<template>
  <div id="app">
    <m-flex-box-demo></m-flex-box-demo>
  </div>
</template>

<script>
  import MFlexBoxDemo from './demo/MFlexBox.vue'
  export default {
    name: 'app',
    components: {
      MFlexBoxDemo
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
