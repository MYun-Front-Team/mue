<template>
  <div style="padding: .24rem;">
    <m-button type="primary"  action-type="button"  @click.native="Show" >弹出PopUp</m-button>

    <popup v-model="show" height="10rem">
      <div class="popup0">
        <panel header="图文组合列表"  :list="list" :type="type"></panel>
        <div style="text-align: center; padding: .24rem"><a href="javascript:;" @click="Close"><icon type="cancel" ></icon> 关闭</a> </div>
      </div>
    </popup>

  </div>
</template>

<script>
  import Icon from '../components/icon/index.vue'
  import MButton from '../components/m-button/index.vue'
  import Popup from '../components/popup/index.vue'
  import Panel from '../components/panel/index.vue'

  export default {
    components: {
      MButton,
      Popup,
      Icon,
      Panel
    },
    data () {
      return {
        show: false,
        type: '2',
        list: [{
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题一',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: '/component/cell'
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题二',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: '/component/radio',
            replace: false
          }
        }]
      }
    },
    methods: {
      Show () {
        this.show = true
      },
      Close () {
        this.show = false
      }
    }
  }
</script>

<style scoped>

</style>
