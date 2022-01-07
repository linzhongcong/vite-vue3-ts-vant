<template>
  <div>我的</div>
</template>

<script>
import { defineComponent, getCurrentInstance } from "vue";
export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance();
    const requestTest = () => {
      // 调用全局$api方法
      proxy.$api
        .get("http://152.136.185.210:8000/api/w6/home/data", {
          params: {
            type: "pop",
            page: 10,
          },
        })
        .then((res) => {
          console.log(res);
        });
    };
    requestTest();
  },
});
</script>

<style lang="scss" scoped>
</style>
