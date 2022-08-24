<template>
  <div
    ref="root"
    class="trans overflow-hidden"
  >
    <slot></slot>
  </div>
</template>
<script lang='ts'>
export default {
  inheritAttrs: true,
};
</script>
<script lang='ts' setup>
import { onMounted, ref, watch, watchPostEffect } from "vue";
interface _props {
  modelValue?: boolean;
}
const props = withDefaults(defineProps<_props>(), {
  modelValue: true,
});
interface _emits {
  (event: "update:modelValue", $event: boolean): void;
}
const emit = defineEmits<_emits>();
const root = ref<HTMLElement>();
const switchShow = () => {
  const dom = root.value!;
  const height = dom.scrollHeight + "px";
  dom.style.height = props.modelValue ? height : "0";
};
watchPostEffect(() => {
  switchShow();
});
</script>
<style lang='scss' scoped>
.trans {
  transition: 0.3s;
}
</style>