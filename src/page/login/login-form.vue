<script lang="ts" setup>
// Vue Imoprts
import { inject, ref, unref } from "vue";

// Symbol Imports
import { symbolForm } from "./login-symbols";

// Types Imports
import { FormValues } from "@/types/page-login";

// Element Imports
import { FormInstance } from "element-plus";

// Hooks Imports
import { useUsrPost, useLogin } from "@/hooks";

const formValues = inject<FormValues>(symbolForm);
if (!formValues) throw new Error("No Provider symbolForm!");

// API Hooks
const { mutate, isLoading } = useUsrPost();

// ** Form
const formRef = ref<FormInstance>();

// Login Hooks
const { signIn } = useLogin();

const handleSubmit = () => {
  unref(formRef)?.validate((isVali) => {
    if (!isVali) return;
    mutate(
      { data: formValues },
      {
        onSuccess(data) {
          signIn(data, formValues.isRemember);
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
        :loading="isLoading"
        type="primary"
        class="w-full uppercase bg-none bg-sky-500 font-semibold"
        >sign in</el-button
      >
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped></style>
