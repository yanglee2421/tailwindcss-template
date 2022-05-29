<template>
  <div class="m-1 b">
    <h1>父</h1>
    <p>父可以影响子，反之亦然</p>
    <el-input v-model="num" />
    <Son v-model="num"></Son>
  </div>
</template>
<script setup>
import Son from "./son.vue"
import { ref } from "vue";
const num = ref("")
</script>
<style lang='scss' scoped>
//
* {
  @extend.m-1
}

:deep(.el-input) {
  @extend.my-1;
  @extend.w-25;
}
</style>