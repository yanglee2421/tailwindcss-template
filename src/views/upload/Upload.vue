<template>
  <div class="b">
    <el-upload
      :show-file-list="true"
      v-model:file-list="state.fileList"
      :on-preview="previewFn"
      :before-upload="chkUpd"
      :http-request="uploadFn"
      :on-remove="removeFn"
      :limit="3"
      :on-exceed="overLimitFn"
      multiple
    >
      <el-button>上传</el-button>
    </el-upload>
    <el-link @click="log(state.fileList)">log</el-link>
  </div>
</template>
  <script lang='ts'>
export default {
  inheritAttrs: true,
};
</script>
  <script lang='ts' setup>
import { ElMessage } from "element-plus";
import { reactive, watchEffect } from "vue";
import type { UploadFile } from "element-plus";
interface _state {
  fileList: File[];
}
const state = reactive<_state>({
  fileList: [],
});
const log = (...i: unknown[]) => {
  console.log(...i);
};
const chkUpd = (file: File) => {
  // return false;
};
const uploadFn = (file: File) => {
  // console.log("上传", file);
};
const previewFn = (uploadFile: UploadFile) => {
  console.log(uploadFile);
};
const removeFn = (uploadFile: UploadFile) => {
  console.log(state.fileList);
  const file = uploadFile.raw!;
  console.log(state.fileList.includes(file));
};
const overLimitFn = (files: File[]) => {
  ElMessage.warning("超了超了");
};
watchEffect(() => {
  console.log(state.fileList);
});
</script>
  <style lang='scss' scoped>
.b {
  div:first-child {
    width: 400px;
  }
}
</style>