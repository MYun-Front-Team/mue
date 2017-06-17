<template>
  <div class="m-h100 syj-goods_detail">

    <m-header class="syj-header" :left-options="{showBack: true,backText:''}" :right-options="{showMore: true}">商品详情</m-header>


    <section class="syj-content">
      <swiper :list="demo01_list" height="6.4rem" dots-class="custom-bottom" dots-position="center"></swiper>
      <group title="" class="syj-goods_detail_top">
        <cell title="商品名称商品名称商品名称商品名称商品名称商品名商品名称商品名称" class="m-28-text"></cell>
        <p class="m-red-text"><span class="m-18-text">￥</span><strong class="m-30-text">245</strong></p>
        <cell title="单件：件 起订量：20" class="m-22-text"></cell>
        <cell title="产品规格" class="m-22-text m-gray-text" is-link>
        </cell>
      </group>

      <group title="商品详情" class="syj-goods_detail_spec">
        <cell title="属性1" class="m-gray-text m-24-text">
          <span slot="value" class="m-color-normal">属性值属性值属性值</span>
        </cell>
        <cell title="属性2" class="m-gray-text m-24-text">
          <span slot="value" class="m-color-normal">属性值属性值属性值</span>
        </cell>
        <cell title="属性3" class="m-gray-text m-24-text">
          <span slot="value" class="m-color-normal">属性值属性值属性值</span>
        </cell>
        <cell title="属性4" class="m-gray-text m-24-text">
          <span slot="value" class="m-color-normal">属性值属性值属性值</span>
        </cell>
      </group>

      <div class="m-pad-24-b syj-goods_detail_content">
        <p class="m-img-auto">
          <img src="https://img20.360buyimg.com/vc/jfs/t1978/311/1784481950/160863/436fc230/56722581N901cbc54.jpg" />
        </p>
        <p class="m-img-auto">
          <img  src="https://img20.360buyimg.com/vc/jfs/t2137/278/1682635100/282207/1ad9216c/566fdb74N818784f6.jpg"/>
        </p>

      </div>

    </section>


    <nav class="m-bar m-bar_footer m-1px-t">
      <a href="javascript:;" class="m-pull-left"><span class="icon icon-message2"></span></a>
      <a href="javascript:;" class="m-pull-left m-1px-l"><span class="icon icon-cart"></span></a>
      <div class="m-pull-right">
        <a href="#" class="m-26-text">加入采购单</a>
      </div>
    </nav>




  </div>
</template>


<script>
  import MHeader from '../../components/m-header/index.vue'
  import Swiper from '../../components/swiper/swiper.vue'
  import SwiperItem from '../../components/swiper/swiper-item.vue'
  import Group from '../../components/group/index.vue'
  import Cell from '../../components/cell/index.vue'

  const baseList = [{
    url: 'javascript:',
    img: 'https://static.vux.li/demo/1.jpg',
    title: ''
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/2.jpg',
    title: ''
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/3.jpg',
    title: ''
  }]

  export default {
    components: {
      Group,
      Swiper,
      SwiperItem,
      Cell,
      MHeader
    },
    data () {
      return {
        demo01_list: baseList
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
