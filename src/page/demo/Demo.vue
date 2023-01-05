<template>
  <div>
    <dark-switch />
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { reactive } from "vue";
import DarkSwitch from "@/components/dark-switch/dark-switch.vue";
</script>
<style lang="scss" scoped></style>
