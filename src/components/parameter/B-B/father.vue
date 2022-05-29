<template>
  <div class="b">
    <h1>父</h1>
    <div class="flex align-center justify-between">
      <div class="b flex-1">
        <Left></Left>
      </div>
      <div class="b flex-1">
        <Right></Right>
      </div>
    </div>
  </div>
</template>
<script setup>
import Left from "./left.vue"
import Right from "./right.vue"
</script>
<style lang='scss' scoped>
//
* {
  @extend.m-1;
}

:deep(.el-input) {
  @extend.w-50;
}
</style>