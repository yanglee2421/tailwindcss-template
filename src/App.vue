<script lang="ts" setup>
// Store Imports
import { useStoreTheme, useIsDark } from "@/hooks";

// Vue Imports
import * as Vue from "vue";

// Acl Imports
import { useAclProvider } from "@/configs/acl";

// Login Imports
import { useLoginMe } from "@/hooks";

useLoginMe();

// Dark mode and theme binding
const { state, setState } = useStoreTheme();
Vue.watchPostEffect(() => {
  if (state.isDark) {
    document.documentElement.classList.add("dark");
    return;
  }
  document.documentElement.classList.remove("dark");
});

// Dark theme follows browser mode
const isDarkRef = useIsDark();
Vue.watchPostEffect(() => {
  setState((state) => {
    state.isDark = Vue.unref(isDarkRef);
  });
});

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
