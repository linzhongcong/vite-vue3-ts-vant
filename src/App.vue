<template>
  <div id="app">
    <tabBar v-show="userInfo"/>
    <router-view />
  </div>
</template>
 
<script>
import { defineComponent } from "vue";
import tabBar from "@/components/tabbar.vue";
export default defineComponent({
  name: "app",
  components: { tabBar },
  setup(){
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    
    return {
      userInfo
    }
  }
});
</script>
 
<style lang="scss" scoped>
@import url(@/assets/css/common.scss);
</style>
