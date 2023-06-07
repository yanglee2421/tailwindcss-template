<script lang="ts" setup></script>

<template>
  <div class="page">
    <div
      v-for="item in 5"
      :key="item"
      class="b"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-auto-rows: 10rem;

  height: 10rem;
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
