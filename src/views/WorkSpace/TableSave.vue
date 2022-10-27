<template>
  <swz-dialog
    :model="formSta.model"
    @fw-submit="confrimFn"
  >
    <el-form-item
      label="姓名："
      prop="name"
    >
      <el-input v-model="formSta.model.name"></el-input>
    </el-form-item>
    <el-form-item
      label="年龄："
      prop="age"
    >
      <el-input v-model="formSta.model.age"></el-input>
    </el-form-item>
    <el-form-item
      label="性别："
      prop="gender"
    >
      <el-select v-model="formSta.model.gender">
        <el-option
          label="男"
          value="男"
        ></el-option>
        <el-option
          label="女"
          value="女"
        ></el-option>
        <el-option
          label="不男不女"
          value="不男不女"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item
      label="地址："
      prop="address"
    >
      <el-input v-model.trim="formSta.model.address"></el-input>
    </el-form-item>
    <el-form-item
      label="爱好："
      prop="hobby"
    ></el-form-item>
  </swz-dialog>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { reactive } from "vue";
import response from "./data";
interface _emit {
  (event: "success"): void;
}
const emit = defineEmits<_emit>();
const formSta = reactive({
  model: {
    id: "",
    name: "",
    age: "",
    gender: "",
    address: "",
    hobby: [],
  },
});
const confrimFn = (close: Function) => {
  const index = response.findIndex((item) => item.id == formSta.model.id);
  const res: any = { ...formSta.model };
  if (index === -1) {
    res.id = `${Date.now()}`;
    response.push(res);
  } else {
    response.splice(index, 1, res);
  }
  close();
  emit("success");
};
</script>
<style lang="scss" scoped></style>
