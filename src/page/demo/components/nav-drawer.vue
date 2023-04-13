<script lang="ts" setup>
interface props {
  modelValue: boolean;
}
const props = withDefaults(defineProps<props>(), {});

interface emits {
  (event: "update:modelValue", $event: boolean): void;
}
const emits = defineEmits<emits>();
</script>

<template>
  <div v-if="modelValue">
    <button @click="emits('update:modelValue', false)">关闭</button>
  </div>
</template>

<style lang="scss" scoped></style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
