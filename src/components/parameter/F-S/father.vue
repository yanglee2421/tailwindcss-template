<template>
  <div class="h-100">
    <div class="m-1 b">
      <h1 class="p-1">父</h1>
      <p class="p-1">父可以影响子，反之不行</p>
      <el-input class="m-1 w-25" v-model="num" />
      <Son :num="num"></Son>
    </div>
  </div>
</template>
<script setup>
import Son from "./son.vue"
import { ref } from "vue";
const num = ref("")
</script>
<style lang='scss' scoped>
//
</style>