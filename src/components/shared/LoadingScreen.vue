<script setup lang="ts">
import { vLoading } from "element-plus";
</script>

<template>
  <div
    v-loading="{ fullscreen: true, text: 'Loading...', body: true, lock: true }"
  ></div>
</template>

<style lang="scss" scoped></style>
