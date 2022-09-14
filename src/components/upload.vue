<template>
  <div>
    <input
      type="file"
      ref="inpFil"
    />
    <el-button @click="log">输出</el-button>
    <el-button @click="upload">上传</el-button>
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
