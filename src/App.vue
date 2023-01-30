<script lang="ts" setup>
import { usePinia, useDark, useAuth } from "@/hook";

const pinia = usePinia();
const { actIsDark } = pinia;
useDark(({ matches }) => actIsDark(matches));
</script>

<template>
  <router-view #default="{ Component }">
    <component :is="Component" />
  </router-view>
  <el-backtop
    :right="36"
    :bottom="36"
  />
</template>

<style lang="scss">
@import "@/assets/reset.scss";
.el-pagination {
  padding-top: 10px !important;
}
.el-image {
  vertical-align: bottom;
}
</style>
