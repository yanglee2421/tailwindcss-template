<template>
  <div class="m-1 b">
    <h2 class="p-1">子</h2>
    <el-input class="w-25 m-1" v-model="num" />
  </div>
</template>
<script setup>
const props = defineProps({
  num: {
    type: String,
    default: ""
  }
})
</script>
<style lang='scss' scoped>
//
</style>