<template>
  <div>
    <h1 @click="fun">hello World!</h1>
  </div>
</template>
<script lang="ts" setup>
import request from "@/api/request";
import { onMounted, onUnmounted } from "vue";
onMounted(() => {
  console.log("挂载");
});
onUnmounted(() => {
  console.log("卸载");
});
const fun = () => {
  request({
    method: "get",
    url: "/api/get",
  });
};
defineExpose({ fun });
</script>
<style lang='scss' scoped>
</style>