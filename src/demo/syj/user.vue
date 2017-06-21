<template>
  <div class="m-h100 syj-user">

    <section class="syj-user_head">
      <p class="m-right-text"><a href="javascript:;" class="icon icon-setting"></a></p>
      <panel header=""  :list="list" type="1"></panel>
    </section>

    <section class="syj-user_list">
      <group title="" class="m-mar-t0">
        <cell title="收货地址" is-link>
          <span class="icon icon-address bg-purple" slot="icon"></span>
        </cell>
        <cell title="我的账户" is-link>
          <span class="icon icon-account bg-light-blue" slot="icon"></span>
        </cell>
        <cell title="切换公司" is-link>
          <span class="icon icon-switch bg-blue" slot="icon"></span>
        </cell>
      </group>
      <group title="">
        <cell title="关于生意加" is-link>
          <span class="icon icon-information bg-pink" slot="icon"></span>
        </cell>
      </group>
      <group title="">
        <cell title="退出登录" class="syj-quit" is-link>
          <span class="icon icon-quit bg-red" slot="icon"></span>
        </cell>
      </group>
    </section>


      <tabbar class="syj-footer">
        <tabbar-item  link="/order">
          <i slot="icon" class="syj-logo"></i>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item link="/message">
          <i slot="icon" class="icon icon-message"></i>
          <span slot="label">消息</span>
        </tabbar-item>
        <tabbar-item selected link="/user">
          <i slot="icon" class="icon icon-my-on"></i>
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>




  </div>
</template>


<script>
  import Panel from '../../components/panel/index.vue'
  import Group from '../../components/group/index.vue'
  import Cell from '../../components/cell/index.vue'
  import Tabbar from '../../components/tabbar/tabbar.vue'
  import TabbarItem from '../../components/tabbar/tabbar-item.vue'

  export default {
    components: {
      Panel,
      Group,
      Cell,
      Tabbar,
      TabbarItem
    },
    data () {
      return {
        list: [{
          src: 'https://myunonline-bizjia2.oss-cn-shanghai.aliyuncs.com/syj-lite-app/list-logo.png',
          title: '嘉兴麦云信息科技有限公司',
          desc: '浙江省-嘉兴市-南湖区 嘉兴市南湖区富润路300号电子商务产业园3号园',
          url: '/component/cell'
        }]
      }
    },
    watch: {

    },
    methods: {

    }
  }
</script>

<style lang="less">
  @import '../../assets/common.less';
</style>
