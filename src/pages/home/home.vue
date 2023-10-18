<script lang="ts" setup>
defineOptions({ inheritAttrs: false });
</script>

<template>
  <router-view #default="{ Component }">
    <keep-alive :max="10">
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
</template>

<style lang="scss" scoped></style>
