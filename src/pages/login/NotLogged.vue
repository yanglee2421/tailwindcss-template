<script lang="ts" setup>
import GuestGuard from "@/components/guard/GuestGuard.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <GuestGuard>
    <div class="fixed inset-0 flex h-full"></div>
  </GuestGuard>
</template>

<style lang="scss" scoped></style>
