<template>
  <div class="m-h100 syj-order">

    <m-header class="syj-header" :left-options="{showBack: true,backText:''}" :right-options="{showMore: true}">订货
      <a slot="right" class="icon icon-cart" href="javascript:;">
        <span class="m-badge m-badge-single">9</span>
      </a>
    </m-header>


    <section class="syj-content">
       <div class="flexbox-normal syj-order_head">
           <div class="syj-order_head_img m-img-auto">
             <img src="https://myunonline-bizjia2.oss-cn-shanghai.aliyuncs.com/syj-lite-app/list-logo.png"/>
           </div>

         <div class="syj-order_head_info">
           <h3 class="m-25-text m-ellipsis m-normal-weight">嘉兴麦云信息科技有限公司</h3>
           <p><span class="icon icon-user1"></span> <span class="m-22-text">曹达</span></p>
           <p><span class="icon icon-call"></span> <span class="m-22-text">15888123456</span></p>
         </div>

         <a href="javascript:;" class="syj-order_head_icon">
           <span class="icon icon-switch1"></span>
           <span class="m-22-text">切换</span>
         </a>

       </div>

      <div class="syj-search flexbox">
        <div class="syj-search_input">
          <span class="icon icon-search"></span>
          <input type="text" placeholder="请搜索型号、名称">
        </div>

        <a href="javascript:;" class="syj-search_cat">
          <span class="icon icon-cat"></span>
          <span class="m-18-text">分类</span>
        </a>

      </div>


      <div class="filter">
        <div class="filter-item checked" >
          <span>促销</span>
          <span class="icon icon-gouxuan"></span>
        </div>
        <div class="filter-item">
          <span>新品上新</span>
          <span class="icon icon-gouxuan"></span>
        </div>
        <div class="filter-item">
          <span>热卖新品</span>
          <span class="icon icon-gouxuan"></span>
        </div>
        <div class="filter-item checked">
          <span>清仓促销</span>
          <span class="icon icon-gouxuan"></span>
        </div>
      </div>

      <ul class="syj-order_list">
        <li class="m-1px-b flexbox-normal">
          <a href="#/detail" class="syj-order_list_img">
            <img src="https://myunonline-bizjia2.oss-cn-shanghai.aliyuncs.com/syj-lite-app/list-logo.png" alt="">
          </a>
          <div class="syj-order_list_info">
            <h3 class="m-ellipsis-2l m-25-text m-normal-weight">商品名称商品名称商品名称商品名称商品名称商品名称称商品名称称</h3>
            <p class="m-red-text"><span class="m-18-text">￥</span><strong class="m-30-text">245</strong></p>
            <div class="syj-order_list_btn">
              <m-button mini type="default"><span class="icon icon-message2"></span> 咨询</m-button>
              <m-button mini type="primary"><span class="icon icon-cart1"></span> 加入采购单</m-button>
            </div>
          </div>
        </li>
        <li class="m-1px-b flexbox-normal">
          <a href="#/detail" class="syj-order_list_img">
            <img src="https://myunonline-bizjia2.oss-cn-shanghai.aliyuncs.com/syj-lite-app/list-logo.png" alt="">
          </a>
          <div class="syj-order_list_info">
            <h3 class="m-ellipsis-2l m-25-text m-normal-weight">商品名称商品名</h3>
            <p class="m-red-text"><span class="m-18-text">￥</span><strong class="m-30-text">245</strong> ~ <span class="m-18-text">￥</span><strong class="m-30-text">380</strong></p>
            <div class="syj-order_list_btn">
              <m-button mini type="default"><span class="icon icon-message2"></span> 咨询</m-button>
              <m-button mini type="primary"><span class="icon icon-cart1"></span> 加入采购单</m-button>
            </div>
          </div>
        </li>
        <li class="m-1px-b flexbox-normal">
          <a href="#/detail" class="syj-order_list_img">
            <img src="https://myunonline-bizjia2.oss-cn-shanghai.aliyuncs.com/syj-lite-app/list-logo.png" alt="">
          </a>
          <div class="syj-order_list_info">
            <h3 class="m-ellipsis-2l m-25-text m-normal-weight">商品名称商品名称商品名称商品名称商品名称商品名称称商品名称称</h3>
            <p class="m-red-text"><span class="m-18-text">￥</span><strong class="m-30-text">245</strong></p>
            <div class="syj-order_list_btn">
              <m-button mini type="default"><span class="icon icon-message2"></span> 咨询</m-button>
              <m-button mini type="primary"><span class="icon icon-cart1"></span> 加入采购单</m-button>
            </div>
          </div>
        </li>

      </ul>

    </section>


      <tabbar class="syj-footer">
        <tabbar-item  selected link="/order">
          <i slot="icon" class="syj-logo"></i>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item link="/message">
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
  import Tabbar from '../../components/tabbar/tabbar.vue'
  import TabbarItem from '../../components/tabbar/tabbar-item.vue'
  import MHeader from '../../components/m-header/index.vue'
  import MButton from '../../components/m-button/index.vue'

  export default {
    components: {
      MButton,
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
  @import '../../styles/1px.less';
</style>
