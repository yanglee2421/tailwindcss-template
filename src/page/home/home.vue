<script lang="ts" setup>
import { DarkSwitch } from "@/component";
</script>

<template>
  <div class="home-box">
    <el-card>
      <el-calendar />
    </el-card>
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
  </div>
</template>

<style lang="scss" scoped>
@mixin first-child {
  > *:nth-child(1) {
    grid-row: span 2;
    grid-column: span 2;
  }
}
.home-box {
  display: grid;
  gap: 10px;
  @media (min-width: 1400px) {
    grid-template: auto/repeat(5, minmax(0, 1fr));
    @include first-child;
  }
  @media (min-width: 1200px) and (max-width: 1399px) {
    grid-template: auto/repeat(4, minmax(0, 1fr));
    @include first-child;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    grid-template: auto/repeat(3, minmax(0, 1fr));
    @include first-child;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    grid-template: auto/repeat(2, minmax(0, 1fr));
    @include first-child;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    grid-template: auto/repeat(1, minmax(0, 1fr));
  }
  @media (max-width: 575px) {
    grid-template: auto/repeat(1, minmax(0, 1fr));
  }
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
