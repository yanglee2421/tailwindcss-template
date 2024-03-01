<script lang="ts" setup>
import * as Vue from "vue";
import { useThemeStore } from "@/hooks/store/useThemeStore";
import { useIsDark } from "@/hooks/dom";
import { RouterView } from "vue-router";
import { ElConfigProvider } from "element-plus";
import locale from "element-plus/es/locale/lang/zh-cn";

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
  <RouterView #default="{ Component }">
    <KeepAlive :max="10">
      <ElConfigProvider :locale="locale">
        <component :is="Component" />
      </ElConfigProvider>
    </KeepAlive>
  </RouterView>
</template>

<style lang="scss" scoped></style>
