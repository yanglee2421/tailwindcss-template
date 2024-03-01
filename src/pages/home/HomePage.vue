<script lang="ts" setup>
import { useThemeStore } from "@/hooks/store/useThemeStore";
import { useAuthStore } from "@/hooks/store/useAuthStore";
import {
  ElRow,
  ElCol,
  ElButton,
  ElDivider,
  ElRadio,
  ElRadioGroup,
} from "element-plus";

const authStore = useAuthStore();
const themeStore = useThemeStore();

const handleSignout = () => {
  authStore.value.auth.signOut();
};

defineOptions({ inheritAttrs: false });
</script>

<template>
  <div :class="['p-2', '']">
    <el-row :gutter="16">
      <el-col
        :xs="24"
        :sm="12"
      >
        <div :class="['border']">
          <el-button
            @click="handleSignout"
            type="danger"
            >sign out</el-button
          >
        </div>
      </el-col>
      <el-col
        :xs="24"
        :sm="12"
      >
        <div :class="['border']">
          <el-radio-group v-model="themeStore.mode">
            <el-radio label="auto">auto</el-radio>
            <el-radio label="dark">dark</el-radio>
            <el-radio label="light">light</el-radio>
          </el-radio-group>
        </div>
      </el-col>
    </el-row>
  </div>
  <div class="p-2">
    <div class="flex justify-center">
      <div class="w-36 h-36 border border-solid border-gray-400 mr-auto">1</div>
      <div class="w-36 h-36 border border-solid border-gray-400">2</div>
      <div class="w-36 h-36 border border-solid border-gray-400">3</div>
      <div class="w-36 h-36 border border-solid border-gray-400">4</div>
      <div class="w-36 h-36 border border-solid border-gray-400">5</div>
    </div>
    <el-divider>center</el-divider>
    <div class="flex justify-between">
      <div class="w-36 h-36 border border-solid border-gray-400">1</div>
      <div class="w-36 h-36 border border-solid border-gray-400">2</div>
      <div class="w-36 h-36 border border-solid border-gray-400">3</div>
      <div class="w-36 h-36 border border-solid border-gray-400">4</div>
      <div class="w-36 h-36 border border-solid border-gray-400 ml-auto">5</div>
    </div>
    <el-divider>between</el-divider>
    <div class="flex justify-around">
      <div class="w-36 h-36 border border-solid border-gray-400">1</div>
      <div class="w-36 h-36 border border-solid border-gray-400 mr-auto">2</div>
      <div class="w-36 h-36 border border-solid border-gray-400">3</div>
      <div class="w-36 h-36 border border-solid border-gray-400">4</div>
      <div class="w-36 h-36 border border-solid border-gray-400">5</div>
    </div>
    <el-divider>around</el-divider>
    <div class="flex justify-evenly">
      <div class="w-36 h-36 border border-solid border-gray-400 mr-auto">1</div>
      <div class="w-36 h-36 border border-solid border-gray-400">2</div>
      <div class="w-36 h-36 border border-solid border-gray-400">3</div>
      <div class="w-36 h-36 border border-solid border-gray-400">4</div>
      <div class="w-36 h-36 border border-solid border-gray-400 ml-auto">5</div>
    </div>
    <el-divider>evenly</el-divider>
    <div class="flex justify-stretch">
      <div class="w-36 h-36 border border-solid border-gray-400 ml-auto">1</div>
      <div class="w-36 h-36 border border-solid border-gray-400">2</div>
      <div class="w-36 h-36 border border-solid border-gray-400 mx-auto">3</div>
      <div class="w-36 h-36 border border-solid border-gray-400">4</div>
      <div class="w-36 h-36 border border-solid border-gray-400 mr-auto">5</div>
    </div>
    <el-divider>stretch</el-divider>
    <div class="flex justify-normal h-96">
      <div class="w-36 h-36 border border-solid border-gray-400">1</div>
      <div class="w-36 h-36 border border-solid border-gray-400">2</div>
      <div class="w-36 h-36 border border-solid border-gray-400">3</div>
      <div class="w-36 h-36 border border-solid border-gray-400">4</div>
      <div
        class="w-36 h-36 border border-solid border-gray-400 mt-auto ml-auto"
      >
        5
      </div>
    </div>
    <el-divider>normal</el-divider>
    <div class="flex justify-start h-96">
      <div class="w-36 h-36 border border-solid border-gray-400 m-auto">1</div>
    </div>
    <el-divider>start</el-divider>
  </div>
</template>

<style lang="scss" scoped></style>
