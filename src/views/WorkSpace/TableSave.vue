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
    >
      <el-tag
        v-for="(item, index) in formSta.model.hobby"
        :key="index"
        type="danger"
        effect="plain"
        closable
        @close="
          formSta.model.hobby.splice(formSta.model.hobby.indexOf(item), 1)
        "
        >{{ item }}</el-tag
      >
      <el-input
        v-if="hobbySta.isEdit"
        v-model.trim="hobbySta.text"
        @keydown.enter="
          formSta.model.hobby.push(hobbySta.text);
          hobbySta.text = '';
        "
        size="small"
        maxlength="5"
      ></el-input>
      <el-button
        v-else
        @click="hobbySta.isEdit = true"
        icon="plus"
        >爱好</el-button
      >
    </el-form-item>
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
const formSta = reactive<{
  model: {
    id: string;
    name: string;
    age: string;
    gender: string;
    address: string;
    hobby: string[];
  };
}>({
  model: {
    id: "",
    name: "",
    age: "",
    gender: "",
    address: "",
    hobby: [],
  },
});
const hobbySta = reactive({
  isEdit: false,
  text: "",
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
<style lang="scss" scoped>
.el-tag {
  + .el-tag,
  + .el-button {
    margin-left: 10px;
  }
}
</style>
