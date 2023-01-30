<script lang="ts" setup>
import { useAuth } from "@/hook";
import { useRouter } from "vue-router";
const { state, actLogin } = useAuth();
const router = useRouter();
// if (state.isLogined) router.replace("/");
console.log("");
</script>
<template>
  <div>
    <h1>没登录你上尼玛的网</h1>
    <router-link
      to="/"
      replace
    >
      <el-button>Take me home</el-button>
    </router-link>
    <el-form>
      <el-form-item>
        <el-button
          @click="
            actLogin(
              {
                user: '',
                invalidTime: Date.now() + 1000 * 10,
                token: '',
              },
              true
            )
          "
        >
          Login</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="scss" scoped></style>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
