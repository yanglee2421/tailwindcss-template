<template>
  <div
    ref="root"
    class="overflow-hidden"
    :class="{trans:state.trans}"
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
import { onMounted, reactive, ref, watch } from "vue";
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
const state = reactive({
  trans: false,
});
const root = ref<HTMLElement>();
const switchShow = () => {
  // 获取dom
  const dom = root.value!;
  // 展开高
  const height = dom.scrollHeight + "px";
  // 播放前
  dom.style.height = dom.offsetHeight + "px";
  state.trans = true;
  // 播放
  setTimeout(() => {
    dom.style.height = props.modelValue ? height : "0";
  }, 0);
  // 播放后
  props.modelValue &&
    setTimeout(() => {
      state.trans = false;
      dom.style.height = "";
    }, 301);
};
watch(
  () => props.modelValue,
  () => {
    switchShow();
  }
);
onMounted(() => {
  // 初始状态
  const dom = root.value!;
  dom.style.height = props.modelValue ? "" : "0";
});
</script>
<style lang='scss' scoped>
.trans {
  transition: 0.3s;
}
</style>