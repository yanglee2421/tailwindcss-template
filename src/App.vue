<template>
  <router-view #default="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script lang="ts" setup>
import { usePinia, useDark } from "@/hook";
const pinia = usePinia();
const { state, setIsDark } = pinia;
useDark((darkQuery) => {
  setIsDark(darkQuery.matches);
});
// 监听暗夜模式
pinia.$onAction(({ after }) => {
  after(() => {
    const isDark = state.isDark;
    if (isDark) {
      document.documentElement.classList.add("dark");
      return;
    }
    document.documentElement.classList.remove("dark");
    return;
  });
});
// 监听登录状态
pinia.$onAction(({ after }) => {
  const prevLogined = state.isLogined;
  if (!prevLogined) return;
  after(() => {
    const neoLogined = state.isLogined;
    if (neoLogined) return;
    neoLogined;
  });
});
</script>

<style lang="scss">
@import "@/assets/default.scss";
.el-pagination {
  padding-top: 10px !important;
}
.el-image {
  vertical-align: bottom;
}
</style>
