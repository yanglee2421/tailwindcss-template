<script lang="ts" setup>
import * as Vue from "vue";
import IconButtons from "./IconButtons.vue";
import loginForm from "./login-form.vue";
import { symbolForm } from "./login-symbols";
import GuestGuard from "@/components/guard/GuestGuard.vue";
import { ElCard, ElText, ElDivider, ElAlert, ElButton } from "element-plus";

const formValues = Vue.reactive({
  email: "",
  passwd: "",
});
Vue.provide(symbolForm, formValues);

defineOptions({ inheritAttrs: false });
</script>

<template>
  <GuestGuard>
    <div class="flex h-full">
      <div
        :class="[
          'relative',
          'flex-1',
          'overflow-hidden',
          'bg-fixed',
          'bg-cover',
          'bg-[url(@/assets/image/bg/justHer.jpg)]',
        ]"
      >
        <div class="absolute top-6 left-6 flex gap-3"></div>
      </div>

      <div class="w-full sm:max-w-md">
        <el-card class="flex flex-col justify-center h-full px-1">
          <el-text
            tag="h1"
            size="large"
            class="text-2xl"
            >Wellcome to here!</el-text
          >
          <el-text class="text-basic text-slate-400"
            >Please sign-in to your account and start the adventure.</el-text
          >
          <div :class="['my-3']">
            <el-alert
              :closable="false"
              type="success"
            >
              Hello
            </el-alert>
          </div>
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
          <IconButtons></IconButtons>
        </el-card>
      </div>
    </div>
  </GuestGuard>
</template>

<style lang="scss" scoped></style>
