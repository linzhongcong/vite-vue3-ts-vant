<template>
  <div>
    <div @click="goBack">返回</div>
    商品详情
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const router = useRouter();
    const goBack = () => {
      router.go(-1)
    }
    
    return {
      goBack
    }
  }
})
</script>

<style lang="scss" scoped>
</style>