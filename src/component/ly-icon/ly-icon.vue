<script lang="ts" setup>
import { computed } from "vue";

interface props {
  modelValue?: boolean;
}
const props = withDefaults(defineProps<props>(), {
  modelValue: false,
});

interface emits {
  (event: "update:modelValue", $event: boolean): void;
}
const emits = defineEmits<emits>();

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});
</script>

<template>
  <label class="icon-list">
    <input
      v-model="model"
      type="checkbox"
    />
    <div></div>
    <div></div>
    <div></div>
  </label>
</template>

<style lang="scss" scoped>
.icon-list {
  position: relative;
  display: block;
  width: 25px;
  height: 15px;
  word-wrap: break-word;
  cursor: pointer;

  input {
    display: none;
  }

  div {
    width: 100%;
    height: 2px;
    margin-bottom: 5px;
    background-color: #35404e;
    transition: 0.3s transform;
    will-change: transform;
  }

  &:has(> input:checked) {
    div {
      position: absolute;
      top: 6px;
    }
    div:nth-of-type(1) {
      transform: rotate(45deg);
    }
    div:nth-of-type(2) {
      display: none;
    }
    div:nth-of-type(3) {
      transform: rotate(-45deg);
    }
  }
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
