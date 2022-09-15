<template>
  <el-input
    v-model="modelValue"
    @input="emit('update:modelValue', $event.replace(/[^.\d]/g, ''))"
    @change="fun($event)"
  ></el-input>
</template>
<script lang="ts" setup>
interface _props {
  modelValue: string;
}
const props = withDefaults(defineProps<_props>(), {});
interface _emit {
  (event: "update:modelValue", $event: string): void;
}
const emit = defineEmits<_emit>();
const fun = ($event: string) => {
  const res = Number.parseFloat($event).toFixed(2);
  emit("update:modelValue", res === "NaN" ? "0" : res);
};
</script>
<style lang="scss" scoped></style>
