<script lang="ts" setup>
// Vue Imports
import * as Vue from "vue";

// Components Imports
import iconBtn from "./icon-btn.vue";
import loginForm from "./login-form.vue";

// Assets Imports
import bgImg from "@/assets/image/bg/justHer.jpg";

// Utils Imports
import { symbolForm } from "./login-symbols";
import clsx from "clsx";

// ** Form
const formValues = Vue.reactive({
  email: "",
  passwd: "",
});
Vue.provide(symbolForm, formValues);

defineOptions({ inheritAttrs: false });
</script>

<template>
  <div class="flex h-full">
    <div
      :class="
        clsx(['relative', 'flex-1', 'overflow-hidden', 'bg-fixed', 'bg-cover'])
      "
      :style="{ backgroundImage: `url(${bgImg})` }"
    >
      <div class="absolute top-6 left-6 flex gap-3">
        <icon-react />
        <el-text
          tag="h2"
          class="text-2xl"
          >Yang_Lee</el-text
        >
      </div>
    </div>

    <div class="w-full sm:max-w-md">
      <el-card class="flex flex-col justify-center h-full px-1">
        <el-text
          tag="h1"
          size="large"
          class="text-2xl"
          >Wellcome to Yang_Lee!</el-text
        >
        <el-text class="text-basic text-slate-400"
          >Please sign-in to your account and start the adventure.</el-text
        >
        <div :class="clsx(['my-3'])">
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
