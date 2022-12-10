<template>
  <router-view #default="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script lang="ts" setup>
import { watch } from "vue";
import { usePinia, useDark } from "@/hook";
const pinia = usePinia();
useDark((darkQuery) => {
  pinia.state.isDark = darkQuery.matches;
});
watch(
  () => pinia.state.isDark,
  (isDark) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      return;
    }
    document.documentElement.classList.remove("dark");
    return;
  }
);
</script>

<style lang="scss">
@import "@/assets/css/default.scss";
#app {
  height: 100vh;
  background-size: cover;
  background-attachment: fixed;
}
.el-pagination {
  padding-top: 10px !important;
}
.el-image {
  vertical-align: bottom;
}
</style>
