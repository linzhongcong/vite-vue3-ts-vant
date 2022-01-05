<template>
  <div id="app">
    <tabBar />
    <router-view />
  </div>
</template>
 
<script>
import { defineComponent } from "vue";
import tabBar from "@/components/tabbar.vue";
export default defineComponent({
  name: "app",
  components: { tabBar },
});
</script>
 
<style lang="scss" scoped>
@import url(@/assets/css/common.scss);
</style>
