<script lang="ts" setup>
import { useThemeStore } from "@/hooks/store/useThemeStore";
import { useAuthStore } from "@/hooks/store/useAuthStore";
import { ElButton, ElRadio, ElRadioGroup } from "element-plus";
import AuthGuard from "@/components/guard/AuthGuard.vue";

const authStore = useAuthStore();
const themeStore = useThemeStore();

const handleSignout = () => {
  authStore.value.auth.signOut();
};

defineOptions({ inheritAttrs: false });
</script>

<template>
  <AuthGuard>
    <ElButton
      @click="handleSignout"
      type="danger"
      class="uppercase"
      >sign out</ElButton
    >
    <ElRadioGroup v-model="themeStore.state.mode">
      <ElRadio value="system">system</ElRadio>
      <ElRadio value="dark">dark</ElRadio>
      <ElRadio value="light">light</ElRadio>
    </ElRadioGroup>
  </AuthGuard>
</template>

<style lang="scss" scoped></style>
