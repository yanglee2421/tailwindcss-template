<script lang="ts" setup>
import { usePinia } from "@/stores";
import { computed } from "vue";
const { state, actIsDark } = usePinia();

const checked = computed({
  get: () => state.isDark,
  set: (value) => actIsDark(value),
});
</script>

<template>
  <el-switch v-model="checked" />
</template>

<style lang="scss" scoped></style>

<script lang="ts">
export default { inheritAttrs: true };
</script>
