<template>
  <div id="app">
    <m-header-demo></m-header-demo>
  </div>
</template>

<script>
  import MHeaderDemo from './demo/MHeader.vue'
  export default {
    name: 'app',
    components: {
      MHeaderDemo
    },
    methods: {
    }
  }
</script>

<style lang="less">
  @import './styles/reset.less';

  body {
    background-color: #fbf9fe;
  }
</style>
