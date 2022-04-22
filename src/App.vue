<template>
  <div class="b w-50 moa">
    <el-form :model="data" ref="fref">
      <el-form-item
        v-for="(item, index) in data.arr"
        :key="item.key"
        :prop="`arr.${index}`"
        :rules="{ validator: check, message: 'p必须大于p2', trigger: 'change' }"
      >
        <div class="flex">
          <el-form-item>
            <el-input-number v-model="item.p" :prop="`arr.${index}.p`" />
          </el-form-item>
          <el-form-item :prop="`arr.${index}.p2`" :rules="{ required: true }">
            <el-input-number v-model="item.p2" />
          </el-form-item>
        </div>
      </el-form-item>
    </el-form>
  </div>
  <el-button @click="add">添加</el-button>
  <el-button @click="submitForm(fref)">提交</el-button>
</template>
<script setup>
import { reactive, ref } from "vue";
const data = reactive({
  arr: [
    {
      key: Date.now(),
      p: 0,
      p2: 0,
    },
  ],
});
const add = () => {
  data.arr.push({
    key: Date.now,
    p: 0,
    p2: 0,
  });
};
const check = (rule, value) => {
  console.log(value);
  return value.p > value.p2;
};
const fref = ref();
const submitForm = (formEl) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log(data);
    } else {
      console.log(data);
      return false;
    }
  });
};
</script>
<style lang='less' scoped></style>