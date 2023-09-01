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
      <el-card
        :body-style="{ height: '100%' }"
        body-class="flex justify-center items-center"
        class="h-full"
      >
        <el-space
          direction="vertical"
          fill
        >
          <el-text
            tag="h1"
            size="large"
            class="text-2xl"
            >Wellcome to Yang_Lee!</el-text
          >
          <el-text class="text-basic text-slate-400"
            >Please sign-in to your account and start the adventure.</el-text
          >
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
        </el-space>
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
