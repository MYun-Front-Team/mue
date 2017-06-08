<template>
  <div class="m-h100">
    <goodsList type="2" :list=list></goodsList>
  </div>

</template>


<script>
  import GoodsList from '../components/m-goods-list/index.vue'
  import imgSrc from '../assets/images/goods.png'

  export default {
    components: {
      GoodsList,
      imgSrc
    },
    data () {
      return {
        list: [{
          src: imgSrc,
          title: '产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标产品标题产品标题产品标题',
          price: '¥48.0',
          oldPrice: '￥139.0',
          url: '/component/cell',
          outStore: false
        }, {
          src: imgSrc,
          title: '产品标题产品标题产品标题产品标题产品标标题产',
          price: '¥8.2',
          oldPrice: '￥160.0',
          url: {
            path: '/component/radio',
            replace: false
          },
          outStore: true
        }, {
          src: imgSrc,
          title: '产品标题产品标',
          price: '¥15.2',
          oldPrice: '￥20.9',
          url: '/component/cell',
          outStore: false
        }, {
          src: imgSrc,
          title: '产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标产品标题产品标题产品标题',
          price: '¥20.0',
          oldPrice: '￥19.0',
          url: '/component/cell',
          outStore: false
        }, {
          src: imgSrc,
          title: '产品标题产品标题产品标题产品标题产品标标题产',
          price: '¥30.4',
          oldPrice: '￥10.0',
          url: {
            path: '/component/radio',
            replace: false
          },
          outStore: false
        }, {
          src: imgSrc,
          title: '产品标题产品标题产',
          price: '¥5.2',
          oldPrice: '￥10.9',
          url: '/component/cell',
          outStore: false
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
  @import '../assets/common.less';
</style>
