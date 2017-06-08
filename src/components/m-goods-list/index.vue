<template>

<div>
    <!--type==='1'-->
    <template v-if="type === '1'">
      <ul class="m-goods-list m-goods-list-type1">
      <li class="m-1px-b" :class="item.outStore? 'm-goods-list-outStore': ''"  v-for="item in list">
        <a :href="getUrl(item.url)"  @click.prevent="onItemClick(item)" >
          <div class="m-goods_img m-img-auto m-pull-left">
            <span class="m-goods_img-tag" v-if="item.outStore"></span>
            <img class="m-goods_img-big"  :src="item.src" alt="">
            <p class="m-goods_img-tips m-22-text" v-if="item.outStore" v-html="imgTips"></p>
          </div>
          <div class="m-goods_info m-pull-right">
            <h3 class="m-ellipsis-2l m-25-text">{{item.title}}</h3>
            <p class="m-ellipsis m-22-text m-gray-text">{{item.desc}}</p>
            <p class="m-26-text m-orange-text">{{item.price}}</p>
            <p class="m-22-text m-gray-text m-line-cross">{{item.oldPrice}}</p>
          </div>
        </a>
      </li>
      </ul>
    </template>


    <!--type==='2'-->
    <template v-if="type === '2'">
      <ul class="m-goods-list m-goods-list-type2">
      <li  :class="item.outStore? 'm-goods-list-outStore': ''"  v-for="item in list">
        <a :href="getUrl(item.url)"  @click.prevent="onItemClick(item)" >
          <div class="m-goods_img m-img-auto">
            <span class="m-goods_img-tag" v-if="item.outStore"></span>
            <img class="m-goods_img-big"  :src="item.src" alt="">
            <p class="m-goods_img-tips m-22-text" v-if="item.outStore" v-html="imgTips"></p>
          </div>
          <div class="m-goods_info">
            <div class="m-goods-h3">
              <h3 class="m-ellipsis-2l m-20-text">{{item.title}}</h3>
            </div>
            <div class="m-goods_info-price">
              <p class="m-22-text m-pull-left m-orange-text">{{item.price}}</p>
              <p class="m-18-text m-pull-right m-gray-text m-line-cross">{{item.oldPrice}}</p>
            </div>
          </div>
        </a>
      </li>
      </ul>
    </template>

  <!--type==='3'-->
  <template v-if="type === '3'">
    <ul class="m-goods-list m-goods-list-type3">
      <li  :class="item.outStore? 'm-goods-list-outStore': ''"  v-for="item in list">
        <div class="m-goods-list_box">
          <div class="m-goods_img m-img-auto">
            <a :href="getUrl(item.url)"  @click.prevent="onItemClick(item)" >
              <span class="m-goods_img-tag" v-if="item.outStore"></span>
              <img class="m-goods_img-big"  :src="item.src" alt="">
              <p class="m-goods_img-tips m-22-text" v-if="item.outStore" v-html="imgTips"></p>
            </a>
          </div>
          <div class="m-goods_info">
            <div class="m-goods-h3">
              <h3 class="m-ellipsis-2l m-26-text"><a :href="getUrl(item.url)"  @click.prevent="onItemClick(item)" >{{item.title}}</a></h3>
            </div>
            <div class="m-goods_info-price">
              <p class="m-pull-left ">
                <span class="m-orange-text m-26-text "> {{item.price}}</span>
                <span class="m-22-text m-gray-text m-line-cross">{{item.oldPrice}}</span>
              </p>
              <p class="m-pull-right">
                <a :href="getUrl(item.urlCart)"  @click.prevent="onItemClickCart(item)" class="icon icon-cart"></a>
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </template>

</div>

</template>

<script>
import { go, getUrl } from '../../libs/router'

export default {
  props: {
    list: Array,
    imgTips: {
      type: String,
      default: '已售罄'
    },
    type: {
      type: String,
      default: '1'
    }
  },
  methods: {
    getUrl (url) {
      return getUrl(url, this.$router)
    },
    onItemClick (item) {
      this.$emit('on-click-item', item)
      go(item.url, this.$router)
    },
    onItemClickCart (item) {
      this.$emit('on-click-item', item)
      go(item.urlCart, this.$router)
    }
  }
}
</script>

<style lang="less">
  @import '../../styles/1px.less';
</style>
