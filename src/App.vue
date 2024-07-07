<script lang="ts" setup>
import { RouterView } from "vue-router";
import ThemeProvider from "@/theme/ThemeProvider.vue";
</script>

<template>
  <RouterView v-slot="{ Component }">
    <ThemeProvider>
      <component :is="Component" />
    </ThemeProvider>
  </RouterView>
</template>

<style lang="scss" scoped></style>
