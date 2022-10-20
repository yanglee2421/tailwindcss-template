<template>
  <el-input v-model="inputValue"></el-input>
</template>
<script lang="ts" setup>
import { computed } from "vue";

interface _props {
  modelValue: string;
}
const props = withDefaults(defineProps<_props>(), {});
interface _emit {
  (event: "update:modelValue", $event: string): void;
}
const emit = defineEmits<_emit>();
const inputValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value.replace(/[^\d]/g, ""));
  },
});
</script>
<style lang="scss" scoped></style>
