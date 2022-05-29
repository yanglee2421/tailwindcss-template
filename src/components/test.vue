<template>
  <div>
    <h1>{{ state.num }}</h1>
    <h2>{{ state.mes }}</h2>
    <el-button @click="fun">方法</el-button>
  </div>
</template>
<script setup>
import { onBeforeUpdate, onUpdated, reactive, watch } from "vue";

const state = reactive({
  num: 0,
  mes: 1,
});
const fun = () => {
  state.num = 1;
};
onBeforeUpdate(() => {
  state.mes = 2;
  console.log("before", state.num, state.mes);
});
onUpdated(() => {
  console.log("updated", state.num, state.mes);
});
watch(
  () => state.num,
  () => {
    state.mes = 3;
    console.log("watch", state.num, state.mes);
  }
);
</script>
<style lang='scss' scoped>
</style>