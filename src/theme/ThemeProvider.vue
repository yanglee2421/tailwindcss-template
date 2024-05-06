<script lang="ts" setup>
import { ElConfigProvider } from "element-plus";
import locale from "element-plus/es/locale/lang/zh-cn";
import * as Vue from "vue";
import { useIsDark } from "@/hooks/dom/useIsDark";
import { useThemeStore } from "@/hooks/store/useThemeStore";

const themeStore = useThemeStore();
const isDarkRef = useIsDark();

Vue.watchPostEffect(() => {
  const isDark = Vue.unref(isDarkRef);

  (() => {
    switch (themeStore.state.mode) {
      case "light":
        return false;
      case "dark":
        return true;
      case "system":
      default:
        return isDark;
    }
  })()
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");
});
</script>

<template>
  <ElConfigProvider :locale="locale">
    <slot></slot>
  </ElConfigProvider>
</template>

<style lang="scss" scoped></style>
