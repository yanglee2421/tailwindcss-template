<template>
  <div class="text-center">
    <h1>hello World!</h1>
    <p>{{state.count}}</p>
    <el-button @click="state.count++;log(state.count)">加加</el-button>
  </div>
</template>
<script lang="ts">
export default {
  mounted() {
    console.log(`hello World!`);
  },
};
</script>
<script lang="ts" setup>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  reactive,
  watchEffect,
  watchPostEffect,
  watchSyncEffect,
} from "vue";
const state = reactive({
  count: 0,
});
const log = (i: unknown) => {
  console.log("log", i);
};
watchEffect(() => {
  console.log("watchEffect", state.count);
});
watchPostEffect(() => {
  console.log("watchPostEffect", state.count);
});
watchSyncEffect(() => {
  console.log("watchSyncEffect", state.count);
});
onBeforeMount(() => {
  console.log("挂载前");
});
onMounted(() => {
  console.log("挂载");
});
onBeforeUpdate(() => {
  console.log("更新前");
});
onUpdated(() => {
  console.log("更新完成");
});
onBeforeUnmount(() => {
  console.log("卸载完成前");
});
onUnmounted(() => {
  console.log("卸载完成");
});
</script>
<style lang='scss' scoped>
</style>