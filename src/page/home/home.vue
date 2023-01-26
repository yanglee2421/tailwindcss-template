<template>
  <div class="home-box">
    <el-card></el-card>
    <el-card></el-card>
    <el-card header="主题">
      <el-form>
        <el-form-item label="黑夜模式">
          <dark-switch />
        </el-form-item>
        <el-form-item label="雪飘">
          <router-link to="/demo">
            <el-link type="primary">snow</el-link>
          </router-link>
        </el-form-item>
      </el-form>
    </el-card>
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
<script lang="ts" setup>
import { DarkSwitch } from "@/component";
</script>
<style lang="scss" scoped>
.home-box {
  @extend .p-1;
  display: grid;
  grid-template: repeat(3, minmax(300px, 1fr)) / repeat(6, minmax(100px, 1fr));
  gap: 10px;
  & > *:first-child,
  & > *:nth-child(2),
  & > *:nth-child(3),
  & > :nth-child(4) {
    grid-column: span 2;
  }
  & > *:nth-child(5) {
    grid-column: span 4;
  }
  & > *:nth-child(6),
  & > *:nth-child(7) {
    grid-column: span 3;
  }
}
</style>
