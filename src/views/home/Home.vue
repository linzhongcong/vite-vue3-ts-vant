<template>
  <div>我的</div>
</template>

<script>
import { defineComponent, getCurrentInstance, onMounted } from "vue";
import { homeSwript } from '@/api/home.ts'
export default defineComponent({
  setup() {
    onMounted(() => {
      getHome()
    })
    let getHome = () =>{
      homeSwript().then(res => {
        console.log(res);
      })
    }
  },
});
</script>

<style lang="scss" scoped>
</style>
