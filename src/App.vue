<template>
  <el-checkbox-group v-model="state.val">
    <el-checkbox label="Option A" draggable="true" @dragstart="log()" />
    <el-checkbox label="Option B" draggable="true" />
    <el-checkbox label="Option C" draggable="true" />
    <el-checkbox label="disabled" draggable="true" />
    <el-checkbox label="selected" draggable="true" />
  </el-checkbox-group>
</template>
<script setup>
import { reactive, watchEffect } from 'vue';

const arr = reactive(['123', '456'])
const state = reactive({
  val: []
})
watchEffect(() => {
  console.log(state.val);
})
const log = () => {
  console.log(123);
}
</script>
<style lang='scss' scoped>
//
</style>