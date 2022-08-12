<template>
  <router-view #default="{Component}">
    <component :is="Component" />
  </router-view>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  height: 100vh;
  @extend .clearfix;
}
</style>
