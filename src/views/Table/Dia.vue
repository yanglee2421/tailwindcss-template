<template>
  <div>
    <el-dialog v-model="dialog.visible">
      <el-form :model="formData">
        <el-form-item label="输入：">
          <el-input v-model="formData.input" />
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
        <el-form-item>
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
import { ref, reactive, watch, watchEffect } from "vue";
import { FormData } from "./formData";
const props = defineProps({
  modelValue: {
    type: [Object, Boolean],
    default: false,
  },
});
const emit = defineEmits(["update:modelValue", "confirm"]);
const dialog = reactive({
  visible: false,
});
const formData = ref<FormData>({
  input: "",
  select: "",
  cascader: "",
});
watchEffect(() => {
  switch (props.modelValue) {
    case false:
      dialog.visible = false;
      break;
    case true:
      dialog.visible = true;
      break;
    default:
      Object.assign(formData.value, props.modelValue);
      dialog.visible = true;
  }
});
watchEffect(() => {
  if (!dialog.visible) {
    formData.value = new FormData();
    emit("update:modelValue", false);
  }
});
</script>
<style lang='scss' scoped>
</style>