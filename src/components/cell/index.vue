<template>
  <div class="weui-cell" :class="{'m-tap-active': isLink || !!link, 'weui-cell_access': isLink || !!link}" @click="onClick">
    <div class="weui-cell__hd">
      <slot name="icon"></slot>
    </div>
    <div class="m-cell-bd" :class="{'m-cell-primary':primary==='title'}">
      <p>
        {{title}}
        <slot name="after-title"></slot>
      </p>
      <inline-desc>{{inlineDesc}}</inline-desc>
    </div>
    <div class="weui-cell__ft" :class="{'m-cell-primary':primary==='content'}">
      {{value}}
      <slot name="value"></slot>
      <slot></slot>
    </div>
    <slot name="child"></slot>
  </div>
</template>

<script>
import InlineDesc from '../inline-desc/index.vue'
import { go } from '../../libs/router'

export default {
  components: {
    InlineDesc
  },
  props: {
    title: String,
    value: [String, Number, Array],
    isLink: Boolean,
    inlineDesc: [String, Number],
    primary: {
      type: String,
      default: 'title'
    },
    link: {
      type: [String, Object]
    }
  },
  methods: {
    onClick () {
      go(this.link, this.$router)
    }
  }
}
</script>

<style lang="less">
@import '../../styles/variable.less';
@import '../../styles/tap.less';
@import '../../styles/weui/base/mixin/setArrow.less';
@import '../../styles/weui/widget/weui_cell/weui_cell_global.less';

.m-cell-primary {
  flex: 1;
}
</style>
