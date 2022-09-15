<template>
  <el-dialog v-model="dialogSta.isShow">
    <el-form
      v-bind="$attrs"
      :ref="(ref) => (formSta.ref = ref)"
    >
      <slot></slot>
    </el-form>
  </el-dialog>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { reactive, watch } from "vue";
interface _props {
  modelValue: boolean | Record<string, unknown>;
}
const props = withDefaults(defineProps<_props>(), {});
watch(
  () => props.modelValue,
  (newVal) => {
    switch (newVal) {
      case false:
        dialogSta.isShow = false;
        break;
      case true:
        dialogSta.isShow = true;
        break;
      default:
        Object.assign(formSta.model, props.modelValue);
        dialogSta.isShow = true;
    }
  }
);
interface _emit {
  (event: "update:modelValue", $event: boolean): void;
}
const emit = defineEmits<_emit>();
const dialogSta = reactive({
  isShow: false,
});
watch(
  () => dialogSta.isShow,
  (newVal) => {
    if (!newVal) {
      formSta.ref.resetFields();
      emit("update:modelValue", false);
    }
  }
);
interface _formSta {
  model: Record<string, unknown>;
  ref: any;
}
const formSta = reactive<_formSta>({
  model: {},
  ref: null,
});
</script>
<style lang="scss" scoped></style>
