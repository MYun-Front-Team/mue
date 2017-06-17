<template>
  <div class="m-h100 syj-message">

    <m-header class="syj-header"  :left-options="{showBack: false}">消息 <a slot="right" class="icon icon-contact" href="javascript:;"></a></m-header>

    <section class="syj-content">
      <div class="message-filter">
        <div class="m-pull-left">消息类型：</div>
        <div class="m-pull-left m-gray-text m-ellipsis">消息类型A,消息类型A,消息类型A,消息类型A,消息类型A,消息类型A,</div>
        <div class="m-pull-right icon icon-filter"></div>
      </div>

      <group title="" class="syj-message_top">
        <cell title="客服子美" inline-desc="您好，您咨询的商品已经卖完了～" >
          <img slot="icon" src="https://myunonline-bizjia2.oss-cn-shanghai.aliyuncs.com/syj-lite-app/list-logo.png" alt="">
          <span slot="value" class="m-gray-text m-18-text">14:04</span>
        </cell>
        <cell title="系统通知" is-link >
          <span slot="icon" class="icon icon-notice">
          </span>
          <span slot="icon" class="m-reddot"></span>
        </cell>
        <cell title="麦云科技信息" is-link>
          <img slot="icon" class="syj-message_logo-company" src="https://myunonline-bizjia2.oss-cn-shanghai.aliyuncs.com/syj-lite-app/list-logo.png" alt="">
        </cell>

      </group>


      <div class="message-list">

        <div class="m-center-text message-lis-item" >
          <div class="message-time m-22-text">15:04</div>
          <div class="message-wrap message-has-cover">

            <div class="message-tag yellow-tag">
              <span class="tag-text">新年大促</span>
              <span class="icon icon-rightTag"></span>
            </div>

            <div class="message-box m-img-auto">
              <img  src="http://myuntest-bizjia2.oss-cn-shanghai.aliyuncs.com/syj/msg/17887962804231927.jpg?x-oss-process=style/appresize" />

              <div class="message-content flexbox">
                <div class="message-text m-26-text m-ellipsis-2l">集成吊顶行业年中大促，满9000减800，限购100份。速来抢购！集成吊顶行业年中大促 </div>

              </div>
            </div>
          </div>

        </div>

        <div class="m-center-text message-lis-item" >
          <div class="message-time m-22-text">昨天</div>
          <div class="message-wrap message-has-cover">

            <div class="message-tag purple-tag">
              <span class="tag-text">春季上新</span>
              <span class="icon icon-rightTag"></span>
            </div>

            <div class="message-box m-img-auto">
              <img  src="http://myuntest-bizjia2.oss-cn-shanghai.aliyuncs.com/syj/msg/7427677713154119.jpg?x-oss-process=style/appresize"/>

              <div class="message-content flexbox">
                <div class="message-text m-26-font m-ellipsis-2l">集成吊顶行业年中大促</div>

              </div>

            </div>
          </div>
        </div>

        <div class="m-center-text message-lis-item" >
          <div class="message-time m-22-text">昨天</div>
          <div class="message-wrap">

            <div class="message-tag purple-tag">
              <span class="tag-text">春季上新</span>
              <span class="icon icon-rightTag"></span>
            </div>

            <div class="message-box">
              <div class="message-content flexbox">
                <div class="message-text m-26-text m-ellipsis-2l">集成吊顶行业年中大促，满9000减 800，限购100份。速来抢购！
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>


    </section>


      <tabbar class="syj-footer">
        <tabbar-item  link="/order">
          <i slot="icon" class="syj-logo"></i>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item selected link="/message">
          <i slot="icon" class="icon icon-message"></i>
          <span slot="label">消息</span>
        </tabbar-item>
        <tabbar-item link="/user">
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
  import MHeader from '../../components/m-header/index.vue'

  export default {
    components: {
      Panel,
      Group,
      Cell,
      Tabbar,
      TabbarItem,
      MHeader
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
