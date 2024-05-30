<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="pt-3 text-center">
    <h1 class="text-danger">404</h1>
    <RouterLink :to="{ name: 'home' }"> take me home </RouterLink>
  </div>
</template>

<style lang="scss" scoped></style>
