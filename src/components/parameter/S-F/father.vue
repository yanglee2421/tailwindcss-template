<template>
  <div class="m-1 b">
    <h1 class="p-1">父</h1>
    <p class="p-1">子可以影响父，反之不行</p>
    <el-input class="w-25 p-1" v-model="num" />
    <Son @event="num = $event"></Son>
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