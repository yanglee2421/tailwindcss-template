<template>
  <div>
    <el-upload>
      <el-button @click="upload">上传</el-button>
    </el-upload>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
const state = reactive({
  value: null,
});
const inpFil = ref();
const log = () => {
  console.log(inpFil.value.files);
};
const upload = () => {
  const fileData = inpFil.value.files;
  const form = new FormData();
  form.append("file", fileData);
  console.log(form);
  axios({
    method: "post",
    url: "",
    data: fileData,
  });
};
</script>
<style lang="scss" scoped></style>
