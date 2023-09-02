<script lang="ts" setup>
// Assets Imports
import viteLogo from "@/assets/image/logo/react.svg";

// Hooks Imports
import { useLogin } from "@/hooks";

const { signOut } = useLogin();

const handleSignOut = () => {
  signOut();
};

defineOptions({ inheritAttrs: false });
</script>

<template>
  <div class="page">
    <el-row :gutter="16">
      <el-col
        :xs="0"
        :sm="12"
      >
        <el-text tag="h1">Wellcome to Yang_Lee!</el-text>
        <el-text>JavaScript</el-text>
      </el-col>
      <el-col
        :xs="24"
        :sm="12"
      >
        <div class="logo--bg">
          <el-image :src="viteLogo"></el-image>
        </div>
      </el-col>
      <el-col
        :xs="24"
        :sm="0"
      >
        <el-text tag="h1">Wellcome to JavaScript!</el-text>
        <el-text>JavaScript</el-text>
      </el-col>
      <el-col
        v-for="item in 6"
        :key="item"
        :xs="24"
        :sm="12"
        :md="8"
      >
        <el-card>{{ item }}</el-card>
      </el-col>
    </el-row>
    <el-card>
      <el-button
        @click="handleSignOut"
        type="danger"
        size="large"
        class="bg-rose-600 uppercase font-semibold"
        >sign out</el-button
      >
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.page {
  max-width: 1440px;
  padding: 1rem;
  margin: 0 auto;
}
.el-col {
  margin-bottom: 1rem;
}
h1.el-text {
  font-size: 3.5rem;
  word-break: normal;
}
.logo--bg {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  $size: 20rem;
  width: $size;
  height: $size;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    // z-index: 1;
    display: block;
    width: calc($size / 1.2);
    height: calc($size / 1.2);
    border-radius: 50%;
    margin: auto;
    background-color: $danger;
    filter: blur($size * 0.1);
  }
}
</style>
