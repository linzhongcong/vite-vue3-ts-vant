<template>
  <div id="home">
    <!-- 导航栏 -->
    <van-nav-bar fixed title="乐购" />

    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swiper" :key="item.link">
        <img :src="item.image" class="swiper-item">
      </van-swipe-item>
    </van-swipe>
    
    <!-- 推荐 -->
    <div class="recommend">
      <div v-for="item in recommend" :key="item.sort" class="recommend-item">
        <img :src="item.image" />
        <p>{{item.title}}</p>
      </div>
    </div>

    <!-- 商品bgi -->
    <img src="@/assets/img/recommend_bg.jpg" style="width: 100%; height: 6.6667rem"/>

    <good-tabs />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import GoodTabs from './child-module/Good-Tabs.vue'
import Request from './request'

export default defineComponent({
  components: {GoodTabs},
  setup() {
    return {
      // 请求数据 - 轮播图、推荐
      ...toRefs(Request.homeGatherData()),
    }
  },
});
</script>

<style lang="scss" scoped>
#home {
  :deep(.van-nav-bar__content) {
    background-color: #ff8198;
    height: 1.1733rem;
    .van-nav-bar__title{
      height: 100%;
      line-height: 1.1733rem;
      font-size: .4267rem;
    }
  }

  :deep(.van-swipe__indicator){
    width: .2rem;
    height: .2rem;
  }
  .swiper-item {
    width: 100%;
    height: 5.2rem;
  }

  .recommend{
    width: 100%;
    height: 3.7333rem;
    padding: .2667rem 0;
    border-bottom: .2333rem solid #eee;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    .recommend-item{
      text-align: center;
      img{
        width: 1.76rem;
        height: 1.76rem;;
      }
      p{
        height: .6667rem;
        line-height: .6667rem;
        font-size: 28px;
      }
    }
  }

  :deep(.van-tabs__wrap){
    height: 1.1733rem;
    .van-tab__text{
      height: 100%;
      line-height: 88px;
      font-size: .4267rem;
    }
  }
}
</style>
