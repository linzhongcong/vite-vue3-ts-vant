<template>
  <div id="home">
    <!-- 导航栏 -->
    <van-nav-bar title="乐购"/>

    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swiper" :key="item.link">
        <img :src="item.image" class="swiper-item">
      </van-swipe-item>
    </van-swipe>

    <div class="recommend">
      <div v-for="item in recommend" :key="item.sort" class="recommend-item">
        <img :src="item.image" />
        <p>{{item.title}}</p>
      </div>
    </div>

    <img src="@/assets/img/recommend_bg.jpg" style="width: 101%; height: 5rem"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted, ref, toRefs } from "vue";
import Request from './request'

export default defineComponent({
  setup() {
    // ----------------------------------请求回来的数据----------------------------------
    let gather = Request.homeGatherData()
    
    
    return {
      ...toRefs(gather)
    }
  },
});
</script>

<style lang="scss" scoped>
#home {
  :deep(.van-nav-bar__content) {
    background-color: #ff8198;
    height: .5867rem;
    .van-nav-bar__title{
      font-size: .2133rem;
    }
  }
  .swiper-item {
    width: 100%;
    height: 4rem;
  }

  .recommend{
    width: 100%;
    height: 1.8667rem;
    padding: .2667rem 0;
    border-bottom: .1333rem solid #eee;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    .recommend-item{
      text-align: center;
      img{
        width: .8667rem;
        height: .8667rem;
      }
    }
  }
}
</style>
