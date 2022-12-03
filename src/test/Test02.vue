<template>
  <div>
    <p>子组件</p>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { onUpdated } from "vue";

onUpdated(() => {
  console.log("子组件更新了");
});
</script>
<style lang="scss" scoped></style>
