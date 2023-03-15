<script lang="ts" setup></script>

<template>
  <router-link to="/">
    <h3 class="nav-logo">
      <span>Yang Lee</span>
    </h3>
  </router-link>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.nav-logo {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
  margin-block: 1rem;

  > span {
    line-height: 1.5;
    color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(45deg, #7114ef, #1475f7);
  }
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
