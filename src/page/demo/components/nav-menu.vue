<script lang="ts" setup></script>

<template>
  <ul class="nav-menu">
    <li><router-link to="/">ECMAScript</router-link></li>
    <li><router-link to="/">TypeScript</router-link></li>
    <li><router-link to="/">React</router-link></li>
    <li><router-link to="/demo">Sass</router-link></li>
  </ul>
</template>

<style lang="scss" scoped>
.router-link-active {
  color: #1475f7 !important;
}
.nav-menu {
  list-style: none;
  display: flex;
  margin: 0;

  > li {
    padding: 0.5rem;
  }
  a {
    color: #555;
    text-decoration: none;
  }
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
