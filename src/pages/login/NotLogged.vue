<script lang="ts" setup>
import * as Vue from "vue";
import GuestGuard from "@/components/guard/GuestGuard.vue";
import {
  ElCard,
  ElText,
  ElDivider,
  ElButton,
  ElMessage,
  FormInstance,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
} from "element-plus";
import { User, Lock, ChromeFilled } from "@element-plus/icons-vue";
import { useLoginMutation } from "@/hooks/api-firebase/useLoginMutation";
import { useMutation } from "@tanstack/vue-query";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "@/api/firebase/app";

const formValues = Vue.reactive({
  email: "",
  passwd: "",
});

const formRef = Vue.ref<FormInstance>();
const mutation = useLoginMutation();
const googleMutation = useMutation({
  mutationFn() {
    return signInWithPopup(getAuth(app), new GoogleAuthProvider());
  },
});

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
      },
    );
  });
};

const handleSignInWithGoogle = () => {
  googleMutation.mutate();
};

defineOptions({ inheritAttrs: false });
</script>

<template>
  <GuestGuard>
    <div class="fixed inset-0 flex h-full">
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
        <div class="absolute left-6 top-6 flex gap-3"></div>
      </div>

      <div class="w-full sm:max-w-md">
        <ElCard class="flex h-full flex-col justify-center px-1">
          <ElText
            tag="h1"
            size="large"
            class="text-2xl"
            >Wellcome to Element!</ElText
          >
          <ElText class="text-basic text-slate-400"
            >Please sign-in to your account and start the adventure.</ElText
          >
          <ElForm
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
              <ElInput
                v-model.trim="formValues.email"
                :prefixIcon="User"
                type="email"
                placeholder="Email"
              />
            </el-form-item>
            <el-form-item
              prop="passwd"
              :rules="[{ required: true }, { type: 'string', min: 8, max: 16 }]"
            >
              <ElInput
                v-model.trim="formValues.passwd"
                type="password"
                :prefix-icon="Lock"
                showPassword
                placeholder="Password"
              />
            </el-form-item>
            <div class="mb-4 flex w-full items-center justify-end">
              <ElLink type="primary"> Forgot Password? </ElLink>
            </div>
            <ElButton
              @click="handleSubmit"
              :loading="Vue.unref(mutation.isPending)"
              type="primary"
              class="w-full bg-sky-500 bg-none font-semibold uppercase"
              >sign in</ElButton
            >
          </ElForm>
          <div class="my-4 flex w-full justify-between gap-3">
            <ElText size="default">New on out platform?</ElText>
            <ElLink type="primary">Create an account</ElLink>
          </div>
          <ElDivider>or</ElDivider>
          <div class="flex justify-center">
            <ElButton
              @click="handleSignInWithGoogle"
              :loading="Vue.unref(googleMutation.isPending)"
              :icon="ChromeFilled"
              size="large"
              class="uppercase"
              >sign in with google</ElButton
            >
          </div>
        </ElCard>
      </div>
    </div>
  </GuestGuard>
</template>

<style lang="scss" scoped></style>
