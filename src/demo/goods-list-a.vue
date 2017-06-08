<template>
  <div class="m-h100">
    <goodsList type="1" :list=list></goodsList>
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
          desc: '产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述',
          price: '¥25.99～¥200',
          oldPrice: '￥160.00',
          url: '/component/cell',
          outStore: true
        }, {
          src: imgSrc,
          title: '产品标题产品标题产品标题产品标题产品标标题产',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          price: '¥25.99～¥200',
          oldPrice: '￥160.00',
          url: {
            path: '/component/radio',
            replace: false
          },
          outStore: false
        }, {
          src: imgSrc,
          title: '产品标题产品标题产',
          desc: '产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述',
          price: '¥25.99～¥200',
          oldPrice: '￥160.00',
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
