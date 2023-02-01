<script lang="ts" setup>
import { useAuth } from "@/hook";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { reactive } from "vue";

const {
  state: { isLogined },
  actLogin,
} = useAuth();
const state = reactive({
  isRemember: false,
});
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
        <el-checkbox v-model="state.isRemember">记住我</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button
          @click="
            actLogin(
              {
                user: 'yang',
                token: '788',
                invalidTime: Date.now() + 1000 * 60 * 30,
              },
              state.isRemember
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
