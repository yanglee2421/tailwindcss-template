<template>
  <div>
    <el-dialog>

    </el-dialog>
  </div>
</template>
<script lang='ts' setup>
import { ref, reactive, watchEffect } from "vue";
import { FormData } from "./formData";
const props = defineProps({
  modelValue: {
    type: [Object, Boolean],
    default: false,
  },
});
const dialog = reactive({
  visible: false,
});
const formData = ref<FormData>({
  name: "",
});
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
watchEffect(() => {
  dialog.visible || (formData.value = new FormData());
});
formData.value.name = "";
</script>
<style lang='scss' scoped>
</style>