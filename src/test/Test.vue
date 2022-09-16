<template>
  <div v-track="`测试页01--directives方案`">
    <h2 class="m-1 mb-2">测试弹窗的收集</h2>
    <div class="p-2">
      <el-button
        v-for="item in 10"
        :key="item"
        v-track:click="`点击了测试页01的按钮${item}`"
      >按钮{{item}}</el-button>
      <el-button
        @click="goBack()"
        v-track:click="'跳转到其它tab'"
        type="danger"
      >走人</el-button>
    </div>
  </div>
</template>
<script lang='ts'>
export default {
  inheritAttrs: true,
};
</script>
<script lang='ts' setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const goBack = () => {
  router.push("/");
};
</script>
<style lang='scss' scoped>
</style>