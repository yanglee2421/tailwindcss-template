<script lang="ts" setup>
// Vue Imports
import { reactive, provide } from "vue";

// Components Imports
import iconBtn from "./icon-btn.vue";
import loginForm from "./login-form.vue";

// Symbols Imports
import { symbolForm } from "./login-symbols";

// Types Imports
import { FormValues } from "@/types/page-login";

// ** Form
const formValues = reactive<FormValues>({
  email: "",
  passwd: "",
  isRemember: true,
});
provide(symbolForm, formValues);

defineOptions({ inheritAttrs: false });
</script>

<template>
  <div class="flex h-full">
    <div class="flex-1"></div>

    <div class="w-full md:max-w-lg">
      <el-card class="flex flex-col justify-center h-full px-3">
        <el-text
          tag="h1"
          size="large"
          class="text-2xl"
          >Wellcome to Yang_Lee!</el-text
        >
        <el-text class="text-basic text-slate-400"
          >Please sign-in to your account and start the adventure.</el-text
        >
        <el-alert
          :closable="false"
          class="my-3"
        >
          <el-text class="text-gray-500"
            >Admin:
            <b class="font-semibold">admin@yang.com</b>
            / Pass:
            <b class="font-semibold">admin123456</b>
          </el-text>
          <br />
          <el-text class="text-gray-500"
            >Client:
            <b class="font-semibold">client@yang.com</b>
            / Pass:
            <b class="font-semibold">client123456</b></el-text
          >
        </el-alert>
        <login-form />
        <div class="flex justify-center gap-3 w-full">
          <el-text size="default">New on out platform?</el-text>
          <el-button
            type="primary"
            link
            >Create an account</el-button
          >
        </div>
        <el-divider>or</el-divider>
        <icon-btn />
      </el-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.right__col--bg {
  $size: 30rem;
  width: $size;
  height: $size;
  background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  filter: blur(72px);
}
</style>
