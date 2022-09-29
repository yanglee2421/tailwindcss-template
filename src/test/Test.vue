<template>
  <div class="h-100 root">
    <el-card></el-card>
    <el-card></el-card>
    <el-card></el-card>
    <el-card></el-card>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.root {
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  gap: 10px;
  padding: 10px;
}
</style>
