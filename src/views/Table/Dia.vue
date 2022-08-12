<template>
  <div>
    <el-dialog
      v-model="dialog.visible"
      :title="formData.id?'编辑':'新增'"
    >
      <el-form :model="formData">
        <el-form-item label="输入：">
          <el-input v-model.trim="formData.input" />
        </el-form-item>
        <el-form-item label="下拉：">
          <el-select v-model="formData.select">
            <el-option
              v-for="(item,index) in 5"
              :key="index"
              :label="item"
              :value="item+''"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="级联：">
          <el-cascader v-model="formData.cascader" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div>
          <el-button @click="dialog.visible=false">取消</el-button>
          <el-button
            @click="emit('confirm',formData);dialog.visible=false"
            type="primary"
          >确定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script lang='ts' setup>
import { computed, reactive, watchEffect } from "vue";
const props = defineProps({
  modelValue: {
    type: [Object, Boolean],
    default: false,
  },
});
const emit = defineEmits(["update:modelValue", "confirm"]);
//弹窗
const dialog = reactive({
  visible: false,
});
//表单项
const defaultFormData = {
  id: "",
  input: "",
  select: "",
  cascader: "",
};
const formData = reactive({ ...defaultFormData });
//modelValue变动时
watchEffect(() => {
  switch (props.modelValue) {
    case false:
      dialog.visible = false;
      break;
    case true:
      dialog.visible = true;
      break;
    default:
      Object.assign(formData, props.modelValue);
      dialog.visible = true;
  }
});
// 弹窗关闭时
watchEffect(() => {
  if (!dialog.visible) {
    Object.assign(formData, defaultFormData);
    emit("update:modelValue", false);
  }
});
</script>
<style lang='scss' scoped>
</style>