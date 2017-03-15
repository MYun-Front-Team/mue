<template>
  <div class="m-actionsheet">
    <transition name="vux-actionsheet-mask">
      <div class="weui-mask weui-mask_transparent" @click="onClickingMask" v-show="show"></div>
    </transition>
    <div class="weui-actionsheet" :class="{'weui-actionsheet_toggle': show}">
      <div class="weui-actionsheet__menu">
        <div class="weui-actionsheet__cell m-actionsheet-menu-default" v-show="tip" v-html="tip">
        </div>
        <div class="weui-actionsheet__cell" v-for="(menu, key) in menus" @click="onMenuClick(menu, key)"
             v-html="menu.label || menu"
             :class="[menu.disable ? 'm-actionsheet-menu-disabled' : '', `m-actionsheet-menu-${menu.type || 'default'}`]">
        </div>
      </div>
      <div class="weui-actionsheet__action" @click="emitEvent('on-click-menu', 'cancel', false)" v-if="showCancel">
        <div class="weui-actionsheet__cell">{{cancelText}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.$nextTick(() => {
        this.$tabbar = document.querySelector('.weui-tabbar')
      })
    },
    props: {
      value: Boolean,
      showCancel: Boolean,
      cancelText: {
        type: String,
        default: '取消'
      },
      menus: {
        type: [Object, Array],
        default: () => ({})
      },
      closeOnClickingMask: {
        type: Boolean,
        default: true
      },
      tip: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        show: false
      }
    },
    methods: {
      onMenuClick (menu, key) {
        if (typeof menu === 'string') {
          this.emitEvent('on-click-menu', key, true)
        } else {
          if (menu.disable !== true) {
            this.emitEvent('on-click-menu', key, menu.global)
          }
        }
      },
      onClickingMask () {
        this.closeOnClickingMask && (this.show = false)
      },
      emitEvent (event, menu, global = true, shouldClose = true) {
        if (event === 'on-click-menu') {
          if (global === true) {
            this.$emit(event, menu)
          } else {
            this.$emit(`${event}-${menu}`)
          }
          shouldClose && (this.show = false)
        }
      },
      fixIos (zIndex) {
        if (this.$tabbar && /iphone/i.test(navigator.userAgent)) {
          this.$tabbar.style.zIndex = zIndex
        }
      }
    },
    watch: {
      show (val) {
        this.$emit('input', val)
        if (val) {
          this.fixIos(-1)
        } else {
          setTimeout(() => {
            this.fixIos(100)
          }, 200)
        }
      },
      value (val) {
        this.show = val
      }
    },
    beforeDestroy () {
      this.fixIos(100)
    }
  }
</script>

<style lang="less">
  @import '../../styles/weui/widget/weui_tips/weui_mask';
  @import '../../styles/weui/widget/weui_tips/weui_actionsheet';
  
  .m-actionsheet-gap {
    height: 8px;
    width: 100%;
    background-color: #eee;
  }
  
  .m-actionsheet-cancel:before {
    border-top: none;
  }
  
  .m-actionsheet-menu-primary {
    color: @actionsheet-label-primary-color;
  }
  
  .m-actionsheet-menu-warn {
    color: @actionsheet-label-warn-color;
  }
  
  .m-actionsheet-menu-default {
    color: @actionsheet-label-default-color;
  }
  
  .m-actionsheet-menu-disabled {
    color: @actionsheet-label-disabled-color;
  }
</style>
