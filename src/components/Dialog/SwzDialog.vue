<template>
  <el-dialog v-model="state.isShow">
    <template #header>
      <slot name="header"></slot>
    </template>
    <slot></slot>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>
<script lang='ts'>
export default {
  inheritAttrs: true,
};
</script>
<script lang='ts' setup>
import { onMounted, reactive, watch } from "vue";
interface _props {
  modelValue: boolean | Record<string, unknown>;
  model: Record<string, unknown>;
}
const props = withDefaults(defineProps<_props>(), {
  modelValue: false,
});
interface _emit {
  (event: "update:modelValue", $event: boolean): void;
  (event: "update:model", $event: Record<string, unknown>): void;
}
const emit = defineEmits<_emit>();
const state = reactive({
  isShow: false,
  defaultModel: {},
});
watch(
  () => props.modelValue,
  (newVal) => {
    switch (newVal) {
      case false:
        // 关闭
        state.isShow = false;
        break;
      case true:
        // 新增模式
        state.isShow = true;
        break;
      default:
        // 编辑模式
        emit("update:model", props.modelValue as any);
        state.isShow = true;
    }
  }
);
// 关闭时清空弹窗
watch(
  () => state.isShow,
  (newVal) => {
    if (!newVal) {
      emit("update:modelValue", false);
      emit("update:model", state.defaultModel);
    }
  }
);
onMounted(() => {
  state.defaultModel = { ...props.model };
});
</script>
<style lang='scss' scoped>
</style>