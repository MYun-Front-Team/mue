<template>
  <div>
    <m-header>This is the page title.</m-header>
    <br>
    <m-header :left-options="{showBack: false}">do not show Back</m-header>
    <br>
    <m-header :right-options="{showMore: true}" @on-click-more="showMenus = true">with more menu</m-header>
    <br>
    <m-header>with right link<a slot="right">Feedback</a></m-header>
    <br>
    <m-header>long long long long long long long text<a slot="right">Feedback</a></m-header>
    <br>
    <m-header>with left slot<a slot="left">Close</a></m-header>
    <br>
    <m-header style="background-color:#000;">custom background color</m-header>
  </div>
</template>

<script>
  import MHeader from '../components/m-header/index.vue'

  export default {
    components: {
      MHeader
    },
    data () {
      return {
      }
    }
  }
</script>
