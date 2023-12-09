<script lang="ts" setup>
// Store Imports
import { useStoreTheme, useIsDark, useLoginMe } from "@/hooks";

// Vue Imports
import * as Vue from "vue";

// Acl Imports
import { useAclProvider } from "@/configs/acl";

// Dark mode and theme binding
const { state, setState } = useStoreTheme();
const isDarkRef = useIsDark();

// Control DOM by vue state
Vue.watchPostEffect(() => {
  state.isDark
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");
});

// Dark theme follows browser mode
Vue.watchPostEffect(() => {
  setState((state) => {
    state.isDark = Vue.unref(isDarkRef);
  });
});

useAclProvider();
useLoginMe();
</script>

<template>
  <router-view #default="{ Component }">
    <keep-alive :max="10">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<style lang="scss" scoped></style>
