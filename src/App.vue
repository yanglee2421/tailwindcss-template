<template>
  <router-view #default="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script lang="ts" setup>
import { usePinia, useDark } from "@/hook";
const pinia = usePinia();
const { state, setIsDark } = pinia;
useDark((darkQuery) => setIsDark(darkQuery.matches));
// 监听暗夜模式
pinia.$onAction(({ after }) => {
  const htmlClass = document.documentElement.classList;
  after(() => {
    state.isDark ? htmlClass.add("dark") : htmlClass.remove("dark");
  });
});
// 监听登录状态
pinia.$onAction(({ after }) => {
  // 未登录直接返回
  if (!state.isLogined) return;
  after(() => {
    // 依然是登录状态则返回
    if (state.isLogined) return;
    // isLogined 由真变假
    /**
     * 执行注销操作
     * 清空storage
     * 跳转到登录页
     */
  });
});
</script>

<style lang="scss">
@import "@/assets/reset.scss";
.el-pagination {
  padding-top: 10px !important;
}
.el-image {
  vertical-align: bottom;
}
</style>
