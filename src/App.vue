<template>
  <router-view #default="{Component}">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
@import "@/assets/default.scss";
.el-pagination {
  padding-top: 5px !important;
}
</style>
