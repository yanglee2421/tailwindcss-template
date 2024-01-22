<script lang="ts" setup>
// Vue Imoprts
import * as Vue from "vue";

// Symbol Imports
import { symbolForm } from "./login-symbols";

// Element Imports
import { ElMessage, FormInstance } from "element-plus";

// Query Imports
import { useLoginMutation } from "@/hooks/api-firebase";

const formValues = Vue.inject<{
  email: string;
  passwd: string;
}>(symbolForm);
if (!formValues) {
  throw new Error("No Provider symbolForm!");
}

// ** Form
const formRef = Vue.ref<FormInstance>();

const mutation = useLoginMutation();

const handleSubmit = () => {
  Vue.unref(formRef)?.validate((isVali) => {
    if (!isVali) {
      return;
    }

    mutation.mutate(
      {
        email: formValues.email,
        password: formValues.passwd,
      },
      {
        onError(error) {
          ElMessage.error(error.message);
        },
        onSuccess() {
          ElMessage.success("Wellcome to here!");
        },
      }
    );
  });
};

defineOptions({ inheritAttrs: false });
</script>

<template>
  <el-form
    ref="formRef"
    :model="formValues"
    :rules="{}"
    label-position="top"
    size="large"
    autocapitalize="off"
  >
    <el-form-item
      prop="email"
      :rules="[
        { required: true },
        { type: 'string', min: 8, max: 50 },
        { type: 'email' },
      ]"
    >
      <el-input
        v-model.trim="formValues.email"
        prefix-icon="User"
        type="email"
        placeholder="Email"
      ></el-input>
    </el-form-item>
    <el-form-item
      prop="passwd"
      :rules="[{ required: true }, { type: 'string', min: 8, max: 16 }]"
    >
      <el-input
        v-model.trim="formValues.passwd"
        type="password"
        prefix-icon="Lock"
        show-password
        placeholder="Password"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <div class="flex justify-between w-full">
        <el-button
          type="primary"
          link
          >Forgot Password?</el-button
        >
      </div>
    </el-form-item>
    <el-form-item>
      <el-button
        @click="handleSubmit"
        :loading="Vue.unref(mutation.isPending)"
        type="primary"
        class="w-full uppercase bg-none bg-sky-500 font-semibold"
        >sign in</el-button
      >
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped></style>
