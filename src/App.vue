<script lang="ts" setup>
// Vue Imports
import * as Vue from "vue";

// Provider Imports
import AuthGuard from "@/router/AuthGuard.vue";

// Store Imports
import { useThemeStore } from "@/hooks/store";
import { useIsDark } from "@/hooks/dom";

const themeStore = useThemeStore();
const isDarkRef = useIsDark();

Vue.watchPostEffect(() => {
  const isDark = Vue.unref(isDarkRef);

  (() => {
    switch (themeStore.mode) {
      case "light":
        return false;
      case "dark":
        return true;
      case "auto":
      default:
        return isDark;
    }
  })()
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");
});
</script>

<template>
  <auth-guard>
    <router-view #default="{ Component }">
      <keep-alive :max="10">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </auth-guard>
</template>

<style lang="scss" scoped></style>
