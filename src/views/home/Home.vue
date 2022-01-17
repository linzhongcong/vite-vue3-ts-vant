<template>
  <div id="home">
    <!-- 导航栏 -->
    <van-nav-bar title="乐购"/>

    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance, onMounted, ref } from "vue";
import { homeMultidata } from '@/api/home.ts';

export default defineComponent({
  setup() {
    onMounted(() => {
      gethomeMultidata()
    })
     
    const swiperData = ref([])
    const gethomeMultidata = () => {
      homeMultidata().then(res => {
        let {status, data:{data:{banner}}} = res
        if(status === 200) {
          swiperData.value = banner.list
          console.log(swiperData.value);
        }
      })
    }
  },
});
</script>

<style lang="scss" scoped>
#home {
  :deep(.van-nav-bar__content) {
    background-color: #ff8198;
  }
}
</style>
