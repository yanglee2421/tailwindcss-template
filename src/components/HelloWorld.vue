<template>
  <div>
    <h1>hello World!</h1>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue";
onMounted(() => {
  console.log("挂载");
});
onUnmounted(() => {
  console.log("卸载");
});
const fun = () => {
  console.log("Hello World!");
};
defineExpose({ fun });
</script>
<style lang='scss' scoped>
</style>