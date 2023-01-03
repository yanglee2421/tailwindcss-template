<template>
  <el-input
    v-bind="$attrs"
    v-model="inputValue"
  ></el-input>
</template>
<script lang="ts" setup>
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: string;
    justNumber?: boolean;
  }>(),
  { justNumber: false }
);
const emit = defineEmits<{
  (event: "update:modelValue", $event: string): void;
}>();
const inputValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit(
      "update:modelValue",
      props.justNumber ? value.replace(/[^\d]/g, "") : value
    );
  },
});
</script>
<style lang="scss" scoped></style>
