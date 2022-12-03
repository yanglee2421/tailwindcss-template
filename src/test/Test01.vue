<template>
  <div>
    <p>count：{{ count }}</p>
    <el-button @click="count = 1">+1</el-button>
    <test-02-vue></test-02-vue>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { onUpdated, ref } from "vue";
import Test02Vue from "./Test02.vue";
const count = ref(0);
onUpdated(() => {
  console.log("父组件更新");
});
</script>
<style lang="scss" scoped></style>
