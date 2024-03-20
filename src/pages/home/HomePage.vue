<script lang="ts" setup>
import { useThemeStore } from "@/hooks/store/useThemeStore";
import { useAuthStore } from "@/hooks/store/useAuthStore";
import { ElButton, ElRadio, ElRadioGroup } from "element-plus";
import AuthGuard from "@/components/guard/AuthGuard.vue";
import { useHeadTitle } from "@/hooks/dom/useHeadTitle";

useHeadTitle("Home");
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
    <div>
      <div>
        <p>We’ll respond to your request within 1 business day.</p>
        <a
          href="#"
          class="block rounded bg-green-500 p-3 text-center no-underline transition-colors hover:bg-green-700"
        >
          <span class="text-sm font-semibold text-white"
            >REQUEST FOR QUOTE</span
          >
        </a>
      </div>
      <div>
        <div class="space-y-12">
          <a
            href="#"
            class="block rounded bg-green-500 p-3 text-center no-underline transition-colors hover:bg-green-700"
          >
            <span class="text-sm font-semibold text-white"
              >REQUEST FOR QUOTE</span
            >
          </a>
          <a
            href="#"
            class="block rounded bg-green-500 p-3 text-center no-underline transition-colors hover:bg-green-700"
          >
            <span class="text-sm font-semibold text-white"
              >REQUEST FOR QUOTE</span
            >
          </a>
          <a
            href="#"
            class="block rounded bg-green-500 p-3 text-center no-underline transition-colors hover:bg-green-700"
          >
            <span class="text-sm font-semibold text-white"
              >REQUEST FOR QUOTE</span
            >
          </a>
        </div>
      </div>
      <ul class="list-none pl-0">
        <li>
          <a
            href="#"
            class="text-green-500 no-underline hover:text-green-700 hover:underline"
            >My Account</a
          >
        </li>
        <li>
          <a
            href="#"
            class="text-green-500 no-underline hover:text-green-700 hover:underline"
            >My Orders</a
          >
        </li>
        <li>
          <a
            href="#"
            class="text-green-500 no-underline hover:text-green-700 hover:underline"
            >Checkout</a
          >
        </li>
        <li>
          <a
            href="#"
            class="text-green-500 no-underline hover:text-green-700 hover:underline"
            >Terms & Conditions</a
          >
        </li>
      </ul>
    </div>
  </AuthGuard>
</template>

<style lang="scss" scoped></style>
