<template>
  <div class="navbar">
    <van-tabbar v-model="active" active-color="deepPink">
      <van-tabbar-item icon="home-o" @click="goToPage('home')"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="qr" @click="goToPage('classification')"
        >分类</van-tabbar-item
      >
      <van-tabbar-item icon="shopping-cart-o" @click="goToPage('cart')"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="friends-o" @click="goToPage('my')"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const active = ref(0);

    const router = useRouter();
    const route = useRoute();
    const goToPage = (type) => {
      router.push(type);
    };

    return {
      active,
      goToPage,
    };
  },
});
</script>

<style lang="scss" scoped>
  .navbar{
    :deep(.van-tabbar){
      height: 1.3067rem;
      .van-tabbar-item__icon{
        font-size: .5867rem;
      }
      .van-tabbar-item__text{
        font-size: .3733rem;
      }
    }
  }
</style>