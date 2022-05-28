<template>
  <div>
    <el-upload
      action="http://localhost:1818/user"
      :multiple="true"
      :file-list="arr"
      :on-success="log(arr)"
      drag
      ><el-button>上伟</el-button></el-upload
    >
    <input type="file" class="none" ref="inpFil" multiple @change="upload" />
    <el-button @click="inpFil.click()" type="primary">上传</el-button>
  </div>
</template>
<script setup>
import vFocus from "@/hook/vFocus.js";
import axios from "axios";
import { reactive, ref } from "vue";
const inpFil = ref();
const arr = reactive([]);
const upload = () => {
  log(arr);
  const file = inpFil.value.files[0];
  console.log(inpFil.value.files);
  const formData = new FormData();
  formData.set("file", file);
  axios({
    url: "http://localhost:1818/user",
    method: "post",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
const log = (i) => {
  console.log(i);
};
</script>
<style lang='scss' scoped>
</style>