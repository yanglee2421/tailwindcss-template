<script lang="ts" setup>
// Store Imports
import { useStoreTheme, useIsDark } from "@/hooks";

// Vue Imports
import { watch } from "vue";

// Acl Imports
import { useAclProvider } from "@/configs/acl";

// Login Imports
import { useLoginMe } from "@/hooks";

useLoginMe();

// Dark mode and theme binding
const { state, setState } = useStoreTheme();
watch(
  () => state.isDark,
  (isDark) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      return;
    }
    document.documentElement.classList.remove("dark");
  },
  { flush: "post", immediate: true }
);

// Dark theme follows browser mode
const isDarkRef = useIsDark();
watch(
  isDarkRef,
  (isDark) => {
    setState((state) => {
      state.isDark = isDark;
    });
  },
  { flush: "post", immediate: true }
);

// Acl Provider
useAclProvider();
</script>

<template>
  <router-view #default="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<style lang="scss">
.el-pagination {
  padding-top: 10px !important;
}
.el-image {
  vertical-align: bottom;
}
</style>
