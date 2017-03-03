<template>
  <div>
    <m-header>This is the page title.</m-header>
    <br>
    <m-header :left-options="{showBack: false}">do not show Back</m-header>
    <br>
    <m-header :left-options="{showBack: true,backText:''}" :right-options="{showMore: true}">do not show Back Text</m-header>
    <br>
    <m-header :right-options="{showMore: true}" @on-click-more="showMenus = true">with more menu</m-header>
    <br>
    <m-header>with right link<a slot="right">Feedback</a></m-header>
    <br>
    <m-header>long long long long long long long text<a slot="right">Feedback</a></m-header>
    <br>
    <m-header>with left slot<a slot="left">Close</a> </m-header>
    <br>
    <m-header style="background-color: #333;" :left-options="{showBack: true,backText:''}" :right-options="{showMore: true}">custom background color</m-header>
    <br>
    <m-header class="my-header" :left-options="{showBack: true,backText:''}" :right-options="{showMore: true}">custom CSS</m-header>
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

<style>
  .my-header.mue-header{ background-color: #fff;}
  .my-header.mue-header .mue-header-title, .my-header.mue-header h1,
  .my-header.mue-header .mue-header-left a,
  .my-header.mue-header .mue-header-left button,
  .my-header.mue-header .mue-header-right a,
  .my-header.mue-header .mue-header-right button{ color: #333;}
  .my-header.mue-header .mue-header-right a{ color: #f43530;}
  .my-header.mue-header .mue-header-left .left-arrow:before{ border-color: #f43530;}
</style>
