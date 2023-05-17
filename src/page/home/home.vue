<script lang="ts" setup>
import { DarkSwitch } from "@/component";
import { useLogoutPost } from "./hooks";

const { mutate } = useLogoutPost();
const handleLogout = () => mutate();
</script>

<template>
  <div class="home-box">
    <el-card>
      <el-calendar />
    </el-card>
    <el-card>
      <ly-upload></ly-upload>
    </el-card>
    <el-card header="主题">
      <el-form>
        <el-form-item label="黑夜模式">
          <dark-switch />
        </el-form-item>
        <el-form-item>
          <el-button @click="handleLogout">logout</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card> </el-card>
    <el-card></el-card>
    <el-card></el-card>
  </div>
</template>

<style lang="scss" scoped>
.home-box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(12rem, 100%), 1fr));
  gap: 1rem;

  > *:nth-child(1) {
    grid-row: span 2;
    grid-column: span 2;
  }
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
