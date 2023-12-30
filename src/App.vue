<script lang="ts" setup>
// Vue Imports
import * as Vue from "vue";

// Provider Imports
import AclProvider from "./configs/acl/AclProvider.vue";
import AuthGuard from "@/router/AuthGuard.vue";

// Store Imports
import { useThemeStore } from "@/hooks/store";
import { useIsDark } from "@/hooks/dom";

const themeStore = useThemeStore();
const isDarkRef = useIsDark();

Vue.watch(
  [() => themeStore.mode, isDarkRef],
  ([themeMode, isDark]) => {
    const mode = (() => {
      switch (themeMode) {
        case "light":
          return false;
        case "dark":
          return true;
        case "auto":
        default:
          return isDark;
      }
    })();

    mode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  },
  {
    immediate: true,
    flush: "post",
  }
);
</script>

<template>
  <acl-provider>
    <auth-guard>
      <router-view #default="{ Component }">
        <keep-alive :max="10">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </auth-guard>
  </acl-provider>
</template>

<style lang="scss" scoped></style>
