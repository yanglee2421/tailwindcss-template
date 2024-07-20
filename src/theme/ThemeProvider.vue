<script lang="ts" setup>
import * as Vue from "vue";
import { useIsDark } from "@/hooks/dom/useIsDark";
import { useThemeStore } from "@/hooks/store/useThemeStore";

const themeStore = useThemeStore();
const isDarkRef = useIsDark();

Vue.watchPostEffect(() => {
  const isDark = isDarkRef.value;

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
  <slot></slot>
</template>

<style lang="scss" scoped></style>
