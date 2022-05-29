<template>
  <div class="b">
    <h1>祖先</h1>
    <p>接收到的是参数的拷贝，所以当参数是一个ref或reactive对象时，会保留对应的响应式特性</p>
    <el-input v-model="num" />
    <Father></Father>
  </div>
</template>
<script setup>
import Father from "./father.vue"
import { ref, provide } from "vue";
const num = ref("")
provide("num", num)
</script>
<style lang='scss' scoped>
//
* {
  @extend.m-1;
}

:deep(.el-input) {
  @extend.w-25;
}
</style>