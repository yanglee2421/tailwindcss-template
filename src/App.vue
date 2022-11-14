<template>
  <router-view #default="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script lang="ts" setup></script>

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
