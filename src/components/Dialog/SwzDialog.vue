<template>
  <el-dialog
    v-bind="$attrs"
    v-model="dialogSta.isShow"
    :ref="(ref) => (dialogSta.ref = ref)"
  >
    <template #header>
      <slot name="header"></slot>
    </template>
    <el-form
      v-bind="$attrs"
      :model="model"
      :ref="(ref) => (formSta.ref = ref)"
    >
      <slot></slot>
    </el-form>
    <template #footer>
      <slot
        name="footer"
        :submit="submit"
      >
        <el-button @click="dialogSta.isShow = false">取消</el-button>
        <el-button
          @click="submit"
          type="primary"
          >保存</el-button
        >
      </slot>
    </template>
  </el-dialog>
</template>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<script lang="ts" setup>
import { reactive, watch } from "vue";
interface _props {
  modelValue: boolean | Record<string, unknown>;
  model: Record<string, unknown>;
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
        Object.assign(props.model, props.modelValue);
        dialogSta.isShow = true;
    }
  }
);
interface _emit {
  (event: "update:modelValue", $event: boolean): void;
  (event: "save"): void;
}
const emit = defineEmits<_emit>();
interface _dialogSta {
  isShow: boolean;
  ref: any;
}
const dialogSta = reactive<_dialogSta>({
  isShow: false,
  ref: null,
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
  ref: any;
}
const formSta = reactive<_formSta>({
  ref: null,
});
const submit = () => {
  formSta.ref.validate((vali: boolean) => {
    if (vali) {
      emit("save");
    } else {
      return false;
    }
  });
};
defineExpose({ dialogRef: dialogSta.ref, formRef: formSta.ref });
</script>
<style lang="scss" scoped></style>
