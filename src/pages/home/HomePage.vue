<script lang="ts" setup>
import {
  ElButton,
  ElDivider,
  ElRadio,
  ElRadioGroup,
  ElScrollbar,
} from "element-plus";
import { useHeadTitle } from "@/hooks/dom/useHeadTitle";
import { useAuthStore } from "@/hooks/store/useAuthStore";
import { useThemeStore } from "@/hooks/store/useThemeStore";
import PerfectScrollbar from "./PerfectScrollbar.vue";

useHeadTitle("Home");
const authStore = useAuthStore();
const themeStore = useThemeStore();

const handleSignout = () => {
  authStore.value.auth.signOut();
};

defineOptions({ inheritAttrs: false });
</script>

<template>
  <ElButton
    v-if="false"
    @click="handleSignout"
    type="danger"
    class="uppercase"
    >sign out</ElButton
  >
  <ElRadioGroup
    v-if="false"
    v-model="themeStore.state.mode"
  >
    <ElRadio value="system">system</ElRadio>
    <ElRadio value="dark">dark</ElRadio>
    <ElRadio value="light">light</ElRadio>
  </ElRadioGroup>
  <div class="flex h-[100vh] flex-col border border-solid p-6">
    <div class="h-96">
      <PerfectScrollbar>
        <p
          v-for="item in 10"
          :key="item"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          blanditiis explicabo itaque numquam exercitationem optio ea nostrum
          quam commodi officiis. Molestiae culpa quod aperiam fuga incidunt
          consectetur asperiores maiores recusandae.
        </p>
      </PerfectScrollbar>
    </div>
    <ElDivider>divider</ElDivider>
    <div class="h-full overflow-auto">
      <p
        v-for="item in 10"
        :key="item"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
        blanditiis explicabo itaque numquam exercitationem optio ea nostrum quam
        commodi officiis. Molestiae culpa quod aperiam fuga incidunt consectetur
        asperiores maiores recusandae.
      </p>
    </div>
  </div>

  <!-- <div class="h-[2000px]"></div> -->
</template>

<style lang="scss" scoped></style>
