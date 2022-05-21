<template>
  <router-view />
</template>
<script setup>
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  list-style: none;
}
#app {
  width: 100vw;
  height: 100vh;
  @extend.p-1;
  @extend.flex-column;
  @extend.overflow-hidden;
  background-color: #cdd0d6;
}
</style>