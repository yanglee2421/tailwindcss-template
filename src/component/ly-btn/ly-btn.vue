<script lang="ts" setup>
import { ref } from "vue";

const btnRef = ref();
defineExpose({ btnRef });
</script>

<template>
  <button
    ref="btnRef"
    v-bind="$attrs"
  >
    click me
  </button>
</template>

<style lang="scss" scoped></style>
<script lang="ts">
export default { inheritAttrs: false };
</script>
