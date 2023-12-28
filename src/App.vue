<script lang="ts" setup>
// Vue Imports
import * as Vue from "vue";

// Control DOM by vue state
Vue.watchPostEffect(() => {
  // state.isDark
  true
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");
});
</script>

<template>
  <router-view #default="{ Component }">
    <keep-alive :max="10">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<style lang="scss" scoped></style>
