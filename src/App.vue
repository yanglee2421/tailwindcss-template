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
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
  @media (any-hover: none) {
    scrollbar-width: none;
  }
}
#app {
  width: 100vw;
  height: 100vh;
  @extend.p-1;
  @extend.flex-column;
  @extend.overflow-hidden;
  background-color: #cdd0d6;
}
[v-cloak] {
  display: none !important;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  @media (any-hover: hover) {
    cursor: pointer;
  }
  @media (any-hover: none) {
    display: none;
  }
}
::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>