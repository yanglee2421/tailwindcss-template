<script lang="ts" setup>
// Vue Imoprts
import { inject } from "vue";

// Symbol Imports
import { symbolForm } from "./login-symbols";

// Types Imports
import { FormValues } from "@/types/page-login";

const formValues = inject<FormValues>(symbolForm);
if (!formValues) throw new Error("No Provider symbolForm!");

defineOptions({ inheritAttrs: false });
</script>

<template>
  <el-form
    :model="formValues"
    label-position="top"
    size="large"
    class="mt-1"
    autocapitalize="off"
  >
    <el-form-item
      label="Email"
      name="email"
    >
      <el-input
        v-model.trim="formValues.email"
        type="email"
      ></el-input>
    </el-form-item>
    <el-form-item
      label="Password"
      name="passwd"
    >
      <el-input
        v-model.trim="formValues.passwd"
        type="password"
        show-password
      ></el-input>
    </el-form-item>
    <el-form-item>
      <div class="flex justify-between w-full">
        <el-checkbox>Remember Me</el-checkbox>
        <el-button
          type="primary"
          link
          >Forgot Password?</el-button
        >
      </div>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        class="w-full uppercase bg-none bg-blue-400"
        >sign in</el-button
      >
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped></style>
