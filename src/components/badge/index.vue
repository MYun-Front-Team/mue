<template>
  <span v-text="text" :class="['m-badge', {'m-badge-single': text.length === 1}]"></span>
</template>

<script>
export default {
  props: {
    text: [String, Number]
  }
};
</script>

<style lang="less">
@import '../../styles/variable.less';

.m-badge {
  display: inline-block;
  text-align: center;
  background: @badge-bg-color;
  color: #fff;
  font-size: .18rem;
  height: .28rem;
  line-height: .28rem;
  border-radius: 50%;
  padding: 0 .1rem;
  background-clip: padding-box;
  vertical-align: middle;
}
.m-badge-single {
  padding: 0;
  width: .28rem;
}
</style>
