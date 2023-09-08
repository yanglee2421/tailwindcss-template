<script lang="ts" setup>
import { ref } from "vue";

interface Props {
  class: string;
}
const props = withDefaults(defineProps<Partial<Props>>(), {
  class: "",
});
void props;

const btnRef = ref();
defineExpose({ btnRef });

defineOptions({ inheritAttrs: true });
</script>

<template>
  <button
    ref="btnRef"
    v-bind="$attrs"
    :class="['ly-btn']"
  >
    click me
  </button>
</template>

<style lang="scss" scoped>
.ly-btn {
  width: 5rem;
  height: 2rem;
  border: 1px #dfdedf solid;
  border-radius: 4px;

  background-color: #fff;
  transition: 0.3s;
  opacity: 1;
  // filter: brightness(1);

  cursor: pointer;

  &:active {
    // color: white;
    opacity: 0.3;
    // filter: brightness(0.3);
  }

  &:hover,
  &:focus {
    border-color: red;
    outline-color: red;

    color: red;
  }
}
</style>
