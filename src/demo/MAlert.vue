<template>
  <div>
    <alert v-model="show1"  title="Congratulations" @on-show="onShow" @on-hide="onHide">
      <div>自定义内容</div>
    </alert>
    <group title="Alert">
      <cell title="Show Me" @click.native="show1=true" is-link></cell>
      <cell title="will auto close in 3s" @click.native="showPluginAuto" is-link></cell>
    </group>
  </div>
</template>

<script>
  import Alert from '../components/alert/index.vue'
  import Group from '../components/group/index.vue'
  import Cell from '../components/cell/index.vue'

  export default {
    components: {
      Alert,
      Group,
      Cell
    },
    data () {
      return {
        show: false,
        show1: false
      }
    },
    methods: {
      onHide () {
        // console.log('on hide')
      },
      onShow () {
        // console.log('on show')
      },
      showPlugin () {
        this.$m.alert.show({
          title: 'm is Cool',
          content: 'Do you agree?',
          onShow () {
            // console.log('Plugin: I\'m showing')
          },
          onHide () {
            // console.log('Plugin: I\'m hiding now')
          }
        })
      },
      showPluginAuto () {
        this.showPlugin()
        setTimeout(() => {
          this.$m.alert.hide()
        }, 3000)
      }
    }
  }
</script>
