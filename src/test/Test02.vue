<template>
  <div>
    <el-button @click="dialogSta.model = true">新建</el-button>
    <el-button @click="dialogSta.model = { text: '778899' }">编辑</el-button>
    <swz-dialog
      v-model="dialogSta.model"
      :model="formSta"
    >
      <el-form-item prop="text">
        <el-input v-model="formSta.text"></el-input>
      </el-form-item>
    </swz-dialog>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { reactive } from "vue";
const dialogSta = reactive<any>({
  model: false,
});
const formSta = reactive({
  text: "",
});
console.log(globalThis.location.hostname);
console.log(globalThis.location.host);
</script>
<style lang="scss" scoped></style>
