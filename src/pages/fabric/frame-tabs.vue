<script lang="ts" setup>
// Components Imports
import frameTab from "./frame-tab.vue";

// Store Imports
import { useStoreFrame } from "@/hooks";

const { state } = useStoreFrame();

defineOptions({ inheritAttrs: false });
</script>

<template>
  <ul class="flex justify-between capitalize font-semibold my-0 mb-5 text-sm">
    <!-- Upload -->
    <frame-tab
      :value="1"
      label="upload"
    >
      <template #icon>
        <icon-upload class="w-7 sm:w-4"></icon-upload>
      </template>
    </frame-tab>

    <!-- Download -->
    <frame-tab
      :value="2"
      label="download"
      :disabled="!state.result"
    >
      <template #icon>
        <icon-download class="w-7 sm:w-4"></icon-download>
      </template>
    </frame-tab>
  </ul>
</template>

<style lang="scss" scoped></style>
