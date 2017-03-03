<template>
  <div id="app">
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
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
</style>
