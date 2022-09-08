<template>
  <div v-track="'这是测试页一'">
    <el-button
      v-for="item in 10"
      :key="item"
      v-track:click="`点击了按钮${item}`"
    >按钮{{item}}</el-button>
    <el-link
      @click="goBack()"
      v-track:click="'跳转到其它tab'"
    >走人</el-link>
  </div>
</template>
<script lang='ts'>
export default {
  inheritAttrs: true,
};
</script>
<script lang='ts' setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goBack = () => {
  router.push("/");
};
</script>
<style lang='scss' scoped>
</style>