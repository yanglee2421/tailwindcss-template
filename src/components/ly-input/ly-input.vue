<template>
  <el-input v-model="inputValue" />
</template>
<script lang="ts" setup>
import { computed } from "vue";
interface _props {
  modelValue: string;
  justNumber?: boolean;
}
const props = withDefaults(defineProps<_props>(), { justNumber: false });
interface _emit {
  (event: "update:modelValue", $event: string): void;
}
const emit = defineEmits<_emit>();
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
