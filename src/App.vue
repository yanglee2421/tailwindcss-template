<script lang="ts" setup></script>

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
