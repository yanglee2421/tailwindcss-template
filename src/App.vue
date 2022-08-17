<template>
  <router-view #default="{Component}">
    <component :is="Component" />
  </router-view>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
@import "@/assets/default.scss";
#app {
  height: 100vh;
  @extend .clearfix;
}
.el-pagination {
  padding-top: 10px !important;
}
</style>
