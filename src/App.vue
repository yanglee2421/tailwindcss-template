<template>
  <router-view #default="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import "@/assets/default.scss";
.el-pagination {
  padding-top: 5px !important;
}
</style>
