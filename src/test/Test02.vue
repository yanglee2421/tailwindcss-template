<template>
  <el-card header="子组件">
    <p>子组件</p>
  </el-card>
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
