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

<style lang="scss" scoped>
.page {
  max-width: 1440px;
  padding: 1rem;
  margin: 0 auto;
}
.el-col {
  margin-bottom: 1rem;
}
h1.el-text {
  font-size: 3.5rem;
  word-break: normal;
}
.logo--bg {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  $size: 20rem;
  width: $size;
  height: $size;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    // z-index: 1;
    display: block;
    width: calc($size / 1.2);
    height: calc($size / 1.2);
    border-radius: 50%;
    margin: auto;
    background-color: $danger;
    filter: blur($size * 0.1);
  }
}
</style>
