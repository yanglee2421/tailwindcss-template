<template>
  <div class="b">
    <h3>后代</h3>
    <el-input v-model="num" />
  </div>
</template>
<script setup>
import { inject } from "vue";
const num = inject('num')
</script>
<style lang='scss' scoped>
//
* {
  @extend.m-1;
}

.el-input {
  @extend.w-25;
}
</style>