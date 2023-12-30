<script lang="ts" setup>
// Vue Imports
import * as Vue from "vue";

// Provider Imports
import AclProvider from "./configs/acl/AclProvider.vue";
import AuthGuard from "@/router/AuthGuard.vue";

// Control DOM by vue state
Vue.watchPostEffect(() => {
  // state.isDark
  true
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");
});
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
