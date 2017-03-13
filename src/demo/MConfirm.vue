<template>
  <div>
    <confirm v-model="show" title="confirm deleting the item"
             @on-cancel="onCancel"
             @on-confirm="onConfirm"
             @on-show="onShow"
             @on-hide="onHide"
    >
      <p style="text-align:center;">Are you sure?</p>
    </confirm>
    <br>
    <div style="padding:15px;">
      <m-button @click.native="showPlugin" type="primary">Show</m-button>
    </div>
    <div style="padding:15px;">
      <m-button @click.native="showPlugin2" type="primary">Hide after 3s</m-button>
    </div>
    <div style="padding:15px;">
      <m-button @click.native="showPlugin3" type="primary">Hide On Blur</m-button>
    </div>
  </div>
</template>

<script>
  import Confirm from '../components/confirm/index.vue'
  import Group from '../components/group/index.vue'
  import MButton from '../components/m-button/index.vue'

  export default {
    components: {
      Confirm,
      Group,
      MButton
    },
    data () {
      return {
        show: false
      }
    },
    methods: {
      onCancel () {
        // console.log('on cancel')
      },
      onConfirm () {
        // console.log('on confirm')
      },
      onHide () {
        // console.log('on hide')
      },
      onShow () {
        // console.log('on show')
      },
      showPlugin () {
        this.$m.confirm.show({
          title: 'Title',
          content: 'Content',
          cancelText: 'Cancel',
          confirmText: 'OK',
          onShow () {
            // console.log('plugin show')
          },
          onHide () {
            // console.log('plugin hide')
          },
          onCancel () {
            // console.log('plugin cancel')
          },
          onConfirm () {
            // console.log('plugin confirm')
          }
        })
      },
      showPlugin2 () {
        this.showPlugin()
        setTimeout(() => {
          this.$m.confirm.hide()
        }, 3000)
      },
      showPlugin3 () {
        this.$m.confirm.show({
          title: 'Title',
          content: 'Content',
          hideOnBlur: true
        })
      }
    }
  }
</script>
