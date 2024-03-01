<script lang="ts" setup>
import { ElButton } from "element-plus";
import {
  WindPower,
  ElementPlus,
  SwitchFilled,
  ChromeFilled,
} from "@element-plus/icons-vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <div class="flex justify-center">
    <ElButton
      :icon="WindPower"
      size="large"
      circle
      text
      class="text-2xl"
    ></ElButton>
    <ElButton
      :icon="ElementPlus"
      size="large"
      circle
      text
      class="text-2xl"
    ></ElButton>
    <ElButton
      :icon="SwitchFilled"
      size="large"
      circle
      text
      class="text-2xl"
    ></ElButton>
    <ElButton
      :icon="ChromeFilled"
      size="large"
      circle
      text
      tag="a"
      href="https://github.com/yanglee2421/vite-vue"
      target="_blank"
      class="text-2xl"
      title="github"
    ></ElButton>
  </div>
</template>

<style lang="scss" scoped></style>
