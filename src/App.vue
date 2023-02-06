<script lang="ts" setup>
import { useDark } from "@/hook";
import { usePinia } from "@/stores";

const pinia = usePinia();
const { actIsDark } = pinia;
useDark(({ matches }) => actIsDark(matches));
</script>

<template>
  <router-view #default="{ Component }">
    <keep-ailve>
      <component :is="Component" />
    </keep-ailve>
  </router-view>
</template>

<style lang="scss">
@import "@/assets/reset.scss";
.el-pagination {
  padding-top: 10px !important;
}
.el-image {
  vertical-align: bottom;
}
</style>
