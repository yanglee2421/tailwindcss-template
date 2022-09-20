<template>
  <el-dialog
    :title="(dialogSta.isAdd ? `新增` : `编辑`) + fwTitle"
    v-bind="$attrs"
    v-model="dialogSta.isShow"
    :ref="(ref) => (dialogSta.ref = ref)"
  >
    <template #header>
      <slot
        name="header"
        :isAdd="dialogSta.isAdd"
      ></slot>
    </template>
    <el-form
      v-bind="$attrs"
      :model="model"
      :ref="(ref) => (formSta.ref = ref)"
    >
      <slot :isAdd="dialogSta.isAdd"></slot>
    </el-form>
    <template #footer>
      <slot
        name="footer"
        :isAdd="dialogSta.isAdd"
        :submitFn="submitFn"
        :closeFn="closeFn"
      >
        <el-button @click="closeFn">取消</el-button>
        <el-button
          @click="submitFn"
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
import { computed, nextTick, reactive, watch } from "vue";
import type { ComputedRef } from "vue";
/**
 * v-model
 * 覆盖el-form的model
 */
interface _props {
  modelValue: boolean | Record<string, unknown>;
  model: Record<string, unknown>;
  fwTitle?: string;
}
const props = withDefaults(defineProps<_props>(), {
  fwTitle: "",
});
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
        nextTick(() => {
          Object.assign(props.model, props.modelValue);
        });
        dialogSta.isShow = true;
    }
  }
);
/**
 * 更新v-model
 * 表格验证通过的事件
 */
interface _emit {
  (event: "update:modelValue", $event: boolean): void;
  (event: "swz-save", $event: Function): void;
}
const emit = defineEmits<_emit>();
/**
 * 是否显示
 * 组件实例
 * 是否为新增状态
 */
interface _dialogSta {
  isShow: boolean;
  ref: any;
  isAdd: ComputedRef<boolean>;
}
const dialogSta = reactive<_dialogSta>({
  isShow: false,
  ref: null,
  isAdd: computed(() => {
    return props.modelValue === true;
  }),
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
const closeFn = () => {
  dialogSta.isShow = false;
};
/**
 * 组件实例
 */
interface _formSta {
  ref: any;
}
const formSta = reactive<_formSta>({
  ref: null,
});
const submitFn = () => {
  formSta.ref.validate((vali: boolean) => {
    if (vali) {
      emit("swz-save", closeFn);
    } else {
      return false;
    }
  });
};
/**
 * 弹窗组件实例
 * 表格的组件实例
 */
defineExpose({ dialogRef: dialogSta.ref, formRef: formSta.ref });
</script>
<style lang="scss" scoped></style>
