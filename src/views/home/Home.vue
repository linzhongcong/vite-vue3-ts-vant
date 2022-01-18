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

    <div class="box"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted, ref, toRefs } from "vue";
import Request from './request'

export default defineComponent({
  setup() {
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
  }
  .swiper-item {
    width: 100%;
    height: 4rem;
  }
  .box {
    width: 2rem;
    height: 1.3333rem;
    background-color: #000;
  }
}
</style>
