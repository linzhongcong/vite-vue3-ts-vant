<template>
  <div id="login">
    <van-form class="lgoin-form">
      <van-cell-group inset>
        <van-field
          v-model="userInfo.account"
          clearable
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="userInfo.password"
          clearable
          type="password"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" @click="submitUserInfo" color="linear-gradient(to right, #a8caba 0%, #5d4157 100%)">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup(){
    const userInfo = reactive({})
    const router = useRouter()

    const submitUserInfo = () => {
      localStorage.removeItem('userInfo')
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      router.push({path: 'home'})
    }

    return {
      userInfo,
      submitUserInfo
    }
  }
});
</script>

<style lang="scss" scoped>
#login{
  width: 100%;
  height: 100vh;
  padding: 6rem 0 0 0;
  box-sizing: border-box;
  background-image: url(@/assets/img/login-bgi.png);
  background-size: 100% 100vh;
}
</style>