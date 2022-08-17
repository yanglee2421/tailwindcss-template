<template>
  <div class="text-center pt-3">
    <h1 class="mt-3">404，这里没有你要找的东西</h1>
    <el-button
      @click="loginOut()"
      type="danger"
      class="mt-3"
    >注销</el-button>
  </div>
</template>
<script lang='ts' setup>
import { useRouter } from "vue-router";

const router = useRouter();
const loginOut = () => {
  localStorage.removeItem("token");
  router.replace("/login");
};
</script>
<style lang='scss' scoped>
</style>