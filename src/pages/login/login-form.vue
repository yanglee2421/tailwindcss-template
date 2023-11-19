<script lang="ts" setup>
// Vue Imoprts
import * as Vue from "vue";

// Symbol Imports
import { symbolForm } from "./login-symbols";

// Types Imports
import { FormValues } from "@/types/page-login";

// Element Imports
import { FormInstance } from "element-plus";

// Hooks Imports
import { useUsrPost, useLogin } from "@/hooks";

const formValues = Vue.inject<FormValues>(symbolForm);
if (!formValues) throw new Error("No Provider symbolForm!");

// API Hooks
const mutation = useUsrPost();
const loading = mutation.isPending;

// ** Form
const formRef = Vue.ref<FormInstance>();

// Login Hooks
const login = useLogin();

const handleSubmit = () => {
  Vue.unref(formRef)?.validate((isVali) => {
    if (!isVali) return;
    mutation.mutate(
      { data: formValues },
      {
        onSuccess(data) {
          login.signIn(data, formValues.isRemember);
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
    <el-form-item prop="prop">
      <div class="flex justify-between w-full">
        <el-checkbox v-model="formValues.isRemember">Remember Me</el-checkbox>
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
        :loading="loading"
        type="primary"
        class="w-full uppercase bg-none bg-sky-500 font-semibold"
        >sign in</el-button
      >
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped></style>
