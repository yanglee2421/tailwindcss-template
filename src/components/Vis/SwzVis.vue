<template>
  <div
    ref="visRef"
    class="swz-vis"
    :class="{show:modelValue}"
  >
    <div
      ref="boxRef"
      class="clearfix"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script lang='ts'>
export default {
  inheritAttrs: true,
};
</script>
<script lang='ts' setup>
import { onMounted, reactive, ref, watch } from "vue";

interface _props {
  modelValue?: boolean;
}
const props = withDefaults(defineProps<_props>(), {
  modelValue: true,
});
interface _emits {
  (evnet: "update:modelValue", $event?: boolean): void;
}
const emit = defineEmits<_emits>();
/**
 * State
 */
const state = reactive({});
/**
 * 获取dom
 */
const visRef = ref<HTMLElement>();
const boxRef = ref<HTMLElement>();
watch(
  () => props.modelValue,
  (newVal) => {
    const dom = visRef.value!;
    const box = boxRef.value!;
    dom.style.height = dom.offsetHeight + "px";
    setTimeout(() => {
      dom.style.height = newVal ? getComputedStyle(box).height : "0";
    }, 0);
  }
);
onMounted(() => {
  const dom = visRef.value!;
  if (!props.modelValue) dom.style.height = "0";
});
</script>
<style lang='scss' scoped>
.swz-vis {
  overflow: hidden;
  transition: 0.3s;
}
</style>
